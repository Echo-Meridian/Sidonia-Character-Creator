import React, { useState, useEffect, useMemo } from 'react';
// FIX: Import Skill type to resolve property access errors on 'unknown' type.
import { Skills, SkillName, Skill } from '../types';
import { SKILLS_LIST } from '../constants';

interface SkillAllocatorProps {
  skills: Skills;
  totalPoints: number;
  maxRank: number;
  specializationCount: number;
  onChange: (skills: Skills, specializations: string[]) => void;
}

const SkillAllocator: React.FC<SkillAllocatorProps> = ({ skills, totalPoints, maxRank, specializationCount, onChange }) => {
  const [currentSkills, setCurrentSkills] = useState(skills);
  const [currentSpecs, setCurrentSpecs] = useState<string[]>([]);
  // FIX: Changed state type to `Partial<Record<SkillName, string>>` because `Record<SkillName, string>` requires all keys to be present, which is not true for the initial empty object `{}`. `Partial` makes the keys optional, matching the component's logic.
  const [customSpecInputs, setCustomSpecInputs] = useState<Partial<Record<SkillName, string>>>({});
  
  // FIX: Add type annotation to 's' to resolve error on accessing 'rank'.
  const pointsSpent = useMemo(() => Object.values(currentSkills).reduce((sum, s: Skill) => sum + s.rank, 0), [currentSkills]);
  const pointsRemaining = totalPoints - pointsSpent;

  useEffect(() => {
    onChange(currentSkills, currentSpecs);
  }, [currentSkills, currentSpecs, onChange]);

  const handleSkillChange = (skillName: SkillName, delta: number) => {
    const currentRank = currentSkills[skillName].rank;
    const newRank = currentRank + delta;

    if (newRank >= 0 && newRank <= maxRank) {
      if (delta > 0 && pointsRemaining <= 0) return;
      setCurrentSkills(prev => ({
        ...prev,
        [skillName]: { ...prev[skillName], rank: newRank }
      }));
    }
  };

  const handleSpecToggle = (specName: string) => {
    if (currentSpecs.includes(specName)) {
        setCurrentSpecs(currentSpecs.filter(s => s !== specName));
    } else if (currentSpecs.length < specializationCount) {
        setCurrentSpecs([...currentSpecs, specName]);
    }
  };

  const handleCustomSpecInputChange = (skillName: SkillName, value: string) => {
      setCustomSpecInputs(prev => ({ ...prev, [skillName]: value }));
  };

  const handleAddCustomSpec = (skillName: SkillName) => {
      const customSpecText = customSpecInputs[skillName]?.trim();
      if (customSpecText && currentSpecs.length < specializationCount) {
          const newSpec = `${skillName}: ${customSpecText} (GM Approval)`;
          if (!currentSpecs.includes(newSpec)) {
              setCurrentSpecs(prev => [...prev, newSpec]);
              setCustomSpecInputs(prev => ({ ...prev, [skillName]: "" })); // Clear input
          }
      }
  };

  const skillGroups = useMemo(() => {
    return Object.entries(SKILLS_LIST).reduce((acc, [skillName, details]) => {
      if (!acc[details.group]) {
        acc[details.group] = [];
      }
      acc[details.group].push({ name: skillName as SkillName, specializations: details.specializations });
      return acc;
    }, {} as Record<string, {name: SkillName, specializations: string[]}[]>);
  }, []);

  return (
    <div className="space-y-6">
       <div className="text-center bg-slate-700/50 p-3 rounded-lg sticky top-0 z-10">
        <p className="text-lg">Skill Points Remaining: <span className="font-bold text-2xl text-amber-400">{pointsRemaining}</span></p>
        <p className="text-lg">Specializations to Choose: <span className="font-bold text-2xl text-cyan-400">{specializationCount - currentSpecs.length}</span></p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(skillGroups).map(([groupName, skillsInGroup]) => (
          <div key={groupName} className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 space-y-3">
            <h3 className="text-xl font-bold text-amber-400 border-b border-slate-600 pb-2 mb-3">{groupName}</h3>
            {skillsInGroup.map(({name, specializations}) => {
                const customSpecsForThisSkill = currentSpecs.filter(spec =>
                    spec.startsWith(`${name}: `) &&
                    !specializations.some(predefined => `${name}: ${predefined}` === spec)
                );
              return (
              <div key={name}>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{name}</span>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => handleSkillChange(name, -1)} className="w-7 h-7 rounded-full bg-slate-600 hover:bg-slate-500 text-lg">-</button>
                    <span className="text-2xl font-bold w-8 text-center">{currentSkills[name].rank}</span>
                    <button onClick={() => handleSkillChange(name, 1)} className="w-7 h-7 rounded-full bg-slate-600 hover:bg-slate-500 text-lg">+</button>
                  </div>
                </div>
                 <div className="flex flex-wrap gap-1 mt-1">
                    {specializations.map(specName => {
                        const isSelected = currentSpecs.includes(`${name}: ${specName}`);
                         return (
                            <button
                                key={specName}
                                onClick={() => handleSpecToggle(`${name}: ${specName}`)}
                                className={`px-2 py-0.5 text-xs rounded-full transition-colors ${
                                    isSelected
                                    ? 'bg-cyan-500 text-white'
                                    : 'bg-slate-600 hover:bg-slate-500'
                                }`}
                            >
                                {specName}
                            </button>
                        )
                    })}
                    {customSpecsForThisSkill.map(spec => (
                        <button
                            key={spec}
                            onClick={() => handleSpecToggle(spec)}
                            className="px-2 py-0.5 text-xs rounded-full transition-colors bg-cyan-500 text-white"
                        >
                            {spec.replace(`${name}: `, '')}
                        </button>
                    ))}
                 </div>
                 <div className="flex gap-2 mt-2 items-center">
                    <input
                        type="text"
                        placeholder="Custom Specialization..."
                        value={customSpecInputs[name] || ''}
                        onChange={(e) => handleCustomSpecInputChange(name, e.target.value)}
                        className="bg-slate-800 text-xs p-1 rounded-full w-full focus:ring-1 focus:ring-cyan-500 outline-none px-3"
                    />
                    <button
                        onClick={() => handleAddCustomSpec(name)}
                        disabled={!customSpecInputs[name] || currentSpecs.length >= specializationCount}
                        className="text-xs bg-cyan-700 hover:bg-cyan-600 disabled:bg-slate-600 disabled:cursor-not-allowed rounded-full px-3 py-1 font-semibold"
                    >
                        Add
                    </button>
                </div>
              </div>
            )})}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillAllocator;