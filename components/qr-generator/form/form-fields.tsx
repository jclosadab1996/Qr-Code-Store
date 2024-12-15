'use client';

import { QRFormData } from '@/types/qr';
import { FormField } from './form-field';

interface QRFormFieldsProps {
  formData: QRFormData;
  setFormData: (data: QRFormData) => void;
}

export function QRFormFields({ formData, setFormData }: QRFormFieldsProps) {
  const handleChange = (field: keyof QRFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="space-y-4">
      <FormField
        id="url"
        label="URL"
        placeholder="https://ejemplo.com"
        value={formData.url}
        onChange={handleChange('url')}
      />
      
      <FormField
        id="name"
        label="Nombre del código QR"
        placeholder="Mi código QR"
        value={formData.name}
        onChange={handleChange('name')}
      />
      
      <FormField
        id="password"
        label="Contraseña (opcional)"
        type="password"
        placeholder="Contraseña para acceder al contenido"
        value={formData.password}
        onChange={handleChange('password')}
      />
      
      <FormField
        id="folder"
        label="Carpeta"
        placeholder="Seleccionar carpeta"
        value={formData.folder}
        onChange={handleChange('folder')}
      />
    </div>
  );
}