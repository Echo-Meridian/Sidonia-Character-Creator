import React, { useEffect, useMemo } from 'react';
import { Character, Priority, EsperAbility } from '../types';
import { ESPER_DATA, MENTALIST_DATA, LINEAGE_OPTIONS, ESPER_PRIORITY_DATA } from '../constants';

interface EsperPowerSelectorProps {
    character: Character;
    onChange: (updates: Partial<Character>) => void;
}

const EsperPowerSelector: React.FC<EsperPowerSelectorProps> = ({ character, onChange }) => {
    const priority = character.priorities.Lineage;

    if (!priority) return null;

    const { esper } = character;
    const priorityRules = ESPER_PRIORITY_DATA[priority];

    // This effect automatically updates the character's ability list when their path changes.
    useEffect(() => {
        const newAbilities: EsperAbility[] = [];
        const { baseArchetype, path, mentalistArchetype, mentalistPolarity, mentalistScope } = esper;
        let newCorruption = 0;

        // Add abilities from the Esper path
        if (baseArchetype && ESPER_DATA[baseArchetype]) {
            const baseNode = ESPER_DATA[baseArchetype];
            newAbilities.push(...(baseNode.abilities || []));

            let currentNode = baseNode;
            for (const focusName of path) {
                const nextNode = currentNode.focuses?.[focusName] || currentNode.mutations?.[focusName];
                if (nextNode) {
                    newAbilities.push(...(nextNode.abilities || []));
                    currentNode = nextNode;
                }
            }
        }
        
        // Add abilities and corruption for Mentalist path
        if (mentalistArchetype && MENTALIST_DATA.archetypes[mentalistArchetype]) {
            newAbilities.push(...MENTALIST_DATA.archetypes[mentalistArchetype].moves);
            if (mentalistPolarity) {
                const polarityData = MENTALIST_DATA.framework.polarity.find(p => p.name === mentalistPolarity);
                if (polarityData) newCorruption += polarityData.cost;
            }
            if (mentalistScope) {
                const scopeData = MENTALIST_DATA.framework.scope.find(s => s.name === mentalistScope);
                if (scopeData) newCorruption += scopeData.cost;
            }
        }
        
        onChange({
            esper: { ...esper, abilities: newAbilities },
            corruption: { ...character.corruption, permanent: newCorruption }
        });

    }, [esper.baseArchetype, esper.path.join(','), esper.mentalistArchetype, esper.mentalistPolarity, esper.mentalistScope]);

    const handleBaseArchetypeSelect = (name: string) => {
        const isDeselecting = esper.baseArchetype === name;
        onChange({ esper: { ...initialEsperState, baseArchetype: isDeselecting ? null : name } });
    };
    
    const initialEsperState = {
        baseArchetype: null,
        mentalistArchetype: null,
        path: [],
        abilities: [],
        mentalistPolarity: null,
        mentalistScope: null,
    };

    const handleFocusSelect = (focusName: string, level: number) => {
        let newPath = [...esper.path];
        // If clicking the currently selected node, deselect it and subsequent path nodes
        if (newPath[level] === focusName) {
            newPath = newPath.slice(0, level);
        } else {
            newPath = newPath.slice(0, level);
            newPath[level] = focusName;
        }
        onChange({ esper: { ...esper, path: newPath } });
    };

    const handleMentalistSelect = (archetypeName: string) => {
        const isDeselecting = esper.mentalistArchetype === archetypeName;
        onChange({ esper: { ...esper, mentalistArchetype: isDeselecting ? null : archetypeName, mentalistPolarity: null, mentalistScope: null } });
    }
    
    const handleMentalistConfig = (type: 'polarity' | 'scope', value: 'Receiver' | 'Influencer' | 'Focal Point' | 'Aural Field') => {
        const field = type === 'polarity' ? 'mentalistPolarity' : 'mentalistScope';
        const isDeselecting = esper[field] === value;
        onChange({
            esper: { ...esper, [field]: isDeselecting ? null : value },
        });
    }

    const renderNodeSelection = (nodes: any, level: number, title: string) => {
        if (!nodes || Object.keys(nodes).length === 0) return null;
        return (
            <div className="mt-4">
                <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {Object.values(nodes).map((node: any) => {
                        const isSelected = esper.path[level] === node.name;
                        return (
                            <div key={node.name}
                                className={`p-3 rounded-lg border-2 text-left transition-colors cursor-pointer ${isSelected ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-400'}`}
                                onClick={() => handleFocusSelect(node.name, level)}
                            >
                                <h5 className="font-bold text-amber-400">{node.name}</h5>
                                <p className="text-xs text-slate-300 mt-1">{node.philosophy}</p>
                                <div className="mt-2 text-xs space-y-2">
                                    {node.abilities.map((ability: EsperAbility) => (
                                        <div key={ability.name} className="p-2 bg-slate-800/60 rounded">
                                            <p className="font-semibold text-white">{ability.name}</p>
                                            <p className="text-slate-300">{ability.description}</p>
                                            {ability.effect && <p className="text-slate-200"><strong className="text-cyan-400">Effect:</strong> {ability.effect}</p>}
                                            {ability.results && (
                                                <div className="mt-1 space-y-0.5">
                                                    {ability.results['10+'] && <p><strong className="text-green-400">10+:</strong> {ability.results['10+']}</p>}
                                                    {ability.results['7-9'] && <p><strong className="text-yellow-400">7-9:</strong> {ability.results['7-9']}</p>}
                                                    {ability.results['6-'] && <p><strong className="text-red-400">6-:</strong> {ability.results['6-']}</p>}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        );
    }
    
    const renderEsperPath = () => {
        if (!priorityRules.base) return null;

        const currentArchetypeNode = esper.baseArchetype ? ESPER_DATA[esper.baseArchetype] : null;
        const firstFocusNode = currentArchetypeNode && esper.path[0] 
            ? (currentArchetypeNode.focuses?.[esper.path[0]] || currentArchetypeNode.mutations?.[esper.path[0]]) 
            : null;

        return <>
            <h4 className="text-lg font-semibold text-white mb-2 mt-4">{priorityRules.mentalist ? '2. Select Base Esper Archetype' : '1. Select Base Archetype'}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.values(ESPER_DATA).map((arch: any) => {
                     const isSelected = esper.baseArchetype === arch.name;
                     return (
                         <div key={arch.name} onClick={() => handleBaseArchetypeSelect(arch.name)}
                            className={`p-3 rounded-lg border-2 text-left transition-colors cursor-pointer ${isSelected ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-400'}`}>
                             <h5 className="font-bold text-amber-400">{arch.name}</h5>
                             <p className="text-xs text-slate-300 mt-1">{arch.philosophy}</p>
                         </div>
                     )
                })}
            </div>

            { priorityRules.steps > 0 && currentArchetypeNode && renderNodeSelection({...(currentArchetypeNode.focuses || {}), ...(currentArchetypeNode.mutations || {})}, 0, 'Step 2: Choose a Focus or Mutation')}
            { priorityRules.steps > 1 && firstFocusNode && renderNodeSelection({...(firstFocusNode.focuses || {}), ...(firstFocusNode.mutations || {})}, 1, 'Step 3: Choose a Focus or Mutation')}
        </>
    }

    const renderMentalistPath = () => {
        if (!priorityRules.mentalist) return null;

        return <>
             <h4 className="text-lg font-semibold text-white mb-2 mt-4">{priorityRules.base ? '1. Select Mentalist Archetype' : '1. Select Archetype'}</h4>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {Object.values(MENTALIST_DATA.archetypes).map(arch => {
                    const isSelected = esper.mentalistArchetype === arch.name;
                    return (
                        <div key={arch.name} onClick={() => handleMentalistSelect(arch.name)}
                            className={`p-3 rounded-lg border-2 text-left transition-colors cursor-pointer ${isSelected ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-400'}`}
                        >
                            <h5 className="font-bold text-amber-400">{arch.name}</h5>
                             <p className="text-xs text-slate-300 mt-1">{arch.description}</p>
                        </div>
                    )
                })}
             </div>
            
            {esper.mentalistArchetype && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h4 className="text-lg font-semibold text-white mb-2">2. Choose Polarity (Core Nature)</h4>
                        {MENTALIST_DATA.framework.polarity.map(p => (
                            <div key={p.name} onClick={() => handleMentalistConfig('polarity', p.name as any)}
                                className={`w-full p-3 rounded-lg border-2 text-left mb-2 transition-colors cursor-pointer ${esper.mentalistPolarity === p.name ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-400'}`}>
                                <h5 className="font-bold text-amber-400">{p.name}</h5>
                                <p className="text-xs text-slate-300 mt-1">{p.description} (Cost: {p.cost} Perm. Corruption)</p>
                            </div>
                        ))}
                    </div>
                    <div>
                         <h4 className="text-lg font-semibold text-white mb-2">3. Choose Scope (Area of Effect)</h4>
                         {MENTALIST_DATA.framework.scope.map(s => (
                             <div key={s.name} onClick={() => handleMentalistConfig('scope', s.name as any)}
                                className={`w-full p-3 rounded-lg border-2 text-left mb-2 transition-colors cursor-pointer ${esper.mentalistScope === s.name ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-400'}`}>
                                <h5 className="font-bold text-amber-400">{s.name}</h5>
                                <p className="text-xs text-slate-300 mt-1">{s.description} (Cost: {s.cost} Perm. Corruption)</p>
                             </div>
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
            <div className="bg-slate-800/50 p-3 rounded-lg text-amber-300">
                <p><strong>Your Path:</strong> {LINEAGE_OPTIONS.Esper[priority]}</p>
                <p className="text-xs text-slate-300 mt-1">Permanent Corruption from Mentalist Framework: {character.corruption.permanent}</p>
            </div>
            
            <div className="mt-4">
                {renderMentalistPath()}
                {renderEsperPath()}
            </div>
        </div>
    );
};

export default EsperPowerSelector;