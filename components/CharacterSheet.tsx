
import React from 'react';
// FIX: Import Skill type to resolve property access errors on 'unknown' type.
import { Character, AttributeName, Skill } from '../types';
import { HEALTH_BOX_TABLE, SORCERY_DATA, CHIMERA_DATA, NEO_SAPIEN_DATA } from '../constants';

interface CharacterSheetProps {
    character: Character;
}

const allMoves = [...SORCERY_DATA.primary.flatMap(s => s.moves), ...SORCERY_DATA.secondary.flatMap(s => s.moves)];
const allMutations = [...CHIMERA_DATA.mutations, ...CHIMERA_DATA.utilityMutations];
const allAugments = [
    ...NEO_SAPIEN_DATA.Physical,
    ...NEO_SAPIEN_DATA.Mental,
    ...NEO_SAPIEN_DATA.Social,
    ...NEO_SAPIEN_DATA.Miscellaneous
];

const CharacterSheet: React.FC<CharacterSheetProps> = ({ character }) => {
    
    // FIX: Cast result of Object.values to number[] to satisfy Math.max.
    const highestAttributeValue = Math.max(...Object.values(character.attributes) as number[]);
    const integritySpecializations = ["Stamina", "Willpower", "Composure"];
    const integrityBonuses = character.attributeSpecializations.filter(spec => integritySpecializations.includes(spec.name)).length * 2;
    const corruptionThreshold = 10 + (highestAttributeValue * 2) + integrityBonuses;

    const physiqueScore = character.attributes.Physique;
    const healthBoxes = HEALTH_BOX_TABLE[physiqueScore] || HEALTH_BOX_TABLE[0];
    const staminaBonus = character.attributeSpecializations.some(s => s.name === "Stamina") ? 1 : 0;
    
    const HealthBoxDisplay: React.FC<{count: number}> = ({count}) => (
        <div className="flex gap-1 flex-wrap">
            {Array.from({length: count}).map((_, i) => <div key={i} className="w-4 h-4 border border-slate-400 bg-slate-600"></div>)}
        </div>
    );

    return (
        <div className="bg-slate-900/50 p-6 rounded-lg text-white animate-fadeIn">
            <h2 className="text-3xl font-bold text-amber-400 text-center mb-6">Character Sheet</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Column 1: Core Info & Attributes */}
                <div className="space-y-4 bg-slate-800 p-4 rounded">
                    <h3 className="text-xl font-bold text-cyan-400">Identity</h3>
                    <p><strong>Name:</strong> {character.name}</p>
                    <p><strong>Lineage:</strong> {character.lineage?.name || 'N/A'}</p>
                    <p><strong>Background:</strong> {character.background?.name || 'N/A'} ({character.background?.tier})</p>
                    
                    {character.appearance && (
                        <div className="pt-2">
                            <h4 className="font-semibold">Appearance:</h4>
                            <p className="text-sm whitespace-pre-wrap">{character.appearance}</p>
                        </div>
                    )}
                    {character.personality && (
                        <div className="pt-2">
                            <h4 className="font-semibold">Personality:</h4>
                            <p className="text-sm whitespace-pre-wrap">{character.personality}</p>
                        </div>
                    )}
                     {character.history && (
                        <div className="pt-2">
                            <h4 className="font-semibold">History:</h4>
                            <p className="text-sm whitespace-pre-wrap">{character.history}</p>
                        </div>
                    )}

                    <h3 className="text-xl font-bold text-cyan-400 mt-4">Attributes</h3>
                    {Object.entries(character.attributes).map(([name, value]) => (
                        <p key={name}><strong>{name}:</strong> {value}</p>
                    ))}
                    <h4 className="font-semibold mt-2">Specializations:</h4>
                    <ul className="list-disc list-inside text-sm">
                        {character.attributeSpecializations.map(s => <li key={s.name}>{s.name} ({s.attribute})</li>)}
                    </ul>
                </div>

                {/* Column 2: Health & Skills */}
                <div className="space-y-4 bg-slate-800 p-4 rounded">
                     <h3 className="text-xl font-bold text-cyan-400">Derived Stats</h3>
                     <p><strong>Corruption Threshold:</strong> {corruptionThreshold}</p>
                     <p><strong>Permanent Corruption:</strong> {character.corruption.permanent}</p>
                     
                     <h3 className="text-xl font-bold text-cyan-400 mt-4">Health</h3>
                     <div className="space-y-2 text-sm">
                        <p><strong>Head:</strong> <HealthBoxDisplay count={healthBoxes.head + staminaBonus} /></p>
                        <p><strong>Torso:</strong> <HealthBoxDisplay count={healthBoxes.torso + staminaBonus} /></p>
                        <p><strong>Arms (each):</strong> <HealthBoxDisplay count={healthBoxes.arms + staminaBonus} /></p>
                        <p><strong>Legs (each):</strong> <HealthBoxDisplay count={healthBoxes.legs + staminaBonus} /></p>
                     </div>

                    <h3 className="text-xl font-bold text-cyan-400 mt-4">Skills</h3>
                    <ul className="list-disc list-inside text-sm">
                        {/* FIX: Add type annotation to 's' to resolve errors on accessing 'rank' and 'name'. */}
                        {Object.values(character.skills).filter((s: Skill) => s.rank > 0).map((s: Skill) => (
                            <li key={s.name}>{s.name}: {s.rank}</li>
                        ))}
                    </ul>
                     <h4 className="font-semibold mt-2">Specializations:</h4>
                    <ul className="list-disc list-inside text-sm">
                        {character.skillSpecializations.map(s => <li key={s}>{s}</li>)}
                         <li>{character.background?.specialization} (from background)</li>
                    </ul>
                </div>

                {/* Column 3: Resources & Special Abilities */}
                <div className="space-y-4 bg-slate-800 p-4 rounded">
                    <h3 className="text-xl font-bold text-cyan-400">Resources</h3>
                    <div>
                        <h4 className="font-semibold">Contacts:</h4>
                        <ul className="list-disc list-inside text-sm">
                            {character.resources.contacts.map((c, i) => <li key={i}>{c.name} (R:{c.reach}/L:{c.loyalty})</li>)}
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold">Properties:</h4>
                        <ul className="list-disc list-inside text-sm">
                            {character.resources.properties.map((p, i) => <li key={i}>{p}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold">Licenses & Status:</h4>
                        <ul className="list-disc list-inside text-sm">
                            {character.resources.licenses.map((l, i) => <li key={i}>{l}</li>)}
                        </ul>
                    </div>
                     <div>
                        <h4 className="font-semibold">Gear:</h4>
                        <ul className="list-disc list-inside text-sm">
                            {character.resources.items.map((item, i) => <li key={i}>{item}</li>)}
                        </ul>
                    </div>

                    {character.lineage?.name === 'Sorcerer' && character.sorcery.moves.length > 0 && (
                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-cyan-400 border-t border-slate-600 pt-4 mt-4">Sorcery</h3>
                            <h4 className="font-semibold">Spheres:</h4>
                             <ul className="list-disc list-inside text-sm">
                                {character.sorcery.spheres.map((s, i) => <li key={i}>{s.name} ({s.type})</li>)}
                            </ul>

                             <h4 className="font-semibold mt-2">Moves:</h4>
                             <div className="space-y-3 text-sm mt-2">
                                {character.sorcery.moves.map((move, i) => {
                                    const moveData = allMoves.find(m => m.name === move.name);
                                    return (
                                        <div key={i} className="bg-slate-900/50 p-2 rounded">
                                            <p><strong>{move.name}</strong> ({move.sphere})</p>
                                            <p className="text-xs whitespace-pre-wrap text-slate-300 mt-1">{moveData?.description}</p>
                                        </div>
                                    )
                                })}
                             </div>
                        </div>
                    )}
                    
                    {character.lineage?.name === 'Chimera' && (
                        <div className="mt-4">
                             <h3 className="text-xl font-bold text-cyan-400 border-t border-slate-600 pt-4 mt-4">Chimera Augments</h3>
                             <h4 className="font-semibold">Core Augments (Birthright):</h4>
                             <ul className="list-disc list-inside text-sm mb-3">
                                {CHIMERA_DATA.coreAugments.map((aug) => <li key={aug.name}>{aug.name}</li>)}
                            </ul>
                            
                             <h4 className="font-semibold mt-2">Primal Manifestations:</h4>
                             <div className="space-y-3 text-sm mt-2">
                                {character.chimera.mutations.map((mutation, i) => {
                                    const tieredData = CHIMERA_DATA.mutations.find(m => m.name === mutation.name);
                                    if (tieredData) {
                                        const tierData = tieredData.tiers[mutation.tier - 1];
                                        return (
                                            <div key={i} className="bg-slate-900/50 p-2 rounded">
                                                <p><strong>{mutation.name} (Tier {mutation.tier}: {tierData.name})</strong></p>
                                                <p className="text-xs whitespace-pre-wrap text-slate-300 mt-1">{tierData.description}</p>
                                                <p className="text-xs whitespace-pre-wrap text-slate-300 mt-1"><strong>Effect:</strong> {tierData.effect}</p>
                                                {tierData.flaw && <p className="text-xs whitespace-pre-wrap text-amber-400/80 mt-1"><strong>Flaw:</strong> {tierData.flaw}</p>}
                                            </div>
                                        );
                                    }
                                    const utilityData = CHIMERA_DATA.utilityMutations.find(m => m.name === mutation.name);
                                    if (utilityData) {
                                        return (
                                            <div key={i} className="bg-slate-900/50 p-2 rounded">
                                                 <p><strong>{utilityData.name}</strong></p>
                                                 <p className="text-xs whitespace-pre-wrap text-slate-300 mt-1">{utilityData.description}</p>
                                                 <p className="text-xs whitespace-pre-wrap text-slate-300 mt-1"><strong>Effect:</strong> {utilityData.effect}</p>
                                                 {utilityData.flaw && <p className="text-xs whitespace-pre-wrap text-amber-400/80 mt-1"><strong>Flaw:</strong> {utilityData.flaw}</p>}
                                            </div>
                                        );
                                    }
                                    return null;
                                })}
                             </div>
                        </div>
                    )}

                    {character.lineage?.name === 'Neosapien' && character.neoSapien.augments.length > 0 && (
                        <div className="mt-4">
                            <h3 className="text-xl font-bold text-cyan-400 border-t border-slate-600 pt-4 mt-4">Neo-Sapien Bioware</h3>
                            <div className="space-y-3 text-sm mt-2">
                                {character.neoSapien.augments.map((augment, i) => {
                                    const augmentData = allAugments.find(a => a.name === augment.name);
                                    if (!augmentData) return null;
                                    const tierData = augmentData.tiers.find(t => t.tier === augment.tier);
                                    if (!tierData) return null;

                                    return (
                                        <div key={i} className="bg-slate-900/50 p-2 rounded">
                                            <p><strong>{augment.name} ({tierData.grade} Grade)</strong></p>
                                            <p className="text-xs font-semibold text-amber-300">{tierData.name}</p>
                                            <p className="text-xs whitespace-pre-wrap text-slate-300 mt-1">{tierData.description}</p>
                                            <p className="text-xs whitespace-pre-wrap text-slate-300 mt-1"><strong>Effect:</strong> {tierData.effect}</p>
                                            {tierData.flaw && <p className="text-xs whitespace-pre-wrap text-amber-400/80 mt-1"><strong>Flaw:</strong> {tierData.flaw}</p>}
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CharacterSheet;