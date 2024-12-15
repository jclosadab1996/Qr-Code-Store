import { QRFormData } from '@/types/qr';

export function generateQRValue(formData: QRFormData): string {
  switch (true) {
    case !!formData.networkName:
      return generateWiFiString(formData);
    case !!formData.firstName:
      return generateVCardString(formData);
    case !!formData.restaurantName:
      return generateMenuString(formData);
    case !!formData.url:
      return formData.url;
    default:
      return 'https://example.com';
  }
}

function generateWiFiString(formData: QRFormData): string {
  return `WIFI:T:WPA;S:${formData.networkName};P:${formData.password};;`;
}

function generateVCardString(formData: QRFormData): string {
  return `BEGIN:VCARD
VERSION:3.0
N:${formData.lastName};${formData.firstName}
FN:${formData.firstName} ${formData.lastName}
ORG:${formData.company}
TITLE:${formData.position}
END:VCARD`;
}

function generateMenuString(formData: QRFormData): string {
  return `${formData.restaurantName}\nMenú Digital`;
}