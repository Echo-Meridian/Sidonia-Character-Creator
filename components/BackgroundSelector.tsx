
import React, { useState } from 'react';
import { Priority } from '../types';
import { BACKGROUNDS } from '../constants';

interface BackgroundSelectorProps {
    priority: Priority | null;
    currentBackground: { name: string, tier: string, specialization: string } | null;
    onSelect: (background: { name: string, tier: string, specialization: string } | null) => void;
}

const BackgroundSelector: React.FC<BackgroundSelectorProps> = ({ priority, currentBackground, onSelect }) => {
    const [selectedSpec, setSelectedSpec] = useState<string | null>(currentBackground?.specialization || null);

    const handleSelectBackground = (bgName: string, tier: string) => {
        // If a new background is chosen, reset spec selection
        if (currentBackground?.name !== bgName) {
            setSelectedSpec(null);
            onSelect(null);
        }
        // Tentatively select the background, wait for spec choice
        onSelect({ name: bgName, tier, specialization: "" });
    };

    const handleSelectSpec = (spec: string) => {
        if (currentBackground) {
            setSelectedSpec(spec);
            onSelect({ ...currentBackground, specialization: spec });
        }
    };

    const getTierForPriority = (bgTiers: Record<string, string>): string => {
        if (!priority) return "N/A";
        const priorityOrder = ['A', 'B', 'C', 'D', 'E'];
        const currentPriorityIndex = priorityOrder.indexOf(priority);

        for (let i = currentPriorityIndex; i < priorityOrder.length; i++) {
            const p = priorityOrder[i] as Priority;
            if (bgTiers[p]) {
                return bgTiers[p];
            }
        }
        return "Not available at this priority";
    };


    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {BACKGROUNDS.map((bg) => {
                const isSelected = currentBackground?.name === bg.name;
                const tier = getTierForPriority(bg.tiers);

                return (
                    <div key={bg.name}
                        className={`p-4 rounded-lg border-2 transition-all duration-200 ${isSelected ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600'}`}>
                        <div onClick={() => handleSelectBackground(bg.name, tier)} className="cursor-pointer">
                            <h3 className="text-xl font-bold text-amber-400">{bg.name}</h3>
                            <p className="text-sm font-semibold text-cyan-300">Tier: {tier}</p>
                        </div>
                        {isSelected && (
                            <div className="mt-4 pt-4 border-t border-slate-600">
                                <h4 className="font-semibold text-white mb-2">Choose Free Specialization:</h4>
                                <div className="flex flex-col items-start space-y-2">
                                    {bg.specializations.map(spec => (
                                        <button
                                            key={spec}
                                            onClick={() => handleSelectSpec(spec)}
                                            className={`w-full text-left px-3 py-1 text-sm rounded transition-colors ${selectedSpec === spec ? 'bg-amber-600 text-white' : 'bg-slate-600 hover:bg-slate-500'}`}
                                        >
                                            {spec}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

export default BackgroundSelector;
