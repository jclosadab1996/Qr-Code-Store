import { useRef } from 'react';
import { Button } from '@/components/ui/button';
import { QRCodeSVG } from 'qrcode.react';
import { saveAs } from 'file-saver';
import { toPng } from 'html-to-image';
import { Download } from 'lucide-react';
import { QRStyle, QRFormData } from '@/types/qr';

interface QRDownloadProps {
  formData: QRFormData;
  style: QRStyle;
}

export function QRDownload({ formData, style }: QRDownloadProps) {
  const qrRef = useRef<HTMLDivElement>(null);

  const handleDownloadSVG = () => {
    // Create SVG string
    const svgElement = qrRef.current?.querySelector('svg');
    if (!svgElement) return;

    const svgString = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    saveAs(blob, `${formData.name || 'qr-code'}.svg`);
  };

  const handleDownloadPNG = async () => {
    if (!qrRef.current) return;

    try {
      const dataUrl = await toPng(qrRef.current, {
        quality: 1.0,
        pixelRatio: 3,
      });
      
      saveAs(dataUrl, `${formData.name || 'qr-code'}.png`);
    } catch (error) {
      console.error('Error generating PNG:', error);
    }
  };

  return (
    <div className="space-y-6">
      <div className="bg-white p-8 rounded-xl shadow-sm">
        <div 
          ref={qrRef}
          className="aspect-square flex items-center justify-center bg-white"
        >
          <QRCodeSVG
            value={formData.url || 'https://example.com'}
            size={300}
            bgColor={style.backgroundColor}
            fgColor={style.color}
            level="Q"
            includeMargin={true}
            imageSettings={style.logo ? {
              src: URL.createObjectURL(style.logo),
              height: 24,
              width: 24,
              excavate: true,
            } : undefined}
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          onClick={handleDownloadPNG}
          className="flex items-center justify-center gap-2"
        >
          <Download size={20} />
          Download PNG
        </Button>
        <Button
          onClick={handleDownloadSVG}
          variant="outline"
          className="flex items-center justify-center gap-2"
        >
          <Download size={20} />
          Download SVG
        </Button>
      </div>

      <div className="text-sm text-text-500">
        <h4 className="font-medium mb-2">Download Information:</h4>
        <ul className="list-disc list-inside space-y-1">
          <li>PNG format is best for general use and sharing</li>
          <li>SVG format is perfect for high-quality printing and scaling</li>
          <li>Both formats maintain the custom colors and styling</li>
        </ul>
      </div>
    </div>
  );
}