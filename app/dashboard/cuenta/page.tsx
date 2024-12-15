"use client";

import { Button } from "@/components/ui/button";

export default function CuentaPage() {
  return (
    <div className="max-w-3xl space-y-8">
      <h1 className="text-2xl font-bold">Cuenta</h1>

      <div className="bg-white rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold">Información personal</h2>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-700 mb-1">
              Nombre
            </label>
            <input
              type="text"
              placeholder="Por ejemplo, Juan"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-700 mb-1">
              Apellido
            </label>
            <input
              type="text"
              placeholder="Por ejemplo, Thompson"
              className="w-full p-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-700 mb-1">
              Correo electrónico
            </label>
            <input type="email" className="w-full p-2 border rounded-md" />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-700 mb-1">
              Teléfono
            </label>
            <input
              type="tel"
              placeholder="Por ejemplo, +1 234 567 89 00"
              className="w-full p-2 border rounded-md"
            />
          </div>
        </div>

        <Button className="bg-black text-white">Actualizar</Button>
      </div>

      <div className="bg-white rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-semibold">Idioma</h2>

        <div>
          <label className="block text-sm font-medium text-text-700 mb-1">
            Idioma
          </label>
          <select className="w-full p-2 border rounded-md">
            <option>Español</option>
            <option>English</option>
          </select>
        </div>

        <Button className="bg-black text-white">Actualizar</Button>
      </div>

      <div className="flex justify-between">
        <Button variant="outline" className="border-text-600 text-text-600">
          Cerrar sesión
        </Button>

        <Button variant="outline" className="border-red-600 text-red-600">
          Eliminar cuenta
        </Button>
      </div>
    </div>
  );
}
