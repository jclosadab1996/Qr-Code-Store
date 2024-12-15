'use client';

import { useState } from 'react';

interface MenuItem {
  name: string;
  price: string;
  description: string;
}

interface MenuSection {
  name: string;
  items: MenuItem[];
}

interface MenuFormProps {
  onValueChange: (value: string) => void;
}

export function MenuForm({ onValueChange }: MenuFormProps) {
  const [formData, setFormData] = useState({
    restaurantName: '',
    description: '',
    sections: [
      {
        name: 'Platos principales',
        items: [{ name: '', price: '', description: '' }]
      }
    ],
    qrName: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Format menu data as JSON string
    const menuString = JSON.stringify({
      restaurant: formData.restaurantName,
      description: formData.description,
      sections: formData.sections
    });
    onValueChange(`MENU:${menuString}`);
  };

  const handleSectionChange = (sectionIndex: number, field: string, value: string) => {
    const newSections = [...formData.sections];
    newSections[sectionIndex] = { ...newSections[sectionIndex], [field]: value };
    setFormData(prev => ({ ...prev, sections: newSections }));
  };

  const handleItemChange = (sectionIndex: number, itemIndex: number, field: string, value: string) => {
    const newSections = [...formData.sections];
    newSections[sectionIndex].items[itemIndex] = {
      ...newSections[sectionIndex].items[itemIndex],
      [field]: value
    };
    setFormData(prev => ({ ...prev, sections: newSections }));
  };

  const addSection = () => {
    setFormData(prev => ({
      ...prev,
      sections: [...prev.sections, { name: '', items: [{ name: '', price: '', description: '' }] }]
    }));
  };

  const addItem = (sectionIndex: number) => {
    const newSections = [...formData.sections];
    newSections[sectionIndex].items.push({ name: '', price: '', description: '' });
    setFormData(prev => ({ ...prev, sections: newSections }));
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Nombre del restaurante *
        </label>
        <input
          type="text"
          name="restaurantName"
          placeholder="Ej: Restaurante El Sabor"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.restaurantName}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Descripción del restaurante
        </label>
        <textarea
          name="description"
          placeholder="Breve descripción de tu restaurante..."
          className="w-full p-2 border rounded-md"
          rows={3}
          onChange={handleChange}
          value={formData.description}
        />
      </div>

      {formData.sections.map((section, sectionIndex) => (
        <div key={sectionIndex} className="space-y-4 p-4 border rounded-md">
          <div>
            <label className="block text-sm font-medium text-text-700 mb-1">
              Nombre de la sección
            </label>
            <input
              type="text"
              placeholder="Ej: Entrantes"
              className="w-full p-2 border rounded-md"
              value={section.name}
              onChange={(e) => handleSectionChange(sectionIndex, 'name', e.target.value)}
            />
          </div>

          {section.items.map((item, itemIndex) => (
            <div key={itemIndex} className="space-y-2 pl-4 border-l-2">
              <input
                type="text"
                placeholder="Nombre del plato"
                className="w-full p-2 border rounded-md"
                value={item.name}
                onChange={(e) => handleItemChange(sectionIndex, itemIndex, 'name', e.target.value)}
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Precio"
                  className="w-1/3 p-2 border rounded-md"
                  value={item.price}
                  onChange={(e) => handleItemChange(sectionIndex, itemIndex, 'price', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Descripción del plato"
                  className="flex-1 p-2 border rounded-md"
                  value={item.description}
                  onChange={(e) => handleItemChange(sectionIndex, itemIndex, 'description', e.target.value)}
                />
              </div>
            </div>
          ))}
          
          <button
            type="button"
            onClick={() => addItem(sectionIndex)}
            className="text-sm text-primary-600 hover:text-primary-700"
          >
            + Añadir plato
          </button>
        </div>
      ))}

      <button
        type="button"
        onClick={addSection}
        className="w-full p-2 border-2 border-dashed border-background-300 rounded-md text-text-600 hover:text-text-700 hover:border-background-400"
      >
        + Añadir nueva sección
      </button>

      <div>
        <label className="block text-sm font-medium text-text-700 mb-1">
          Nombre del código QR
        </label>
        <input
          type="text"
          name="qrName"
          placeholder="Ej: Menú Digital"
          className="w-full p-2 border rounded-md"
          onChange={handleChange}
          value={formData.qrName}
        />
      </div>
    </div>
  );
}