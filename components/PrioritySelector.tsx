import React, { useState } from 'react';
import { Priorities, Priority, Category } from '../types';
import { CATEGORIES, PRIORITIES, ATTRIBUTE_DATA, SKILL_DATA, RESOURCE_DATA } from '../constants';

interface PrioritySelectorProps {
  priorities: Priorities;
  onChange: (priorities: Priorities) => void;
}

const PriorityDetails: React.FC<{ category: Category }> = ({ category }) => {
    let content;
    switch (category) {
        case Category.Attributes:
            content = (
                <ul className="text-sm space-y-1">
                    {PRIORITIES.map(p => <li key={p}><strong>{p}:</strong> {ATTRIBUTE_DATA[p].points} points, {ATTRIBUTE_DATA[p].specializations} specializations</li>)}
                </ul>
            );
            break;
        case Category.Skills:
            content = (
                 <ul className="text-sm space-y-1">
                    {PRIORITIES.map(p => <li key={p}><strong>{p}:</strong> {SKILL_DATA[p].points} points, {SKILL_DATA[p].maxRank} max rank, {SKILL_DATA[p].specializations} specializations</li>)}
                </ul>
            );
            break;
        case Category.Resources:
            content = (
                 <ul className="text-sm space-y-1">
                    {PRIORITIES.map(p => <li key={p}><strong>{p}:</strong> {RESOURCE_DATA[p].points} points - {RESOURCE_DATA[p].description}</li>)}
                </ul>
            );
            break;
        case Category.Lineage:
            content = <p className="text-sm">A higher priority grants access to more powerful or a wider range of lineage-specific abilities and features.</p>;
            break;
        case Category.Background:
             content = <p className="text-sm">A higher priority allows you to select more influential and powerful background tiers (e.g., 'The Banu' vs 'Street-Level').</p>;
            break;
        default:
            content = null;
    }

    return (
        <div className="mt-4 p-3 bg-slate-800/70 rounded-lg border border-slate-600">
            {content}
        </div>
    )
}

const PrioritySelector: React.FC<PrioritySelectorProps> = ({ priorities, onChange }) => {
  const [expandedCategory, setExpandedCategory] = useState<Category | null>(null);

  const handleSelect = (category: Category, priority: Priority) => {
    const newPriorities = { ...priorities };

    // If clicking the currently selected priority for this category, deselect it.
    if (newPriorities[category] === priority) {
      newPriorities[category] = null;
      onChange(newPriorities);
      return;
    }
    
    // Find if another category is using the clicked priority
    const existingCategoryForPriority = Object.keys(newPriorities).find(
      (cat) => newPriorities[cat as Category] === priority
    ) as Category | undefined;

    // If another category has this priority, swap them
    if (existingCategoryForPriority) {
      newPriorities[existingCategoryForPriority] = newPriorities[category]; // Give it the old priority
    }
    
    // Assign the new priority
    newPriorities[category] = priority;
    onChange(newPriorities);
  };

  const toggleExpand = (category: Category) => {
    setExpandedCategory(prev => prev === category ? null : category);
  };

  return (
    <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {CATEGORIES.map((category) => (
                <div key={category} className="bg-slate-700/50 p-4 rounded-lg border border-slate-600 flex flex-col">
                    <div className="flex justify-between items-center">
                        <h3 className="text-xl font-semibold text-white">{category}</h3>
                         <button onClick={() => toggleExpand(category)} className="text-xs font-semibold text-cyan-400 hover:text-cyan-300">
                            {expandedCategory === category ? 'Hide Details' : 'Show Details'}
                        </button>
                    </div>
                    <div className="flex justify-center space-x-2 my-3">
                        {PRIORITIES.map((p) => {
                            const isSelected = priorities[category] === p;
                            const isTaken = Object.values(priorities).includes(p) && !isSelected;
                            return (
                                <button
                                    key={p}
                                    onClick={() => handleSelect(category, p)}
                                    className={`w-10 h-10 rounded-md font-bold text-lg transition-all duration-200 transform hover:scale-110 ${
                                        isSelected
                                            ? 'bg-amber-500 text-slate-900 ring-2 ring-amber-300'
                                            : isTaken
                                            ? 'bg-slate-600 text-slate-400 cursor-not-allowed opacity-50'
                                            : 'bg-slate-800 hover:bg-slate-600'
                                    }`}
                                >
                                    {p}
                                </button>
                            );
                        })}
                    </div>
                    <div className={`transition-all duration-300 ease-in-out overflow-hidden ${expandedCategory === category ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {expandedCategory === category && <PriorityDetails category={category} />}
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default PrioritySelector;