'use client';

import { useState } from 'react';

interface PDFFormProps {
  onValueChange: (value: string) => void;
}

export function PDFForm({ onValueChange }: PDFFormProps) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    pdfUrl: '',
    fileName: '',
    qrName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Format PDF string with metadata
    const pdfString = `PDF:${formData.pdfUrl}?title=${encodeURIComponent(formData.title)}&desc=${encodeURIComponent(formData.description)}`;
    onValueChange(pdfString);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // In a real application, you would upload the file to a server
      // and get back a URL. For now, we'll just store the file name
      setFormData(prev => ({
        ...prev,
        fileName: file.name,
        pdfUrl: URL.createObjectURL(file)
      }));
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Archivo PDF *
        </label>
        <div className="border-2 border-dashed border-background-300 rounded-lg p-6 text-center">
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
            id="pdf-upload"
          />
          <label
            htmlFor="pdf-upload"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <div className="mb-2">📄</div>
            <span className="text-sm text-text-600">
              {formData.fileName || 'Selecciona o arrastra un archivo PDF'}
            </span>
          </label>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Título del PDF
        </label>
        <input
          type="text"
          name="title"
          placeholder="Ej: Presentación Ejecutiva"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.title}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Descripción
        </label>
        <textarea
          name="description"
          placeholder="Breve descripción del contenido del PDF..."
          className="w-full p-2 border rounded-md"
          rows={3}
          onChange={handleChange}
          value={formData.description}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Nombre del código QR
        </label>
        <input
          type="text"
          name="qrName"
          placeholder="Ej: PDF Presentación"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.qrName}
        />
      </div>
    </div>
  );
}