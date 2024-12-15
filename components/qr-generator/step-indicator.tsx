'use client';

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { number: 1, title: 'Seleccione el tipo de QR' },
  { number: 2, title: 'Añadir contenido' },
  { number: 3, title: 'Código QR de diseño' }
];

export function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="w-full bg-white border-b border-background-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center space-x-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex items-center">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    step.number <= currentStep
                      ? 'bg-primary-600 text-white'
                      : 'bg-background-200 text-text-600'
                  }`}
                >
                  {step.number}
                </div>
                <span className="ml-2 text-sm font-medium text-text-600">
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="ml-4 w-16 h-0.5 bg-background-200" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}