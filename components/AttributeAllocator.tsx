
import React, { useState, useEffect } from 'react';
import { Attributes, AttributeName, AttributeSpecialization } from '../types';
import { ATTRIBUTES as ATTRIBUTE_DETAILS } from '../constants';

interface AttributeAllocatorProps {
  attributes: Attributes;
  specializations: AttributeSpecialization[];
  totalPoints: number;
  specializationCount: number;
  onChange: (attributes: Attributes, specializations: AttributeSpecialization[]) => void;
}

const AttributeAllocator: React.FC<AttributeAllocatorProps> = ({ attributes, specializations, totalPoints, specializationCount, onChange }) => {
  const [currentAttributes, setCurrentAttributes] = useState(attributes);
  const [currentSpecs, setCurrentSpecs] = useState<AttributeSpecialization[]>(specializations);

  const pointsSpent = currentAttributes.Physique + currentAttributes.Intellect + currentAttributes.Presence;
  const pointsRemaining = totalPoints - pointsSpent;

  useEffect(() => {
    onChange(currentAttributes, currentSpecs);
  }, [currentAttributes, currentSpecs, onChange]);

  const handleAttributeChange = (attr: AttributeName, delta: number) => {
    const newValue = currentAttributes[attr] + delta;
    if (newValue >= 0 && newValue <= 5) {
      if (delta > 0 && pointsRemaining <= 0) return;
      setCurrentAttributes(prev => ({ ...prev, [attr]: newValue }));
    }
  };

  const handleSpecToggle = (attribute: AttributeName, name: string) => {
      const spec: AttributeSpecialization = { attribute, name };
      const isSelected = currentSpecs.some(s => s.name === name);

      if (isSelected) {
          setCurrentSpecs(currentSpecs.filter(s => s.name !== name));
      } else if (currentSpecs.length < specializationCount) {
          setCurrentSpecs([...currentSpecs, spec]);
      }
  }

  return (
    <div className="space-y-6">
      <div className="text-center bg-slate-700/50 p-3 rounded-lg">
        <p className="text-lg">Points Remaining: <span className="font-bold text-2xl text-amber-400">{pointsRemaining}</span></p>
        <p className="text-lg">Specializations to Choose: <span className="font-bold text-2xl text-cyan-400">{specializationCount - currentSpecs.length}</span></p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {Object.entries(ATTRIBUTE_DETAILS).map(([name, details]) => (
          <div key={name} className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
            <h3 className="text-2xl font-bold text-white">{name}</h3>
            <p className="text-sm text-slate-300 mb-4">{details.description}</p>
            
            <div className="flex items-center justify-center space-x-4 mb-4">
              <button onClick={() => handleAttributeChange(name as AttributeName, -1)} className="w-10 h-10 rounded-full bg-slate-600 hover:bg-slate-500 text-2xl">-</button>
              <span className="text-5xl font-bold w-16 text-center text-amber-400">{currentAttributes[name as AttributeName]}</span>
              <button onClick={() => handleAttributeChange(name as AttributeName, 1)} className="w-10 h-10 rounded-full bg-slate-600 hover:bg-slate-500 text-2xl">+</button>
            </div>

            <div className="mt-4">
                <h4 className="font-semibold text-cyan-300">Specializations</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                    {details.specializations.map(specName => {
                        const isSelected = currentSpecs.some(s => s.name === specName);
                        return (
                            <button
                                key={specName}
                                onClick={() => handleSpecToggle(name as AttributeName, specName)}
                                className={`px-3 py-1 text-sm rounded-full transition-colors ${
                                    isSelected
                                    ? 'bg-cyan-500 text-white'
                                    : 'bg-slate-600 hover:bg-slate-500'
                                }`}
                            >
                                {specName}
                            </button>
                        )
                    })}
                </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AttributeAllocator;
