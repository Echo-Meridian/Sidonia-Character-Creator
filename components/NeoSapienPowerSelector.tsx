
import React, { useMemo } from 'react';
import { Character, NeoSapienAugment, Priority } from '../types';
import { NEO_SAPIEN_DATA, NEO_SAPIEN_PRIORITY_DATA } from '../constants';

interface NeoSapienPowerSelectorProps {
    character: Character;
    onChange: (updates: Partial<Character>) => void;
}

const calculatePermanentCorruption = (augments: NeoSapienAugment[]): number => {
    let corruption = 0;
    augments.forEach(augment => {
        const categoryKey = augment.category as keyof typeof NEO_SAPIEN_DATA;
        const augmentData = NEO_SAPIEN_DATA[categoryKey].find(a => a.name === augment.name);
        if (augmentData) {
            const tierInfo = augmentData.tiers.find(t => t.tier === augment.tier);
            if (tierInfo) {
                corruption += tierInfo.cost;
            }
        }
    });
    return corruption;
};


const NeoSapienPowerSelector: React.FC<NeoSapienPowerSelectorProps> = ({ character, onChange }) => {
    const priority = character.priorities.Lineage;
    if (!priority) return null;

    const { augments } = character.neoSapien;
    const limits = NEO_SAPIEN_PRIORITY_DATA[priority];

    const militaryCount = augments.filter(a => a.grade === 'Military').length;
    const corporateCount = augments.filter(a => a.grade === 'Corporate').length;
    const streetCount = augments.filter(a => a.grade === 'Street').length;

    const highestAttributeValue = Math.max(...Object.values(character.attributes) as number[]);
    const integritySpecializations = ["Stamina", "Willpower", "Composure"];
    const integrityBonuses = character.attributeSpecializations.filter(spec => integritySpecializations.includes(spec.name)).length * 2;
    const corruptionThreshold = 10 + (highestAttributeValue * 2) + integrityBonuses;

    const handleAugmentToggle = (
        category: 'Physical' | 'Mental' | 'Social' | 'Miscellaneous',
        augmentName: string,
        tier: number,
        grade: 'Street' | 'Corporate' | 'Military'
    ) => {
        const isSelected = augments.some(a => a.name === augmentName);
        let newAugments = [...augments];

        if (isSelected) {
            newAugments = newAugments.filter(a => a.name !== augmentName);
        } else {
            let canAdd = false;
            if (grade === 'Military' && militaryCount < limits.military) canAdd = true;
            else if (grade === 'Corporate' && corporateCount < limits.corporate) canAdd = true;
            else if (grade === 'Street' && streetCount < limits.street) canAdd = true;

            if (canAdd) {
                newAugments.push({ name: augmentName, tier, grade, category });
            }
        }

        const newCorruption = calculatePermanentCorruption(newAugments);
        onChange({
            neoSapien: { ...character.neoSapien, augments: newAugments },
            corruption: { ...character.corruption, permanent: newCorruption }
        });
    };

    const renderAugmentCategory = (categoryName: 'Physical' | 'Mental' | 'Social' | 'Miscellaneous', augmentsList: any[]) => {
        return (
            <div key={categoryName} className="bg-slate-800/50 p-4 rounded-lg border border-slate-600">
                <h4 className="text-xl font-bold text-amber-400 mb-3">{categoryName} Mods</h4>
                <div className="space-y-3">
                    {augmentsList.map(augment => {
                         const isSelected = augments.some(a => a.name === augment.name);
                         const selectedTier = isSelected ? augments.find(a => a.name === augment.name)?.tier : null;

                        return (
                            <div key={augment.name} className={`p-2 rounded-lg ${isSelected ? 'bg-cyan-900/30' : 'bg-slate-700/50'}`}>
                                <h5 className="font-semibold text-white">{augment.name}</h5>
                                <div className="space-y-2 mt-2">
                                    {augment.tiers.map((tierData: any) => {
                                        const isThisTierSelected = selectedTier === tierData.tier;
                                        let isDisabled = false;
                                        if (isSelected && !isThisTierSelected) {
                                            isDisabled = true; // Can't select another tier of an already selected augment
                                        } else if (!isSelected) {
                                            if (tierData.grade === 'Military' && militaryCount >= limits.military) isDisabled = true;
                                            if (tierData.grade === 'Corporate' && corporateCount >= limits.corporate) isDisabled = true;
                                            if (tierData.grade === 'Street' && streetCount >= limits.street) isDisabled = true;
                                        }

                                        return (
                                            <div key={tierData.tier} className="flex items-start">
                                                 <button
                                                    onClick={() => handleAugmentToggle(categoryName, augment.name, tierData.tier, tierData.grade)}
                                                    disabled={isDisabled}
                                                    className={`mr-2 mt-1 w-5 h-5 rounded-sm flex-shrink-0
                                                        ${isThisTierSelected ? 'bg-amber-500' : 'bg-slate-600'}
                                                        ${isDisabled ? 'cursor-not-allowed opacity-50' : 'hover:bg-amber-400'}
                                                    `}
                                                />
                                                <div>
                                                    <h6 className="font-bold text-amber-300/90">{tierData.grade} Grade (Tier {tierData.tier}): <span className="text-white font-normal">{tierData.name}</span></h6>
                                                    <p className="text-xs text-slate-300 mt-1"><strong>Effect:</strong> {tierData.effect}</p>
                                                    {tierData.flaw && <p className="text-xs text-amber-400/80 mt-1"><strong>Flaw:</strong> {tierData.flaw}</p>}
                                                    <p className="text-xs text-slate-400">Corruption: {tierData.cost}</p>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    };

    return (
        <div className="border-t-2 border-slate-700 mt-6 pt-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Neo-Sapien Bioware Selection</h3>
            <div className="bg-slate-700/50 p-4 rounded-lg text-center mb-4 sticky top-0 z-10">
                <div className="flex justify-center gap-4 text-lg">
                    <span>Military Grade: <span className="font-bold text-2xl text-amber-400">{militaryCount} / {limits.military}</span></span>
                    <span>Corporate Grade: <span className="font-bold text-2xl text-amber-400">{corporateCount} / {limits.corporate}</span></span>
                    <span>Street Grade: <span className="font-bold text-2xl text-amber-400">{streetCount} / {limits.street}</span></span>
                </div>
                 <p className="text-sm text-slate-300 mt-2">Total Permanent Corruption: {character.corruption.permanent} / {corruptionThreshold}</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {renderAugmentCategory('Physical', NEO_SAPIEN_DATA.Physical)}
                {renderAugmentCategory('Mental', NEO_SAPIEN_DATA.Mental)}
                {renderAugmentCategory('Social', NEO_SAPIEN_DATA.Social)}
                {renderAugmentCategory('Miscellaneous', NEO_SAPIEN_DATA.Miscellaneous)}
            </div>
        </div>
    );
};

export default NeoSapienPowerSelector;