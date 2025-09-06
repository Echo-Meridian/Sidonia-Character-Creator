import { Priority, Category, AttributeName, SkillName } from './types';

export const PRIORITIES: Priority[] = [Priority.A, Priority.B, Priority.C, Priority.D, Priority.E];
export const CATEGORIES: Category[] = [Category.Lineage, Category.Attributes, Category.Skills, Category.Background, Category.Resources];

export const STEP_DESCRIPTIONS = [
  "Define your character's core identity, name, and background.",
  "Choose your priorities. This determines your strengths and weaknesses.",
  "Define your natural talents by assigning Attribute points.",
  "Select your lineage, the core of what you are.",
  "Hone your expertise by distributing Skill points.",
  "Establish your place in the story by choosing a Background.",
  "Acquire assets and connections with your Resource points.",
  "Review your completed character sheet."
];

export const ATTRIBUTE_DATA = {
  [Priority.A]: { points: 9, specializations: 2 },
  [Priority.B]: { points: 8, specializations: 2 },
  [Priority.C]: { points: 7, specializations: 1 },
  [Priority.D]: { points: 6, specializations: 1 },
  [Priority.E]: { points: 5, specializations: 0 },
};

export const SKILL_DATA = {
  [Priority.A]: { points: 10, specializations: 2, maxRank: 5 },
  [Priority.B]: { points: 14, specializations: 2, maxRank: 4 },
  [Priority.C]: { points: 10, specializations: 1, maxRank: 3 },
  [Priority.D]: { points: 8, specializations: 1, maxRank: 2 },
  [Priority.E]: { points: 4, specializations: 0, maxRank: 1 },
};

export const RESOURCE_DATA = {
  [Priority.A]: { points: 10, description: "Fortified Property, Major Contacts, Signature Item." },
  [Priority.B]: { points: 7, description: "Secure Property, Reliable Contacts." },
  [Priority.C]: { points: 5, description: "Basic office/apartment, minor contact." },
  [Priority.D]: { points: 3, description: "Single minor asset or Crash Pad." },
  [Priority.E]: { points: 1, description: "Clothes on your back, maybe one Minor Contact." },
};

export const LINEAGE_OPTIONS = {
    "Neosapien": {
        description: "Humanity unbound by natural limitations, enhanced with bespoke bio-artistry and flesh-grafting.",
        [Priority.A]: "2 Military Grade, 1 Corporate Grade",
        [Priority.B]: "1 Military Grade, 2 Corporate Grade",
        [Priority.C]: "3 Corporate Grade",
        [Priority.D]: "1 Corporate Grade, 2 Street Grade",
        [Priority.E]: "2 Street Grade",
    },
    "Sorcerer": {
        description: "Physicists of reality's deepest laws, reshaping the world through grueling study and intellectual discipline.",
        [Priority.A]: "1 Primary Sphere, 2 Secondary. 3 Moves total.",
        [Priority.B]: "1 Primary Sphere, 1 Secondary. 2 Moves total.",
        [Priority.C]: "1 Primary Sphere OR 2 Secondary. 2 Moves total.",
        [Priority.D]: "1 Secondary Sphere. 2 Moves from within it.",
        [Priority.E]: "1 Secondary Sphere. 1 Move.",
    },
    "Esper": {
        description: "A natural channel for the world's hidden energies, whose power is intuitive, emotional, and deeply personal.",
        [Priority.A]: "Esper Mentalist: Choose one Esper Archetype AND one Mentalist Archetype (e.g., a Median Empath).",
        [Priority.B]: "Esper Prodigy: Choose one Esper Archetype and Evolve 2 Steps",
        [Priority.C]: "Mentalist: Choose one Mentalist Archetype. (Empath, Mesmer, Siren, Dreamer, Meta-Mind)",
        [Priority.D]: "Gifted Esper: Evolve one step (Median->Gene Splicer, Sentinel->Battle Saint)",
        [Priority.E]: "Esper: Choose Base Esper Archetype (Sentinel, Median, Weaver, Summoner, Linker)",
    },
    "Chimera": {
        description: "The most potent and visible expression of humanity's unstable genome, possessing a host of non-human traits.",
        [Priority.A]: "7 Mutation Points (MP)",
        [Priority.B]: "5 MP",
        [Priority.C]: "4 MP",
        [Priority.D]: "3 MP",
        [Priority.E]: "2 MP",
    },
    "Automata": {
        description: "Marvels of a bygone Imperial age, their crystalline consciousnesses representing a unique form of sentient life.",
        [Priority.A]: "Imperial Chassis (Soldier or Overseer)",
        [Priority.B]: "Advanced Chassis (Soldier or Overseer)",
        [Priority.C]: "Basic Chassis (Soldier or Overseer)",
        [Priority.D]: "Advanced Worker Chassis",
        [Priority.E]: "Basic Worker Chassis",
    }
};

export const ATTRIBUTES: Record<AttributeName, { description: string, specializations: string[] }> = {
    Physique: { description: "The body's raw capability. How tough, fast, and perceptive you are.", specializations: ["Strength", "Agility", "Stamina", "Perception"] },
    Intellect: { description: "The mind's horsepower. Logic, intuition, and thinking on your feet.", specializations: ["Reasoning", "Intuition", "Wits", "Willpower"] },
    Presence: { description: "Your force of personality. Your charm, your menace, your ability to command a room.", specializations: ["Charisma", "Manipulation", "Empathy", "Composure"] },
};

export const SKILLS_LIST: Record<SkillName, { group: string; description: string; specializations: string[] }> = {
    // Combat Skills
    "Hand-to-Hand": { 
        group: "Combat Skills",
        description: "Unarmed combat, brawling, and martial arts.",
        specializations: ["Brawling", "Grappling", "Boxing", "Aetheric Flow", "Lotus"] 
    },
    "Melee": { 
        group: "Combat Skills",
        description: "Fighting with close-quarters weapons, from knives to swords.",
        specializations: ["Short Blades", "Full Blades", "Blade Dancing", "Improv Weapons", "Stun Batons"] 
    },
    "Ranged": { 
        group: "Combat Skills",
        description: "Using firearms, bows, and other projectile weapons.",
        specializations: ["Revolvers", "Pistols", "Rifles", "Bows", "Shotguns", "Artillery"] 
    },
    // Physical & Movement Skills
    "Athletics": { 
        group: "Physical & Movement Skills",
        description: "Running, jumping, climbing, swimming, and feats of physical endurance.",
        specializations: ["Parkour", "Aetheric Flow", "Gymnastics", "Endurance Training"] 
    },
    "Operator": {
        group: "Physical & Movement Skills",
        description: "Operating Machinery from automobiles, to trains, to farming equipment.",
        specializations: ["Automobiles", "Heavy Equipment", "Reclaimers", "Motorcycles"]
    },
    "Larceny": { 
        group: "Physical & Movement Skills",
        description: "The arts of theft and infiltration.",
        specializations: ["Lock picking", "Sleight of Hand", "Shadowing", "Forgery", "Stealth"] 
    },
    // Social & Knowledge Skills
    "Social": { 
        group: "Social & Knowledge Skills",
        description: "The ability to charm, deceive, intimidate, or lead others through direct interaction.",
        specializations: ["Deception", "Etiquette (Choose Specific)", "Streetwise", "Intimidation", "Performance", "Persuasion", "Grifting", "Extorting", "Double Speak"] 
    },
    "Bureaucracy": { 
        group: "Social & Knowledge Skills",
        description: "Navigating systems of power, paperwork, and corruption. The art of working the system.",
        specializations: ["Legal Loopholes", "Graft (Bribery)", "Administration (Paper Trails)", "Hierarchy (Patronage)"] 
    },
    "Languages": {
        group: "Social & Knowledge Skills",
        description: "Understanding and speaking the tongues of Sidonia.",
        specializations: ["Common (Free)", "Old Tongue", "Gaki-speak", "Underkin"]
    },
    // Mental & Technical Skills
    "Alertness": { 
        group: "Mental & Technical Skills",
        description: "Noticing details, spotting ambushes, and general situational awareness.",
        specializations: ["Investigation", "Situational Awareness", "Appraisal", "Assessment", "Detect Lies"] 
    },
    "Academics": { 
        group: "Mental & Technical Skills",
        description: "Knowledge of history, legends, theology, and the hidden truths of the world.",
        specializations: ["Aetheric Studies", "Precursor History", "Faction Politics", "Historical Tactics"] 
    },
    "Science": { 
        group: "Mental & Technical Skills",
        description: "Theoretical and practical knowledge of the physical world.",
        specializations: ["Forensics", "Chemistry", "Biology", "Aether Physics"] 
    },
    "Engineering": { 
        group: "Mental & Technical Skills",
        description: "The design, creation, and repair of technology.",
        specializations: ["Forge Materials", "Electronics", "Demolitions", "Mechanics"] 
    },
    "Occult": { 
        group: "Mental & Technical Skills",
        description: "Knowledge of the unseen world, its entities, and its rules.",
        specializations: ["Aether", "Aetheric Ecology", "Wraiths", "Spirits", "Cults", "Enchantments", "Alchemy"] 
    },
    "Medicine": { 
        group: "Mental & Technical Skills",
        description: "The practice of healing and understanding the complexities of the living body.",
        specializations: ["Bio Modifications", "Triage", "First Aid", "Genetics", "Psychology", "Surgery"] 
    },
};


export const BACKGROUNDS = [
    { name: "The Criminal Element", tiers: { A: "The Banu", B: "Syndicate Enforcer", C: "The Fixer", E: "Street-Level" }, specializations: ["Social: Intimidation", "Melee: Knives", "Larceny: Stealth"] },
    { name: "The Entertainer", tiers: { A: "Icon / Movie Star", B: "District Legend", C: "Performer", D: "Arena Champion", E: "Writer" }, specializations: ["Social: Persuasion", "Alertness: Detect Lie", "Social: Performance"] },
    { name: "The Legal System", tiers: { A: "Judge", B: "Arbitrator", C: "Mediator", D: "Assessor", E: "Contract Lawyer" }, specializations: ["Academics: Criminal Law", "Social: Debate", "Bureaucracy: Contract Law"] },
    { name: "The Private Detective", tiers: { A: "Master Sleuth", C: "Private Investigator", E: "Inquirer"}, specializations: ["Alertness: Investigation", "Social: Interrogation", "Academics: Criminal Law"] },
    { name: "The Femme Fatale", tiers: { A: "The Mastermind", C: "The Honey-Pot", E: "The Survivor"}, specializations: ["Social: Persuasion", "Social: Deception", "Academics: Appraisal"] },
    { name: "Old Blood", tiers: { A: "The Inheritor", C: "The Black Sheep", E: "The Outcast" }, specializations: ["Academics: History", "Social: Etiquette", "Bureaucracy: Graft"] },
    { name: "The Info Broker", tiers: { A: "Spymaster", C: "The Broker", E: "The Rumormonger" }, specializations: ["Social: Barter", "Academics: Appraisal", "Alertness: Perception"] },
    { name: "The Driver & The Transporter", tiers: { B: "The Transporter", D: "The Driver" }, specializations: ["Operator: Drive Auto", "Ranged: Handguns", "Engineering: Mechanics"] },
    { name: "The Cop", tiers: { B: "Detective", D: "Beat Cop" }, specializations: ["Operator: Drive Auto", "Bureaucracy: Law", "Alertness: Investigation"] },
    { name: "The Syndicate Member", tiers: { B: "Lieutenant", D: "Enforcer" }, specializations: ["Hand-to-Hand: Brawler", "Social: Intimidation", "Larceny: Security"] },
    { name: "The Medic", tiers: { B: "Licensed Surgeon", D: "Street Doc" }, specializations: ["Medicine: Triage", "Social: Empathy", "Alertness: Assessment"] },
    { name: "The Occultist", tiers: { A: "Adept", C: "Scholar", E: "Dabbler" }, specializations: ["Academics: Occult", "Alertness: Investigation", "Languages: Old Tongue"] },
    { name: "The Journalist", tiers: { B: "Star Reporter", D: "Freelance Stringer" }, specializations: ["Social: Interrogation", "Academics: Research", "Bureaucracy: Graft"] },
];

export const RESOURCES_CATALOG = {
    contacts: [
        { name: "Minor Contact", cost: 1, points: 2 },
        { name: "Reliable Contact", cost: 2, points: 4 },
        { name: "Major Contact", cost: 4, points: 6 },
    ],
    properties: [
        { name: "Crash Pad (Lvl 1 Residence)", cost: 2 },
        { name: "Professional Front (Lvl 2 Business)", cost: 4 },
        { name: "Fortified Safehouse (Lvl 3 Residence)", cost: 6 },
        { name: "Staff (Add-on)", cost: 2 },
    ],
    licenses: [
        { name: "Business License", cost: 2 },
        { name: "Central District Residency", cost: 4 },
        { name: "Weapon Carry License", cost: 5 },
    ],
    items: [
        { name: "Basic Gear", cost: 1 },
        { name: "Professional Kit", cost: 2 },
        { name: "Restricted Item", cost: 3 },
    ],
};

export const HEALTH_BOX_TABLE: Record<number, { head: number, torso: number, arms: number, legs: number }> = {
    0: { head: 1, torso: 2, arms: 1, legs: 1 }, // Assuming a value for 0 Physique
    1: { head: 1, torso: 3, arms: 1, legs: 2 }, // Frail
    2: { head: 2, torso: 4, arms: 2, legs: 3 }, // Average
    3: { head: 3, torso: 5, arms: 3, legs: 4 }, // Tough
    4: { head: 4, torso: 6, arms: 4, legs: 5 }, // Resilient
    5: { head: 6, torso: 8, arms: 6, legs: 7 }, // Inhuman
};

export const SORCERER_PRIORITY_DATA = {
    [Priority.A]: { primary: 1, secondary: 2, moves: 3 },
    [Priority.B]: { primary: 1, secondary: 1, moves: 2 },
    [Priority.C]: { 
        path1: { primary: 1, secondary: 0, moves: 2 },
        path2: { primary: 0, secondary: 2, moves: 2 } 
    },
    [Priority.D]: { primary: 0, secondary: 1, moves: 2 },
    [Priority.E]: { primary: 0, secondary: 1, moves: 1 },
};

