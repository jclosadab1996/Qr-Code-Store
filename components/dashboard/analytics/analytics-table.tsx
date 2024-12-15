import { Button } from '@/components/ui/button';

export function AnalyticsTable() {
  const qrCodes = [
    {
      name: 'Sitio web principal',
      type: 'URL',
      scans: 450,
      uniqueScans: 320,
      created: '12 dic 2024',
    },
    {
      name: 'Menú restaurante',
      type: 'MENU',
      scans: 284,
      uniqueScans: 198,
      created: '14 dic 2024',
    },
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Rendimiento por código QR</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b">
              <th className="text-left py-3 px-4">Nombre</th>
              <th className="text-left py-3 px-4">Tipo</th>
              <th className="text-left py-3 px-4">Escaneos</th>
              <th className="text-left py-3 px-4">Escaneos únicos</th>
              <th className="text-left py-3 px-4">Creado</th>
              <th className="text-left py-3 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {qrCodes.map((qr) => (
              <tr key={qr.name} className="border-b">
                <td className="py-3 px-4">{qr.name}</td>
                <td className="py-3 px-4">{qr.type}</td>
                <td className="py-3 px-4">{qr.scans}</td>
                <td className="py-3 px-4">{qr.uniqueScans}</td>
                <td className="py-3 px-4">{qr.created}</td>
                <td className="py-3 px-4">
                  <Button variant="outline" size="sm">Ver detalles</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}