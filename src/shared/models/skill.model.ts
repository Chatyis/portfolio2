interface Skill {
  name: string;
  level: number;
  icon?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}
