
import React from 'react';
import { Character, Priority, SorceryMove, SorcerySphere } from '../types';
import { SORCERER_PRIORITY_DATA, SORCERY_DATA } from '../constants';

interface SorceryPowerSelectorProps {
    character: Character;
    onChange: (updates: Partial<Character>) => void;
}

const SorceryPowerSelector: React.FC<SorceryPowerSelectorProps> = ({ character, onChange }) => {
    const priority = character.priorities.Lineage;

    if (!priority) return null;

    const { spheres, moves, priorityCPath } = character.sorcery;
    const isPriorityC = priority === Priority.C;
    
    const limits = isPriorityC 
        ? (priorityCPath === 1 ? SORCERER_PRIORITY_DATA[priority].path1 : SORCERER_PRIORITY_DATA[priority].path2)
        : SORCERER_PRIORITY_DATA[priority];

    const selectedPrimary = spheres.filter(s => s.type === 'Primary');
    const selectedSecondary = spheres.filter(s => s.type === 'Secondary');

    const handlePathChange = (path: 1 | 2) => {
        onChange({ sorcery: { spheres: [], moves: [], priorityCPath: path } });
    };

    const toggleSphere = (sphereName: string, type: 'Primary' | 'Secondary') => {
        const isSelected = spheres.some(s => s.name === sphereName);
        let newSpheres = [...spheres];
        let newMoves = [...moves];

        if (isSelected) {
            newSpheres = newSpheres.filter(s => s.name !== sphereName);
            newMoves = newMoves.filter(m => m.sphere !== sphereName);
        } else {
            if (type === 'Primary' && selectedPrimary.length < limits.primary) {
                newSpheres.push({ name: sphereName, type });
            }
            if (type === 'Secondary' && selectedSecondary.length < limits.secondary) {
                newSpheres.push({ name: sphereName, type });
            }
        }
        onChange({ sorcery: { ...character.sorcery, spheres: newSpheres, moves: newMoves } });
    };

    const toggleMove = (moveName: string, sphereName: string) => {
        const isSelected = moves.some(m => m.name === moveName);
        let newMoves = [...moves];

        if (isSelected) {
            newMoves = newMoves.filter(m => m.name !== moveName);
        } else if (moves.length < limits.moves) {
            newMoves.push({ name: moveName, sphere: sphereName });
        }
        onChange({ sorcery: { ...character.sorcery, moves: newMoves } });
    };

    const renderSphereList = (type: 'Primary' | 'Secondary') => {
        const sphereData = type === 'Primary' ? SORCERY_DATA.primary : SORCERY_DATA.secondary;
        const selectedCount = type === 'Primary' ? selectedPrimary.length : selectedSecondary.length;
        const limit = type === 'Primary' ? limits.primary : limits.secondary;

        return (
            <div>
                <h4 className="text-xl font-bold text-amber-400 mb-2">{type} Spheres <span className="text-base font-normal text-slate-300">({selectedCount}/{limit})</span></h4>
                <div className="space-y-4">
                    {sphereData.map(sphere => {
                        const isSelected = spheres.some(s => s.name === sphere.name);
                        const isDisabled = !isSelected && selectedCount >= limit;
                        return (
                            <div key={sphere.name} className={`p-3 rounded-lg border ${isSelected ? 'border-cyan-500 bg-cyan-900/30' : 'border-slate-600 bg-slate-800/50'} ${isDisabled ? 'opacity-50' : ''}`}>
                                <div className="flex justify-between items-center">
                                    <h5 className="font-semibold text-white">{sphere.name}</h5>
                                    <button onClick={() => toggleSphere(sphere.name, type)} disabled={isDisabled} className={`px-3 py-1 text-sm rounded ${isSelected ? 'bg-red-600 hover:bg-red-500' : 'bg-cyan-600 hover:bg-cyan-500'} disabled:bg-slate-500 disabled:cursor-not-allowed`}>
                                        {isSelected ? 'Deselect' : 'Select'}
                                    </button>
                                </div>
                                {isSelected && (
                                    <div className="mt-3 pt-3 border-t border-slate-600 space-y-2">
                                        {sphere.moves.map(move => {
                                            const isMoveSelected = moves.some(m => m.name === move.name);
                                            const isMoveDisabled = !isMoveSelected && moves.length >= limits.moves;
                                            return (
                                                <div key={move.name} className={`p-2 rounded ${isMoveSelected ? 'bg-slate-700' : 'bg-slate-800'}`}>
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex items-center">
                                                            <input type="checkbox" id={move.name} checked={isMoveSelected} disabled={isMoveDisabled} onChange={() => toggleMove(move.name, sphere.name)} className="mr-2 h-4 w-4 accent-amber-500 bg-slate-600" />
                                                            <label htmlFor={move.name} className="font-semibold">{move.name}</label>
                                                        </div>
                                                    </div>
                                                    <p className="text-xs text-slate-300 mt-1 whitespace-pre-wrap pl-6">{move.description}</p>
                                                </div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }

    return (
        <div className="border-t-2 border-slate-700 mt-6 pt-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Sorcery Power Selection</h3>
            <div className="bg-slate-700/50 p-4 rounded-lg text-center mb-4">
                <p className="text-lg">Moves to Select: <span className="font-bold text-2xl text-amber-400">{moves.length} / {limits.moves}</span></p>
            </div>
            
            {isPriorityC && (
                <div className="bg-slate-700/50 p-4 rounded-lg mb-4">
                    <h4 className="font-semibold text-center text-white mb-2">Priority C Path</h4>
                    <div className="flex justify-center gap-4">
                        <button onClick={() => handlePathChange(1)} className={`px-4 py-2 rounded ${priorityCPath === 1 ? 'bg-amber-600 text-white' : 'bg-slate-600'}`}>1 Primary Sphere</button>
                        <button onClick={() => handlePathChange(2)} className={`px-4 py-2 rounded ${priorityCPath === 2 ? 'bg-amber-600 text-white' : 'bg-slate-600'}`}>2 Secondary Spheres</button>
                    </div>
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {limits.primary > 0 && renderSphereList('Primary')}
                {limits.secondary > 0 && renderSphereList('Secondary')}
            </div>
        </div>
    )
}

export default SorceryPowerSelector;
