import Image from 'next/image';

const features = [
  { title: 'Website URL', icon: '/assets/web-icon.svg', description: 'Create QR codes for your website or landing page' },
  { title: 'PDF Files', icon: '/assets/pdf-icon.svg', description: 'Share documents and brochures instantly' },
  { title: 'vCard', icon: '/assets/vcard-icon.svg', description: 'Share contact information with a scan' },
  { title: 'Contact List', icon: '/assets/contacts-icon.svg', description: 'Manage and share multiple contacts' },
  { title: 'Instagram', icon: '/assets/instagram-icon.svg', description: 'Connect with your Instagram profile' },
  { title: 'LinkedIn', icon: '/assets/linkedin-icon.svg', description: 'Share your professional profile' },
  { title: 'Menu', icon: '/assets/menu-icon.svg', description: 'Digital menus for restaurants' },
  { title: 'Wi-Fi', icon: '/assets/wifi-icon.svg', description: 'Share Wi-Fi credentials securely' },
];

export function QRFeatures() {
  return (
    <section className="py-16 sm:py-24 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-900 mb-4 sm:mb-6">QR Codes for Everything</h2>
          <p className="text-lg sm:text-xl text-text-600">
            Generate QR codes for any purpose with our powerful and easy-to-use platform
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 sm:p-8 rounded-2xl border-2 border-background-100 hover:border-primary-500 transition-all duration-300 hover:shadow-lg bg-white"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 p-3 rounded-xl bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-text-900">{feature.title}</h3>
                <p className="text-text-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}