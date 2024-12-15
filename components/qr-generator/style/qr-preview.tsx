import { QRCodeSVG } from 'qrcode.react';
import { QRFormData, QRStyle } from '@/types/qr';
import { generateQRValue } from '@/lib/qr-utils';

interface QRPreviewProps {
  value: QRFormData;
  style: QRStyle;
  size?: number;
}

export function QRPreview({ value, style, size = 128 }: QRPreviewProps) {
  const qrValue = generateQRValue(value);

  return (
    <QRCodeSVG
      value={qrValue}
      size={size}
      bgColor={style.backgroundColor}
      fgColor={style.color}
      level="Q"
      includeMargin={false}
      imageSettings={style.logo ? {
        src: URL.createObjectURL(style.logo),
        height: 24,
        width: 24,
        excavate: true,
      } : undefined}
    />
  );
}