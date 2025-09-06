import React from 'react';
import { Character, Priority } from '../types';
import { AUTOMATA_DATA } from '../constants';

interface AutomataPowerSelectorProps {
    character: Character;
    onChange: (updates: Partial<Character>) => void;
}

const AutomataPowerSelector: React.FC<AutomataPowerSelectorProps> = ({ character, onChange }) => {
    const priority = character.priorities.Lineage;

    if (!priority) return null;

    const { chassis, branch, model, soldierPackage } = character.automata;

    let availableChassis: ('Overseer' | 'Soldier' | 'Worker')[] = [];
    if ([Priority.A, Priority.B, Priority.C].includes(priority)) {
        availableChassis = ['Overseer', 'Soldier'];
    } else if ([Priority.D, Priority.E].includes(priority)) {
        availableChassis = ['Worker'];
    }

    const handleChassisSelect = (selectedChassis: 'Overseer' | 'Soldier' | 'Worker') => {
        onChange({ automata: { ...character.automata, chassis: selectedChassis, branch: null, soldierPackage: undefined }});
    };

    const handleBranchSelect = (selectedBranch: string) => {
        onChange({ automata: { ...character.automata, branch: selectedBranch, soldierPackage: undefined }});
    };

    const handlePackageSelect = (selectedPackage: 'Juggernaut' | 'Dragoon' | 'Legion') => {
        onChange({ automata: { ...character.automata, soldierPackage: selectedPackage }});
    }

    const renderAbilities = () => {
        if (!chassis || !branch || !model) return null;

        const chassisData = AUTOMATA_DATA[chassis];
        // FIX: Cast branches to Record<string, any> to allow indexing with a string `branch` variable.
        // This resolves the issue where `branchData` was inferred as `never` due to complex union types.
        const branchData = (chassisData.branches as Record<string, any>)[branch];
        if (!branchData) return null;

        let abilities: {name: string, type: string, description: string}[] = [...branchData.general];

        if (model === 'Basic' || model === 'Advanced' || model === 'Imperial') {
             abilities = [...abilities, ...branchData.models.Basic.abilities];
        }
        if ((model === 'Advanced' || model === 'Imperial') && branchData.models.Advanced) {
             abilities = [...abilities, ...branchData.models.Advanced.abilities];
        }
        if (model === 'Imperial' && branchData.models.Imperial) {
             abilities = [...abilities, ...branchData.models.Imperial.abilities];
        }

        return (
            <div className="mt-4 bg-slate-800/50 p-4 rounded-lg border border-slate-600">
                <h4 className="text-xl font-bold text-amber-400 mb-2">Granted Abilities</h4>
                 <div className="space-y-3">
                    {abilities.map((ability, i) => {
                        // Special handling for soldier packages
                        if(ability.type === 'Package' && chassis === 'Soldier' && model === 'Advanced') {
                             return (
                                <div key={i} className="p-2 rounded-lg border bg-slate-700/50 border-slate-600">
                                    <h5 className="font-semibold text-white">Advanced Model Package: The Elite</h5>
                                    <p className="text-sm text-slate-300">Choose one of the following three combat packages. This choice is permanent.</p>
                                    <div className="flex flex-col md:flex-row gap-2 mt-2">
                                        {(branchData.models.Advanced?.abilities || []).map((pkg: any) => (
                                             <button 
                                                key={pkg.name}
                                                onClick={() => handlePackageSelect(pkg.name as any)}
                                                className={`flex-1 p-2 rounded text-left transition-colors ${soldierPackage === pkg.name ? 'bg-cyan-600 text-white' : 'bg-slate-600 hover:bg-slate-500'}`}
                                             >
                                                <p className="font-bold">{pkg.name}</p>
                                                <p className="text-xs whitespace-pre-wrap">{pkg.description}</p>
                                             </button>
                                        ))}
                                    </div>
                                </div>
                             )
                        }
                        return (
                            <div key={i} className="p-2 rounded bg-slate-700/50">
                                <p className="font-semibold">{ability.name} <span className="text-xs text-slate-400">({ability.type})</span></p>
                                <p className="text-xs whitespace-pre-wrap text-slate-300">{ability.description}</p>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    };


    return (
        <div className="border-t-2 border-slate-700 mt-6 pt-6">
            <h3 className="text-2xl font-bold text-cyan-400 mb-2">Automata Configuration</h3>
            <p className="text-slate-300 mb-4">Your Priority grants you a <span className="font-bold text-amber-400">{model}</span> model. First, choose your chassis, then select a branch to specialize in.</p>
            
            {/* Chassis Selection */}
            <div className="mb-4">
                <h4 className="text-lg font-semibold text-white mb-2">1. Select Chassis</h4>
                <div className="flex flex-wrap gap-4">
                    {availableChassis.map(chassisName => (
                        <button key={chassisName} onClick={() => handleChassisSelect(chassisName)}
                            className={`p-4 rounded-lg border-2 flex-1 text-left transition-colors ${chassis === chassisName ? 'bg-cyan-800/50 border-cyan-500' : 'bg-slate-700/50 border-slate-600 hover:border-cyan-400'}`}
                        >
                            <h5 className="font-bold text-xl">{chassisName}</h5>
                            <p className="text-sm text-slate-300">{AUTOMATA_DATA[chassisName].description}</p>
                        </button>
                    ))}
                </div>
            </div>

            {/* Branch Selection */}
            {chassis && (
                <div className="mb-4">
                     <h4 className="text-lg font-semibold text-white mb-2">2. Select Branch</h4>
                     <div className="flex flex-wrap gap-2">
                        {Object.entries(AUTOMATA_DATA[chassis].branches).map(([branchName, branchData]) => (
                            <button key={branchName} onClick={() => handleBranchSelect(branchName)}
                                className={`px-4 py-2 rounded-md font-semibold transition-colors ${branch === branchName ? 'bg-amber-600 text-white' : 'bg-slate-600 hover:bg-slate-500'}`}
                            >
                                {branchName} <span className="text-xs font-normal opacity-80">({(branchData as any).focus})</span>
                            </button>
                        ))}
                     </div>
                </div>
            )}

            {/* Abilities Display */}
            {renderAbilities()}

        </div>
    );
};

export default AutomataPowerSelector;
