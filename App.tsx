
import React, { useState, useCallback, useMemo } from 'react';
// FIX: Import Skill type to resolve property access errors on 'unknown' type.
import { Character, Category, Priority, Priorities, SkillName, Skills, AttributeName, Attributes, AttributeSpecialization, Skill, SorcerySphere, ChimeraMutation, NeoSapienAugment } from './types';
import { CATEGORIES, PRIORITIES, SKILLS_LIST, STEP_DESCRIPTIONS, ATTRIBUTE_DATA, SKILL_DATA, RESOURCE_DATA, ATTRIBUTES as ATTRIBUTE_DETAILS, SORCERER_PRIORITY_DATA, CHIMERA_PRIORITY_DATA, CHIMERA_DATA, NEO_SAPIEN_PRIORITY_DATA } from './constants';
import StepIndicator from './components/StepIndicator';
import PrioritySelector from './components/PrioritySelector';
import LineageSelector from './components/LineageSelector';
import AttributeAllocator from './components/AttributeAllocator';
import SkillAllocator from './components/SkillAllocator';
import BackgroundSelector from './components/BackgroundSelector';
import ResourceAllocator from './components/ResourceAllocator';
import CharacterSheet from './components/CharacterSheet';
import CharacterDetails from './components/CharacterDetails';

const initialSkills: Skills = Object.keys(SKILLS_LIST).reduce((acc, skill) => {
    acc[skill as SkillName] = { name: skill as SkillName, rank: 0 };
    return acc;
}, {} as Skills);

const initialCharacter: Character = {
    name: "",
    appearance: "",
    personality: "",
    history: "",
    priorities: {
        [Category.Lineage]: null,
        [Category.Attributes]: null,
        [Category.Skills]: null,
        [Category.Background]: null,
        [Category.Resources]: null,
    },
    lineage: null,
    attributes: { Physique: 0, Intellect: 0, Presence: 0 },
    attributePoints: 0,
    attributeSpecializations: [],
    skills: initialSkills,
    skillPoints: 0,
    skillSpecializations: [],
    maxSkillRank: 0,
    background: null,
    resources: {
        points: 0,
        contacts: [],
        properties: [],
        licenses: [],
        items: [],
    },
    corruption: {
      permanent: 0,
      temporary: 0,
    },
    chimera: {
        mutations: [],
        mutationPoints: 0,
    },
    sorcery: {
        spheres: [],
        moves: [],
        priorityCPath: 1,
    },
    neoSapien: {
        augments: [],
    },
    automata: {
        chassis: null,
        model: null,
        branch: null,
    },
    esper: {
        baseArchetype: null,
        mentalistArchetype: null,
        path: [],
        abilities: [],
        mentalistPolarity: null,
        mentalistScope: null,
    }
};

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


