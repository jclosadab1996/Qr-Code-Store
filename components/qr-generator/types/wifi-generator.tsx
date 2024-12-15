import { QRFormData } from '@/types/qr';
import { FormField } from '../form/form-field';
import { Label } from '@/components/ui/label';
import { Select } from '@/components/ui/select';

interface WiFiGeneratorProps {
  formData: QRFormData;
  setFormData: (data: QRFormData) => void;
}

export function WiFiGenerator({ formData, setFormData }: WiFiGeneratorProps) {
  const handleChange = (field: keyof QRFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label>Información de Wi-Fi</Label>
          <p className="text-sm text-text-500">Proporcione la información de su red.</p>
        </div>

        <FormField
          id="networkName"
          label="Nombre de la red"
          placeholder="Mi Wi-Fi"
          value={formData.networkName || ''}
          onChange={handleChange('networkName')}
        />

        <FormField
          id="password"
          label="Contraseña"
          type="password"
          placeholder="1234567890"
          value={formData.password || ''}
          onChange={handleChange('password')}
        />

        <div>
          <Label>Tipo de cifrado</Label>
          <select className="w-full mt-1 p-2 border rounded-md">
            <option value="WPA">WPA/WPA2</option>
            <option value="WEP">WEP</option>
            <option value="none">None</option>
          </select>
        </div>

        <FormField
          id="qrName"
          label="Nombre del código QR"
          placeholder="Wi-Fi de casa"
          value={formData.name}
          onChange={handleChange('name')}
        />
      </div>
    </div>
  );
}