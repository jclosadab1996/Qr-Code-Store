'use client';

interface QRPreviewProps {
  formData: {
    url: string;
    name: string;
    password: string;
    folder: string;
  };
}

export function QRPreview({ formData }: QRPreviewProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm h-fit lg:sticky lg:top-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Vista previa</h3>
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-sm border rounded-md">Vista previa</button>
          <button className="px-3 py-1 text-sm border rounded-md bg-background-50">QR</button>
        </div>
      </div>
      
      <div className="aspect-[9/16] bg-background-50 rounded-xl p-4 mb-4">
        <div className="w-full h-full border-2 border-dashed border-background-300 rounded-lg flex items-center justify-center">
          <span className="text-text-400">Vista previa del QR</span>
        </div>
      </div>
    </div>
  );
}