export interface QRFormData {
  url?: string;
  name: string;
  password?: string;
  title?: string;
  pdfTitle?: string;
  firstName?: string;
  lastName?: string;
  company?: string;
  position?: string;
  networkName?: string;
  restaurantName?: string;
}

export interface QRFeature {
  title: string;
  icon: string;
  description: string;
  type: string;
}

export interface QRStyle {
  color: string;
  backgroundColor: string;
  cornerStyle: 'square' | 'rounded' | 'dots';
  logo?: File;
}