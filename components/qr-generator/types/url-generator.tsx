import { QRFormData } from '@/types/qr';
import { FormField } from '../form/form-field';

interface URLGeneratorProps {
  formData: QRFormData;
  setFormData: (data: QRFormData) => void;
}

export function URLGenerator({ formData, setFormData }: URLGeneratorProps) {
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
        label="QR Code Name"
        placeholder="My QR Code"
        value={formData.name}
        onChange={handleChange('name')}
      />
    </div>
  );
}