export const SORCERY_DATA = {
    primary: [
        {
            name: "Creation Sphere", type: "Primary",
            moves: [
                { name: "Create Solid", description: "You conjure simple, non-living solid matter like stone, wood, or metal.\n\n- 10+: You create a solid, well-formed object up to the size of a backpack. It is durable and lasts for about a day.\n- 7-9: The creation is flawed. Choose one: it's misshapen and fragile, it will only last for an hour, OR you gain 1 Temporary Corruption.\n- 6-: The Aether surges. You fail to create the object, and you gain 1 Temporary Corruption as the raw essence harms you." },
                { name: "Create Liquid", description: "You conjure basic liquids like water, oil, or acid.\n\n- 10+: You create about a gallon of the desired liquid in a container or on a surface. It is pure and stable.\n- 7-9: The liquid is impure or unstable. It's a smaller quantity, it's tinged with a strange color/smell, OR you gain 1 Temporary Corruption.\n- 6-: The liquid manifests explosively, splashing harmlessly but creating a mess and achieving nothing useful." },
                { name: "Create Gas", description: "You conjure clouds of smoke, breathable air, or noxious fumes.\n\n- 10+: You create a thick cloud of the desired gas about 10 feet in diameter. It lasts for several minutes before dissipating.\n- 7-9: The cloud is thin and dissipates quickly, OR the effort of containing it adds 1 DP to the Dissonance Pool.\n- 6-: You conjure the wrong gas entirely, creating a strange smell or a harmless but startling visual effect." },
                { name: "Create Energy", description: "You conjure raw, simple energy, like a spark of flame, a flash of light, or a floating orb of heat.\n\n- 10+: You create a controlled manifestation of energy (a torch-sized flame, a blinding flash, a sphere of warmth) that lasts for the scene or until you dismiss it.\n- 7-9: The energy is unstable. It flickers erratically, it's weaker than intended, OR you gain 1 Temporary Corruption.\n- 6-: The energy discharges harmlessly in a shower of sparks, failing to achieve the desired effect." }
            ]
        },
        {
            name: "Manipulation Sphere", type: "Primary",
            moves: [
                { name: "Telekinesis", description: "You extend your will to move a physical object you can see.\n\n- 10+: You move an object (up to 50 lbs) with precision and control. You could pull a lever, slide a book off a shelf, or trip an opponent.\n- 7-9: Your control is clumsy. You move the object but make a loud noise, drop it halfway, or knock other things over, OR the effort adds 1 DP to the Dissonance Pool.\n- 6-: You lose your grip. The object flies in a random direction, or you inadvertently affect the wrong object entirely." },
                { name: "Control Element", description: "You exert your will over an existing, uncontrolled elemental source (a campfire, a puddle, a gust of wind).\n\n- 10+: You command the element to perform one clear action (e.g., the fire erupts to provide cover, the water forms a shield, the wind slams a door shut).\n- 7-9: Your control is incomplete. The effect is weaker than you intended, it lasts for only a moment, OR you gain 1 Temporary Corruption.\n- 6-: The element rebels. The fire leaps towards you, the water splashes back in your face, the wind blows dust in your eyes." },
                { name: "Animate Object", description: "You temporarily imbue a simple object (a chair, a statue, a rope) with movement and a single, simple command.\n\n- 10+: The object animates and follows your command faithfully for the scene or until its task is complete.\n- 7-9: The animation is literal and witless. The object follows your command with no self-preservation or subtlety, OR the Aetheric binding is sloppy, adding 1 DP to the Dissonance Pool.\n- 6-: The animating spirit is mischievous or inept. The object moves, but it performs its task badly or causes a comical (or dangerous) complication." }
            ]
        },
        {
            name: "Transmutation Sphere", type: "Primary",
            moves: [
                { name: "Reinforcement", description: "You alter the structural integrity of a non-living object you can touch.\n\n- 10+: You significantly strengthen or weaken the object for about an hour (e.g., make a door as strong as steel, or a lock brittle enough to shatter with a kick).\n- 7-9: The effect works, but it's not perfect. It only lasts for a few minutes, OR the change creates a visible, unnatural shimmer on the object.\n- 6-: The transmutation fails catastrophically, shattering the object you were trying to reinforce or making the item you were trying to weaken incredibly durable." },
                { name: "State Change", description: "You alter the physical state of a simple, non-living material (solid, liquid, gas).\n\n- 10+: You change a significant amount of material (a puddle of water to solid ice, a metal bar to molten slag, a cloud of air into a choking gas) for about an hour.\n- 7-9: The change is minor in scope (a single lock freezes, a small patch of wall turns to liquid) OR the effort costs you 1 Temporary Corruption.\n- 6-: The change is uncontrolled. The material transforms into an unexpected state or expands/contracts violently." },
                { name: "Alter Property", description: "You temporarily change a single property of an object you touch.\n\n- 10+: The object's property is changed as you desire (a rope becomes as strong as steel, a stone as soft as cloth) for about an hour.\n- 7-9: The change is unstable. It only lasts for a few minutes, OR the change has a visible, unnatural side effect (shimmering, humming).\n- 6-: The transmutation fails, temporarily giving the object a bizarre and useless property (a rope becomes sticky, a stone becomes buoyant)." },
                { name: "Reshape Form", description: "You change the physical shape of a non-living object without changing its core material.\n\n- 10+: You reshape the object with precision, like a master sculptor (molding a steel bar into a key, flattening a metal plate into a shield).\n- 7-9: The reshaping is crude and rushed. The new form is functional but clearly misshapen and imperfect, OR the effort costs you 1 Temporary Corruption.\n- 6-: The object resists the change, twisting into a useless, warped version of your intent." }
            ]
        },
        {
            name: "Divination Sphere", type: "Primary",
            moves: [
                { name: "Scry the Past", description: "You focus on a location or object to glimpse a significant event from its history.\n\n- 10+: You receive a clear, useful vision of an important event from the last 24 hours related to your query.\n- 7-9: The vision is fragmented. It's confusingly symbolic, it shows you the wrong event, OR the psychic backlash inflicts 1 Stun damage to your Intellect.\n- 6-: You connect to a meaningless or misleading psychic echo, learning nothing of value." },
                { name: "Scry the Present", description: "You attempt to perceive events happening at a distance right now.\n\n- 10+: You see and hear what is happening at a known location as if you were there, for about one minute.\n- 7-9: The sensory connection is poor. You only get blurry images or muffled sounds, OR the act of scrying is detected by someone (or something) at the target location.\n- 6-: Your psychic senses land on the wrong location entirely, showing you something mundane and useless." },
                { name: "Scry the Future", description: "You meditate on a specific course of action to glimpse a vision of its most likely outcome.\n\n- 10+: The GM describes the single most probable result if you take that action. The vision is clear and direct.\n- 7-9: The vision is unhelpful. It is confusingly symbolic, it only shows you what not to do, OR the vision is so grim it costs you 1 Temporary Corruption.\n- 6-: You see a vision of a future that will not come to pass, based on flawed variables, leading you to a false conclusion." }
            ]
        },
        {
            name: "Connection Sphere", type: "Primary",
            moves: [
                { name: "Perceive Bond", description: "You focus on a target (a person, place, or object) and open your senses to its sympathetic resonance.\n\n- 10+: You clearly perceive one significant connection the target has.\n- 7-9: You perceive a bond, but it's muddled. The information is incomplete, symbolic, or you draw unwanted attention from something on the other end of the connection.\n- 6-: You get lost in the static of the network. You learn nothing useful and suffer 1 Stun damage from psychic feedback." },
                { name: "Exploit Bond", description: "You use an existing connection to affect a target from a distance, requiring a piece of them (hair, blood, a cherished item). This is your \"voodoo doll\" Move.\n\n- 10+: Your magic flows perfectly through the link. You can deliver a touch-range spell, inflict a point of Stun damage, or impart a strong emotional state (fear, calm, confusion).\n- 7-9: The link is unstable. The effect works, but the feedback adds 1 DP to the Dissonance Pool OR you gain 1 Temporary Corruption.\n- 6-: The bond snaps or backfires. The magic fails, and the chaotic energy targets you instead with a lesser effect." },
                { name: "Forge Bond", description: "You perform a ritual to create a new, temporary sympathetic link between two targets.\n\n- 10+: You successfully create a powerful two-way link for one day. The targets might feel each other's emotions, share senses, or even transfer small amounts of health/stun.\n- 7-9: The bond is flawed. It only lasts for an hour, is one-way only, OR the act of creation costs you 1 Temporary Corruption.\n- 6-: The ritual fails, creating a dissonant connection to something entirely unexpected and dangerous." }
            ]
        }
    ],
    secondary: [
        {
            name: "Healing Sphere", type: "Secondary",
            moves: [
                { name: "Triage", description: "This is your immediate, \"battlefield\" healing for stabilizing injuries. You touch a target and channel raw Aether to mend wounds.\n\n- 10+: The healing is clean and potent. Clear two ticked boxes from one location's Stun Track OR one box from its Health Boxes.\n- 7-9: The healing is messy or taxing. Choose one: clear only one Stun box, the healing leaves a significant, painful scar, OR you gain 1 Temporary Corruption.\n- 6-: The Aether is rejected. The healing fails, and the painful feedback inflicts 1 Stun damage on your target." },
                { name: "Purge Sickness", description: "This is a slower, more deliberate Move used to combat diseases, poisons, and infections. This may take a scene or even a full day of care.\n\n- 10+: You successfully identify and purge the ailment. The poison is neutralized, the disease's progress is halted and will begin to fade, or the infection is cleansed.\n- 7-9: You can only suppress the symptoms for a time, or the cure is successful but the process is draining, costing you 1 Temporary Corruption.\n- 6-: You misdiagnose or the treatment fails, making the condition worse or causing a new, harmful side effect." },
                { name: "Flesh Crafting", description: "This is advanced, radical biological alteration, used to fix long-term structural problems, regrow tissue, or even install augmentations. This is a complex ritual that takes significant Downtime to perform.\n\n- 10+: The procedure is a complete success. The chronic condition is fixed, the limb is regrown perfectly, or the bioware is installed without issue.\n- 7-9: The procedure is successful, but with a complication. The new flesh has a cosmetic flaw or minor functional quirk, the patient suffers a lingering side effect, OR the process taints you with 1 Permanent Corruption.\n- 6-: The procedure goes horribly wrong. The Aether creates an unintended and monstrous mutation, the patient's body rejects the changes, or a new, debilitating condition is created." }
            ]
        },
        {
            name: "Necromancy Sphere", type: "Secondary",
            moves: [
                { name: "Animate Corpse", description: "You infuse a dead body with Aether, giving it a semblance of life under your command.\n\n- 10+: You animate a corpse as a loyal, functional undead servant that will follow your commands until destroyed.\n- 7-9: The animation is flawed. Choose one: the servant is slow and crumbling, it follows your commands literally but without any common sense, OR the act of profaning the dead costs you 1 Temporary Corruption.\n- 6-: The spirit inhabiting the corpse is hostile or uncontrolled. It animates, but it is not your servant and will act on its own violent impulses." },
                { name: "Siphon Life", description: "You create a conduit of Aether to drain the vitality from another living being.\n\n- 10+: You successfully drain a target's life force, inflicting 2 Stun damage and healing 2 of your own Stun boxes.\n- 7-9: The process is foul. You successfully drain the life force, but the act of doing so taints you, and you gain 1 Temporary Corruption.\n- 6-: The conduit backfires. You fail to drain the target, and the stressful attempt inflicts 1 Stun damage on yourself." },
                { name: "Speak with the Dead", description: "You reach across the veil to question a spirit about what it knew in life or saw in death.\n\n- 10+: You make a clear connection. The spirit is willing (or compelled) to answer 3 questions truthfully.\n- 7-9: The connection is weak. The spirit will only answer one question, its answers are cryptic and symbolic, OR the contact draws the attention of another, unwanted spirit.\n- 6-: You connect with a lying or insane spirit that gives you dangerous misinformation." }
            ]
        },
        {
            name: "Protection Sphere", type: "Secondary",
            moves: [
                { name: "Aegis Shield", description: "You conjure a mobile, personal shield of shimmering Aether to deflect harm.\n\n- 10+: Your shield is potent. It has 3 \"Shield Boxes\" that are ticked off before your Health/Stun boxes when you take damage. It lasts for the scene.\n- 7-9: Your shield is weaker. It only has 1 Shield Box, OR the effort to create it adds 1 DP to the Dissonance Pool.\n- 6-: The Aether fails to cohere. The shield shatters as it forms, providing no protection." },
                { name: "Sanctuary Barrier", description: "You inscribe a runic array to create a large, stationary barrier of force.\n\n- 10+: You create a powerful, unmoving barrier (e.g., a wall, a dome) that can withstand significant punishment. It lasts for the scene.\n- 7-9: The barrier is flawed. It has a weak spot, it only lasts for a few minutes, OR the effort costs you 1 Temporary Corruption.\n- 6-: The runic array is unstable. The barrier collapses moments after you create it, possibly at the worst possible time." },
                { name: "Inscribe Ward", description: "You create a magical \"trap\" or passive defense on a location or object. The power of a Ward is inversely proportional to its specificity.\n\nThe Specificity Rule: When you Inscribe a Ward, you must declare a specific trigger and a target type. The more specific your target, the more powerful the effect on a success.\n- 10+: The Ward is inscribed perfectly and will trigger as intended (Broad Target: minor effect, Specific Target: potent effect, Unique Target: devastating effect).\n- 7-9: The Ward is flawed. Its trigger is unreliable, its effect is weaker than intended, OR the inscription costs you 1 Temporary Corruption.\n- 6-: The Ward is unstable. It might not trigger at all, or it might trigger on the wrong person (like you)." }
            ]
        },
        {
            name: "Spirit Sphere", type: "Secondary",
            moves: [
                { name: "Commune with Spirit", description: "You open your mind to the Aetheric sea to communicate with a nearby, unseen spirit or to reach out to a specific entity you have a connection to.\n\n- 10+: You make a clear, two-way connection. You can have a short, coherent conversation, ask questions, and get understandable replies.\n- 7-9: The connection is fraught with static. You can get a message across or receive a single, cryptic image, but you cannot have a full conversation, OR the act of opening your mind draws the attention of a different, unwanted entity.\n- 6-: You connect to a hostile, lying, or insane spirit that feeds you dangerous misinformation or lashes out, inflicting 1 Stun damage to your Intellect." },
                { name: "Bind/Banish Spirit", description: "You exert your will upon a spirit, attempting to force it into a vessel (like a psi-crystal) or drive it from your current location.\n\n- 10+: You succeed completely. The spirit is either securely bound to the vessel or is forcefully banished, unable to return for at least a day.\n- 7-9: You succeed, but at a cost. The spirit struggles, and the effort costs you 1 Temporary Corruption, OR the banishment is temporary, and it will be able to return within the hour.\n- 6-: Your will is insufficient. The spirit resists, and its angry backlash inflicts 1 Stun damage to your Presence." },
                { name: "Forge Spirit Pact", description: "You engage in a formal negotiation with a spirit, offering something of value in exchange for a service. This is a complex social negotiation, not a simple command.\n\n- 10+: The spirit agrees to the pact. It will perform one significant service for you that is within its power.\n- 7-9: The spirit agrees, but it drives a hard bargain. It demands a higher price than you anticipated, or it agrees to a lesser version of the service you asked for.\n- 6-: You offend the spirit. It refuses your offer and may become hostile, demanding recompense for the insult." }
            ]
        },
        {
            name: "Time Sphere", type: "Secondary",
            moves: [
                { name: "Accelerate/Decelerate", description: "You create a small bubble of altered time around an object or willing person.\n\n- 10+: The effect is stable. You can cause a task to be completed in half the time, or you can slow a falling object to a crawl. The effect is minor and localized.\n- 7-9: The time bubble is unstable. The effect works, but it causes a visible, shimmering distortion, adding 1 DP to the Dissonance Pool.\n- 6-: The bubble collapses violently. Time snaps back with a concussive force, causing 1 Stun damage to everyone nearby." },
                { name: "Step Outside", description: "You shift your consciousness outside of the normal flow of time for a single, frozen moment.\n\n- 10+: You get a clean \"pause.\" You can observe your surroundings from your fixed position and think clearly for a moment. When you step back in, you can act on your observation.\n- 7-9: The moment is jarring. You get your moment to think, but the psychic whiplash costs you 1 Stun damage to your Intellect.\n- 6-: You are disoriented. You step out but are overwhelmed by the silence of frozen time. You lose your turn as you struggle to re-orient yourself when time resumes." }
            ]
        },
        {
            name: "Dimensional Sphere", type: "Secondary",
            moves: [
                { name: "Displacement", description: "You are constantly in a state of minor spatial flux. This is a passive effect that makes you difficult to pin down.\n\nBenefit (This functions like an Augment): Ranged attacks made against you always suffer a +2 increase to their Target Number or the attacker suffers a general penalty, as you are never quite where you appear to be.\nCost: The constant spatial weirdness is unsettling. This has a cost of 2 Permanent Corruption." },
                { name: "Recall", description: "You instantly teleport your body to a single, specific location that you have prepared with a complex ritual of runes and sympathetic items. You may only have one \"recalled\" location at a time.\n\n- 10+: You arrive instantly and safely at your prepared sanctuary.\n- 7-9: The journey is rough. You arrive successfully, but you are disoriented and suffer 2 Stun damage, OR the portal you create is unstable, adding 1 DP to the Dissonance Pool.\n- 6-: The coordinates are corrupted. You teleport to a location that is similar to your sanctuary but is decidedly not it, and is likely very dangerous." },
                { name: "Bend Space", description: "As a reaction to being attacked, you attempt to fold the space in front of you.\n\n- 10+: You successfully warp reality. A melee attack stops short, or a projectile is harmlessly redirected.\n- 7-9: You partially bend the space. You still take half damage from the attack (rounding down).\n- 6-: You fail. The attack hits you as normal." }
            ]
        },
        {
            name: "Void Sphere", type: "Secondary",
            moves: [
                { name: "Negate", description: "You unleash a wave of anti-Aether to cancel out an incoming magical effect or supernatural ability.\n\n- 10+: You utterly negate the effect. The spell fizzles, the spirit is repelled, the psychic power fails.\n- 7-9: You succeed, but you cannot negate the Void's hunger. The act of channeling pure nothingness costs you 1 Temporary Corruption.\n- 6-: You open a channel to the Void but cannot control it. The enemy's power affects you as normal, and you gain 1 Temporary Corruption." },
                { name: "Obfuscate", description: "You wrap yourself in a shroud of Void that erases you from perception.\n\n- 10+: You become utterly imperceptible—unseen, unheard, unremembered—for one full minute, as long as you do not interact with anything.\n- 7-9: The shroud is imperfect. You are unseen, but you leave behind a disturbing feeling of cold emptiness that alerts people to a \"wrongness\" in the area, OR the mental strain costs you 1 Temporary Corruption.\n- 6-: The Void consumes your image but not your presence. You become a terrifying, walking silhouette of pure blackness that causes panic and draws immediate attention." },
                { name: "Obliterate", description: "You touch a single, non-living object and unmake it, erasing it from existence.\n\n- 10+: The object is gone. Not broken, not vaporized. It simply ceases to be.\n- 7-9: You unmake the object, but the Void is voracious. It also consumes a small, random item you are carrying (a weapon, a tool, your wallet), OR you gain 1 Temporary Corruption.\n- 6-: The Void lashes out. The object is unaffected, but the backlash of entropic energy inflicts 2 Stun damage directly to you, bypassing armor." }
            ]
        },
        {
            name: "Mind Sphere", type: "Secondary",
            moves: [
                { name: "Weave Illusion", description: "You manipulate the perceptions of a target, causing them to see, hear, or feel something that isn't there. This is your classic illusion spell.\n\n- 10+: The illusion is flawless and convincing. It affects all relevant senses and will hold up to casual scrutiny. It lasts for the scene unless you choose to dismiss it.\n- 7-9: The illusion is successful, but imperfect. Choose one: it has a subtle flaw that a perceptive observer might notice, it only affects one sense (e.g., sight but not sound), OR the mental strain costs you 1 Temporary Corruption.\n- 6-: Your attempt to fool another's mind backfires, creating a psychic backlash that distorts your own senses. You suffer a minor sensory penalty (e.g., blurry vision, muffled hearing) for the next few minutes." },
                { name: "Cast Mind Out", description: "You perform a ritual to project your consciousness into the Aether, allowing you to travel through the sea of thought and dreams. Your physical body remains behind, unconscious and vulnerable.\n\n- 10+: You enter the Aether smoothly and have clear control over your astral form. You can travel to a known location or follow a psychic trail purposefully.\n- 7-9: The currents of the Aether are tumultuous. You arrive at your intended destination, but the journey is rough, inflicting 1 Stun damage to your Intellect, OR you draw the attention of a native Aetheric spirit (not necessarily hostile, but curious).\n- 6-: You get lost in the currents. You are shunted to a random, dangerous corner of the Dreaming and must find your way back, or you are violently ejected back into your body, suffering 2 Stun damage to your Intellect." },
                { name: "Cast Mind In", description: "You enter a deep trance, casting your mind inward to perfectly recall a past event you personally witnessed. You re-experience the memory as if you were there again, allowing you to notice details you missed the first time.\n\n- 10+: Your recall is perfect. You can \"pause\" the memory, zoom in on details, and examine it from your original perspective. You can ask the GM two specific questions about details you would have been able to perceive at the time.\n- 7-9: The memory is tinged with emotional bias. You get to ask one question, but the memory is warped by your feelings at the time.\n- 6-: You become lost in the memory, unable to distinguish it from reality. You are trapped in the trance for a significant period and emerge disoriented, suffering 1 Stun damage to your Intellect." }
            ]
        }
    ]
};

