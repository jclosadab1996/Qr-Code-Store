import { QRFormData, QRStyle } from '@/types/qr';
import { QRPreview } from './qr-preview';
import { StyleSelector } from './style-selector';
import { ColorPicker } from './color-picker';
import { LogoUpload } from './logo-upload';

interface QRStyleEditorProps {
  value: QRFormData;
  style: QRStyle;
  onStyleChange: (style: QRStyle) => void;
}

export function QRStyleEditor({ value, style, onStyleChange }: QRStyleEditorProps) {
  const handleStyleChange = (updates: Partial<QRStyle>) => {
    onStyleChange({ ...style, ...updates });
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <QRPreview
            value={value}
            style={style}
            size={200}
          />
        </div>
      </div>

      <StyleSelector
        style={style}
        onStyleSelect={(cornerStyle) => handleStyleChange({ cornerStyle })}
      />

      <div className="space-y-4">
        <ColorPicker
          label="Color del código QR"
          color={style.color}
          onChange={(color) => handleStyleChange({ color })}
        />

        <ColorPicker
          label="Color de fondo"
          color={style.backgroundColor}
          onChange={(backgroundColor) => handleStyleChange({ backgroundColor })}
        />

        <LogoUpload
          onLogoChange={(logo) => handleStyleChange({ logo })}
        />
      </div>
    </div>
  );
}