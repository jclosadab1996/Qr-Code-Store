'use client';

export function PreviewToggle() {
  return (
    <div className="flex space-x-2">
      <button className="px-3 py-1 text-sm border rounded-md">Vista previa</button>
      <button className="px-3 py-1 text-sm border rounded-md bg-background-50">QR</button>
    </div>
  );
}