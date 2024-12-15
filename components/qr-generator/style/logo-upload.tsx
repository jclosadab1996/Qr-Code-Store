import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';

interface LogoUploadProps {
  onLogoChange: (file: File | undefined) => void;
}

export function LogoUpload({ onLogoChange }: LogoUploadProps) {
  return (
    <div>
      <Label htmlFor="logo">Logo (optional)</Label>
      <Input
        type="file"
        id="logo"
        accept="image/*"
        onChange={(e) => {
          const file = e.target.files?.[0];
          onLogoChange(file);
        }}
      />
      <p className="text-sm text-text-500 mt-1">
        Recommended: 24x24px PNG or SVG with transparent background
      </p>
    </div>
  );
}