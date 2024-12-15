import { QRFeatures } from '@/components/qr-features';

export default function CrearNuevoQRPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center space-x-4">
        <div className="w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center">
          1
        </div>
        <div className="text-text-600">Seleccione el tipo de QR</div>
        <div className="flex-1 h-px bg-background-200"></div>
        <div className="w-8 h-8 rounded-full bg-background-200 text-text-600 flex items-center justify-center">
          2
        </div>
        <div className="text-text-600">Añadir contenido</div>
        <div className="flex-1 h-px bg-background-200"></div>
        <div className="w-8 h-8 rounded-full bg-background-200 text-text-600 flex items-center justify-center">
          3
        </div>
        <div className="text-text-600">Código QR de diseño</div>
      </div>

      <h1 className="text-2xl font-bold">1. Selecciona un tipo de código QR</h1>
      
      <QRFeatures />
    </div>
  );
}