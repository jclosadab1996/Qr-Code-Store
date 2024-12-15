import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const features = [
  {
    title: "Websites URL",
    icon: "/assets/web-icon.svg",
    description: "Crea códigos QR para tu sitio web o página de destino",
    path: "/qr/url",
  },
  {
    title: "Archivos PDF",
    icon: "/assets/pdf-icon.svg",
    description: "Comparte documentos y folletos al instante",
    path: "/qr/pdf",
  },
  {
    title: "vCard",
    icon: "/assets/vcard-icon.svg",
    description: "Compartir información de contacto con un escaneo",
    path: "/qr/vcard",
  },
  {
    title: "Lista de contactos",
    icon: "/assets/contacts-icon.svg",
    description: "Administrar y compartir múltiples contactos",
    path: "/qr/contacts",
  },
  {
    title: "Instagram",
    icon: "/assets/instagram-icon.svg",
    description: "Conecta con tu perfil de Instagram",
    path: "/qr/instagram",
  },
  {
    title: "LinkedIn",
    icon: "/assets/linkedin-icon.svg",
    description: "Comparte tu perfil profesional",
    path: "/qr/linkedin",
  },
  {
    title: "Menú",
    icon: "/assets/menu-icon.svg",
    description: "Menús digitales para restaurantes",
    path: "/qr/menu",
  },
  {
    title: "Wi-Fi",
    icon: "/assets/wifi-icon.svg",
    description: "Compartir credenciales de Wi-Fi de forma segura",
    path: "/qr/wifi",
  },
];

export function QRFeatures() {
  return (
    <section className="py-16 sm:py-24 bg-white w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-900 mb-4 sm:mb-6">
            Códigos QR para todo
          </h2>
          <p className="text-lg sm:text-xl text-text-600">
            Genere códigos QR para cualquier propósito con nuestra plataforma
            potente y fácil de usar
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 sm:p-8 rounded-2xl border-2 border-background-100 hover:border-primary-500 transition-all duration-300 hover:shadow-lg bg-white flex flex-col"
            >
              <div className="flex flex-col items-center text-center space-y-4 flex-grow">
                <div className="w-16 h-16 p-3 rounded-xl bg-primary-50 group-hover:bg-primary-100 transition-colors duration-300">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={48}
                    height={48}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-semibold text-text-900">
                  {feature.title}
                </h3>
                <p className="text-text-600 text-sm">{feature.description}</p>
              </div>
              <div className="mt-6 pt-4 border-t border-background-100">
                <Link href={feature.path}>
                  <Button className="w-full bg-primary-600 hover:bg-primary-700 text-white">
                    Crear código QR
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
