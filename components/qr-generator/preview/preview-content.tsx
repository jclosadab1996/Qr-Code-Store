'use client';

export function PreviewContent() {
  return (
    <div className="aspect-[9/16] bg-background-50 rounded-xl p-4 mb-4">
      <div className="w-full h-full border-2 border-dashed border-background-300 rounded-lg flex items-center justify-center">
        <span className="text-text-400">Vista previa del QR</span>
      </div>
    </div>
  );
}