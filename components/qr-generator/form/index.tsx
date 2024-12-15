'use client';

import { useState } from 'react';
import { QRFormData } from '@/types/qr';
import { QRFormFields } from './form-fields';
import { FormActions } from './form-actions';
import { QRPreview } from '../preview';

interface QRGeneratorFormProps {
  type: string;
}

export function QRGeneratorForm({ type }: QRGeneratorFormProps) {
  const [formData, setFormData] = useState<QRFormData>({
    url: '',
    name: '',
    password: '',
    folder: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Añade contenido a tu código QR</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <QRFormFields formData={formData} setFormData={setFormData} />
          <FormActions />
        </form>
      </div>

      <QRPreview formData={formData} />
    </div>
  );
}