import { useState } from 'react';
import { QRFormData, QRStyle } from '@/types/qr';
import { QRStyleEditor } from '../../style/qr-style-editor';
import { QRDownload } from '../../download/qr-download';
import { Button } from '@/components/ui/button';

interface QRTypeContainerProps {
  children: React.ReactNode;
  formData: QRFormData;
  setFormData: (data: QRFormData) => void;
  step: number;
  onStepChange: (step: number) => void;
}

export function QRTypeContainer({ 
  children, 
  formData, 
  setFormData, 
  step, 
  onStepChange 
}: QRTypeContainerProps) {
  const [style, setStyle] = useState<QRStyle>({
    color: '#000000',
    backgroundColor: '#FFFFFF',
    cornerStyle: 'square'
  });

  const handleNext = () => {
    onStepChange(step + 1);
  };

  const handleBack = () => {
    onStepChange(step - 1);
  };

  return (
    <div className="space-y-6">
      {step === 1 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Añade contenido a tu código QR</h2>
          {children}
        </>
      )}
      
      {step === 2 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Personaliza el código QR</h2>
          <QRStyleEditor
            value={formData}
            style={style}
            onStyleChange={setStyle}
          />
        </>
      )}
      
      {step === 3 && (
        <>
          <h2 className="text-2xl font-bold mb-6">Descarga el código QR</h2>
          <QRDownload formData={formData} style={style} />
        </>
      )}

      <div className="flex justify-between mt-8">
        {step > 1 && (
          <Button variant="outline" onClick={handleBack}>
            Atrás
          </Button>
        )}
        {step < 3 && (
          <Button className="ml-auto" onClick={handleNext}>
            Siguiente
          </Button>
        )}
      </div>
    </div>
  );
}