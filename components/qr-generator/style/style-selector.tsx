import { QRPreview } from './qr-preview';
import { QRStyle } from '@/types/qr';

interface StyleSelectorProps {
  style: QRStyle;
  onStyleSelect: (cornerStyle: QRStyle['cornerStyle']) => void;
}

export function StyleSelector({ style, onStyleSelect }: StyleSelectorProps) {
  const previewStyles: QRStyle[] = [
    { ...style, cornerStyle: 'square' },
    { ...style, cornerStyle: 'rounded' },
    { ...style, cornerStyle: 'dots' }
  ];

  return (
    <div>
      <h3 className="text-lg font-medium mb-4">Select Style</h3>
      <div className="grid grid-cols-3 gap-4">
        {previewStyles.map((previewStyle) => (
          <button
            key={previewStyle.cornerStyle}
            onClick={() => onStyleSelect(previewStyle.cornerStyle)}
            className={`p-4 border rounded-xl transition-all ${
              style.cornerStyle === previewStyle.cornerStyle
                ? 'border-primary-500 shadow-md'
                : 'border-background-200 hover:border-primary-300'
            }`}
          >
            <div className="aspect-square flex items-center justify-center bg-white rounded-lg p-2">
              <QRPreview
                value="https://example.com"
                style={previewStyle}
                size={100}
              />
            </div>
            <p className="text-sm mt-2 text-center capitalize">
              {previewStyle.cornerStyle}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}