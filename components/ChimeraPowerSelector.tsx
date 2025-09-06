import React, { useMemo } from 'react';
import { Character, ChimeraMutation } from '../types';
import { CHIMERA_DATA } from '../constants';

interface ChimeraPowerSelectorProps {
    character: Character;
    onChange: (updates: Partial<Character>) => void;
}

const calculateSpentMutationPoints = (mutations: ChimeraMutation[]): number => {
    let spent = 0;
    mutations.forEach(mutation => {
        const tieredData = CHIMERA_DATA.mutations.find(m => m.name === mutation.name);
        if (tieredData) {
            const tierInfo = tieredData.tiers.find(t => t.tier === mutation.tier);
            if (tierInfo) {
                spent += tierInfo.cost;
            }
        } else {
            const utilityData = CHIMERA_DATA.utilityMutations.find(m => m.name === mutation.name);
            if (utilityData) {
                spent += utilityData.cost;
            }
        }
    });
    return spent;
};

const calculatePermanentCorruption = (mutations: ChimeraMutation[]): number => {
    let corruption = CHIMERA_DATA.coreAugments.reduce((sum, aug) => sum + aug.permanentCorruption, 0);
    mutations.forEach(mutation => {
        const tieredData = CHIMERA_DATA.mutations.find(m => m.name === mutation.name);
        if (tieredData) {
            const tierInfo = tieredData.tiers.find(t => t.tier === mutation.tier);
            if (tierInfo) {
                corruption += tierInfo.corruption;
            }
        } else {
            const utilityData = CHIMERA_DATA.utilityMutations.find(m => m.name === mutation.name);
            if (utilityData) {
                corruption += utilityData.corruption;
            }
        }
    });
    return corruption;
};

