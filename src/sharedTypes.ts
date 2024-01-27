export type LinkTypes = 'github' | 'linkedin' | 'email' | 'project-link';

export type NeonColors = 'cyan' | 'pink';

export type ToggleModal = (projectId: string | null) => void;

export interface Project {
  description: string;
  git: string;
  gitHubRepo: string;
  image: string;
  linksConfig: {
    hasGithub: boolean;
    hasHostedSite: boolean;
  };
  site: string;
  siteURL: string;
  techUsed: string[];
  title: string;
}

export interface Skill {
  imageAlt: string;
  imagePath: string;
  skills: string[];
  title: string;
}

export type Projects = Map<string, Project>;
export type Skills = Skill[];
