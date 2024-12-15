import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";

export function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-background-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/assets/logo.svg"
              alt="QR Store Logo"
              width={32}
              height={32}
            />
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

            <Link
              href="https://github.com/jclosadab1996/Qr-Code-Store"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 rounded-full bg-background-50 hover:bg-background-100 transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                className="text-text-700"
              >
                <path
                  fill="currentColor"
                  d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z"
                />
              </svg>
            </Link>

            <Link href="/login">
              <Button
                variant="ghost"
                className="text-text-600 hover:text-primary-600"
              >
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
