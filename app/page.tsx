import Image from "next/image";
import { Button } from "@/components/ui/button";
import { QRFeatures } from "@/components/qr-features";
import { Benefits } from "@/components/benefits";
import { Steps } from "@/components/steps";
import { FAQ } from "@/components/faq";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 bg-background-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-900 mb-6">
              Generador de códigos QR potente y simple
            </h1>
            <p className="text-lg sm:text-xl text-text-600 mb-8 max-w-2xl mx-auto">
              Crea, personaliza y gestiona tus códigos QR sin esfuerzo
            </p>
            <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg">
              Crear código QR
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <QRFeatures />

      {/* Benefits Section */}
      <Benefits />

      {/* Steps Section */}
      <Steps />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <footer className="w-full bg-background-900 text-background-50 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4">QR Store</h3>
              <p className="text-sm text-background-300">
                Generador de códigos QR profesional para empresas y particulares
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Recursos</h3>
              <ul className="space-y-2">
                <li>Crear código QR</li>
                <li>Documentación</li>
                <li>Referencia de API</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>Condiciones de servicio</li>
                <li>política de privacidad</li>
                <li>Politica de información</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contacto</h3>
              <ul className="space-y-2">
                <li>Soporte</li>
                <li>Ventas</li>
                <li>Socios</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
