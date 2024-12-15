import { useState } from 'react';
import { StyleSelector } from './style-selector';
import { ColorPicker } from './color-picker';
import { LogoUpload } from './logo-upload';
import { QRPreview } from './qr-preview';
import type { QRStyle as QRStyleType } from '@/types/qr';

interface QRStyleProps {
  onStyleChange: (style: QRStyleType) => void;
}

export function QRStyle({ onStyleChange }: QRStyleProps) {
  const [style, setStyle] = useState<QRStyleType>({
    color: '#000000',
    backgroundColor: '#FFFFFF',
    cornerStyle: 'square',
  });

  const handleStyleChange = (updates: Partial<QRStyleType>) => {
    const newStyle = { ...style, ...updates };
    setStyle(newStyle);
    onStyleChange(newStyle);
  };

  return (
    <div className="space-y-8">
      {/* Live Preview */}
      <div className="flex justify-center">
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <QRPreview
            value="https://example.com"
            style={style}
            size={200}
          />
        </div>
      </div>

      {/* Style Options */}
      <StyleSelector
        style={style}
        onStyleSelect={(cornerStyle) => handleStyleChange({ cornerStyle })}
      />

      <div className="space-y-4">
        <ColorPicker
          label="QR Code Color"
          color={style.color}
          onChange={(color) => handleStyleChange({ color })}
        />

        <ColorPicker
          label="Background Color"
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

export type { QRStyleType };