const App: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [character, setCharacter] = useState<Character>(initialCharacter);

    const handlePrioritiesChange = useCallback((newPriorities: Priorities) => {
        const attributePriority = newPriorities.Attributes;
        const skillPriority = newPriorities.Skills;
        const resourcePriority = newPriorities.Resources;
        const lineagePriority = newPriorities.Lineage;
        
        const newAttributePoints = attributePriority ? ATTRIBUTE_DATA[attributePriority].points : 0;
        const newSkillPoints = skillPriority ? SKILL_DATA[skillPriority].points : 0;
        const newMaxSkillRank = skillPriority ? SKILL_DATA[skillPriority].maxRank : 0;
        const newResourcePoints = resourcePriority ? RESOURCE_DATA[resourcePriority].points : 0;
        const newMutationPoints = lineagePriority ? CHIMERA_PRIORITY_DATA[lineagePriority] : 0;
        
        setCharacter(prev => ({
            ...prev,
            priorities: newPriorities,
            attributePoints: newAttributePoints,
            skillPoints: newSkillPoints,
            maxSkillRank: newMaxSkillRank,
            resources: {
                ...prev.resources,
                points: newResourcePoints
            },
            // Reset dependent fields if priorities change
            attributes: { Physique: 0, Intellect: 0, Presence: 0 },
            attributeSpecializations: [],
            skills: initialSkills,
            lineage: null,
            background: null,
            sorcery: initialCharacter.sorcery,
            chimera: { ...initialCharacter.chimera, mutationPoints: newMutationPoints},
            neoSapien: initialCharacter.neoSapien,
            automata: initialCharacter.automata,
            esper: initialCharacter.esper,
            corruption: initialCharacter.corruption,
        }));
    }, []);

    const updateCharacter = useCallback((updates: Partial<Character>) => {
        setCharacter(prev => ({ ...prev, ...updates }));
    }, []);
    
    const steps = useMemo(() => [
        "Details", "Priorities", "Attributes", "Lineage", "Skills", "Background", "Resources", "Sheet"
    ], []);

    const isNextDisabled = useMemo(() => {
        if (currentStep === 0) {
            return character.name.trim() === "";
        }
        if (currentStep === 1) {
            return Object.values(character.priorities).some(p => p === null);
        }
        if (currentStep === 2) { // Attributes
             const { Physique, Intellect, Presence } = character.attributes;
             const totalPointsSpent = Physique + Intellect + Presence;
             return totalPointsSpent > character.attributePoints;
        }
        if (currentStep === 3) { // Lineage
             if (!character.lineage) return true;
             if (character.lineage.name === 'Sorcerer') {
                const priority = character.priorities.Lineage;
                if (!priority) return true;

                const { spheres, moves, priorityCPath } = character.sorcery;
                const primaryCount = spheres.filter(s => s.type === 'Primary').length;
                const secondaryCount = spheres.filter(s => s.type === 'Secondary').length;

                if (priority === Priority.C) {
                    const limits = priorityCPath === 1 ? SORCERER_PRIORITY_DATA[priority].path1 : SORCERER_PRIORITY_DATA[priority].path2;
                    return primaryCount !== limits.primary || secondaryCount !== limits.secondary || moves.length !== limits.moves;
                } else {
                    const limits = SORCERER_PRIORITY_DATA[priority];
                    return primaryCount !== limits.primary || secondaryCount !== limits.secondary || moves.length !== limits.moves;
                }
             }
             if (character.lineage.name === 'Chimera') {
                 const spentPoints = calculateSpentMutationPoints(character.chimera.mutations);
                 const highestAttributeValue = Math.max(...Object.values(character.attributes));
                 const integritySpecializations = ["Stamina", "Willpower", "Composure"];
                 const integrityBonuses = character.attributeSpecializations.filter(spec => integritySpecializations.includes(spec.name)).length * 2;
                 const corruptionThreshold = 10 + (highestAttributeValue * 2) + integrityBonuses;

                 return spentPoints > character.chimera.mutationPoints || character.corruption.permanent > corruptionThreshold;
             }
            if (character.lineage.name === 'Neosapien') {
                const priority = character.priorities.Lineage;
                if (!priority) return true;
                const limits = NEO_SAPIEN_PRIORITY_DATA[priority];
                const militaryCount = character.neoSapien.augments.filter(a => a.grade === 'Military').length;
                const corporateCount = character.neoSapien.augments.filter(a => a.grade === 'Corporate').length;
                const streetCount = character.neoSapien.augments.filter(a => a.grade === 'Street').length;

                return militaryCount !== limits.military || corporateCount !== limits.corporate || streetCount !== limits.street;
            }
            if(character.lineage.name === 'Automata') {
                const { automata } = character;
                if (!automata.chassis || !automata.branch) return true;
                if(automata.model === 'Advanced' && automata.chassis === 'Soldier' && !automata.soldierPackage) return true;
            }
            if (character.lineage.name === 'Esper') {
                const priority = character.priorities.Lineage;
                const { esper } = character;
                switch (priority) {
                    case Priority.A: // Esper Mentalist
                        return !esper.baseArchetype || !esper.mentalistArchetype || !esper.mentalistPolarity || !esper.mentalistScope;
                    case Priority.B: // Esper Prodigy
                        return !esper.baseArchetype || esper.path.length !== 2;
                    case Priority.C: // Mentalist
                        return !esper.mentalistArchetype || !esper.mentalistPolarity || !esper.mentalistScope;
                    case Priority.D: // Gifted Esper
                        return !esper.baseArchetype || esper.path.length !== 1;
                    case Priority.E: // Esper
                        return !esper.baseArchetype;
                    default:
                        return true;
                }
            }
             return false;
        }
        if (currentStep === 4) { // Skills
            // FIX: Add type annotation to 's' to resolve error on accessing 'rank'.
            const totalSkillPointsSpent = Object.values(character.skills).reduce((sum, s: Skill) => sum + s.rank, 0);
            return totalSkillPointsSpent > character.skillPoints;
        }
        if (currentStep === 5) return !character.background; // Background
        return false;
    }, [currentStep, character]);
    
    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(s => s + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            // FIX: Decrement step instead of incrementing.
            setCurrentStep(s => s - 1);
        }
    };

    const handleStartOver = () => {
        setCharacter(initialCharacter);
        setCurrentStep(0);
    };

    const handleLineageSelect = (lineage: { name: string; details: string; } | null) => {
        const updates: Partial<Character> = { 
            lineage, 
            sorcery: initialCharacter.sorcery, 
            chimera: initialCharacter.chimera,
            neoSapien: initialCharacter.neoSapien,
            automata: initialCharacter.automata,
            esper: initialCharacter.esper,
            corruption: { ...initialCharacter.corruption, permanent: 0 }
        };
        
        if (lineage?.name === 'Chimera') {
            const lineagePriority = character.priorities.Lineage;
            updates.chimera = {
                mutations: [],
                mutationPoints: lineagePriority ? CHIMERA_PRIORITY_DATA[lineagePriority] : 0,
            };
            updates.corruption!.permanent = CHIMERA_DATA.coreAugments.reduce((sum, aug) => sum + aug.permanentCorruption, 0);
        } else if (lineage?.name === 'Neosapien') {
            updates.neoSapien = {
                augments: [],
            };
        } else if (lineage?.name === 'Automata') {
            const lineagePriority = character.priorities.Lineage;
            let model: 'Basic' | 'Advanced' | 'Imperial' | null = null;
            if (lineagePriority === Priority.A) model = 'Imperial';
            if (lineagePriority === Priority.B) model = 'Advanced';
            if (lineagePriority === Priority.C) model = 'Basic';
            if (lineagePriority === Priority.D) model = 'Advanced';
            if (lineagePriority === Priority.E) model = 'Basic';
            updates.automata = {
                ...initialCharacter.automata,
                model
            };
        }
        
        updateCharacter(updates);
    };
    
    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <CharacterDetails
                    character={character}
                    onChange={updateCharacter}
                />
            case 1:
                return <PrioritySelector priorities={character.priorities} onChange={handlePrioritiesChange} />;
            case 2:
                const attrPriority = character.priorities.Attributes;
                if (!attrPriority) return <p>Set Attribute priority first.</p>;
                const { points: attrPoints, specializations: specCount } = ATTRIBUTE_DATA[attrPriority];
                return <AttributeAllocator 
                    attributes={character.attributes}
                    specializations={character.attributeSpecializations}
                    totalPoints={attrPoints}
                    specializationCount={specCount}
                    onChange={(attrs, specs) => updateCharacter({ attributes: attrs, attributeSpecializations: specs })}
                />;
            case 3:
                return <LineageSelector 
                    priority={character.priorities.Lineage} 
                    onSelect={handleLineageSelect}
                    currentLineage={character.lineage}
                    character={character}
                    onCharacterChange={updateCharacter}
                 />;
            case 4:
                 const skillPriority = character.priorities.Skills;
                 if (!skillPriority) return <p>Set Skill priority first.</p>;
                 const { points: skillPoints, maxRank, specializations: skillSpecCount } = SKILL_DATA[skillPriority];
                 return <SkillAllocator 
                    skills={character.skills}
                    totalPoints={skillPoints}
                    maxRank={maxRank}
                    specializationCount={skillSpecCount}
                    onChange={(skills, specs) => updateCharacter({ skills, skillSpecializations: specs })}
                 />
            case 5:
                return <BackgroundSelector
                    priority={character.priorities.Background}
                    currentBackground={character.background}
                    onSelect={(background) => updateCharacter({ background })}
                 />;
            case 6:
                return <ResourceAllocator
                    resources={character.resources}
                    onChange={(resources) => updateCharacter({ resources })}
                />
            case 7:
                return <CharacterSheet character={character} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen p-4 sm:p-8 flex flex-col items-center">
            <div className="w-full max-w-5xl">
                <header className="text-center mb-6">
                    <h1 className="text-4xl sm:text-5xl font-bold text-amber-400" style={{ textShadow: '0 0 10px rgba(0,0,0,0.7)' }}>SIDONIA</h1>
                    <p className="text-slate-300 text-lg" style={{ textShadow: '0 0 5px rgba(0,0,0,0.7)' }}>Character Creator</p>
                </header>

                <main className="bg-slate-900/80 backdrop-blur-sm p-6 rounded-lg shadow-2xl shadow-black/60 border border-slate-700">
                    <StepIndicator currentStep={currentStep} steps={steps} />
                    <div className="my-6 text-center text-slate-300">
                        <p>{STEP_DESCRIPTIONS[currentStep]}</p>
                    </div>

                    <div className="step-content min-h-[400px]">
                        {renderStep()}
                    </div>

                    <div className="mt-8 flex justify-between items-center">
                        <button
                            onClick={handlePrev}
                            disabled={currentStep === 0}
                            className="px-6 py-2 bg-slate-600 text-white rounded-md hover:bg-slate-500 disabled:bg-slate-700 disabled:cursor-not-allowed transition-colors"
                        >
                            Previous
                        </button>
                        {currentStep < steps.length - 1 && (
                            <button
                                onClick={handleNext}
                                disabled={isNextDisabled}
                                className="px-6 py-2 bg-amber-600 text-white font-semibold rounded-md hover:bg-amber-500 disabled:bg-amber-800 disabled:cursor-not-allowed transition-colors"
                            >
                                Next
                            </button>
                        )}
                         {currentStep === steps.length - 1 && (
                             <button
                                onClick={handleStartOver}
                                className="px-6 py-2 bg-cyan-600 text-white font-semibold rounded-md hover:bg-cyan-500 transition-colors"
                            >
                                Start Over
                            </button>
                         )}
                    </div>
                </main>
            </div>
        </div>
    );
};

export default App;