'use client';

import { useParams } from 'next/navigation';
import { QRGeneratorLayout } from '@/components/qr-generator/layout';

export default function GeneratePage() {
  const params = useParams();
  const type = params.type as string;

  return <QRGeneratorLayout type={type} />;
}