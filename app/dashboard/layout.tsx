import Link from "next/link";
import Image from "next/image";
import { DashboardNav } from "@/components/dashboard/dashboard-nav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-background-50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-background-200 p-6">
        <Link href="/" className="flex items-center space-x-2 mb-8">
          <Image
            src="/assets/logo.svg"
            alt="QR Koala Logo"
            width={32}
            height={32}
          />
          <span className="text-xl font-bold text-primary-600">QR Store</span>
        </Link>

        <DashboardNav />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
