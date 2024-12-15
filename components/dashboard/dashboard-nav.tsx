import Link from 'next/link';

const navItems = [
  { href: '/dashboard/crear-un-nuevo-qr', label: '+ Crear un nuevo código QR' },
  { href: '/dashboard/analitica', label: 'Analítica' },
  { href: '/dashboard/mis-qr', label: 'Mis códigos QR' },
  { href: '/dashboard/cuenta', label: 'Cuenta' },
];

export function DashboardNav() {
  return (
    <nav className="space-y-4">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="flex items-center space-x-2 text-text-600 hover:text-primary-600"
        >
          <span>{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}