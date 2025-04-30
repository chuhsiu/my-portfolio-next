interface ExpTrans {
    title: string;
    company: string;
    content: string[];
  }
  
  interface ExpData {
    id: number,
    sortOrder: number,
    startDate: string,
    endDate: string,
    translations: {
      [locale: string]: ExpTrans;
    };
  }

  interface SkillData {
    id: number,
    name: {
        [locale: string] : string;
    },
    skills: SkillItem[]
  }

  interface SkillItem {
    id: number,
    name: string,
  }

  interface ProjectTrans {
    name: string;
    content: string[];
  }
  
  export interface ProjectData {
    id: number,
    image: string,
    code: string,
    link: string,
    translations: {
      [locale: string]: ProjectTrans;
    };
  }

  export async function getExp(): Promise<[ExpData]> {
    const res = await fetch('http://localhost:3000/data/experience.json', {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw Error;
    return res.json();
  }

  export async function getSkill(): Promise<[SkillData]> {
    const res = await fetch('http://localhost:3000/data/skills.json', {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw Error;
    return res.json();
  }

  export async function getProject(): Promise<[ProjectData]> {
    const res = await fetch('http://localhost:3000/data/projects.json', {
      next: { revalidate: 60 },
    });
    if (!res.ok) throw Error;
    return res.json();
  }