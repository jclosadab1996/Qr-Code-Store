'use client';

import { QRCodeCanvas } from 'qrcode.react';
import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { URLForm } from '@/components/qr-forms/url-form';
import { WiFiForm } from '@/components/qr-forms/wifi-form';
import { VCardForm } from '@/components/qr-forms/vcard-form';
import { PDFForm } from '@/components/qr-forms/pdf-form'
import { MenuForm } from '@/components/qr-forms/menu-form'


const downloadQRCode = (format: 'png' | 'svg', qrRef: any) => {
  if (!qrRef.current) return;

  const canvas = qrRef.current.querySelector('canvas');
  if (!canvas) return;

  const link = document.createElement('a');
  
  if (format === 'png') {
    link.href = canvas.toDataURL('image/png');
    link.download = 'qrcode.png';
  } else {
    const svgData = canvas.toDataURL('image/svg+xml');
    link.href = svgData;
    link.download = 'qrcode.svg';
  }
  
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

const getFormComponent = (type: string, onValueChange: (value: string) => void) => {
  switch (type) {
    case 'url':
    case 'instagram':
    case 'linkedin':
      return <URLForm onValueChange={onValueChange} />;
    case 'wifi':
      return <WiFiForm onValueChange={onValueChange} />;
    case 'vcard':
      return <VCardForm onValueChange={onValueChange} />;
      case 'menu':
        return <MenuForm onValueChange={onValueChange} />;
      case 'pdf':
        return <PDFForm onValueChange={onValueChange} />;
    default:
      return <URLForm onValueChange={onValueChange} />;
  }
};

export default function QRGenerator({ params }: { params: { type: string } }) {
  const [qrValue, setQrValue] = useState('');
  const [qrColor, setQrColor] = useState('#000000');
  const [bgColor, setBgColor] = useState('#FFFFFF');
  const [logo, setLogo] = useState<string | null>(null);
  const qrRef = useRef<HTMLDivElement>(null);

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setLogo(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm p-6">
        <h1 className="text-3xl font-bold text-center mb-8">QR Code Generator</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Tabs defaultValue="content">
              <TabsList className="w-full">
                <TabsTrigger value="content" className="flex-1">Content</TabsTrigger>
                <TabsTrigger value="design" className="flex-1">Design</TabsTrigger>
              </TabsList>
              
              <TabsContent value="content" className="space-y-6">
                {getFormComponent(params.type, setQrValue)}
              </TabsContent>
              
              <TabsContent value="design" className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-text-700">QR Code Color</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={qrColor}
                        onChange={(e) => setQrColor(e.target.value)}
                        className="h-10 w-20"
                      />
                      <input
                        type="text"
                        value={qrColor}
                        onChange={(e) => setQrColor(e.target.value)}
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-700">Background Color</label>
                    <div className="flex items-center space-x-2">
                      <input
                        type="color"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="h-10 w-20"
                      />
                      <input
                        type="text"
                        value={bgColor}
                        onChange={(e) => setBgColor(e.target.value)}
                        className="w-full p-2 border rounded-md"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-text-700">Logo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="w-full p-2 border rounded-md"
                    />
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
          
          <div className="flex flex-col items-center space-y-6">
            <div ref={qrRef} className="bg-white p-4 rounded-lg">
              <QRCodeCanvas
                value={qrValue || 'https://example.com'}
                size={256}
                level="H"
                fgColor={qrColor}
                bgColor={bgColor}
                imageSettings={logo ? {
                  src: logo,
                  height: 24,
                  width: 24,
                  excavate: true,
                } : undefined}
              />
            </div>
            
            <div className="flex space-x-4">
              <Button onClick={() => downloadQRCode('png', qrRef)}>
                Download PNG
              </Button>
              <Button onClick={() => downloadQRCode('svg', qrRef)}>
                Download SVG
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}