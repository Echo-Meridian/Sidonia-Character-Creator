import React, { useState, useEffect } from 'react';
import { Contact } from '../types';
import { RESOURCES_CATALOG } from '../constants';

interface ResourceState {
    points: number;
    contacts: Contact[];
    properties: string[];
    licenses: string[];
    items: string[];
}

interface ResourceAllocatorProps {
    resources: ResourceState;
    onChange: (resources: ResourceState) => void;
}

const ResourceAllocator: React.FC<ResourceAllocatorProps> = ({ resources, onChange }) => {
    const [currentResources, setCurrentResources] = useState(resources);

    const pointsSpent = 
        currentResources.contacts.reduce((sum, c) => sum + c.totalPoints, 0) +
        currentResources.properties.reduce((sum, p) => sum + (RESOURCES_CATALOG.properties.find(i => i.name === p)?.cost || 0), 0) +
        currentResources.licenses.reduce((sum, l) => sum + (RESOURCES_CATALOG.licenses.find(i => i.name === l)?.cost || 0), 0) +
        currentResources.items.reduce((sum, i) => sum + (RESOURCES_CATALOG.items.find(item => item.name === i)?.cost || 0), 0);

    const pointsRemaining = resources.points - pointsSpent;

    useEffect(() => {
        onChange(currentResources);
    }, [currentResources, onChange]);

    const addContact = () => {
        const newContact: Contact = { name: `Contact #${currentResources.contacts.length + 1}`, reach: 1, loyalty: 1, totalPoints: 2 };
        if (pointsRemaining >= 2) {
            setCurrentResources(prev => ({ ...prev, contacts: [...prev.contacts, newContact] }));
        }
    };
    
    const updateContact = (index: number, field: 'reach' | 'loyalty', delta: number) => {
        const contact = { ...currentResources.contacts[index] };
        const otherField = field === 'reach' ? 'loyalty' : 'reach';
        
        const newValue = contact[field] + delta;
        if (newValue < 1 || newValue > 4) return;
        
        const pointChange = delta;
        if (pointChange > 0 && pointsRemaining < pointChange) return;
        
        contact[field] = newValue;
        contact.totalPoints = contact.reach + contact.loyalty;

        const newContacts = [...currentResources.contacts];
        newContacts[index] = contact;
        setCurrentResources(prev => ({ ...prev, contacts: newContacts }));
    };
    
    // FIX: Updated `category` type to be more specific, allowing for type-safe access and removing the need for an unsafe cast.
    const toggleItem = <T extends { name: string, cost: number }>(category: 'properties' | 'licenses' | 'items', item: T) => {
        const list = currentResources[category];
        if (list.includes(item.name)) {
            setCurrentResources(prev => ({ ...prev, [category]: list.filter(i => i !== item.name)}));
        } else if (pointsRemaining >= item.cost) {
            setCurrentResources(prev => ({ ...prev, [category]: [...list, item.name]}));
        }
    };

    return (
        <div className="space-y-6">
            <div className="text-center bg-slate-700/50 p-3 rounded-lg">
                <p className="text-lg">Resource Points Remaining: <span className="font-bold text-2xl text-amber-400">{pointsRemaining}</span> / {resources.points}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Contacts Section */}
                <div className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                    <h3 className="text-xl font-bold text-amber-400 mb-4">Contacts</h3>
                    <div className="space-y-3 mb-4">
                        {currentResources.contacts.map((contact, index) => (
                            <div key={index} className="bg-slate-800 p-3 rounded">
                                <input type="text" value={contact.name} onChange={(e) => {
                                    const newContacts = [...currentResources.contacts];
                                    newContacts[index].name = e.target.value;
                                    setCurrentResources(prev => ({...prev, contacts: newContacts}));
                                }} className="bg-transparent border-b border-slate-500 w-full mb-2 text-white" />
                                <div className="flex justify-between items-center text-sm">
                                    <span>Reach: {contact.reach}</span>
                                    <div>
                                        <button onClick={() => updateContact(index, 'reach', -1)} className="px-2">-</button>
                                        <button onClick={() => updateContact(index, 'reach', 1)} className="px-2">+</button>
                                    </div>
                                </div>
                                 <div className="flex justify-between items-center text-sm">
                                    <span>Loyalty: {contact.loyalty}</span>
                                    <div>
                                        <button onClick={() => updateContact(index, 'loyalty', -1)} className="px-2">-</button>
                                        <button onClick={() => updateContact(index, 'loyalty', 1)} className="px-2">+</button>
                                    </div>
                                </div>
                                <p className="text-xs text-slate-400 mt-1">Cost: {contact.totalPoints} pts</p>
                            </div>
                        ))}
                    </div>
                    <button onClick={addContact} className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 rounded text-white font-semibold">Add Contact (2 pts)</button>
                </div>

                {/* Other Assets */}
                <div className="space-y-4">
                     {Object.entries({properties: 'Properties', licenses: 'Licenses & Status', items: 'Gear & Items'}).map(([catKey, catName]) => {
                        // FIX: Use a more specific type for catKey to ensure type-safe access to currentResources.
                        const typedCatKey = catKey as 'properties' | 'licenses' | 'items';
                        return (
                        <div key={typedCatKey} className="bg-slate-700/50 p-4 rounded-lg border border-slate-600">
                             <h3 className="text-xl font-bold text-amber-400 mb-2">{catName}</h3>
                             <div className="space-y-2">
                                {RESOURCES_CATALOG[typedCatKey].map((item: any) => (
                                    <button 
                                        key={item.name}
                                        onClick={() => toggleItem(typedCatKey, item)}
                                        className={`w-full text-left p-2 rounded transition-colors flex justify-between items-center ${currentResources[typedCatKey].includes(item.name) ? 'bg-cyan-800' : 'bg-slate-800 hover:bg-slate-700'}`}
                                    >
                                        <span>{item.name}</span>
                                        <span className="font-semibold">{item.cost} pt</span>
                                    </button>
                                ))}
                             </div>
                        </div>
                     )})}
                </div>
            </div>
        </div>
    );
};

export default ResourceAllocator;