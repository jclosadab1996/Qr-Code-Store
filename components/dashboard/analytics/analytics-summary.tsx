export function AnalyticsSummary() {
  const stats = [
    { label: 'Total de escaneos', value: '1,234' },
    { label: 'Escaneos únicos', value: '856' },
    { label: 'Códigos QR activos', value: '12' },
    { label: 'Tasa de conversión', value: '3.2%' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-sm text-text-600">{stat.label}</p>
          <p className="text-3xl font-bold mt-2">{stat.value}</p>
        </div>
      ))}
    </div>
  );
}