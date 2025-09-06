
import React from 'react';
import { Priority, Character } from '../types';
import { LINEAGE_OPTIONS } from '../constants';
import SorceryPowerSelector from './SorceryPowerSelector';
import ChimeraPowerSelector from './ChimeraPowerSelector';
import NeoSapienPowerSelector from './NeoSapienPowerSelector';

type LineageName = keyof typeof LINEAGE_OPTIONS;

interface LineageSelectorProps {
  priority: Priority | null;
  onSelect: (lineage: { name: string; details: string } | null) => void;
  currentLineage: { name: string; details: string } | null;
  character: Character;
  onCharacterChange: (updates: Partial<Character>) => void;
}

const LineageSelector: React.FC<LineageSelectorProps> = ({ priority, onSelect, currentLineage, character, onCharacterChange }) => {
  if (!priority) {
    return <p className="text-center text-amber-500">Please select a priority for Lineage in the previous step.</p>;
  }

  return (
    <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.keys(LINEAGE_OPTIONS).map((name) => {
            const lineage = LINEAGE_OPTIONS[name as LineageName];
            const details = lineage[priority as Priority];
            const isSelected = currentLineage?.name === name;

            return (
            <div
                key={name}
                onClick={() => onSelect({ name, details })}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                isSelected ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-500'
                }`}
            >
                <h3 className="text-xl font-bold text-amber-400">{name}</h3>
                <p className="text-sm text-slate-300 mt-2 mb-3">{lineage.description}</p>
                <div className="mt-auto bg-slate-800 p-2 rounded">
                <p className="text-sm font-semibold text-cyan-300">Priority {priority} Bonus:</p>
                <p className="text-xs text-slate-200">{details}</p>
                </div>
            </div>
            );
        })}
        </div>
        {currentLineage?.name === 'Sorcerer' && (
            <div className="mt-6">
                <SorceryPowerSelector
                    character={character}
                    onChange={onCharacterChange}
                />
            </div>
        )}
        {currentLineage?.name === 'Chimera' && (
            <div className="mt-6">
                <ChimeraPowerSelector
                    character={character}
                    onChange={onCharacterChange}
                />
            </div>
        )}
        {currentLineage?.name === 'Neosapien' && (
            <div className="mt-6">
                <NeoSapienPowerSelector
                    character={character}
                    onChange={onCharacterChange}
                />
            </div>
        )}
    </div>
  );
};

export default LineageSelector;