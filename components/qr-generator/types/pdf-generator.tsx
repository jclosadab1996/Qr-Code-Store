import { QRFormData } from '@/types/qr';
import { FormField } from '../form/form-field';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';

interface PDFGeneratorProps {
  formData: QRFormData;
  setFormData: (data: QRFormData) => void;
}

export function PDFGenerator({ formData, setFormData }: PDFGeneratorProps) {
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
        <p className="text-sm text-text-600 mb-2">Seleccione el archivo en PDF</p>
        <Button variant="outline" className="mx-auto">
          Subir
        </Button>
        <Button variant="outline" className="mx-auto ml-2">
          Google Drive
        </Button>
      </div>

      <div className="space-y-4">
        <FormField
          id="title"
          label="Título"
          placeholder="Por ejemplo, Presentación Ejecutiva Excel"
          value={formData.title || ''}
          onChange={handleChange('title')}
        />

        <FormField
          id="description"
          label="Título del PDF"
          placeholder="Por ejemplo, informe Excel"
          value={formData.pdfTitle || ''}
          onChange={handleChange('pdfTitle')}
        />

        <div>
          <Label>Descripción</Label>
          <textarea
            className="w-full p-2 border rounded-md"
            placeholder="Por ejemplo, el informe muestra datos relevantes que indican tendencias en datos obtenidos"
            rows={4}
          />
        </div>

        <FormField
          id="qrName"
          label="Nombre del código QR"
          placeholder="Por ejemplo, mi primer código QR"
          value={formData.name}
          onChange={handleChange('name')}
        />
      </div>
    </div>
  );
}