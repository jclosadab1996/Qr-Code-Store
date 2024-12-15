'use client';

import { useState } from 'react';

interface WiFiFormProps {
  onValueChange: (value: string) => void;
}

export function WiFiForm({ onValueChange }: WiFiFormProps) {
  const [formData, setFormData] = useState({
    networkName: '',
    password: '',
    encryption: 'WPA'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Format WiFi string: WIFI:T:WPA;S:network;P:password;;
    const wifiString = `WIFI:T:${formData.encryption};S:${formData.networkName};P:${formData.password};;`;
    onValueChange(wifiString);
  };

  return (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Nombre de la red *
        </label>
        <input
          type="text"
          name="networkName"
          placeholder="Mi Wi-Fi"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.networkName}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Contraseña *
        </label>
        <input
          type="password"
          name="password"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.password}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Tipo de cifrado *
        </label>
        <select
          name="encryption"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.encryption}
        >
          <option value="WPA">WPA/WPA2</option>
          <option value="WEP">WEP</option>
          <option value="nopass">Sin contraseña</option>
        </select>
      </div>
    </div>
  );
}