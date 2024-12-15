import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';

export function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-background-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/assets/logo.svg" alt="QR Store Logo" width={32} height={32} />
            <span className="text-xl font-bold text-primary-600">QR Store</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link href="/dashboard">
              <Button 
                variant="outline" 
                className="border-primary-200 text-primary-600 hover:bg-primary-50 hover:text-primary-700 hover:border-primary-300 transition-colors"
              >
                <span className="mr-2">📊</span>
                Dashboard
              </Button>
            </Link>
            <Link href="/login">
              <Button variant="ghost" className="text-text-600 hover:text-primary-600">
                Log in
              </Button>
            </Link>
            <Link href="/register">
              <Button className="bg-primary-600 text-white hover:bg-primary-700">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}