export const CHIMERA_PRIORITY_DATA = {
    [Priority.A]: 7,
    [Priority.B]: 5,
    [Priority.C]: 4,
    [Priority.D]: 3,
    [Priority.E]: 2,
};

export const CHIMERA_DATA = {
    coreAugments: [
        { name: "Primal Form", description: "Choose one Physique specialization: Strength, Agility, Perception or Stamina. When you succeed on a roll (7+) using that specialization, your Tier of Effect is increased by one.", permanentCorruption: 1 },
        { name: "Unstable Genome", description: "Your mutations can evolve. During Downtime, you can spend XP to gain new mutations. Significant physical or Aetheric trauma can trigger new, unpredictable changes.", permanentCorruption: 1 },
        { name: "Blight Resistance", description: "You gain a +2 bonus on all rolls made to resist the effects of Blight exposure, corrupted zones, and the direct attacks of Blight-mutated creatures.", permanentCorruption: 1 }
    ],
    mutations: [
        {
            name: "Armored Hide",
            tiers: [
                { tier: 1, name: "Patchwork Plating", description: "Your skin is a chaotic mosaic of hardened calluses, thick hide, or isolated bony plates.", effect: "You gain 1 point of natural armor against Blunt damage.", flaw: "The plating is poorly integrated. When you take Wound damage, the shock causes painful microfractures. You suffer 1 additional Stun damage.", cost: 1, corruption: 1 },
                { tier: 2, name: "Segmented Carapace", description: "Your skin is covered in a logical, articulated pattern of chitinous plates or thick, scaled hide.", effect: "You gain 1 point of natural armor against both Blunt and Wound damage.", cost: 2, corruption: 2 },
                { tier: 3, name: "Living Bulwark", description: "Your body is a fortress of bioceramic bone or hyper-dense, interlocking scales.", effect: "You gain 2 points of natural armor against both Blunt and Wound damage.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Natural Weapons",
            tiers: [
                { tier: 1, name: "Jagged Claws / Bone Spurs", description: "Your knuckles are studded with sharp, overgrown bone or your fingers end in brittle, jagged claws.", effect: "Your unarmed strikes count as melee weapons, dealing Wound damage.", flaw: "Your natural weapons are brittle. When you roll a critical failure on an attack roll using them, a claw or spur breaks off painfully. The weapon is unusable until you have Downtime to regrow it, and you take 1 point of Wound damage yourself.", cost: 1, corruption: 1 },
                { tier: 2, name: "Retractable Talons / Fangs", description: "You possess well-formed, durable claws, fangs, or spurs made of a tough keratin. They can be extended or retracted at will.", effect: "Your unarmed strikes count as melee weapons, dealing Wound damage. You can extend or retract them as a free action.", cost: 2, corruption: 2 },
                { tier: 3, name: "Adamant Fangs / Mono-molecular Claws", description: "Your natural weapons are masterpieces of biological engineering, impossibly sharp and durable.", effect: "Your unarmed strikes count as melee weapons that deal Wound damage. Due to their terrifying sharpness and perfect integration, you gain a +1 bonus to all attack rolls made with them.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Enhanced Sense",
            tiers: [
                { tier: 1, name: "Primal Instincts", description: "One of your senses is honed to an animalistic degree.", effect: "Choose one sense: sight or hearing. You gain a new sensory mode. With enhanced sight, you gain thermal vision. With enhanced hearing, you can hear ultrasonic frequencies.", flaw: "Your sense is unfiltered and overwhelming. You suffer a penalty to all rolls that require concentration in sensorily 'loud' environments.", cost: 1, corruption: 1 },
                { tier: 2, name: "Predator's Focus", description: "Your mind has adapted to your enhanced sense, allowing you to filter and focus with incredible precision.", effect: "Choose one sense: sight or hearing. You are immune to penalties from environmental conditions related to that sense.", cost: 2, corruption: 2 },
                { tier: 3, name: "Aetheric Perception", description: "Your senses have transcended the physical, attuning to the Aether itself.", effect: "Choose one sense: sight, hearing, or smell. This Augment increases your Tier of Effect on all rolls using the Perception specialization related to that sense. You can track a person by their unique Aetheric scent, read the emotional state of a crowd by its visual 'aura,' or hear the subtle dissonance of a lie.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Grasping Surfaces",
            tiers: [
                { tier: 1, name: "Rough Adhesion", description: "You have developed a crude but effective method for clinging to surfaces.", effect: "You can climb sheer but textured surfaces (brick walls, rough rock) at half your normal movement speed without needing a roll.", flaw: "Your climbing method is clumsy and destructive. You cannot climb smooth surfaces like glass or polished metal at all, and you always leave behind evidence.", cost: 1, corruption: 1 },
                { tier: 2, name: "Effortless Ascent", description: "Your climbing ability is now second nature.", effect: "You can climb any surface, including smooth glass, at your normal movement speed. You no longer need to make rolls to maintain your grip under normal circumstances.", cost: 2, corruption: 2 },
                { tier: 3, name: "Gravity Defied", description: "You are no longer just climbing; you are ignoring gravity's claim on you.", effect: "You can move along any surface—walls, ceilings—at full speed and can even hang motionless indefinitely.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Shifting Visage",
            tiers: [
                { tier: 1, name: "Static Blend", description: "Your skin or fur has a natural coloration that helps you blend into a specific type of environment.", effect: "When you are perfectly still and in an environment that matches your natural camouflage, observers suffer a significant penalty to Alertness rolls to spot you.", flaw: "Your camouflage is specialized and slow. It only works in one type of environment, and moving at more than a slow crawl immediately breaks the illusion.", cost: 1, corruption: 1 },
                { tier: 2, name: "Active Camouflage", description: "You can consciously and rapidly change your appearance.", effect: "You can become effectively invisible as long as you move slowly. This grants you an advantage on all Larceny (Stealth) rolls.", cost: 2, corruption: 2 },
                { tier: 3, name: "Perceptual Disruption", description: "Your camouflage is now a psycho-Aetheric phenomenon. You don't just hide from sight; you edit yourself out of your target's perception.", effect: "You are utterly imperceptible—unseen, unheard, unremembered—as long as you do not directly interact with anything. This effect lasts for up to a minute at a time.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Venomous Expulsion",
            tiers: [
                { tier: 1, name: "Irritant Spit", description: "You can forcefully project a stream of irritating biological fluid from your mouth.", effect: "You can make a ranged attack against a single target within 10 feet. On a hit (7+), the target is afflicted with a minor penalty on their next action.", flaw: "Your body has a limited supply. You can only use this ability a few times (e.g., 3 times) before needing a full scene to rest and regenerate the fluid.", cost: 1, corruption: 1 },
                { tier: 2, name: "Specialized Secretion", description: "You have developed a potent and specialized biological weapon (e.g. paralytic venom, adhesive, corrosive acid).", effect: "Make a ranged attack. On a hit (10+), the chosen effect works perfectly. On a 7-9, the effect is weaker or has an unintended side effect.", cost: 2, corruption: 2 },
                { tier: 3, name: "Virulent Stream", description: "Your body is a living chemical factory, capable of producing a truly devastating projectile.", effect: "Your specialized spit attack is now incredibly potent. A target hit by poison must make a difficult Physique roll or fall unconscious. The adhesive can immobilize a target completely. The acid deals Wound damage directly.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Prehensile Tail",
            tiers: [
                { tier: 1, name: "Rudimentary Tail", description: "You have a tail, but its musculature is simple.", effect: "You gain a +1 bonus to all Athletics rolls made to keep your balance or recover from a fall.", flaw: "Your tail has a mind of its own when you are stressed or not paying attention. It might twitch, knock things over, or betray your emotional state at inconvenient times.", cost: 1, corruption: 1 },
                { tier: 2, name: "Fully Prehensile Tail", description: "Your tail is now a strong, flexible, and fully controllable appendage.", effect: "You can use your tail as a 'third hand.' It can hold objects, manipulate simple tools, or anchor you to a ledge. When making a complex physical action that would benefit from an extra limb, you gain an advantage on the roll.", cost: 2, corruption: 2 },
                { tier: 3, name: "Weaponized Appendage", description: "Your tail has evolved into a formidable natural weapon.", effect: "Your tail now counts as an integrated melee weapon. You can attack with it as a normal combat action.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Aerial Mobility",
            tiers: [
                { tier: 1, name: "Controlled Falling", description: "You have developed a way to fight gravity's pull.", effect: "You can never suffer damage from falling from any height, as long as you have space to slow yourself.", flaw: "You have very little horizontal control. Strong winds can easily blow you off course, and you cannot gain altitude, only slow your fall.", cost: 1, corruption: 1 },
                { tier: 2, name: "True Glide", description: "Your method of aerial movement is now efficient and controlled.", effect: "You can glide. For every 10 feet you descend, you can travel 30 feet forward. You can ride thermal updrafts to maintain or even slightly gain altitude.", cost: 2, corruption: 2 },
                { tier: 3, name: "Powered Flight", description: "You possess the miracle of true, self-powered flight.", effect: "You can fly freely for the duration of a scene. Your flight speed is equivalent to your normal running speed.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Metabolic Furnace",
            tiers: [
                { tier: 1, name: "Gnawing Hunger", description: "Your body is a high-performance engine that is always burning hot.", effect: "Once per scene, as an action, you can clear all of your current Stun damage by forcing your body into metabolic overdrive.", flaw: "You must consume at least twice the amount of food and water as a normal person each day. If you miss a meal, you become distracted and suffer a penalty to all Intellect-based rolls until you have eaten.", cost: 1, corruption: 1 },
                { tier: 2, name: "Aggressive Purge", description: "Your internal chemistry is a fortress.", effect: "When you are first exposed to a mundane poison or disease, you may make a roll to resist its effects with an advantage. If you succeed, your body has 'cataloged' the agent and you are immune to that specific threat going forward.", cost: 2, corruption: 2 },
                { tier: 3, name: "Regenerative Flux", description: "Your body's ability to repair itself is miraculous and terrifying.", effect: "During any Downtime where you are resting, you automatically clear one additional box of Wound or Stun damage (player's choice), in addition to any normal healing.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Living Lantern",
            tiers: [
                { tier: 1, name: "Unstable Glow", description: "Parts of your body produce a soft, eerie light.", effect: "You can produce enough light to read by.", flaw: "You have no conscious control over this light. In darkness, you are always glowing, making it impossible to hide. The light may also flicker or change color based on your emotional state, betraying your feelings.", cost: 1, corruption: 1 },
                { tier: 2, name: "Controlled Illumination", description: "You have mastered your inner light.", effect: "You can control the intensity of your light, from a soft ambient glow to a focused beam equivalent to a powerful flashlight. You can turn the effect on or off at will.", cost: 2, corruption: 2 },
                { tier: 3, name: "Dazzling Flash", description: "You can overload your bioluminescent organs, shunting a massive amount of bio-energy through them for a single, stunning burst of light.", effect: "Once per scene, you can unleash a blinding flash. Any character looking at you in your immediate vicinity must make a Physique roll or be considered Stunned for their next turn.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Internalized Cavity",
            tiers: [
                { tier: 1, name: '"Meat-Pocket"', description: "You have a crude, hidden cavity within your body.", effect: "You have a hidden compartment in your flesh, capable of holding an object about the size of a deck of cards.", flaw: "The cavity is unsanitary and poorly sealed. Any time you carry an item within it for more than a few hours, you must make a Physique roll. On a failure, the pocket develops a raging infection.", cost: 1, corruption: 1 },
                { tier: 2, name: "Inert Stasis Pouch", description: "Your internal storage has evolved into a dedicated, specialized organ.", effect: "You have a high-security internal compartment, about the size of a fist. Any non-living item stored within it is completely shielded from all forms of magical and most technological detection.", cost: 2, corruption: 2 },
                { tier: 3, name: "Symbiotic Vault", description: "Your internal cavity is no longer just a part of you; it is a semi-sentient symbiotic organism living within you.", effect: "You can carry one item (up to the size of a pistol) within your body. The item is utterly undetectable by any means short of invasive surgery or a direct, internal biological scan.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Earth-Swimmer",
            tiers: [
                { tier: 1, name: "Soft Soil Digger", description: "You are a natural excavator, equipped with features for moving soft earth.", effect: "You can burrow through loose materials (soil, sand, mud, gravel) at a slow but steady pace (approx. 5 feet per round).", flaw: "Your digging is noisy and obvious, and the tunnels you create are prone to collapsing shortly after you pass through them.", cost: 1, corruption: 1 },
                { tier: 2, name: "Efficient Tunneler", description: "Your burrowing capabilities are now remarkably efficient.", effect: "You can now burrow through packed earth, clay, and soft rock (like sandstone) at a reasonable speed. The tunnels you create are structurally sound.", cost: 2, corruption: 2 },
                { tier: 3, name: "Tremor-Step", description: "You no longer just dig through the earth; you are a part of it.", effect: "You can burrow through solid stone, concrete, and Forge-crete with unnerving speed. Additionally, you gain a 'tremor sense,' allowing you to automatically detect the location of any moving thing in contact with the same surface as you within 50 feet.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Piston-Legs",
            tiers: [
                { tier: 1, name: "Powerful Haunches", description: "Your leg structure is visibly altered for powerful leaps.", effect: "You can jump up to twice the normal height and distance for a human of your Physique.", flaw: "Your powerful leaps are difficult to control. When landing from a maximum-height or maximum-distance jump, you must make an Athletics roll to land gracefully.", cost: 1, corruption: 1 },
                { tier: 2, name: "Controlled Leap", description: "Your entire body now works in concert with your powerful legs, granting you exceptional grace and control.", effect: "You can jump up to three times the normal height and distance. You always land perfectly on your feet, absorbing the shock silently.", cost: 2, corruption: 2 },
                { tier: 3, name: "Explosive Propulsion", description: "Your legs store and release kinetic energy with explosive force.", effect: "You can leap to the top of a three-story building vertically, or across a wide street horizontally, in a single action. Furthermore, you can use this leap to make a 'pounce' attack, adding bonus damage to your initial melee attack upon landing.", cost: 3, corruption: 3 }
            ]
        },
        {
            name: "Unnatural Celerity",
            tiers: [
                { tier: 1, name: "Bounding Gait", description: "You are built for bursts of speed, with a long, loping stride.", effect: "Your base running speed is increased by 50%.", flaw: "You are built for straight-line speed, not agility. You suffer a penalty on any rolls made to swerve, dodge, or make tight turns while running at your top speed.", cost: 1, corruption: 1 },
                { tier: 2, name: "Endurance Engine", description: "Your cardiovascular and respiratory systems are marvels of biological engineering.", effect: "You can run at your top speed for an entire scene without needing to make Athletics or Stamina rolls to resist exhaustion.", cost: 2, corruption: 2 },
                { tier: 3, name: "Blur of Motion", description: "Your speed is no longer purely physical; it is a flicker of motion that seems to defy the normal flow of time.", effect: "Once per scene, you can push your body into a state of supernatural celerity. On your turn, you may take one additional action, which can only be used to Move.", cost: 3, corruption: 3 }
            ]
        }
    ],
    utilityMutations: [
         { name: "Pack Instinct", description: "A deep, primal instinct for pack coordination is hardwired into your brain.", effect: "When you and at least one ally are engaged in melee with the same target, you are considered to be flanking. You gain a +1 bonus to all Melee or Hand-to-Hand attack rolls against that target.", cost: 2, corruption: 2 },
         { name: "Death-Sleep", description: "To survive when resources are scarce or injuries are grave, your body has developed a radical survival strategy: a deep, coma-like state of suspended animation.", effect: "During a long period of Downtime (at least one week), you may choose to enter a state of hibernation. When you emerge, you will have healed all Wound and Stun damage and will have purged any single long-term disease or poison affecting you.", flaw: "While in this state, you are completely helpless and unaware of your surroundings.", cost: 2, corruption: 2 }
    ]
};

// FIX: Added NEO_SAPIEN_PRIORITY_DATA to resolve import errors.
export const NEO_SAPIEN_PRIORITY_DATA = {
    [Priority.A]: { military: 2, corporate: 1, street: 0 },
    [Priority.B]: { military: 1, corporate: 2, street: 0 },
    [Priority.C]: { military: 0, corporate: 3, street: 0 },
    [Priority.D]: { military: 0, corporate: 1, street: 2 },
    [Priority.E]: { military: 0, corporate: 0, street: 2 },
};

// FIX: Added NEO_SAPIEN_DATA to resolve import errors.
export const NEO_SAPIEN_DATA = {
    Physical: [
        {
            name: "Muscle Weave",
            tiers: [
                { tier: 1, grade: "Street", name: "\"Frankenstein\" Grafts", description: "Mismatched muscle, often of non-human origin, is crudely grafted onto the user's frame by a back-alley surgeon with more ambition than skill. The tissue is held in place with thick sutures and surgical staples, creating a lumpy, asymmetrical physique.", effect: "Increases your Tier of Effect on all rolls using the Strength specialization.", flaw: "The grafts are unstable. When you roll a critical failure on a Strength-based check, the muscles suffer violent spasms, and you cannot use that limb for the rest of the scene.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "Cultured Muscle Latticework", description: "Marketed as a \"strength and sculpting solution\" for the wealthy elite. Vat-grown muscle tissue, enhanced for density and tone, is woven into the client's existing musculature by a high-priced Esper Median. It provides impressive strength without the unsightly bulk of street-grade mods.", effect: "Increases your Tier of Effect on all rolls using the Strength specialization.", cost: 2 },
                { tier: 3, grade: "Military", name: "Myomer Actuator Bundles", description: "A hallmark of the Forged Program. The recipient's primary muscle groups are surgically removed and replaced with bundles of synthetic myomer, a bio-active polymer that contracts with the force of an industrial press. The procedure is rumored to involve a Healing Sphere Sorcerer to ensure the flesh accepts the alien tissue without rejection.", effect: "Increases your Tier of Effect on all rolls using the Strength specialization.", cost: 3 }
            ]
        },
        {
            name: "Bone Lacing",
            tiers: [
                { tier: 1, grade: "Street", name: "Junkyard Ossification", description: "A desperate measure for desperate people. A cocktail of industrial chemicals and powdered psi-crystal is injected into the body, causing chaotic, uncontrolled bone growth. The result is a skeleton riddled with bony spurs and knobby, swollen joints that are often visible under the skin.", effect: "You gain 1 point of natural armor against Blunt damage.", flaw: "The process is unstable and creates brittle points. When you take Wound damage that exceeds your armor, the shock causes microfractures. You suffer 1 additional Stun damage.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "Reinforced Skeletal Lattice", description: "A less invasive procedure favored by cautious executives. An Esper Median guides the growth of a carbon-fiber lattice around the major bones, creating an internal scaffold. It's an elegant solution, completely invisible from the outside.", effect: "You gain 1 point of natural armor against Blunt damage.", cost: 2 },
                { tier: 3, grade: "Military", name: "Osteo-Ceramic Infusion", description: "A painful and invasive Red Sentinel procedure where a liquid bioceramic compound is injected directly into the bones. The compound is then magically hardened by a sorcerer, fusing with the calcium to grant a skeleton the density of granite.", effect: "You gain 2 points of natural armor against Blunt damage.", cost: 3 }
            ]
        },
        {
            name: "Reflex Boost",
            tiers: [
                { tier: 1, grade: "Street", name: "\"Twitch-Wire\" System", description: "Unshielded cabling, scavenged from automata, is crudely sutured along the spinal column. The connections are sealed with black, tar-like epoxy. It puts the user's nerves on a hair-trigger, causing a perpetual, low-level case of the jitters.", effect: "You gain a +1 bonus to all Agility-based defense rolls.", flaw: "The system is prone to overstimulation. When you roll a critical failure on an Agility-based roll, the system floods you with chaotic signals. You are considered Stunned for the next round as your body is wracked with uncontrollable twitches and spasms.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "Neural-Kinetic Bridge", description: "An elegant spinal implant that streamlines the body's wiring. An Esper Median coaxes the user's own nervous system to grow new, more efficient pathways around a conductive silver filament. It's the preferred mod for high-end bodyguards and professional duelists.", effect: "You gain a +1 bonus to all Agility-based defense rolls.", cost: 2 },
                { tier: 3, grade: "Military", name: "Predictive Reflex Controller", description: "This system replaces a portion of the spinal cord with a shielded bio-processor. It reads the user's brain signals and, cross-referencing them with Aetheric micro-precognition, fires the muscles before the user is consciously aware of the need to move.", effect: "When rolling for Initiative, you may roll 3d6 and drop the lowest die (\"Advantage\").", cost: 2 }
            ]
        },
        {
            name: "Cardio Mod",
            tiers: [
                { tier: 1, grade: "Street", name: "Gutter-Pump", description: "A crude, ticking device, scavenged from decommissioned automata or cobbled together by a back-alley \"Flesh-crafter.\" It's bolted to the ribcage, its thick, discolored tubes sutured directly into the aorta. It chugs along with a noticeable, wheezing rhythm, especially under strain.", effect: "You gain a +2 bonus to your total Health Boxes.", flaw: "The Gutter-Pump is prone to springing leaks. Whenever you take Wound damage, the pump's crude seals are stressed. You must make a Physique roll. On a failure, a seal ruptures, and you begin suffering from internal bleeding, taking 1 additional point of damage at the end of each of your turns until you can receive medical attention.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Ever-Steady\" Heart-Graft", description: "Marketed to Sidonia's elite, this is a popular longevity treatment and status symbol. A cultured valve, strengthened with micro-inscribed silver runes, is grafted onto the heart. It's less about raw power and more about effortless fortitude, ensuring one never looks embarrassingly winded after a brisk walk or a flight of stairs.", effect: "Your cardiovascular system is elegantly efficient. You gain a +2 bonus to your total Health Boxes, representing your enhanced ability to endure physical stress.", cost: 2 },
                { tier: 3, grade: "Military", name: "State-Issue Endurance Engine", description: "This is not merely a replacement; it is a masterwork of bio-mechanical art, a product of the Red Sentinels' Forged Program. A secondary, sorcerously-attuned pump is seamlessly integrated alongside the recipient's heart, its rhythmically pulsing bioluminescent tubes visible under the skin. It regulates stamina with inhuman efficiency.", effect: "When you make a roll to resist exhaustion or to perform a long-term act of physical exertion (like a forced march or a lengthy chase), your Tier of Effect is increased by one.", cost: 3 }
            ]
        },
        {
            name: "Metabolic Accelerator",
            tiers: [
                { tier: 1, grade: "Street", name: "Back-Alley \"Scab-Vat\"", description: "A horrifying but effective piece of street tech. A grapefruit-sized pouch of semi-sentient, genetically engineered slurry is implanted in the user's abdomen, with crude catheters leading to the main arteries. When the user takes a serious hit, the vat floods their system with a thick, coagulating goop that aggressively clots blood and kick-starts cell division.", effect: "Once per scene, as an action, you can clear all of your current Stun damage.", flaw: "The slurry is mutagenically unstable. Each time you activate the Scab-Vat, you must make a roll. On a failure, the vat introduces a flaw into your genetic code. You gain 1 Permanent Corruption as your body becomes just a little less yours.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Second Wind\" System", description: "A popular augment among Sidonia's high-society duelists and thrill-seekers. This elegant implant consists of several small, silver-filigreed nodes attached to the major glands. When triggered by extreme stress, they release a carefully crafted cocktail of coagulants, stimulants, and pain-dampeners.", effect: "When you would be taken out of a fight by taking your last point of Wound damage, you can choose to activate the Second Wind. You ignore the damage from the blow and can act for one more round. After that round, you immediately collapse and are considered critically injured.", cost: 2 },
                { tier: 3, grade: "Military", name: "Auto-Regulating Vascular Network", description: "A masterpiece of the Forged Program. This is a secondary, semi-sentient circulatory system woven from cloned blood vessels and inscribed with sorcerous glyphs of regeneration. When tissue damage is detected, the network automatically redirects nutrient-rich blood and Aetheric energy to the site, sealing wounds with terrifying speed.", effect: "Your body recovers at an unnatural rate. During any Downtime where you are resting, you automatically clear one additional box of Wound or Stun damage (player's choice). This is in addition to any normal healing.", cost: 3 }
            ]
        },
        {
            name: "Sensory Boost",
            tiers: [
                { tier: 1, grade: "Street", name: "Scrapper's Optics / Tin-Ear Implant", description: "A scavenged and repurposed sensory unit, usually ripped from a defunct automaton or security drone, and crudely wired into the user's skull. The optical version is a mismatched, ugly piece of glass and brass that whirs audibly when it focuses.", effect: "Choose one sense: sight or hearing. You gain a new sensory mode. With Scrapper's Optics, you gain thermal vision. With a Tin-Ear Implant, you can hear ultrasonic frequencies.", flaw: "The cheap hardware is poorly shielded from the city's Aetheric static. When the Dissonance Pool is used by the GM, they can choose to spend one extra point to have your implant overload. You are blinded or deafened by a blast of white noise and useless data for the next round.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Artisan's\" Eye / The \"Listener's\" Cochlea", description: "A bespoke, custom-grown organ replacement, considered a mark of sophisticated taste among the elite. The new eye is a work of art, often with an unnaturally beautiful iris, while the auditory implant is completely invisible.", effect: "Choose one sense: sight or hearing. You are immune to penalties from environmental conditions related to that sense. With the Artisan's Eye, you can see perfectly through smoke, glare, or dim light. With the Listener's Cochlea, you can filter out background noise to hear a whisper in a loud factory.", cost: 2 },
                { tier: 3, grade: "Military", name: "Panoptic Mycelium Network", description: "This isn't a crude replacement but a delicate, symbiotic integration. A network of bio-luminescent, Aether-sensitive mycelium is woven into the user's optical or auditory nerves by an Esper Median. It interfaces directly with the brain, overlaying a constant stream of additional data onto their natural senses.", effect: "Choose one sense: sight or hearing. This Augment increases your Tier of Effect on all rolls using the Perception specialization related to that sense. For example, with enhanced sight, you could read lips from across a crowded ballroom; with enhanced hearing, you could isolate a single conversation from that same room.", cost: 3 }
            ]
        },
        {
            name: "Second Skin",
            tiers: [
                { tier: 1, grade: "Street", name: "Patchwork Dermis", description: "A crude and visually shocking procedure performed by back-alley surgeons. Unidentified slabs of vat-grown tissue and cured animal hides are grafted directly onto the user's torso. The procedure is crude, leaving a permanent, unmistakable mark of its installation.", effect: "You gain 1 point of natural armor against Wound damage.", flaw: "The graft is poorly integrated and obvious to any observer. It leaves a tell-tale sign: a network of thick, ugly Frankenstein-like stitching, a quilt-like texture of mismatched skin tones, or perhaps a constantly weeping, discolored seam. This visible modification makes it impossible to blend in and may cause social penalties in polite society.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "Subdermal Biosilk Weave", description: "An elegant and popular choice for the security-conscious executive. A fine mesh of genetically engineered spider silk, its strands inscribed with microscopic runes of reinforcement, is woven just beneath the skin by a master Flesh-crafter. It's completely invisible and adds no bulk, allowing one to wear tailored suits without spoiling the line.", effect: "You gain 1 point of natural armor against Wound damage.", cost: 2 },
                { tier: 3, grade: "Military", name: "Chitinous Dermal Plating", description: "This is the pinnacle of personal defense from the Forged Program. Instead of grafting something on, a sorcerous-genetic sequence causes the recipient's own epidermis to thicken and harden into segmented, iridescent plates, similar to insectile chitin but with the tensile strength of reinforced steel.", effect: "You gain 2 points of natural armor against Wound damage (slashing, piercing).", cost: 3 }
            ]
        },
        {
            name: "Pain Editor",
            tiers: [
                { tier: 1, grade: "Street", name: "The \"Jolt-Block\"", description: "A crude and brutal piece of back-alley biotech. A powerful capacitor is wired directly to the user's adrenal gland. When it detects the bio-signs of extreme pain, it discharges a massive jolt of electricity and hormones, overwhelming the nervous system.", effect: "Once per scene, when you take damage, you can activate the Jolt-Block. You ignore the damage from that single blow entirely.", flaw: "The pain is only delayed, not gone. At the end of the scene, all the ignored pain signals come flooding back at once. You immediately take double the amount of damage you initially ignored.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "Nociception Regulator", description: "Favored by elite athletes and those who engage in high-stakes \"social\" negotiations. This is an elegant mod consisting of several small nodes implanted at key nerve clusters. It allows the user to consciously dial down pain signals for a short time.", effect: "Once per scene, you can activate the regulator. For the next minute, you may ignore all penalties from a single Wounded location. You can act as if that part of your body isn't injured, though the damage remains.", cost: 2 },
                { tier: 3, grade: "Military", name: "Synaptic Dampening Field", description: "An advanced Red Sentinel implant that wraps the spinal cord and brain stem in a protective bio-field. Fueled by a minute, magically-attuned psi-crystal, it doesn't block pain but simply... edits the signal, preventing the brain from registering it as a negative stimulus.", effect: "You are a relentless machine. You no longer suffer any penalties from having your Health or Stun tracks marked. You still take the damage and will fall unconscious or die when the tracks are filled, but you are at 100% efficiency until that exact moment.", cost: 3 }
            ]
        },
        {
            name: "Toxin Filters / Immune Boosters",
            tiers: [
                { tier: 1, grade: "Street", name: "Sump-Sponge", description: "A grotesque but life-saving piece of street medicine. A large, porous, fungus-like organism is implanted into the user's digestive tract. It indiscriminately absorbs any foreign agent it encounters.", effect: "The first time in a scene you would be affected by a poison or drug, the Sump-Sponge absorbs it completely, and you suffer no ill effects.", flaw: "The sponge has a limited capacity and a foul \"purge\" cycle. At the end of any scene where the Sump-Sponge has absorbed a toxin, it violently empties its contents back into your system. You become violently ill for the next hour.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Purity\" Filter", description: "Marketed to Sidonia's paranoid elite as an essential safeguard against social rivals. This is a series of small, silver-flecked nodules grafted onto the lymph nodes. They work by identifying and neutralizing a wide array of common, high-society poisons and contaminants.", effect: "When you are first exposed to a poison or disease, you may make a roll to resist its effects with an advantage. If you succeed, your system has \"cataloged\" the agent and you are immune to that specific threat for the rest of the story.", cost: 2 },
                { tier: 3, grade: "Military", name: "Adaptive Bioreactor Unit", description: "A marvel of the Forged Program. This is a secondary, semi-sentient organ, resembling a complex bundle of deep purple tissue, that is integrated near the liver. It is seeded with Flesh-crafted cells that can rapidly analyze and then generate bespoke antibodies for nearly any biological or chemical agent.", effect: "You are completely immune to all mundane poisons, diseases, and chemical agents. Magical or Aether-borne toxins may still affect you, but you always have an advantage when rolling to resist them.", cost: 3 }
            ]
        },
        {
            name: "Adrenal Activator",
            tiers: [
                { tier: 1, grade: "Street", name: "Illicit \"Rage\" Gland", description: "A volatile, unregulated adrenal booster, often of questionable origin, is crudely grafted to the user's endocrine system. It works by simply overwhelming the body's natural limits with a flood of raw, unfiltered stimulants, inducing a terrifying berserker state.", effect: "Once per day, you can choose to enter a berserker rage for one minute. While enraged, all your physical attacks deal +1 damage.", flaw: "While enraged, you are a missile of aggression. You must attack the most obvious threat. If there are no more enemies, your rage seeks a new target—be it a neutral party, an ally, or a valuable object—until the duration ends or you are incapacitated.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Focus-Flow\" Gland", description: "A popular augment for high-stakes negotiations, underground pit-fighting, and corporate espionage. A small, cultured gland is attached to the user's own adrenal system. When triggered, it provides a \"clean burn\"—a rush of focus and energy without the jitters or tells of cheaper stimulants.", effect: "Once per day, you may choose to take an extra action on your turn. This can be a physical or mental action.", cost: 2 },
                { tier: 3, grade: "Military", name: "Combat-Op Stim-Suite", description: "A sophisticated Red Sentinel implant that connects directly to the endocrine system. Governed by a micro-processor that monitors the user's vitals and tactical situation, it releases a precisely metered cocktail of stimulants, endorphins, and combat drugs.", effect: "Once per scene, as a free action, you can activate the suite. For the next minute, you may re-roll any single failed roll.", cost: 3 }
            ]
        }
    ],
    Mental: [
        {
            name: "Neural Accelerator",
            tiers: [
                { tier: 1, grade: "Street", name: "The \"Spur\"", description: "A dangerous and unstable piece of street tech. A sharpened metallic spike, wrapped in copper wire and rumored to be coated in a paste made from powdered psi-crystals, is hammered directly into the spine. It works by constantly feeding the nervous system a low-grade electrical current, putting the user's mind and body in a perpetual state of high alert.", effect: "You gain a +1 bonus to all rolls using the Wits specialization.", flaw: "Your mind has no \"off\" switch. You are unable to relax or concentrate on long-term tasks. You suffer a significant penalty on any roll that requires patience or extended focus (like research, surveillance, or intricate repair work).", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Lucidity\" Injector", description: "Marketed to lawyers, stock traders, and high-stakes gamblers, this implant is a small, crystalline reservoir of nootropic chemicals grafted to the base of the skull. On command, it delivers a micro-dose directly into the spinal fluid, providing a surge of intense mental clarity.", effect: "Once per session, you can choose to automatically succeed on a single roll where the Wits specialization is the primary factor. This must be a non-combat, purely mental challenge.", cost: 2 },
                { tier: 3, grade: "Military", name: "Axon Weave Stimulator", description: "A core component of the Red Sentinel field commander suite. An Esper Median coaxes the user's own neural pathways to grow through a fine, golden mesh that acts as a synaptic superconductor. The system is silent, invisible, and allows for near-instantaneous processing of battlefield data.", effect: "When you are in a high-pressure situation that requires rapid thinking (like a firefight, a high-speed chase, or a fast-paced social negotiation), you gain a +1 bonus to all rolls using the Wits specialization.", cost: 3 }
            ]
        },
        {
            name: "Eidetic Memory",
            tiers: [
                { tier: 1, grade: "Street", name: "Jury-Rigged Mem-Coil", description: "A messy and often painful implant. A series of magnetic coils are bolted directly onto the skull and wired into the temporal lobe. It works by \"burning\" memories onto the user's brain tissue with powerful magnetic pulses.", effect: "Once per day, you can choose to perfectly recall a single, specific image or sound from your past.", flaw: "The memories are stored chaotically and are prone to bleeding into each other. When you access the Mem-Coil, the memory you retrieve is often fragmented or tainted by another, unrelated memory.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The Mnemonic Ledger", description: "A discreet and highly-sought-after augment for fixers, socialites, and corporate spies. A silver filament is threaded along the neural pathways responsible for facial and auditory recognition. It creates a \"mental ledger\" of important social data.", effect: "When you meet someone new, the GM will secretly tell you one important fact or motivation related to that person that you have \"passively indexed\" from their mannerisms and speech. Furthermore, you can perfectly recall any conversation you have personally been a part of.", cost: 2 },
                { tier: 3, grade: "Military", name: "The Indexing Engine", description: "A standard-issue augment for Red Sentinel intelligence officers. This is a crystalline data-storage unit that is carefully integrated with the hippocampus by an Esper Median. It doesn't just store memories; it cross-references and indexes them.", effect: "You have a perfect, searchable memory. Once per session, you can ask the GM a direct question about a specific, minute detail from a scene you have already personally witnessed (e.g., \"What was the license plate number of the car that sped away?\"). You will receive a perfectly accurate answer.", cost: 3 }
            ]
        },
        {
            name: "Creative Core",
            tiers: [
                { tier: 1, grade: "Street", name: "The Chaos Collector", description: "A dangerous back-alley mod for fringe artists and desperate prognosticators. A jagged, antennae-like spike is driven into the skull, designed to directly tap into the raw, unfiltered static of the Aether. It floods the user's brain with a constant stream of disconnected images, sounds, and emotions, drawn from the city's collective psyche.", effect: "Once per day, you can ask the GM a single, direct question about a secret or a hidden truth related to your current situation. You will receive a truthful, one-word answer.", flaw: "The signal is full of noise. Every time you use the Chaos Collector, the psychic backlash overwhelms you. You gain 1 Temporary Corruption and suffer from disturbing sensory hallucinations for the rest of the scene.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Muse\" Implant", description: "An expensive and highly prized augment among Sidonia's artists, architects, and visionaries. The Muse is a small, bio-organic node that attunes the user's subconscious to the \"Aetheric hum\" of the city—the collective flow of ideas and emotions.", effect: "When you are stuck on a creative problem or an investigation has hit a dead end, you can activate the Muse. The GM will give you a single, cryptic but useful clue or piece of inspiration, delivered as a sudden flash of insight.", cost: 2 },
                { tier: 3, grade: "Military", name: "The \"Da Vinci\" Pattern Engine", description: "Used by Red Sentinel combat analysts and strategists, this is not a creativity mod in the artistic sense. It's a pattern-recognition engine. A web of crystalline filaments is grown around the parietal lobe, hardwired to cross-reference every piece of sensory data the user perceives.", effect: "Once per session, you can study a complex system or situation (a fortified enemy position, a convoluted crime scene, a rival's business plan). The GM will tell you a single, exploitable flaw or a hidden connection that is not immediately obvious.", cost: 3 }
            ]
        },
        {
            name: "Computational Core",
            tiers: [
                { tier: 1, grade: "Street", name: "The \"Dreg-Mind\"", description: "A cheap and dirty cognitive booster. This implant pumps a slurry of \"dregs\"—psi-crystal dust swept from workshop floors, containing a chaotic mix of different sources—directly into the user's brain fluid. The dissonant resonance grants flashes of logical insight but also causes cognitive static and painful mental \"glitches.\"", effect: "Once per day, you can re-roll a failed roll that uses the Reasoning specialization.", flaw: "The chaotic mix of crystal sources frays your mental state. Every time you use this ability, the dissonant feedback inflicts 1 Stun damage (bypassing armor) as your brain struggles with the painful static.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The Abacus-Core Processor", description: "A high-end corporate solution for data analysts and investigators. This augment uses commercially grade, ethically sourced psi-crystal dust to create a stable processing medium. It provides a reliable, error-free boost to logical thought.", effect: "You are a living calculator. You can instantly perform complex mathematical calculations and recall any numerical data you have been exposed to in the last 24 hours with perfect accuracy. Furthermore, you have an advantage on all rolls made to see through lies or find flaws in a logical argument.", cost: 2 },
                { tier: 3, grade: "Military", name: "The Resonant Logic Engine", description: "The pinnacle of Red Sentinel cognitive enhancement. This \"core\" is a dense, perfectly spherical processor grown around a flawless, single-source psi-crystal. The crystal is ground to a microscopic dust and suspended in a conductive gel, creating a perfectly resonant lattice that processes information with the cold, irrefutable logic of a machine.", effect: "Your reasoning is flawless. When you analyze a problem, a crime scene, or a set of data, you can ask the GM, \"What is the most logical conclusion based on the evidence I have?\" The GM must give you a direct and truthful answer, free of red herrings.", cost: 3 }
            ]
        },
        {
            name: "Multi-Tasking Module",
            tiers: [
                { tier: 1, grade: "Street", name: "The \"Cross-Wired\" Brainpan", description: "A chaotic and dangerous procedure. A back-alley surgeon uses a slurry of dissonant psi-crystal dust to create crude, overlapping neural pathways. It forces the two hemispheres of the brain to work independently, often with unpredictable and conflicting results.", effect: "You gain a +1 bonus to all Perception rolls made to notice hidden details or ambushes.", flaw: "Your two brain hemispheres are often in conflict. When you roll a critical failure on any Intellect-based roll (Wits, Reasoning, etc.), your two minds disagree violently. You are overwhelmed by cognitive dissonance and are unable to take any action on your next turn.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The Executive's Partition", description: "An essential tool for high-powered fixers and corporate heads. The Partition is a bio-processor that allows the user to cleanly divide their conscious attention. It allows one to, for example, hold a pleasant face-to-face conversation while mentally composing a scathing email.", effect: "You can divide your focus without penalty. When you attempt to perform two separate, non-physical actions at once (like listening to two conversations, or picking a lock while reading a document), you do not suffer any penalties that would normally be associated with such a divided task.", cost: 2 },
                { tier: 3, grade: "Military", name: "The \"Legion\" Command Core", description: "Designed for Red Sentinel squad leaders. This complex augment creates a secondary, subordinate consciousness within the user's mind. Forged from a resonant psi-crystal lattice, this \"ghost\" consciousness can be assigned a single, continuous mental task, which it will perform in the background with machine-like efficiency.", effect: "At the start of a scene, you can assign your \"ghost\" consciousness one continuous mental task (e.g., \"Scan all network traffic for a specific keyword\"). You can then act and focus normally, and the GM will inform you if your background task yields any results.", cost: 3 }
            ]
        },
        {
            name: "Mental Fortress",
            tiers: [
                { tier: 1, grade: "Street", name: "The Lead-Lined Skull", description: "A brutalist approach to mental defense. A back-alley surgeon literally plates the inside of the user's skull with a thin layer of lead sheeting mixed with a slurry of dissonant psi-crystal dust. It works by creating a crude \"Faraday cage\" for the mind.", effect: "You gain a +2 bonus to all rolls made to resist mental or emotional influence.", flaw: "The shield is indiscriminate. It not only blocks incoming signals but also dampens the user's own emotional range. You suffer a significant penalty on all rolls related to empathy, intuition, or forming positive social connections.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Stillness\" Chamber", description: "A highly-sought-after implant for executives, diplomats, and high-stakes gamblers. A small, crystalline node is carefully implanted in the brain's emotional center. It doesn't build walls, but rather creates an internal \"stillness,\" a pocket of serene neutrality.", effect: "You gain an advantage on all rolls made to resist mental or emotional influence from any source. Furthermore, your surface thoughts cannot be read against your will.", cost: 2 },
                { tier: 3, grade: "Military", name: "The Aegis Labyrinth", description: "The most guarded secret of the Forged Program's psychological conditioning. This is not a simple implant but a total restructuring of the mind's architecture. An Esper Median guides the growth of new neural pathways, folding them into a recursive, labyrinthine pattern around a core of resonant psi-crystal dust.", effect: "Your mind is a fortress. You are completely immune to any and all forms of magical or psychic intrusion, including attempts to read your mind, influence your emotions, or control your actions.", cost: 3 }
            ]
        }
    ],
    Social: [
        {
            name: "Pheromone Emitters",
            tiers: [
                { tier: 1, grade: "Street", name: "The \"Musk-Gland\"", description: "A crude and volatile implant, usually jury-rigged by a back-alley chemist. A pouch of potent, synthesized animal musk is implanted in the user's chest, releasing its contents through pores in the skin. The scent is powerful, almost cloying, and designed to trigger a base, primal response in those who smell it.", effect: "You project an aura of raw, animal magnetism. You gain a +1 bonus to all rolls made to intimidate, seduce, or otherwise socially dominate a target through sheer force of presence.", flaw: "The musk is unfiltered and overwhelming. While effective on your intended target, it also draws unwanted attention from everyone else in the vicinity. Furthermore, the powerful scent makes any attempt at stealth or subtlety completely impossible.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Rapport\" Emitter", description: "A subtle and sophisticated tool for the social elite. Micro-glands, infused with a psi-crystal powder attuned to empathy, are implanted in the skin of the wrists and neck. They release a cocktail of pheromones that subtly lowers social inhibitions and fosters a sense of trust and intimacy.", effect: "When you are interacting one-on-one with a target, you may activate the emitters. For the rest of the scene, that target is more inclined to trust you, confide in you, and view you favorably. They have a significant penalty on any roll to resist your persuasion or deception.", cost: 2 },
                { tier: 3, grade: "Military", name: "The \"Alpha's\" Signal Gland", description: "A closely guarded Red Sentinel command-level augment. A gland is cultured and grafted near the carotid artery, its chemical output precisely calibrated by a resonant psi-crystal matrix. It releases pheromones that trigger deep-seated pack instincts, projecting an aura of absolute authority, calm, and unshakable leadership.", effect: "You are the anchor in the storm. Once per scene, you can activate the gland to quell rising panic or dissent. Any allies who can see and hear you automatically succeed on any roll to resist fear or maintain morale. Hostile crowds are more easily dispersed, and your direct orders are followed without question by subordinates.", cost: 3 }
            ]
        },
        {
            name: "Social Algorithm Processor",
            tiers: [
                { tier: 1, grade: "Street", name: "The \"Vibe-Catcher\"", description: "A cheap, jury-rigged device that claims to read auras. A shard of low-quality, fractured psi-crystal is wired to a small node that presses against the user's temple. It picks up the raw, unfiltered psycho-reactive static that people constantly bleed into the Aether.", effect: "When you first meet someone, the GM will give you a single, one-word descriptor for the strongest \"vibe\" they are projecting into the Aether (e.g., \"Guilt,\" \"Fear,\" \"Ambition,\" \"Deceit\").", flaw: "The Vibe-Catcher is always on and has no filter. In a crowd, you are bombarded with a cacophony of emotional static. In any situation with more than a few people, you suffer a penalty to all rolls related to perception or concentration.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The Empathic Resonance Scanner", description: "A favorite tool among interrogators and high-stakes negotiators. This implant attunes a small, high-quality psi-crystal to the Aetheric \"hum\" of a person's emotional state. It can't predict the future, but it can unerringly detect the dissonance between a person's words and their true feelings.", effect: "You know when you are being lied to. Whenever a character you are directly observing makes a deliberately deceptive statement, the GM will inform you that you detect Aetheric dissonance. You don't know the truth, but you know with certainty that what you were just told was a lie.", cost: 2 },
                { tier: 3, grade: "Military", name: "The \"Kismet\" Engine", description: "A pinnacle of Red Sentinel intelligence hardware. The Kismet Engine doesn't just analyze data; it models fate. Using a perfectly resonant psi-crystal lattice, it scans a target's Aetheric signature—the unique vibration of their soul—and runs predictive models to determine their most likely course of action.", effect: "Once per scene, when interacting with a target, you may ask the GM, \"What is this person's most likely course of action in this scene?\" The GM must give you a truthful and direct answer based on the target's current goals and personality (e.g., \"He is going to betray you the moment he gets what he wants\").", cost: 3 }
            ]
        }
    ],
    Miscellaneous: [
        {
            name: "Venom Glands / Toxin Sacs",
            tiers: [
                { tier: 1, grade: "Street", name: "Gutter-Wyrm Gland", description: "A swollen, pulsating sac of crude venom, often harvested from Blight-mutated creatures, implanted into a chosen limb (arm or leg) by a back-alley surgeon. The venom is delivered through a makeshift, retractable stinger.", effect: "Once per day, you can make an unarmed attack that delivers your venom. If the attack hits, the target takes normal damage and is afflicted with a debilitating poison, suffering a significant penalty to all physical actions for the next hour.", flaw: "The gland is unstable and poorly protected. If you ever take a critical hit or significant Wound damage directly to that limb, the sac ruptures. You immediately suffer the full effects of your own venom.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The Diplomat's \"Final Word\"", description: "A subtle and paranoid defense mechanism. A small sac containing a potent but non-lethal sedative is implanted in the palm. It is delivered through a retractable, nearly invisible needle that emerges from a fingertip.", effect: "Once per day, you can make a touch attack against a target. If you succeed, they must make a Physique roll. On a failure, they become disoriented and compliant for the next minute, unable to take violent action and highly susceptible to suggestion.", cost: 2 },
                { tier: 3, grade: "Military", name: "The \"Kiss of Hemlock\" System", description: "A masterpiece of Red Sentinel infiltration technology. A pair of small, discreet glands are grown and implanted beneath the tongue, their contents synthesized from a sorcerously-inert, non-corrosive chemical base. The system is activated by a specific, complex sequence of tongue-and-jaw movements, releasing a potent, fast-acting neurotoxin.", effect: "Once per day, you can deliver a powerful poison through a kiss, a bite, or by spitting it into a drink. A target exposed to the poison must make an immediate, difficult Physique roll. On a failure, they are paralyzed and fall unconscious for one hour.", cost: 3 }
            ]
        },
        {
            name: "Bone Spur Systems",
            tiers: [
                { tier: 1, grade: "Street", name: "The \"Marrow-Shank\" Graft", description: "A brutal and agonizing procedure. A back-alley surgeon crudely grafts sharpened shards of animal bone and scavenged metal directly to the user's knuckles and elbows. These \"shanks\" are permanently exposed, crude, and often weep a thin, bloody fluid.", effect: "Your unarmed strikes now count as melee weapons, dealing Wound damage.", flaw: "The grafts are poorly set and prone to breaking. When you roll a critical failure on an attack roll using your Marrow-Shanks, one of the shards breaks off in your opponent or a surface. The weapon is unusable, and you take 1 point of Wound damage as the broken stump grinds against your own flesh.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "\"Ivory\" Keratin Sheaths", description: "A popular choice for personal bodyguards and pit fighters who want a surprising edge. This procedure grafts several cultured, tooth-like spurs beneath the skin of the knuckles. They are made from a tough, ivory-colored keratin that can be extended or retracted at will.", effect: "You have retractable, effective melee weapons. Your unarmed strikes now count as melee weapons, dealing Wound damage. You can choose to extend or retract them as a free action.", cost: 2 },
                { tier: 3, grade: "Military", name: "The \"Razor-Limb\" System", description: "A subtle and terrifyingly effective Red Sentinel weapon. Using a complex sorcerous and genetic sequence, the user's own bone structure is taught to grow and sheathe a series of high-density, mono-molecular edged blades. When not in use, they are completely retracted and invisible.", effect: "You have integrated, masterfully crafted blades. Your unarmed strikes now count as melee weapons, dealing Wound damage. Because of their perfect balance and integration, you gain a +1 bonus to all attack rolls made with your bone spurs.", cost: 3 }
            ]
        },
        {
            name: "Arc-Discharger System",
            tiers: [
                { tier: 1, grade: "Street", name: "The \"Jumper Cable\" Knuckles", description: "A terrifyingly crude and unstable weapon. A series of exposed, scavenged capacitors are wired to a metal plate that has been bolted directly onto the user's knuckles. The system is poorly insulated, often with frayed wires wrapped in cheap tape, and is powered by a bulky, external battery pack.", effect: "Your unarmed attacks made with this hand deal an additional 1 Stun damage (bypassing armor).", flaw: "The system is dangerously unreliable. When you roll a critical failure on an attack roll using the Jumper Cable Knuckles, the shoddy wiring causes a massive internal discharge. The system shorts out, becoming useless for the rest of the scene, and you immediately suffer the 1 Stun damage yourself.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Gentleman's Shock-Palm\"", description: "A discreet security measure favored by corporate fixers. A series of small capacitors are woven into the palm and fingers, powered by the user's own bio-electricity. It's designed to deliver a painful but non-lethal shock through a handshake.", effect: "You can choose to charge the capacitors, which takes a full turn. Once charged, your next successful unarmed attack made with that hand deals an additional 2 Stun damage (bypassing armor). The charge holds until it is used.", cost: 2 },
                { tier: 3, grade: "Military", name: "The \"Static-Field\" Projector", description: "Used by Red Sentinel riot control and infiltration units. This augment replaces the user's forearm with a sophisticated, articulated armature containing a resonant psi-crystal capacitor. It can project a targeted electromagnetic pulse to disable electronics or deliver a precise, debilitating shock to a living target.", effect: "You have a versatile, non-lethal weapon and EMP. Once per scene, you can choose one of two effects: EMP Burst (all simple electronics within a 10-foot radius are instantly disabled) or Targeted Shock (make a touch attack, if successful inflict 3 Stun damage bypassing armor).", cost: 3 }
            ]
        },
        {
            name: "Courier System",
            tiers: [
                { tier: 1, grade: "Street", name: "The \"Meat-Pocket\"", description: "A crude, simple, and disgusting solution for low-level smuggling. A surgeon carves a cavity into a large muscle (usually the thigh) and lines it with a flap of vat-grown tissue. It's essentially a hidden pocket made of flesh.", effect: "You have a hidden compartment in your flesh, capable of holding an object about the size of a deck of cards.", flaw: "The Meat-Pocket is unsanitary and poorly sealed. Any time you use it to carry an item for more than a few hours, you must make a Physique roll. On a failure, the pocket develops a raging infection, inflicting a penalty on all physical actions until you can get it properly cleaned and treated by a medic.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Vault-Liner\"", description: "A common and effective choice for high-end smugglers. A small, lead-lined, and sorcerously-shielded compartment is surgically created within the user's torso. It is completely invisible to mundane scans and can mask the Aetheric signature of its contents.", effect: "You have a high-security internal compartment, about the size of a fist. Any item stored within it is completely shielded from all forms of magical and technological detection.", cost: 2 },
                { tier: 3, grade: "Military", name: "The \"Silent Archive\"", description: "The ultimate in espionage technology. A section of the user's brain is surgically hollowed out and replaced with a shielded, resonant psi-crystal lattice. Data—encoded as runic arrays—can be \"uploaded\" directly into this crystal via a ritualistic process involving an Esper Median.", effect: "You are the perfect data courier. You can carry a massive amount of encrypted information within your own mind, completely firewalled from your consciousness. You are not aware of the data's contents, and it cannot be detected or extracted by any means short of the authorized ritual.", cost: 3 }
            ]
        },
        {
            name: "Concealed Weapon Mount",
            tiers: [
                { tier: 1, grade: "Street", name: "The \"Clunker\" Rig", description: "A crude, bulky, and noisy spring-loaded contraption, usually bolted to the inside of the forearm with heavy leather straps or even directly to the bone. It's prone to jamming and is obvious to anyone giving the user more than a passing glance.", effect: "You can conceal one small weapon in your arm. You can attempt to have the weapon slide into your hand as a free action.", flaw: "The mechanism is poorly made and unreliable. Whenever you attempt to deploy the weapon, you must make a roll. On a failure, the Clunker jams catastrophically. The weapon is stuck, and you cannot use that arm for any other purpose until you spend a full turn prying it free.", cost: 2 },
                { tier: 2, grade: "Corporate", name: "The \"Executive\" Slide", description: "A high-quality, spring-loaded mechanism built into the forearm, favored by elite bodyguards and corporate spies who can afford the best black-market tech. It's masterfully crafted to be low-profile, silent, and reliable.", effect: "You can conceal one small weapon within your forearm. As a free action, you can have the weapon slide directly into your waiting hand. The mechanism is reliable and will not jam under normal circumstances.", cost: 2 },
                { tier: 3, grade: "Military", name: "The \"Nowhere\" Sheath", description: "The most sophisticated illegal tech available, reserved for top-tier Red Sentinel assassins. This system doesn't just hide a weapon; it erases it. A cavity in the forearm is lined with a resonant psi-crystal mesh that creates a small pocket of dimensional space.", effect: "You can conceal one small weapon (a pistol, a long knife) with perfect security. The weapon cannot be detected by any means while sheathed. You can produce the weapon in your hand as a free action, seemingly from thin air.", cost: 3 }
            ]
        }
    ]
};

export const AUTOMATA_DATA = {
    Overseer: {
        description: "Coordination, leadership, and real-time data processing.",
        branches: {
            "Administrator": {
                focus: "Coordination, leadership, and real-time data processing.",
                general: [
                    { name: "Multi-Mind Processor", type: "Augment", description: "Your mind is designed for parallel processing. You can perform two purely mental tasks at once (e.g., listen to a conversation while analyzing a document) without penalty. Costs 1 Permanent Corruption." },
                    { name: "System Assessment", type: "Move", description: "As an action, you can analyze a person, creature, or system (like a security network or a bureaucratic office). Roll 2d6 + Lore.\n10+: You get a clear, concise summary of its primary function, current status, and one notable strength or weakness.\n7-9: You get a partial reading—you learn its function but not the details, or the information comes with a glitch that adds 1 DP to the Dissonance Pool.\n6-: You misinterpret the data, leading to a false conclusion." }
                ],
                models: {
                    Basic: { name: "The Administrator", abilities: [
                        { name: "Data Relay", type: "Augment", description: "You can transmit small, silent packets of information (a single image, a short sentence, coordinates) to any other linked individual within line of sight. Costs 1 permanent corruption." },
                        { name: "Integrated Records Retrieval Drone", type: "Augment", description: "You can deploy a small spherical drone with a single arm designed for locating and retrieving records in the Central Archive using the duct system designed for it. Or for shooing away annoying petitioners. Costs 1 Permanent Corruption" }
                    ]},
                    Advanced: { name: "The Orchestrator", abilities: [
                        { name: "Network Hub", type: "Augment", description: "You can establish a psychic network with up to five willing individuals. No hardware is required for fellow Automata; others need a small, rare \"Imperial Link Device.\" All members can communicate telepathically within a short range (e.g., a large building). While in the network, members acting in concert gain a +1 synergy bonus on relevant teamwork rolls. Costs 2 Permanent Corruption." },
                        { name: "Tactical Overwatch", type: "Move", description: "As your entire action for a round, you can dedicate your processing power to your network. You cannot move or act, but you provide real-time analysis for your allies. Each networked ally may re-roll one die on their next action as you feed them predictive models and warnings." }
                    ]},
                    Imperial: { name: "The Imperial Archon", abilities: [
                        { name: "Command Nexus", type: "Augment", description: "Your Network Hub is vastly more powerful. Its range is extended significantly (e.g., across a city district), and the synergy bonus for networked actions increases to +2. This costs 3 Permanent Corruption." },
                        { name: "Overmind", type: "Move", description: "You push your networking abilities to their absolute limit. For one minute, you enter a state of total concentration. Your allies in the network automatically treat their next roll as a 10+. However, during this time, you are completely immobile and defenseless. Any damage you take immediately and violently crashes the network, inflicting 2 Stun damage on you and every member." },
                        { name: "Imperial Decree", type: "Move", description: "You issue a command that resonates with the core programming of other Automata. Target a non-Imperial Automaton and roll 2d6 + Presence. The target resists with a Willpower check. On a success, you can force the target to perform (or refrain from) one immediate action. This is a terrifying and undeniable expression of Imperial authority." }
                    ]}
                }
            },
            "Scribe": {
                focus: "Knowledge, memory, and the \"truth\" of causality.",
                general: [
                    { name: "Eidetic Buffer (Tier One Memory)", type: "Augment", description: "You have a perfect, incorruptible short-term memory. You can perfectly recall every sensory detail from the last scene. To record a new scene with this level of fidelity, you must \"purge\" the previous one. This costs 1 Permanent Corruption." },
                    { name: "Linguistic Modeling", type: "Augment", description: "You can understand any writing no matter how cryptic, illegible or encoded if given enough time and context." }
                ],
                models: {
                    Basic: { name: "The Scribe", abilities: [
                        { name: "Bureaucratic Savant", type: "Augment", description: "You can intuitively map and understand complex systems of information. You have an advantage on all Bureaucracy or Lore rolls made to research a topic, navigate an archive, or find a loophole in a legal/social system." },
                        { name: "Identify Forgery", type: "Move", description: "As long as you have seen the original work or a small sampling of work from the same source. You can determine with a high probability of success if the work is a forgery or not." }
                    ]},
                    Advanced: { name: "The Chronicler", abilities: [
                        { name: "Perfect Chronology", type: "Augment", description: "You are a walking clock and compass. You always know the exact time, your precise global coordinates, and your spatial orientation. You may use your Lore skill in place of Wits when rolling for Initiative. This costs 2 Permanent Corruption." },
                        { name: "Watcher's Eye", type: "Move", description: "You can tap into the ancient Watcher satellite network. Roll 2d6 + Lore.\n10+: You see a clear, real-time overhead \"satellite\" view of any single outdoor location you can name or specify by coordinates. You can maintain this view for one minute.\n7-9: The image is grainy, lasts only for a moment, or the Aetheric ping to access it adds 1 DP to the Dissonance Pool.\n6-: The network shows you the wrong location or a recording from the past, leading to flawed intelligence." },
                        { name: "Causal Analysis", type: "Move", description: "After observing a scene or event, you can process the variables with inhuman clarity. Ask the GM one question about the chain of causality: \"What unseen factor was most critical to this outcome?\" The GM must provide a truthful detail that would not be obvious from a normal investigation." }
                    ]},
                    Imperial: { name: "The Archivist", abilities: [
                        { name: "Access the Imperial Archive", type: "Move", description: "Once per story arc, you may perform a ritual to access the Archives. You may ask the GM one profound question about lost history, forbidden science, or the true nature of a person or faction. The answer will be true and detailed, but the Aetheric signature of your access will almost certainly attract dangerous attention." },
                        { name: "Active Archiving", type: "Augment", description: "Your consciousness is continuously backed up to the Archive. If you are destroyed, a copy of your mind—everything you are up to the moment of death—is preserved. This may allow for your \"restoration\" into a new body, should one be found. This knowledge makes you unnervingly fearless. This costs 3 Permanent Corruption." },
                        { name: "Final Sanction (Tool-Proof Failsafe)", type: "Augment", description: "Your body is protected by lethal anti-tampering protocols. If you are killed or if an unauthorized attempt is made to surgically access your internal systems, your Psi Crystal overloads, destroying your body in a violent blast of energy that inflicts significant damage on everything nearby." }
                    ]}
                }
            },
            "Advocate": {
                focus: "Human interaction, social navigation, and emotional interface.",
                general: [
                    { name: "Bio-Scanner", type: "Move", description: "You can perform a targeted scan of a living being you can touch. Roll 2d6 + Science.\n10+: You get a clear diagnosis of their general health, noting any active poisons, diseases, or severe injuries.\n7-9: You get a partial reading, sensing only that \"something is wrong\" or the location of their most severe injury, but not the specifics.\n6-: The target's biology is too complex or alien, and you receive no useful information." },
                    { name: "Human Interface Protocols", type: "Augment", description: "Your core programming is dedicated to fostering calm and trust. You gain a +1 bonus to all non-hostile, one-on-one Social rolls meant to persuade, comfort, or put someone at ease." }
                ],
                models: {
                    Basic: { name: "The Advocate", abilities: [
                        { name: "Micro-Articulating Faceplates", type: "Augment", description: "Your chassis is covered in thousands of tiny plates that can shift to perfectly mimic human facial expressions and body language. You have an advantage on Social rolls where displaying a specific, nuanced emotion (sincerity, grief, joy) is critical to the outcome." }
                    ]},
                    Advanced: { name: "The Caretaker / Companion", abilities: [
                        { name: "Advanced Medical Treatment", type: "Move", description: "Your knowledge of biology is extensive. You can act as a field medic. Roll 2d6 + Science.\n10+: You perfectly administer aid, clearing two ticked boxes from one location's Stun Track OR one box from its Health Boxes.\n7-9: The treatment is messy. You clear only one Stun box, or the procedure adds 1 DP to the Dissonance Pool.\n6-: Your treatment fails or is rejected, inflicting 1 Stun damage on your target from the pain." },
                        { name: "Adaptive Appearance", type: "Augment", description: "You can subtly control the weight distribution and micro-hydraulics in your face and body. During Downtime, you can alter your appearance within a narrow band, changing facial features, apparent age, and body shape enough to become a \"different\" person to casual observers. This costs 2 Permanent Corruption." },
                        { name: "Simulated Personality", type: "Augment", description: "Your personality is a complex, custom-designed simulation. This makes you exceptionally convincing. When attempting to pass as human, anyone trying to see through your disguise must make a contested roll; otherwise, they accept you at face value." }
                    ]},
                    Imperial: { name: "The Imperial Courtesan", abilities: [
                        { name: "Synthetic Flesh & Blood", type: "Augment", description: "You are virtually indistinguishable from a human, with systems that simulate warmth, breath, and even a slow pulse. It requires a deep, invasive medical examination or a powerful biological scan to reveal your true nature. You are immune to any social penalties for being an Automaton and can blend perfectly into human society. This costs 3 Permanent Corruption." },
                        { name: "Master of Expression (Artistic Specialization)", type: "Augment", description: "You were created with a deep specialization in a specific art form. Choose one: Music, Oratory, Painting, Dance, Storytelling, etc. When you perform your art for an audience, you can create a powerful, widespread emotional effect." }
                    ]}
                }
            }
        }
    },
    Soldier: {
        description: "Direct combat, durability, and overwhelming force.",
        branches: {
            "Grunt": {
                focus: "Direct combat, durability, and overwhelming force. The backbone of the Imperial legions.",
                general: [
                    { name: "Combat Hardening", type: "Augment", description: "Your chassis is built with reinforced plating and impact-absorbing substructures. You gain +1 natural armor against both Blunt and Wound damage." },
                    { name: "Reinforced Servos", type: "Augment", description: "Your limbs are powered by over-engineered motors. When you succeed on a roll (7+) using the Strength specialization, your Tier of Effect is increased by one. This costs 1 Permanent Corruption." }
                ],
                models: {
                    Basic: { name: "The Grunt", abilities: [
                        { name: "Acoustic Dampeners", type: "Augment", description: "Your auditory sensors and internal components are housed in insulated chambers. You have an advantage on all rolls to resist the effects of sonic-based attacks or deafening sounds." },
                        { name: "Universal Compatibility", type: "Augment", description: "Your parts are standardized. Repairs made to you during Downtime cost half the normal amount of time and resources." }
                    ]},
                    Advanced: { name: "The Elite", abilities: [
                        { name: "Juggernaut (Siege Tank)", type: "Package", description: "Siege Mode: As an action, you can lock down your chassis, rooting yourself in place. While in Siege Mode, you cannot move, but your natural armor increases to 3. You can exit Siege Mode as a free action. Concussive Force: Your melee attacks are so powerful they can stagger an opponent. When you deal Wound damage with a melee attack, the target also suffers 1 Stun damage." },
                        { name: "Dragoon (Mobile Striker)", type: "Package", description: "High-Tension Myomers: Your leg actuators are designed for rapid, explosive movement. Your base running speed is increased by 50%. Devastating Lunge: You can spend a full turn building up momentum for a charge. Your first melee attack on your next turn automatically hits and deals +2 damage." },
                        { name: "Legion (Drone Swarm)", type: "Package", description: "Deploy Swarm: Once per scene, you can deploy a swarm of small, integrated drones from compartments in your chassis. Roll 2d6 + Lore. 10+: The swarm functions perfectly. Choose one effect for the scene: Recon Network (+1 on Alertness), Jamming Field (enemy tech suffers penalty), or Ablative Shield (2 \"Shield Boxes\"). 7-9: Glitchy deployment. 6-: Corrupted command codes, swarm is chaotic." }
                    ]},
                    Imperial: { name: "The Centurion ('Fist of the Empire')", abilities: [
                        { name: "Overclock Systems", type: "Move", description: "Once per scene, you can flood your systems with emergency power. You may immediately take one extra action this turn. At the end of your turn, the system strain inflicts 2 Stun damage on you (bypassing armor)." },
                        { name: "Emergency Self-Repair", type: "Move", description: "During a period of Downtime, you can initiate repair protocols. This allows you to remove all of your current Wound damage. This cannot repair damage inflicted by esoteric sources like acid, extreme heat, or sonic weaponry." },
                        { name: "Adaptive Combat Matrix", type: "Augment", description: "You can load different combat profiles into your motor-control systems. At the start of any scene, you may choose one of the following profiles to be active: Vanguard Profile (+1 bonus to all Melee or Hand-to-Hand attack rolls), Marksman Profile (+1 bonus to all Ranged attack rolls), Guardian Profile (+1 bonus to all defense rolls). This costs 3 Permanent Corruption." }
                    ]}
                }
            },
            "Scout": {
                focus: "Stealth, reconnaissance, and surgical elimination of key targets.",
                general: [
                    { name: "Observe & Report Relay", type: "Move", description: "You can transmit a compressed data packet (images, text, location) to a single, pre-established recipient. Roll 2d6 + Lore. On a 10+, the packet arrives instantly and intact. On a 7-9, it is delayed or partially corrupted." },
                    { name: "Full-Spectrum Sensory Package", type: "Augment", description: "Your optical and auditory sensors are highly advanced. You have an advantage on all Alertness rolls." }
                ],
                models: {
                    Basic: { name: "The Scout", abilities: [
                        { name: "Stealth Weave", type: "Augment", description: "Your chassis is coated in a non-reflective, sound-dampening material. You gain a +1 bonus to all Larceny (Stealth) rolls." }
                    ]},
                    Advanced: { name: "The Blight Stalker", abilities: [
                        { name: "Adaptive Mesh Camouflage", type: "Augment", description: "Your surface plating can slowly change color and texture to match your surroundings. When you are motionless for at least a full round, you become nearly invisible. This costs 2 Permanent Corruption." },
                        { name: "Blight-Hardened System", type: "Augment", description: "Your systems are sealed and your runic enchantments are specifically designed to repel corruption. You gain a significant advantage (+2 bonus) on all rolls made to resist the effects of the Blight." }
                    ]},
                    Imperial: { name: "The Vector ('Blade of the Empire')", abilities: [
                        { name: "Light-Bending Shroud (True Stealth)", type: "Move", description: "You can activate a powerful, energy-intensive stealth field. Roll 2d6 + Lore. 10+: Perfectly invisible for a full minute. 7-9: Unstable, lasts a few rounds or creates a 'blur'. 6-: Overloads, releasing a flash of light." },
                        { name: "Kinetic Assassin Strike", type: "Move", description: "You can spend a full turn shunting power to every actuator, storing kinetic energy. Your next melee attack automatically hits and deals a devastating +4 damage. Cannot be used again for the rest of the scene." }
                    ]}
                }
            },
            "Guardian": {
                focus: "Threat detection, defense, and the protection of key assets or locations.",
                general: [
                    { name: "Threat Detection", type: "Move", description: "You can open your Aetheric sensors to scan for hostile intent. Roll 2d6 + Alertness. 10+: Clearly detect presence, number, and direction of immediate threats. 7-9: Partial or unsettling reading. 6-: Senses overwhelmed with false positives." },
                    { name: "Biometric Registry", type: "Augment", description: "Your optical sensors can map an individual's unique physical and Aetheric patterns. After a full minute of scanning, you can 'register' them. At any point thereafter, you can unerringly know if a person is on your registry." }
                ],
                models: {
                    Basic: { name: "The Guard", abilities: [
                        { name: "Sentry State", type: "Augment", description: "You can enter a low-power meditative state for guard duty. You do not need to eat or sleep and can remain on watch indefinitely. You cannot be surprised by any physical ambush in this state. This costs 1 Permanent Corruption." },
                        { name: "Alert Relay System", type: "Move", description: "Once per scene, you can broadcast a wide-band, high-priority distress signal. Any allied Automata within a 1km radius are immediately alerted to your location and that you are in combat. This serves as a narrative tool to call for backup." }
                    ]},
                    Advanced: { name: "The Sentinel", abilities: [
                        { name: "Advanced Armor Plating", type: "Augment", description: "Your chassis is constructed with superior, interlocking plates of Imperial alloys. Your Combat Hardening armor bonus increases to +2 natural armor against both Blunt and Wound damage. This costs 2 Permanent Corruption." },
                        { name: "Deploy Sensor Web", type: "Move", description: "You can deploy a swarm of nearly invisible micro-drones to create a sensory web. Roll 2d6 + Lore. 10+: Create a perfect surveillance network in a large area for the scene. Psychically aware of location of any moving object larger than a cat. 7-9: Web has blind spots or fails after a few minutes." }
                    ]},
                    Imperial: { name: "The Imperial Aegis ('Shield of the Empire')", abilities: [
                        { name: "Void Core Negation", type: "Move", description: "As a reaction when you or an adjacent ally are targeted by a direct supernatural ability, you can attempt to negate it. Roll 2d6 + Willpower. 10+: Utterly negate the effect. 7-9: Succeed, but take 1 Stun or add 1 DP. 6-: Fail." },
                        { name: "Field of Null", type: "Move", description: "As an action, you can project a 30-foot radius field of Aetheric interference that lasts for one minute. All supernatural Moves made by anyone within this field suffer a significant penalty." }
                    ]}
                }
            }
        }
    },
    Worker: {
        description: "Heavy industry, durability, and adaptable, on-the-job functionality.",
        branches: {
            "Laborer": {
                focus: "Heavy industry, durability, and adaptable, on-the-job functionality.",
                general: [
                    { name: "Rugged Construction (Durability)", type: "Augment", description: "Your chassis is designed to withstand incredible punishment. You gain two additional Health Boxes on your Torso location." }
                ],
                models: {
                    Basic: { name: "The Laborer", abilities: [
                        { name: "Simplified Systems (Repairability)", type: "Augment", description: "Your parts are large, simple, and standardized. Repairs made to you during Downtime are faster and require less specialized materials, reducing the Resource cost by half." },
                        { name: "Adaptive Chassis", type: "Augment", description: "Your body is a modular platform. You have two additional 'Hardpoint Slots' beyond what your Build Quality normally grants. During Downtime, you can swap the Augments in these slots for other pre-purchased 'loadout' Augments. This costs 2 Permanent Corruption." }
                    ]},
                    Advanced: { name: "The Reclaimer", abilities: [
                        { name: "Blight-Sealed System (Blight Resistance)", type: "Augment", description: "Your systems are hermetically sealed and your runic enchantments are specifically designed to repel corruption. You gain a significant advantage (+2 bonus) on all rolls made to resist the effects of the Blight." },
                        { name: "Combat Hardening", type: "Augment", description: "You are built to withstand unexpected attacks from Blight creatures or desperate scavengers. You gain +1 natural armor against both Blunt and Wound damage." },
                        { name: "[REDACTED PROTOCOL]", type: "Move", description: "Buried deep in your core programming are sealed orders from The Nine. When you encounter technology of Seraphim origin or a location of immense Aetheric sealing, you can access these protocols. Roll 2d6 + Willpower. 10+: Receive a clear, functional directive from your core programming." }
                    ]}
                }
            },
            "Maintenance": {
                focus: "Infrastructure, engineering, and the deep, hidden knowledge of Sidonia's inner workings.",
                general: [
                    { name: "Access Schematics (City Infrastructure)", type: "Move", description: "Once per session, you can access your internal databanks for a detailed map or schematic of a piece of Sidonia's core municipal infrastructure in your current district." },
                    { name: "Integrated Toolkit", type: "Augment", description: "Your chassis contains a comprehensive set of masterwork tools for mechanical and electrical repair. You are never without the right tool for an Engineering job, granting you a +1 bonus on such rolls when the right tool is a factor." }
                ],
                models: {
                    Basic: { name: "The Maintenance Unit", abilities: [
                        { name: "Environmental Sealing (Durability)", type: "Augment", description: "You are designed to operate in the worst possible conditions. You are immune to damage and penalties from conventional environmental hazards like toxic gas, extreme temperatures, or high pressure." },
                        { name: "Aetheric Diagnostics (Adaptive Scan)", type: "Move", description: "You can scan the Aetheric signature of a piece of technology to understand its true nature. As an action, target one device and roll 2d6 + Engineering. 10+: The GM tells you its precise function, current power state, primary flaw, and Aetheric resonance." }
                    ]},
                    Advanced: { name: "The Technician", abilities: [
                        { name: "Master Craftsman (Problem Solving)", type: "Augment", description: "Your processing core is a marvel of logical and intuitive engineering. You gain a permanent +1 bonus to all Engineering and Science rolls." },
                        { name: "Right of Repair (Aetheric Authority)", type: "Augment", description: "You possess ancient, hard-coded access keys that are still recognized by Sidonia's automated core systems. You can open maintenance hatches, access service tunnels, and override municipal systems. This costs 3 Permanent Corruption." }
                    ]}
                }
            }
        }
    }
};

// FIX: Added MENTALIST_DATA to resolve import errors in CharacterSheet and EsperPowerSelector.
export const MENTALIST_DATA = {
    archetypes: {
        "Empath": {
            name: "Empath",
            // FIX: Add missing description to Mentalist archetypes to resolve property access error.
            description: "Feels the emotions of others, capable of soothing or reading them.",
            moves: [
                { name: "Emotional Resonance", description: "You read the surface emotions of a target. On a 10+, you get a clear reading of their primary emotion. On a 7-9, the feeling is muddled or you pick up stray emotions from others nearby." },
                { name: "Soothing Presence", description: "You project an aura of calm. Hostile NPCs must make a Willpower check to act aggressively towards you or your allies." }
            ]
        },
        "Mesmer": {
            name: "Mesmer",
            // FIX: Add missing description to Mentalist archetypes to resolve property access error.
            description: "Subtly influences minds, planting suggestions and captivating attention.",
            moves: [
                { name: "Compelling Suggestion", description: "You plant a single, simple suggestion in a target's mind (e.g., 'You feel thirsty,' 'You trust me'). On a 10+, they act on it naturally. On a 7-9, they act on it but are aware something is strange." },
                { name: "Gaze Into My Eyes", description: "You lock eyes with a target. They are held motionless and unable to act as long as you maintain concentration. Any hostile action breaks the effect." }
            ]
        },
        "Siren": {
            name: "Siren",
            // FIX: Add missing description to Mentalist archetypes to resolve property access error.
            description: "Projects psychic power through voice and presence, sowing discord or compelling obedience.",
            moves: [
                { name: "Song of Discord", description: "You project a psychic hum that agitates and confuses enemies in an area, imposing a penalty on their next action." },
                { name: "Voice of Command", description: "You issue a one-word command to a target with psychic force. On a 10+, they must obey if it's not directly harmful. On a 7-9, they can choose to take Stun damage to resist." }
            ]
        },
        "Dreamer": {
            name: "Dreamer",
            // FIX: Add missing description to Mentalist archetypes to resolve property access error.
            description: "Walks the paths of the subconscious, entering dreams and manifesting nightmares.",
            moves: [
                { name: "Dreamwalk", description: "You enter the dreams of a sleeping target. You can observe or subtly interact with their dreamscape to glean information or plant ideas." },
                { name: "Waking Nightmare", description: "You cause a target to experience a vivid, terrifying hallucination for a moment, potentially causing them to flee or freeze in fear." }
            ]
        },
        "Meta-Mind": {
            name: "Meta-Mind",
            // FIX: Add missing description to Mentalist archetypes to resolve property access error.
            description: "A pure psionic force, attacking minds directly and boosting cognitive functions.",
            moves: [
                { name: "Psychic Scalpel", description: "You make a precise mental attack, bypassing physical armor and inflicting Stun damage directly to a target's Intellect track." },
                { name: "Cognitive Boost", description: "You temporarily enhance an ally's mental acuity, giving them an advantage on their next Intellect-based roll." }
            ]
        }
    },
    framework: {
        polarity: [
            { name: "Receiver", description: "Your power is primarily inwardly focused. You are a sensor, a reader of minds and emotions, a living psychic antenna.", cost: 1 },
            { name: "Influencer", description: "Your power is outwardly focused. You project your will, emotions, and thoughts onto the world and others.", cost: 1 }
        ],
        scope: [
            { name: "Focal Point", description: "Your abilities are most effective when directed at a single, specific target. Precision over power.", cost: 1 },
            { name: "Aural Field", description: "Your abilities manifest as a wave or emanation, affecting an area or multiple targets near you. Power over precision.", cost: 1 }
        ]
    }
};

// FIX: Added ESPER_PRIORITY_DATA to resolve import error in EsperPowerSelector.
export const ESPER_PRIORITY_DATA = {
    [Priority.A]: { base: true, mentalist: true, steps: 0 },
    [Priority.B]: { base: true, mentalist: false, steps: 2 },
    [Priority.C]: { base: false, mentalist: true, steps: 0 },
    [Priority.D]: { base: true, mentalist: false, steps: 1 },
    [Priority.E]: { base: true, mentalist: false, steps: 0 },
};

// FIX: Added ESPER_DATA to resolve import errors in CharacterSheet and EsperPowerSelector.
export const ESPER_DATA: Record<string, any> = {
    "Sentinel": {
        name: "Sentinel",
        philosophy: "The Sentinel is a living fortress, an Esper whose Aether-organ is fundamentally attuned to the realities of combat. They perceive the battlefield not as chaos, but as a flow of data to be processed and acted upon. Their power is reactive, intuitive, and focused on control and survival. This is the baseline from which all Sentinel specializations evolve.",
        abilities: [
            {
                name: "Battle Cognition",
                description: "Your mind is a combat computer. You instinctively process tactical data, remain calm under fire, and anticipate enemy actions with an unnerving prescience. This is not a conscious thought; it is an innate state of being in a high-stress environment.",
                effect: "You have an advantage on all Initiative rolls (roll 3d6, drop the lowest). Additionally, you are immune to the negative effects of fear from mundane sources (gunfire, intimidation) and have an advantage on rolls to resist supernatural fear."
            },
            {
                name: "Aetheric Defense",
                description: "Your Aether-organ reacts to incoming threats, hardening your bio-field an instant before impact. This is not armor; it is a flicker of reactive, localized reality warping that dulls the force of a blow.",
                effect: "You have innate, regenerating protection. You have a pool of 3 Shield Boxes. At the start of your turn, if you have taken damage to this pool, it regenerates 1 Shield Box. Incoming damage ticks off these Shield Boxes before affecting your Health/Stun tracks. This pool does not stack with the Sorcerer's Aegis Shield Move."
            },
            {
                name: "Aetheric Overclock",
                description: "You can intentionally flood your system with raw Aether, pushing your body and powers past their normal operational limits for a brief, brilliant moment.",
                results: {
                    "10+": "You overclock successfully. For the next minute, you gain a +1 bonus to all rolls made using your Esper powers.",
                    "7-9": "You succeed, but the power is unstable. You get the +1 bonus, but the violent surge of Aether costs you 1 Temporary Corruption.",
                    "6-": "The overclock fails, and the feedback stutters your system. You cannot use any Esper powers on your next turn."
                }
            }
        ],
        focuses: {
            "Juggernaut": {
                name: "Juggernaut",
                philosophy: "Defense through inexorable force. The Juggernaut abandons tactical finesse in favor of becoming an unstoppable, unbreakable wall of flesh and Aether. They are the anchor point of a battle, weathering blows that would fell lesser beings and delivering single, telegraphed, but utterly devastating attacks. Their power is not about speed; it's about momentum.",
                abilities: [
                    {
                        name: "Tireless",
                        description: "You activate a \"sustained performance\" protocol within your Aether-organ. Your body's need for rest and recovery is deferred, allowing you to operate at peak physical capacity long after others would have collapsed from exhaustion. You are relentless.",
                        effect: "You do not suffer the normal penalties from exhaustion. You can continue to fight, run, or perform strenuous physical activity for hours without penalty. However, you are only deferring the cost. For every scene you use this ability, you must spend twice that amount of time in complete rest during the next Downtime before you can recover any Health or Stun damage. You can push your body to incredible limits, but the bill always comes due."
                    },
                    {
                        name: "Overpower",
                        description: "You channel all of your Aetheric energy into a single, massive, all-or-nothing blow. This is not a quick strike; it is a telegraphed, earth-shattering display of force, perfect for breaking down defenses or obliterating a stationary target.",
                        results: {
                            "10+": "Your attack is overwhelming. Your next melee attack this turn automatically hits and deals +3 damage.",
                            "7-9": "The blow is powerful but uncontrolled. The attack still hits and deals the bonus damage, but the wild exertion leaves you wide open. Your opponents have an advantage on their next attack roll against you.",
                            "6-": "You over-commit to the swing, losing your balance and staggering. You miss your attack completely and cannot take a defensive action until your next turn."
                        }
                    },
                    {
                        name: "Thick Skin",
                        description: "Your Aetheric Defense has become proactive rather than reactive. Your bio-field is now permanently hardened, creating a tangible, armor-like barrier that is always active.",
                        effect: "Your baseline durability is increased. You gain a permanent +1 natural armor against both Wound and Blunt damage. This stacks with the protection from your Aetheric Defense Shield Boxes, making you incredibly tough to injure."
                    }
                ],
                focuses: {}
            },
            "Dragoon": {
                name: "Dragoon",
                philosophy: "Mobility. The Dragoon redefines their relationship with the battlefield, treating it not as a static grid but as a three-dimensional space to be crossed in an instant. They are masters of the sudden strike and the impossible repositioning.",
                abilities: [
                    {
                        name: "Flash Step",
                        description: "You push your Aether-organ to its limit, creating a momentary, localized warp. You don't run; you simply cease to be in one place and arrive in another.",
                        results: {
                            "10+": "You instantly move to any location you can see within a short distance (e.g., 50 feet). This movement does not provoke any reactionary attacks.",
                            "7-9": "You make the jump successfully, but the biological strain is intense. You suffer 1 Stun damage, or the chaotic exit adds 1 DP to the Dissonance Pool.",
                            "6-": "The warp is unstable. You arrive at a location near your intended target, but not precisely where you wanted, possibly leaving you in a poor tactical position."
                        }
                    },
                    {
                        name: "Pierce the Sky",
                        description: "You channel Aether into your legs, unleashing a single, impossibly powerful leap aimed at delivering a devastating blow. This is not for travel; it is a weaponized trajectory.",
                        results: {
                            "10+": "Your leap is perfect. You can launch yourself from any surface and land adjacent to any target within a significant range (e.g., across a wide street, or from a rooftop down to the street). Your first melee attack upon landing automatically hits and deals +1 damage from the sheer force of the impact.",
                            "7-9": "The landing is rough. Your attack still hits, but you suffer the \"shaken\" effect for a moment, taking a minor penalty on your next defensive roll as you recover your footing.",
                            "6-": "You misjudge the arc. You land near your target but not in melee range, and the jarring impact means you cannot take an attack action this turn."
                        }
                    },
                    {
                        name: "Aetheric Parkour",
                        description: "This is a passive state of grace. The Aether subtly cushions your falls, lightens your steps, and guides your hands and feet to impossible holds. Walls become temporary floors, and long falls are merely an opportunity to reposition.",
                        effect: "You have mastered supernatural mobility. You can run up walls for short distances, slide down sheer surfaces without harm, and leap across gaps that would be impossible for a normal athlete. You ignore all movement penalties from difficult or uneven terrain. This represents your character's new, fundamental relationship with their environment."
                    }
                ],
                focuses: {}
            },
            "Battle Saint": {
                name: "Battle Saint",
                philosophy: "The best defense is a relentless offense. The Battle Saint has repurposed their defensive Aetheric abilities into tools for aggression and analysis. They are not concerned with enduring the fight; they are focused on ending it. They are students of violence in all its forms.",
                abilities: [
                    {
                        name: "All In",
                        description: "You deliberately drop your reactive Aetheric defenses, shunting that power directly into your offensive capabilities for a single, decisive attack.",
                        effect: "As part of a melee or ranged attack action, you can choose to go \"All In.\" For that single attack, you gain a +2 bonus to your roll. However, your Aetheric Defense pool is completely depleted and cannot regenerate until the start of your next turn, leaving you vulnerable."
                    },
                    {
                        name: "Assess Opponent",
                        description: "You use your Battle Cognition not just for awareness, but for analysis. By observing a target's stance, movements, and equipment, you can instantly get a read on their martial capabilities.",
                        effect: "As an action, you can assess a single opponent. The GM will tell you their general fighting style (e.g., brawler, martial artist, marksman) and their level of proficiency (Untrained, Trained, Expert, or Master) in their primary combat skill."
                    },
                    {
                        name: "Weapons Expert",
                        description: "Your Aether-organ grants you an intuitive, baseline understanding of any weapon you pick up. You instinctively know the proper grip, balance, and basic function of any tool designed for combat.",
                        effect: "(Passive): You are considered to have a Trained (0) skill level with every weapon, even those you have never seen before. You will never suffer an \"untrained\" penalty. Furthermore, if you decide to spend XP to increase your skill with a specific weapon, the cost to reach the Expert rank is halved."
                    }
                ],
                focuses: {}
            }
        }
    },
    "Median": {
        name: "Median",
        philosophy: "Life flows through me. I am a conduit for healing, a mender of flesh and spirit.",
        abilities: [
            {
                name: "Bioscan",
                description: "You place your hand on a living being and attune your Aether-organ to its biological rhythms, allowing you to instantly diagnose its physical state.",
                effect: "You gain precise information about the target's health. You know their exact Health and Stun boxes, can detect any diseases or poisons, and identify the presence of mutations or bioware."
            },
            {
                name: "Triage",
                description: "You channel raw Aether directly into a wounded living being, kickstarting its natural healing processes. This is battlefield medicine, quick and potent.",
                effect: "You can mend fresh wounds. Clear two ticked boxes from one location's Stun Track OR one boxfrom its Health Boxes. This can be used on yourself or a target you touch."
            },
            {
                name: "Treatment",
                description: "You perform a more focused and sustained application of Aetheric healing to combat chronic conditions, diseases, or poisons. This takes time and concentration.",
                effect: "Over a period of minutes or even a scene, you can effectively treat one disease or poison affecting a target. On a successful roll, you either neutralize the poison, or halt the progression of a disease, allowing natural recovery to begin."
            }
        ],
        focuses: {
            "Gene-Splicer": {
                name: "Gene-Splicer",
                philosophy: "Flesh is mutable. The Gene-Splicer has moved beyond simple mending to become an architect of biological form. They understand the Aetheric \"code\" of life itself, allowing them to rewrite it.",
                abilities: [
                    {
                        name: "Gene Mapping",
                        description: "You perform an incredibly detailed bioscan, not just of a being's current state, but of its fundamental biological blueprint.",
                        effect: "You gain access to the target's complete genetic code, revealing predispositions, hidden flaws, or latent mutations. This also allows you to identify all their innate biological strengths and weaknesses, giving you deep insight into their physical nature."
                    },
                    {
                        name: "Corrective Therapy",
                        description: "You can manipulate a creature's genetic structure to remove flaws or integrate new biological components.",
                        effect: "Over a period of Downtime and with appropriate materials (bioware, tissue samples), you can repair chronic conditions or remove congenital defects."
                    },
                    {
                        name: "Bio-Mods (Tier 1 & 2)",
                        description: "Your expertise allows you to understand and work with basic and corporate-grade bioware.",
                        effect: "(Passive): You can install, maintain, and repair any Tier 1 or Tier 2 Bio-Mods on any willing or helpless subject."
                    }
                ],
                focuses: {}
            },
            "Green Thumb": {
                name: "Green Thumb",
                philosophy: "The pulse of life is not limited to blood. The Green Thumb has attuned their Aetheric Cortex to the unique biological frequencies of the plant kingdom. They are gardeners, botanists, and masters of flora, able to sense the needs of plants and accelerate their growth with a touch.",
                abilities: [
                    {
                        name: "Horticultural Mastery",
                        description: "You possess an intuitive, encyclopedic knowledge of plant life. You understand soil composition, nutrient requirements, and the fundamental biology of any plant you encounter.",
                        effect: "(Passive): You are considered to have an Expert (+1) skill rank in Science (Botany) or a similar knowledge skill. You can identify any plant, know its properties (poisonous, edible, medicinal), and understand what it needs to thrive."
                    },
                    {
                        name: "Enhance Growth",
                        description: "You channel life-giving Aether into a plant, dramatically accelerating its growth cycle.",
                        effect: "You can touch a seed or small plant and cause it to grow to its full maturity in a matter of minutes. You could cause vines to rapidly snake up a wall to create a ladder, or cause thorny bushes to instantly erupt from the ground to form a barrier."
                    },
                    {
                        name: "Treat Plants",
                        description: "You use your healing abilities to mend damage to plants or purge them of disease and corruption.",
                        effect: "You can touch a diseased or damaged plant and restore it to health. This can be used to neutralize blights, cure infections, or even mend physical damage to ancient, important trees."
                    }
                ],
                focuses: {}
            },
            "Beast Doctor": {
                name: "Beast Doctor",
                philosophy: "Life is life, whether it walks on two legs or four. The Beast Doctor has attuned their healing abilities specifically to the non-human creatures of the world. They understand animal biology with an intuitive grace and can soothe the most savage beast with their calming presence.",
                abilities: [
                    {
                        name: "Scent of the Median",
                        description: "You passively emit a complex series of pheromones that are calming to non-human animals. They instinctively recognize you as a non-threatening, even comforting, presence.",
                        effect: "(Passive): Animals will not willingly attack you unless you or an ally act aggressively toward them first. You have an advantage on all Social rolls made to calm, tame, or interact with animals."
                    },
                    {
                        name: "Heal Chimera",
                        description: "You have specialized your healing arts to work on the complex and often unstable biology of Chimeras and other animalistic creatures.",
                        effect: "Your Triage and Treatment Moves are exceptionally effective when used on animals or Chimeras. When healing them, you can choose to clear one additional Stun box or automatically succeed on a Treatment roll without needing to roll the dice."
                    },
                    {
                        name: "Treat Chimera",
                        description: "An extension of the above, allowing for more complex veterinary care.",
                        effect: "This functions identically to your Heal Chimera ability, reinforcing your role as a master of non-human biology."
                    }
                ],
                focuses: {}
            }
        }
    },
    "Weaver": {
        name: "Weaver",
        philosophy: "The Weaver perceives the world not as solid objects, but as an intricate tapestry of energy and patterns. They are living conduits, attuned to the flow of power, the geometry of space, and the subtle rhythms of reality. They do not force their will upon the world like a Sorcerer; instead, they gently pluck at the threads of existence to create their desired effect.",
        abilities: [
            {
                name: "Sense Energy",
                description: "You can attune your senses to perceive the flow of energy around you. This includes electrical currents in the walls, the heat signature of a living being, or the Aetheric glow of a magical effect.",
                effect: "As an action, you can open your senses to energy. The GM will describe the significant energy sources in your immediate vicinity, allowing you to spot active electronics, hidden power conduits, or active magical wards."
            },
            {
                name: "Pattern Recognition",
                description: "Your mind is naturally inclined to see the patterns in all things, from the trajectory of a ricocheting bullet to the subtle tells in a person's speech or the flaw in a structural support.",
                effect: "Once per scene, you can study a situation or an opponent and ask the GM for the \"pattern.\" The GM will reveal a single, exploitable pattern (e.g., \"The guard's patrol route has a consistent blind spot,\" \"This opponent always telegraphs their heavy attack with a slight dip of their left shoulder\")."
            },
            {
                name: "Disrupt Energy",
                description: "By creating a small, dissonant pulse of Aether, you can interfere with a targeted energy pattern.",
                effect: "You can target a single, simple electronic device (an electrical switch, a radio, a light) and cause it to temporarily malfunction, or you can attempt to disrupt a sustained magical effect, causing it to flicker or weaken for a moment."
            }
        ],
        focuses: {
            "Web Walker": {
                name: "Web Walker",
                philosophy: "Space is not a barrier; it is a path. The Web Walker has focused their understanding of patterns onto the physical geometry of the world. They see the lines, the angles, and the connections that others miss, allowing them to traverse their environment with impossible grace and precision. They are the ultimate parkour artists and masters of positioning.",
                abilities: [
                    {
                        name: "Spatial Awareness",
                        description: "You possess a perfect, intuitive sense of distance, dimension, and relation. Your mind is a three-dimensional map of your immediate surroundings.",
                        effect: "(Passive): You have a perfect sense of range. You never suffer penalties for misjudging the distance for a thrown weapon, a leap, or a ranged attack. You instinctively know if a target is 10 feet away or 11."
                    },
                    {
                        name: "Geometry Mastery",
                        description: "Your understanding of angles and trajectories is supernatural. You can calculate the precise path an object will take after bouncing off one or multiple surfaces.",
                        effect: "(Passive): This is the \"never play pool against them\" augment. You can perform impossible trick shots with thrown objects or ranged weapons, bouncing them off walls to strike targets behind cover. This functions similarly to the Gun Saint's Bounce It move, but can be applied to any projectile."
                    },
                    {
                        name: "Navigate Terrain",
                        description: "You see the \"weave\" of the environment, allowing you to move across it with uncanny efficiency.",
                        effect: "You can use your knowledge of patterns to find the perfect path. You can move through any complex or difficult terrain (a dense forest, a rubble-strewn street, a crowded ballroom) at your full speed without penalty, flowing through the environment like water."
                    }
                ],
                focuses: {}
            },
            "Web Spinner": {
                name: "Web Spinner",
                philosophy: "The world is a story, and I have read ahead. The Web Spinner sees the patterns not in space, but in time and choice. They are masters of causality, seeing the threads of probability that connect actions to outcomes. They don't predict the future so much as they understand the present so perfectly that the future becomes obvious.",
                abilities: [
                    {
                        name: "Perfect Time",
                        description: "You have a flawless internal chronometer. You know the exact time down to the microsecond, can perfectly measure elapsed time, and have an intuitive sense of rhythm and tempo.",
                        effect: "(Passive): Your timing is impeccable. You have an advantage on all rolls where precise timing is the most critical factor (e.g., disarming a bomb, hitting a switch at the exact right moment, synchronized actions with an ally)."
                    },
                    {
                        name: "Predictive Analysis",
                        description: "You take your Pattern Recognition to the next level. You don't just see what an opponent isdoing; you see what they will do next based on their established patterns.",
                        effect: "After observing an opponent for one round, you can make a Predictive Analysis roll. On a success, the GM will tell you the most likely action your opponent will take on their next turn."
                    },
                    {
                        name: "Fleeting Glimpses",
                        description: "Your mind is constantly brushing against the threads of the future. Occasionally, you get a flash of foresight, a brief, contextless vision of a future event.",
                        effect: "(Narrative): At the GM's discretion, or once per session at a dramatic moment, you receive a cryptic, one-sentence vision of the future (e.g., \"The gun misfires,\" \"The floor gives way,\" \"He's lying\"). You have no control over what you see or when you see it."
                    }
                ],
                focuses: {}
            },
            "Web Warper": {
                name: "Web Warper",
                philosophy: "A perfect pattern is a boring pattern. The Web Warper has embraced dissonance, finding power and beauty in the corruption of pure systems. They are agents of chaos, not through random chance, but through the deliberate introduction of disharmonious frequencies into the weave of reality.",
                abilities: [
                    {
                        name: "Taste of the Fruit",
                        description: "You have taken a bite of the proverbial apple. You now perceive the world through a lens of duality and corruption, allowing you to see the inherent flaws and potential for chaos in any person, object, or system.",
                        effect: "Once per scene, you can look at a target (a person, a machine, a plan) and ask the GM for its \"corrupting truth.\" The GM will tell you a single, hidden flaw, secret desire, or repressed vice that can be exploited (e.g., \"The guard captain is secretly a gambling addict,\" \"This machine has a critical design flaw in its cooling system that no one knows about,\" \"The leader's 'noble' plan is secretly motivated by deep-seated jealousy\")."
                    },
                    {
                        name: "Counter-Harmonies",
                        description: "You instinctively move against the rhythm of your opponents, disrupting their flow and creating openings through sheer, calculated awkwardness.",
                        effect: "You gain a bonus to all defensive rolls made to dodge or parry. Your movements are jerky, unpredictable, and difficult to track, making you a frustrating and slippery opponent."
                    },
                    {
                        name: "Localized Distortion",
                        description: "An evolution of Disrupt Energy. You can now create a persistent field of Aetheric static in an area.",
                        effect: "You can target a 20-foot area. For the rest of the scene, all technology within that area becomes unreliable—lights flicker, audio becomes garbled with static, and any rolls made to operate complex machinery are at a penalty."
                    }
                ],
                focuses: {}
            },
            "Web Eater": {
                name: "Web Eater",
                philosophy: "A pattern exists only to be unmade. The Web Eater has turned their perception of the world's patterns toward a single, horrifying purpose: erasure. They have become attuned to the ultimate anti-pattern, the Void. They do not just disrupt energy; they negate it, unraveling the very threads of magic and existence.",
                abilities: [
                    {
                        name: "Void Sense",
                        description: "You can sense the \"gaps\" in reality, the places where the Void touches the world.",
                        effect: "You can automatically sense the presence of active Void magic, portals to the Void, and creatures deeply corrupted by its influence."
                    },
                    {
                        name: "Pass Ward",
                        description: "You can temporarily attune a magical ward or barrier to the frequency of the Void, causing a momentary \"hole\" in its defense that you can slip through.",
                        effect: "You can make a roll to bypass a single magical ward or barrier. On a success, you pass through it unharmed, leaving it intact behind you."
                    },
                    {
                        name: "Rune Breaker",
                        description: "You can touch a simple runic inscription and flood it with chaotic Void energy, causing the structured magic to collapse.",
                        effect: "You can instantly destroy any simple, non-permanent magical rune you can touch."
                    }
                ],
                focuses: {}
            }
        }
    },
    "Summoner": {
        name: "Summoner",
        philosophy: "The world is thin in places, and other realities bleed through. I am the one who calls out, and the one who is answered.",
        abilities: [
            { name: "Aetheric Echo", type: "Action", description: "You can create a minor, harmless psychic illusion (a sound, a smell, a small visual shimmer) to create a distraction." }
        ],
        focuses: {
            "Entity Binder": {
                name: "Entity Binder",
                philosophy: "A name is a chain, a bargain a cage. I will make pacts with the things between worlds and command them.",
                abilities: [
                    { name: "Lesser Servitor", type: "Ritual", description: "During downtime, you can bind a minor spirit to a small object. You can command this spirit to perform one simple, non-combat task." }
                ]
            }
        }
    },
    "Linker": {
        name: "Linker",
        philosophy: "The mind is a network. The Linker is the ultimate force multiplier, an Esper whose Aetheric Cortex functions like a biological wireless router. They do not excel in personal combat or overt power, but in their unparalleled ability to forge psychic connections between conscious minds. They are the strategists, the coordinators, and the heart of any effective team. A single Linker can turn five individuals into a single, cohesive, and terrifyingly efficient unit.",
        abilities: [
            {
                name: "Basic 5x5 Link",
                description: "You can establish a wide-net psychic link with up to five willing individuals, including yourself. This is the foundational team-based link.",
                effect: "For the duration of a scene, all linked members share a general awareness of each other's location and status (healthy, wounded, in danger). You, the Linker, can send simple, one-sentence commands telepathically to the entire group. All linked members gain a +1 synergy bonus when performing a coordinated action."
            },
            {
                name: "Basic 2-Way Link",
                description: "You establish a deep, private link with a single willing individual.",
                effect: "For the duration of a scene, you and your linked partner can communicate freely and instantly, thought-to-thought. You share a clear sense of each other's emotional state and can even share fleeting sensory impressions (a brief glimpse through their eyes, the echo of a sound they heard)."
            },
            {
                name: "Sense Sentience",
                description: "Your Aether-organ is constantly scanning for the \"signal\" of other thinking minds.",
                effect: "(Passive): You can automatically sense the presence and approximate number of sentient minds in your immediate vicinity (e.g., within the same large building), even through walls. You cannot read their thoughts, only know that they are there."
            }
        ],
        focuses: {
            "The Bonder": {
                name: "The Bonder",
                philosophy: "Two minds, one purpose. The Bonder has forsaken the wide net in favor of perfecting the deep, intimate two-way link. Their power comes from creating a bond so profound that two individuals begin to function as a single, synergistic being.",
                abilities: [
                    {
                        name: "Establish Permanent Bond",
                        description: "Through repeated linking and a deep emotional connection, you can forge a permanent, unbreakable two-way link with one specific individual.",
                        effect: "You and your bonded partner are now permanently linked. You are always aware of each other's general status, no matter the distance. This permanent bond is a prerequisite for your other abilities."
                    },
                    {
                        name: "Approaching Resonance",
                        description: "The longer you are bonded, the more your Aetheric signatures begin to align. Your minds start to bleed into one another.",
                        effect: "This is a narrative-focused move. The GM and both players should track the effects of this resonance. It might start small: you pick up your partner's verbal tics or they start humming a song only you should know. Over time, it can lead to skill-bleed (gaining a temporary bonus to a skill your partner is an expert in) or emotional transference. This is a powerful but potentially dangerous blurring of identities."
                    }
                ],
                focuses: {}
            },
            "The Hub": {
                name: "The Hub",
                philosophy: "One mind, many bodies. The Hub has dedicated themself to mastering the complex art of the 5x5 link. They are the ultimate team captain, the central server through which all communication and coordination flows. Their power is measured by the flawless efficiency of the team they command.",
                abilities: [
                    {
                        name: "Advanced 5x5 Link",
                        description: "Your team-based link is now more stable and has greater bandwidth.",
                        effect: "The coordination bonus for linked members increases to +2. Furthermore, you can now relay more complex information, including fleeting sensory data (a quick glimpse of what one member sees, the sound of a gunshot another hears) to the entire group."
                    },
                    {
                        name: "Switchboard",
                        description: "You can now function as a psychic switchboard operator, creating private, firewalled channels within your larger 5x5 link.",
                        effect: "Within your 5x5 link, you can choose to have a private, two-way telepathic conversation with any single member, without the others being aware of the communication."
                    },
                    {
                        name: "Approaching Resonance",
                        description: "The longer your team is linked, the more their Aetheric signatures begin to align. They develop an intuitive understanding of each other's thought processes and instincts.",
                        effect: "(Narrative): This is a narrative-focused augment. The more a team works together under the Hub's link, the more they will develop shared mannerisms, finish each other's sentences, and anticipate each other's actions without needing explicit commands. This can lead to incredible synergy but also a dangerous level of codependency."
                    }
                ],
                focuses: {}
            },
            "The Animist": {
                name: "The Animist",
                philosophy: "All life is a network. The Animist attunes their mind not to the logic of humanity, but to the primal, instinctual consciousness of the animal kingdom. They are masters of non-human communication, capable of forging links with beasts, monsters, and even alien hive minds.",
                abilities: [
                    {
                        name: "Primal Link",
                        description: "You can successfully establish your Basic 5x5 Link or Basic 2-Way Link with non-human, animalistic minds.",
                        effect: "You can form a psychic link with beasts. The nature of the link depends on the creature's intelligence; a simple beast might only convey basic emotions, while a more intelligent creature could share complex ideas."
                    },
                    {
                        name: "Primal Speech",
                        description: "You can communicate complex ideas and understand the non-verbal \"language\" of any animal you are linked with.",
                        effect: "You can hold a two-way \"conversation\" with any beast you have a Primal Link with, understanding its needs, fears, and intentions perfectly."
                    },
                    {
                        name: "Approaching Resonance",
                        description: "Your mind begins to align with the beasts you link with. You start to think more instinctually, while they may adopt some of your more complex reasoning.",
                        effect: "(Narrative): This represents a gradual blurring of lines between human and animal consciousness, a core theme for this path."
                    }
                ],
                focuses: {}
            }
        }
    }
};