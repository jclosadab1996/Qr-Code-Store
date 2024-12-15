'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function MisQRPage() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Tus códigos QR</h1>
        <div className="flex space-x-4">
          <Button variant="outline">Nueva carpeta</Button>
          <Link href="/dashboard/crear-un-nuevo-qr">
            <Button className="bg-black text-white">Crear un nuevo código QR</Button>
          </Link>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-lg font-semibold">Mis carpetas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="p-6 border border-dashed border-background-300 rounded-lg text-center cursor-pointer hover:border-primary-500">
            <div className="flex flex-col items-center space-y-2">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-background-300 flex items-center justify-center">
                <span className="text-2xl">+</span>
              </div>
              <span className="text-sm text-text-600">Nueva carpeta</span>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <input type="text" placeholder="Buscar..." className="border rounded-md px-3 py-2" />
            <select className="border rounded-md px-3 py-2">
              <option>Activo</option>
              <option>Inactivo</option>
            </select>
            <select className="border rounded-md px-3 py-2">
              <option>Seleccionado (13)</option>
            </select>
            <select className="border rounded-md px-3 py-2">
              <option>Más recientes</option>
            </select>
            <select className="border rounded-md px-3 py-2">
              <option>10</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center">
            <input type="checkbox" id="selectAll" className="mr-2" />
            <label htmlFor="selectAll">Seleccionar todo</label>
          </div>

          {/* QR Code Items */}
          <div className="space-y-4">
            {/* Example QR Code Item */}
            <div className="border rounded-lg p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <input type="checkbox" />
                <div className="w-16 h-16 bg-gray-200"></div>
                <div>
                  <div className="font-semibold">Mi presentación</div>
                  <div className="text-sm text-text-500">Creado: 14 dic 2024</div>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span>Escaneos: 0</span>
                <Button variant="outline">Descargar</Button>
                <Button variant="outline">Detalle</Button>
                <Button variant="ghost">•••</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}