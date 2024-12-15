import { QRFormData } from '@/types/qr';
import { FormField } from '../form/form-field';
import { Button } from '@/components/ui/button';

interface MenuGeneratorProps {
  formData: QRFormData;
  setFormData: (data: QRFormData) => void;
}

export function MenuGenerator({ formData, setFormData }: MenuGeneratorProps) {
  const handleChange = (field: keyof QRFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="border-2 border-dashed border-background-300 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-text-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </div>
        <p className="text-sm text-text-600 mb-2">Subir imagen del menú</p>
        <Button variant="outline" className="mx-auto">
          Subir imagen
        </Button>
      </div>

      <div className="space-y-4">
        <FormField
          id="restaurantName"
          label="Nombre del restaurante"
          placeholder="Restaurante Example"
          value={formData.restaurantName || ''}
          onChange={handleChange('restaurantName')}
        />

        <div className="space-y-2">
          <h3 className="font-medium">Platos del menú</h3>
          <div className="grid grid-cols-3 gap-2">
            {Array.from({ length: 7 }).map((_, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input type="checkbox" className="rounded border-background-300" />
                <span className="text-sm">Plato {index + 1}</span>
                <input type="number" className="w-16 p-1 border rounded" placeholder="€" />
              </div>
            ))}
          </div>
        </div>

        <FormField
          id="qrName"
          label="Nombre del código QR"
          placeholder="Menú digital"
          value={formData.name}
          onChange={handleChange('name')}
        />
      </div>
    </div>
  );
}