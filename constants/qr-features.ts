import { QRFeature } from '@/types/qr';

export const QR_FEATURES: QRFeature[] = [
  {
    title: 'Website URL',
    icon: '/assets/web-icon.svg',
    description: 'Create QR codes for your website or landing page',
    type: 'url'
  },
  {
    title: 'PDF Files',
    icon: '/assets/pdf-icon.svg',
    description: 'Share documents and brochures instantly',
    type: 'pdf'
  },
  {
    title: 'vCard',
    icon: '/assets/vcard-icon.svg',
    description: 'Share contact information with a scan',
    type: 'vcard'
  },
  {
    title: 'Contact List',
    icon: '/assets/contacts-icon.svg',
    description: 'Manage and share multiple contacts',
    type: 'contacts'
  },
  {
    title: 'Instagram',
    icon: '/assets/instagram-icon.svg',
    description: 'Connect with your Instagram profile',
    type: 'instagram'
  },
  {
    title: 'LinkedIn',
    icon: '/assets/linkedin-icon.svg',
    description: 'Share your professional profile',
    type: 'linkedin'
  },
  {
    title: 'Menu',
    icon: '/assets/menu-icon.svg',
    description: 'Digital menus for restaurants',
    type: 'menu'
  },
  {
    title: 'Wi-Fi',
    icon: '/assets/wifi-icon.svg',
    description: 'Share Wi-Fi credentials securely',
    type: 'wifi'
  }
];