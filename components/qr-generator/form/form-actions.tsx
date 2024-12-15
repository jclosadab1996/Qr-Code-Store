'use client';

import { Button } from '@/components/ui/button';

export function FormActions() {
  return (
    <div className="flex justify-between pt-4">
      <Button variant="outline" type="button">
        Atrás
      </Button>
      <Button type="submit">
        Siguiente
      </Button>
    </div>
  );
}