const ChimeraPowerSelector: React.FC<ChimeraPowerSelectorProps> = ({ character, onChange }) => {
    const { mutations, mutationPoints } = character.chimera;
    
    const spentPoints = useMemo(() => calculateSpentMutationPoints(mutations), [mutations]);
    const remainingPoints = mutationPoints - spentPoints;

    const highestAttributeValue = Math.max(...Object.values(character.attributes) as number[]);
    const integritySpecializations = ["Stamina", "Willpower", "Composure"];
    const integrityBonuses = character.attributeSpecializations.filter(spec => integritySpecializations.includes(spec.name)).length * 2;
    const corruptionThreshold = 10 + (highestAttributeValue * 2) + integrityBonuses;

    const handleTierSelect = (mutationName: string, tier: number) => {
        const existingMutation = mutations.find(m => m.name === mutationName);
        let newMutations = [...mutations];

        if (existingMutation?.tier === tier) {
            // Deselecting this tier removes the mutation entirely (toggle off)
            newMutations = newMutations.filter(m => m.name !== mutationName);
        } else {
            const mutationData = CHIMERA_DATA.mutations.find(m => m.name === mutationName)!;
            const costToSelect = mutationData.tiers.find(t => t.tier === tier)?.cost || 0;
            const currentCost = existingMutation 
                ? (mutationData.tiers.find(t => t.tier === existingMutation.tier)?.cost || 0)
                : 0;

            const costDelta = costToSelect - currentCost;
            
            if (remainingPoints >= costDelta) {
                if (existingMutation) {
                    existingMutation.tier = tier;
                } else {
                    newMutations.push({ name: mutationName, tier });
                }
            }
        }
        
        const newCorruption = calculatePermanentCorruption(newMutations);
        onChange({ 
            chimera: { ...character.chimera, mutations: newMutations },
            corruption: { ...character.corruption, permanent: newCorruption }
        });
    };

    const toggleUtilityMutation = (mutationName: string, cost: number) => {
        const isSelected = mutations.some(m => m.name === mutationName);
        let newMutations = [...mutations];

        if (isSelected) {
            newMutations = newMutations.filter(m => m.name !== mutationName);
        } else if (remainingPoints >= cost) {
            newMutations.push({ name: mutationName, tier: 1 }); // tier: 1 is arbitrary for non-tiered
        }

        const newCorruption = calculatePermanentCorruption(newMutations);
        onChange({
            chimera: { ...character.chimera, mutations: newMutations },
            corruption: { ...character.corruption, permanent: newCorruption }
        });
    };

    return (
        <div className="border-t-2 border-slate-700 mt-6 pt-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Chimera Mutation Selection</h3>
            <div className="bg-slate-700/50 p-4 rounded-lg text-center mb-4 sticky top-0 z-10">
                <p className="text-lg">Mutation Points Remaining: <span className="font-bold text-2xl text-amber-400">{remainingPoints} / {mutationPoints}</span></p>
                <p className="text-sm text-slate-300">Permanent Corruption: {character.corruption.permanent} / {corruptionThreshold}</p>
            </div>

            <div className="mb-6 bg-slate-800/50 p-4 rounded-lg border border-slate-600">
                <h4 className="text-xl font-bold text-amber-400 mb-2">Core Augments (Birthright)</h4>
                <ul className="space-y-2">
                    {CHIMERA_DATA.coreAugments.map(aug => (
                        <li key={aug.name}>
                            <strong className="text-white">{aug.name}:</strong>
                            <p className="text-sm text-slate-300">{aug.description} (+{aug.permanentCorruption} Perm. Corruption)</p>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="space-y-4">
                {CHIMERA_DATA.mutations.map(mutation => {
                    const existingMutation = mutations.find(m => m.name === mutation.name);
                    return (
                    <div key={mutation.name} className="bg-slate-800/50 p-3 rounded-lg border border-slate-600">
                         <h5 className="font-semibold text-white text-lg">{mutation.name}</h5>
                         <div className="mt-2 space-y-3">
                            {mutation.tiers.map(tierData => {
                                const isDirectlySelected = existingMutation?.tier === tierData.tier;
                                const isSelected = existingMutation ? existingMutation.tier >= tierData.tier : false;
                                
                                const hasLowerTiers = tierData.tier > 1;
                                const lowerTierIsSelected = hasLowerTiers ? (existingMutation ? existingMutation.tier >= tierData.tier - 1 : false) : true;
                                
                                const costToSelect = tierData.cost;
                                const currentCost = existingMutation ? (mutation.tiers.find(t => t.tier === existingMutation.tier)?.cost || 0) : 0;
                                const costDelta = costToSelect - currentCost;
                                
                                const isDisabled = !isDirectlySelected && (remainingPoints < costDelta || !lowerTierIsSelected);
                                
                                return (
                                <div key={tierData.tier} className={`pl-4 border-l-2 ${isSelected ? 'border-cyan-500' : 'border-slate-600'} ${isDisabled ? 'opacity-50' : ''}`}>
                                     <button onClick={() => handleTierSelect(mutation.name, tierData.tier)} disabled={isDisabled} className="w-full text-left">
                                        <h6 className={`font-bold ${isDirectlySelected ? 'text-amber-300' : 'text-amber-400'}`}>Tier {tierData.tier}: {tierData.name} ({tierData.cost} MP)</h6>
                                        <p className="text-sm text-slate-300">{tierData.description}</p>
                                        <p className="text-sm text-slate-200 mt-1"><strong>Effect:</strong> {tierData.effect}</p>
                                        {tierData.flaw && <p className="text-sm text-amber-400/80 mt-1"><strong>Flaw:</strong> {tierData.flaw}</p>}
                                    </button>
                                </div>
                                )
                            })}
                         </div>
                    </div>
                )})}
                
                <h4 className="text-xl font-bold text-amber-400 pt-4 border-t border-slate-600">Utility & Social Augments</h4>
                {CHIMERA_DATA.utilityMutations.map(mutation => {
                    const isSelected = mutations.some(m => m.name === mutation.name);
                    const isDisabled = !isSelected && remainingPoints < mutation.cost;
                    return (
                         <div key={mutation.name} className={`bg-slate-800/50 p-3 rounded-lg border ${isSelected ? 'border-cyan-500' : 'border-slate-600'} ${isDisabled ? 'opacity-50' : ''}`}>
                            <div className="flex justify-between items-center">
                                <h5 className="font-semibold text-white text-lg">{mutation.name} ({mutation.cost} MP)</h5>
                                <button onClick={() => toggleUtilityMutation(mutation.name, mutation.cost)} disabled={isDisabled} className={`px-3 py-1 text-sm rounded ${isSelected ? 'bg-red-600 hover:bg-red-500' : 'bg-cyan-600 hover:bg-cyan-500'} disabled:bg-slate-500 disabled:cursor-not-allowed`}>
                                    {isSelected ? 'Deselect' : 'Deselect'}
                                </button>
                            </div>
                            <p className="text-sm text-slate-300 mt-2">{mutation.description}</p>
                            <p className="text-sm text-slate-200 mt-1"><strong>Effect:</strong> {mutation.effect}</p>
                            {mutation.flaw && <p className="text-sm text-amber-400/80 mt-1"><strong>Flaw:</strong> {mutation.flaw}</p>}
                         </div>
                    );
                })}

            </div>
        </div>
    );
};

export default ChimeraPowerSelector;