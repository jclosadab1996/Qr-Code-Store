'use client';

import { useState } from 'react';

interface URLFormProps {
  onValueChange: (value: string) => void;
}

export function URLForm({ onValueChange }: URLFormProps) {
  const [formData, setFormData] = useState({
    url: '',
    name: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (name === 'url') {
      onValueChange(value);
    }
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          URL *
        </label>
        <input
          type="url"
          name="url"
          placeholder="https://example.com"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.url}
        />
        <p className="text-sm text-text-500 mt-1">Introduzca la URL a la que redirigirá este QR.</p>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Nombre del código QR
        </label>
        <input
          type="text"
          name="name"
          placeholder="Mi página web"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.name}
        />
        <p className="text-sm text-text-500 mt-1">Dale un nombre a tu código QR.</p>
      </div>
    </div>
  );
}