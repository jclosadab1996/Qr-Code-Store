import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { QRFeatures } from '@/components/qr-features';
import { Benefits } from '@/components/benefits';
import { Steps } from '@/components/steps';
import { FAQ } from '@/components/faq';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      {/* Hero Section */}
      <section className="w-full py-20 lg:py-32 bg-background-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-900 mb-6">
              Powerful yet Simple QR Code Generator
            </h1>
            <p className="text-lg sm:text-xl text-text-600 mb-8 max-w-2xl mx-auto">
              Create, customize, and manage your QR codes effortlessly
            </p>
            <a href="#qr-features">
              <Button className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-6 text-lg">
                Create QR Code
              </Button>
            </a>
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
              <h3 className="font-bold mb-4">QR Koala</h3>
              <p className="text-sm text-background-300">
                Professional QR code generator for businesses and individuals
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li>Create QR Code</li>
                <li>Documentation</li>
                <li>API Reference</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Support</li>
                <li>Sales</li>
                <li>Partnership</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}