'use client';

import { useState } from 'react';

interface VCardFormProps {
  onValueChange: (value: string) => void;
}

export function VCardForm({ onValueChange }: VCardFormProps) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    organization: '',
    title: '',
    email: '',
    phone: '',
    website: '',
    address: '',
    note: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Format vCard string
    const vCard = `BEGIN:VCARD
VERSION:3.0
N:${formData.lastName};${formData.firstName};;;
FN:${formData.firstName} ${formData.lastName}
ORG:${formData.organization}
TITLE:${formData.title}
EMAIL:${formData.email}
TEL:${formData.phone}
URL:${formData.website}
ADR:;;${formData.address};;;;
NOTE:${formData.note}
END:VCARD`;
    
    onValueChange(vCard);
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-text-700 mb-1">
            Nombre *
          </label>
          <input
            type="text"
            name="firstName"
            className="w-full p-2 border rounded-md"
            onChange={handleChange}
            value={formData.firstName}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-text-700 mb-1">
            Apellidos *
          </label>
          <input
            type="text"
            name="lastName"
            className="w-full p-2 border rounded-md"
            onChange={handleChange}
            value={formData.lastName}
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Organización
        </label>
        <input
          type="text"
          name="organization"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.organization}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Cargo
        </label>
        <input
          type="text"
          name="title"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.title}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.email}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Teléfono
        </label>
        <input
          type="tel"
          name="phone"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.phone}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Sitio web
        </label>
        <input
          type="url"
          name="website"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.website}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Dirección
        </label>
        <textarea
          name="address"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.address}
          rows={3}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Nota
        </label>
        <textarea
          name="note"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.note}
          rows={3}
        />
      </div>
    </div>
  );
}