import React from 'react';
import { Character } from '../types';

interface CharacterDetailsProps {
  character: Pick<Character, 'name' | 'appearance' | 'personality' | 'history'>;
  onChange: (details: Partial<Character>) => void;
}

const CharacterDetails: React.FC<CharacterDetailsProps> = ({ character, onChange }) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    onChange({ [name]: value });
  };

  return (
    <div className="space-y-6 max-w-2xl mx-auto animate-fadeIn">
      <div>
        <label htmlFor="name" className="block text-lg font-semibold text-amber-400 mb-2">Character Name <span className="text-red-500">*</span></label>
        <input
          type="text"
          id="name"
          name="name"
          value={character.name}
          onChange={handleInputChange}
          placeholder="e.g., Kaelen 'Kael' Vance"
          className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
          required
        />
      </div>
      <div>
        <label htmlFor="appearance" className="block text-lg font-semibold text-amber-400 mb-2">Appearance</label>
        <textarea
          id="appearance"
          name="appearance"
          value={character.appearance || ''}
          onChange={handleInputChange}
          placeholder="Describe your character's physical features, clothing, and overall presence."
          rows={4}
          className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        />
      </div>
       <div>
        <label htmlFor="personality" className="block text-lg font-semibold text-amber-400 mb-2">Personality</label>
        <textarea
          id="personality"
          name="personality"
          value={character.personality || ''}
          onChange={handleInputChange}
          placeholder="What are their mannerisms, ideals, flaws, and motivations?"
          rows={4}
          className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        />
      </div>
      <div>
        <label htmlFor="history" className="block text-lg font-semibold text-amber-400 mb-2">History</label>
        <textarea
          id="history"
          name="history"
          value={character.history || ''}
          onChange={handleInputChange}
          placeholder="What key events from their past have shaped who they are today?"
          rows={4}
          className="w-full bg-slate-700 border border-slate-600 rounded-md p-2 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default CharacterDetails;
