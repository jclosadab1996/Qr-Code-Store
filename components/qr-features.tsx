'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Button } from './ui/button';
import { QR_FEATURES } from '@/constants/qr-features';

/**
 * QRFeatures Component
 * Displays a grid of QR code generation options with icons and descriptions
 */
export function QRFeatures() {
  const router = useRouter();

  const handleGenerateClick = (type: string) => {
    router.push(`/generate/${type}`);
  };

  return (
    <section id="qr-features" className="py-16 sm:py-24 bg-white w-full scroll-mt-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-900 mb-4 sm:mb-6">
            QR Codes for Everything
          </h2>
          <p className="text-lg sm:text-xl text-text-600">
            Generate QR codes for any purpose with our powerful and easy-to-use platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {QR_FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-xl border-2 border-background-100 hover:border-primary-500 transition-all duration-300 hover:shadow-lg overflow-hidden"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="w-16 h-16 mx-auto mb-4 p-3 rounded-xl bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-text-900 text-center mb-2">
                  {feature.title}
                </h3>
                <p className="text-text-600 text-sm text-center mb-6 flex-grow">
                  {feature.description}
                </p>
                <Button 
                  className="w-full bg-primary-600 text-white hover:bg-primary-700"
                  onClick={() => handleGenerateClick(feature.type)}
                >
                  Generate Code
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}