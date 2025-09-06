import React from 'react';
import { Character, Priority } from '../types';
// FIX: Import LINEAGE_OPTIONS, ESPER_DATA, and MENTALIST_DATA to resolve undefined errors.
import { ESPER_DATA, MENTALIST_DATA, LINEAGE_OPTIONS } from '../constants';

interface EsperPowerSelectorProps {
    character: Character;
    onChange: (updates: Partial<Character>) => void;
}

const EsperPowerSelector: React.FC<EsperPowerSelectorProps> = ({ character, onChange }) => {
    const priority = character.priorities.Lineage;

    if (!priority) return null;

    const { esper } = character;

    const handleBaseArchetypeSelect = (name: string) => {
        onChange({ esper: { ...esper, baseArchetype: name, path: [] } });
    };

    const handleFocusSelect = (focusName: string, level: number) => {
        let newPath = [...esper.path];
        if (level === 0) {
            newPath = [focusName];
        } else if (level === 1) {
            newPath = [newPath[0], focusName];
        }
        onChange({ esper: { ...esper, path: newPath } });
    };

    const handleMentalistSelect = (archetypeName: string) => {
        onChange({ esper: { ...esper, mentalistArchetype: archetypeName, mentalistPolarity: null, mentalistScope: null } });
    }
    
    const handleMentalistConfig = (type: 'polarity' | 'scope', value: string) => {
        const field = type === 'polarity' ? 'mentalistPolarity' : 'mentalistScope';
        const cost = MENTALIST_DATA.framework[type].find(p => p.name === value)?.cost || 0;
        
        // This is a simplified corruption calculation.
        // A more robust system would recalculate total corruption from all sources.
        let newCorruption = character.corruption.permanent;
        
        if (field === 'mentalistPolarity' && esper.mentalistPolarity) {
             const oldCost = MENTALIST_DATA.framework.polarity.find(p => p.name === esper.mentalistPolarity)?.cost || 0;
             newCorruption -= oldCost;
        }
        if (field === 'mentalistScope' && esper.mentalistScope) {
             const oldCost = MENTALIST_DATA.framework.scope.find(p => p.name === esper.mentalistScope)?.cost || 0;
             newCorruption -= oldCost;
        }
        newCorruption += cost;

        onChange({
            esper: { ...esper, [field]: value },
            corruption: { ...character.corruption, permanent: newCorruption }
        });
    }

    const renderNodeSelection = (nodes: any, level: number, title: string) => (
        <div className="mt-4">
            <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* FIX: Add explicit type for 'node' to resolve property access errors. */}
                {Object.values(nodes).map((node: { name: string; philosophy: string; }) => {
                    const isSelected = esper.path[level] === node.name;
                    return (
                        <button key={node.name} onClick={() => handleFocusSelect(node.name, level)}
                            className={`p-3 rounded-lg border-2 text-left transition-colors ${isSelected ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-400'}`}
                        >
                            <h5 className="font-bold text-amber-400">{node.name}</h5>
                            <p className="text-xs text-slate-300 mt-1">{node.philosophy}</p>
                        </button>
                    )
                })}
            </div>
        </div>
    );
    
    const renderEsperPath = () => {
        if (priority === Priority.C) return null;

        const currentArchetypeNode = esper.baseArchetype ? ESPER_DATA[esper.baseArchetype] : null;
        const firstFocusNode = currentArchetypeNode && esper.path[0] 
            ? (currentArchetypeNode.focuses?.[esper.path[0]] || currentArchetypeNode.mutations?.[esper.path[0]]) 
            : null;

        return <>
            <h4 className="text-lg font-semibold text-white mb-2">{priority === 'A' ? '2. Select Base Esper Archetype' : '1. Select Base Archetype'}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {/* FIX: Add explicit type for 'arch' to resolve property access errors. */}
                {Object.values(ESPER_DATA).map((arch: { name: string; philosophy: string; }) => {
                     const isSelected = esper.baseArchetype === arch.name;
                     return (
                         <button key={arch.name} onClick={() => handleBaseArchetypeSelect(arch.name)}
                            className={`p-3 rounded-lg border-2 text-left transition-colors ${isSelected ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-400'}`}>
                             <h5 className="font-bold text-amber-400">{arch.name}</h5>
                             <p className="text-xs text-slate-300 mt-1">{arch.philosophy}</p>
                         </button>
                     )
                })}
            </div>
            { (priority === Priority.D || priority === Priority.B) && currentArchetypeNode && currentArchetypeNode.focuses && renderNodeSelection(currentArchetypeNode.focuses, 0, '2. Evolve Step 1: Choose a Focus')}
            { priority === Priority.B && firstFocusNode && (firstFocusNode.focuses || firstFocusNode.mutations) && renderNodeSelection({...(firstFocusNode.focuses || {}), ...(firstFocusNode.mutations || {})}, 1, '3. Evolve Step 2: Choose a Focus or Mutation')}
        </>
    }

    const renderMentalistPath = () => {
        if (![Priority.A, Priority.C].includes(priority)) return null;

        return <>
             <h4 className="text-lg font-semibold text-white mb-2 mt-6">{priority === 'A' ? '1. Select Mentalist Archetype' : '1. Select Archetype'}</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.values(MENTALIST_DATA.archetypes).map(arch => {
                    const isSelected = esper.mentalistArchetype === arch.name;
                    return (
                        <button key={arch.name} onClick={() => handleMentalistSelect(arch.name)}
                            className={`p-3 rounded-lg border-2 text-left transition-colors ${isSelected ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-400'}`}
                        >
                            <h5 className="font-bold text-amber-400">{arch.name}</h5>
                        </button>
                    )
                })}
             </div>
            
            {esper.mentalistArchetype && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">2. Choose Polarity (Core Nature)</h4>
                        {MENTALIST_DATA.framework.polarity.map(p => (
                            <button key={p.name} onClick={() => handleMentalistConfig('polarity', p.name)}
                                className={`w-full p-3 rounded-lg border-2 text-left mb-2 transition-colors ${esper.mentalistPolarity === p.name ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-400'}`}>
                                <h5 className="font-bold text-amber-400">{p.name}</h5>
                                <p className="text-xs text-slate-300 mt-1">{p.description} (Cost: {p.cost} Perm. Corruption)</p>
                            </button>
                        ))}
                    </div>
                    <div>
                         <h4 className="text-lg font-semibold text-white mb-2">3. Choose Scope (Area of Effect)</h4>
                         {MENTALIST_DATA.framework.scope.map(s => (
                             <button key={s.name} onClick={() => handleMentalistConfig('scope', s.name)}
                                className={`w-full p-3 rounded-lg border-2 text-left mb-2 transition-colors ${esper.mentalistScope === s.name ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-400'}`}>
                                <h5 className="font-bold text-amber-400">{s.name}</h5>
                                <p className="text-xs text-slate-300 mt-1">{s.description} (Cost: {s.cost} Perm. Corruption)</p>
                             </button>
                         ))}
                    </div>
                </div>
            )}
        </>
    }

    return (
        <div className="border-t-2 border-slate-700 mt-6 pt-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Esper: The Path of Ascension</h3>
            <p className="text-slate-300 mb-4">{LINEAGE_OPTIONS.Esper.description}</p>
            <p className="bg-slate-800/50 p-3 rounded-lg text-amber-300"><strong>Your Path:</strong> {LINEAGE_OPTIONS.Esper[priority]}</p>
            
            <div className="mt-4">
                {renderMentalistPath()}
                {renderEsperPath()}
            </div>
        </div>
    );
};

export default EsperPowerSelector;