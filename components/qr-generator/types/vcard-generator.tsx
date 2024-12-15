import { QRFormData } from '@/types/qr';
import { FormField } from '../form/form-field';
import { Button } from '@/components/ui/button';

interface VCardGeneratorProps {
  formData: QRFormData;
  setFormData: (data: QRFormData) => void;
}

export function VCardGenerator({ formData, setFormData }: VCardGeneratorProps) {
  const handleChange = (field: keyof QRFormData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  return (
    <div className="space-y-6">
      <div className="border-2 border-dashed border-background-300 rounded-lg p-8 text-center">
        <div className="flex justify-center mb-4">
          <svg className="w-12 h-12 text-text-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <p className="text-sm text-text-600 mb-2">Seleccione su imagen</p>
        <Button variant="outline" className="mx-auto">
          Subir imagen
        </Button>
      </div>

      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <FormField
            id="firstName"
            label="Nombre"
            placeholder="Juan"
            value={formData.firstName || ''}
            onChange={handleChange('firstName')}
          />
          <FormField
            id="lastName"
            label="Apellidos"
            placeholder="Pérez"
            value={formData.lastName || ''}
            onChange={handleChange('lastName')}
          />
        </div>

        <div className="space-y-4">
          <Button variant="outline" className="w-full text-left justify-start">
            + Agregar teléfono
          </Button>
          <Button variant="outline" className="w-full text-left justify-start">
            + Agregar correo electrónico
          </Button>
          <Button variant="outline" className="w-full text-left justify-start">
            + Agregar sitio web
          </Button>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <FormField
            id="company"
            label="Empresa"
            placeholder="Nombre empresa"
            value={formData.company || ''}
            onChange={handleChange('company')}
          />
          <FormField
            id="position"
            label="Posición"
            placeholder="Director/Gerente"
            value={formData.position || ''}
            onChange={handleChange('position')}
          />
        </div>

        <FormField
          id="qrName"
          label="Nombre del código QR"
          placeholder="Mi tarjeta de visita"
          value={formData.name}
          onChange={handleChange('name')}
        />
      </div>
    </div>
  );
}