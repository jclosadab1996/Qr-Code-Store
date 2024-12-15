import { useState } from 'react';
import { StepIndicator } from './step-indicator';
import { QRTypeContainer } from './types/base/qr-type-container';
import { URLGenerator } from './types/url-generator';
import { PDFGenerator } from './types/pdf-generator';
import { VCardGenerator } from './types/vcard-generator';
import { MenuGenerator } from './types/menu-generator';
import { WiFiGenerator } from './types/wifi-generator';
import { QRFormData } from '@/types/qr';

interface QRGeneratorLayoutProps {
  type: string;
}

export function QRGeneratorLayout({ type }: QRGeneratorLayoutProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<QRFormData>({
    name: '',
  });

  const renderFormByType = () => {
    const props = { formData, setFormData };
    
    switch (type) {
      case 'pdf':
        return <PDFGenerator {...props} />;
      case 'vcard':
        return <VCardGenerator {...props} />;
      case 'menu':
        return <MenuGenerator {...props} />;
      case 'wifi':
        return <WiFiGenerator {...props} />;
      default:
        return <URLGenerator {...props} />;
    }
  };

  return (
    <main className="min-h-screen bg-background-50 pb-12">
      <StepIndicator currentStep={step} />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <QRTypeContainer
              formData={formData}
              setFormData={setFormData}
              step={step}
              onStepChange={setStep}
            >
              {renderFormByType()}
            </QRTypeContainer>
          </div>
        </div>
      </div>
    </main>
  );
}