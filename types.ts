export enum Priority {
  A = "A",
  B = "B",
  C = "C",
  D = "D",
  E = "E",
}

export enum Category {
  Lineage = "Lineage",
  Attributes = "Attributes",
  Skills = "Skills",
  Background = "Background",
  Resources = "Resources",
}

export type Priorities = Record<Category, Priority | null>;

export type AttributeName = "Physique" | "Intellect" | "Presence";

export interface Attributes {
  Physique: number;
  Intellect: number;
  Presence: number;
}

export interface AttributeSpecialization {
  attribute: AttributeName;
  name: string;
}

export type SkillName = 
  "Hand-to-Hand" | "Melee" | "Ranged" |
  "Athletics" | "Operator" | "Larceny" |
  "Social" | "Bureaucracy" | "Languages" |
  "Alertness" | "Academics" | "Science" | "Engineering" |
  "Occult" | "Medicine";

export interface Skill {
  name: SkillName;
  rank: number;
  specialization?: string;
}

export type Skills = Record<SkillName, Skill>;

export interface Contact {
  name:string;
  reach: number;
  loyalty: number;
  totalPoints: number;
}

export interface SorceryMove {
  name: string;
  sphere: string;
}

export interface SorcerySphere {
    name: string;
    type: 'Primary' | 'Secondary';
}

export interface ChimeraMutation {
    name: string;
    tier: number;
}

export interface NeoSapienAugment {
    name: string;
    tier: number;
    grade: 'Street' | 'Corporate' | 'Military';
    category: 'Physical' | 'Mental' | 'Social' | 'Miscellaneous';
}

export interface AutomataState {
    chassis: 'Overseer' | 'Soldier' | 'Worker' | null;
    model: 'Basic' | 'Advanced' | 'Imperial' | null;
    branch: string | null;
    soldierPackage?: 'Juggernaut' | 'Dragoon' | 'Legion';
}

export interface EsperAbility {
  name: string;
  description: string;
  effect?: string;
  results?: {
    "10+"?: string;
    "7-9"?: string;
    "6-"?: string;
  };
}

export interface EsperState {
    baseArchetype: string | null;
    mentalistArchetype: string | null;
    path: string[];
    abilities: EsperAbility[];
    mentalistPolarity: 'Receiver' | 'Influencer' | null;
    mentalistScope: 'Focal Point' | 'Aural Field' | null;
}

export interface Character {
  name: string;
  appearance?: string;
  personality?: string;
  history?: string;
  priorities: Priorities;
  lineage: {
    name: string;
    details: string;
  } | null;
  attributes: Attributes;
  attributePoints: number;
  attributeSpecializations: AttributeSpecialization[];
  skills: Skills;
  skillPoints: number;
  skillSpecializations: string[];
  maxSkillRank: number;
  background: {
    name: string;
    tier: string;
    specialization: string;
  } | null;
  resources: {
    points: number;
    contacts: Contact[];
    properties: string[];
    licenses: string[];
    items: string[];
  };
  corruption: {
    permanent: number;
    temporary: number;
  };
  chimera: {
      mutations: ChimeraMutation[];
      mutationPoints: number;
  };
  sorcery: {
    spheres: SorcerySphere[];
    moves: SorceryMove[];
    priorityCPath?: 1 | 2;
  };
  neoSapien: {
      augments: NeoSapienAugment[];
  };
  automata: AutomataState;
  esper: EsperState;
}