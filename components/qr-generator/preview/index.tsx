'use client';

import { QRFormData } from '@/types/qr';
import { PreviewHeader } from './preview-header';
import { PreviewContent } from './preview-content';

interface QRPreviewProps {
  formData: QRFormData;
}

export function QRPreview({ formData }: QRPreviewProps) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm h-fit lg:sticky lg:top-4">
      <PreviewHeader />
      <PreviewContent />
    </div>
  );
}