'use client';

import { PreviewToggle } from './preview-toggle';

export function PreviewHeader() {
  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">Vista previa</h3>
      <PreviewToggle />
    </div>
  );
}