'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { QRPreview } from './qr-preview';

interface QRGeneratorProps {
  type: string;
}

export function QRGeneratorForm({ type }: QRGeneratorProps) {
  const [formData, setFormData] = useState({
    url: '',
    name: '',
    password: '',
    folder: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white p-6 rounded-xl shadow-sm">
        <h2 className="text-2xl font-bold mb-6">Añade contenido a tu código QR</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                placeholder="https://ejemplo.com"
                value={formData.url}
                onChange={(e) => setFormData({ ...formData, url: e.target.value })}
              />
            </div>
            
            <div>
              <Label htmlFor="name">Nombre del código QR</Label>
              <Input
                id="name"
                placeholder="Mi código QR"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            
            <div>
              <Label htmlFor="password">Contraseña (opcional)</Label>
              <Input
                id="password"
                type="password"
                placeholder="Contraseña para acceder al contenido"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
            </div>
            
            <div>
              <Label htmlFor="folder">Carpeta</Label>
              <Input
                id="folder"
                placeholder="Seleccionar carpeta"
                value={formData.folder}
                onChange={(e) => setFormData({ ...formData, folder: e.target.value })}
              />
            </div>
          </div>

          <div className="flex justify-between pt-4">
            <Button variant="outline" type="button">
              Atrás
            </Button>
            <Button type="submit">
              Siguiente
            </Button>
          </div>
        </form>
      </div>

      <QRPreview formData={formData} />
    </div>
  );
}