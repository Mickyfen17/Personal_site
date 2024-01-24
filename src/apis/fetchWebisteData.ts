interface Project {
  description: string;
  gitHubRepo: string;
  icons: {
    site: string;
    git: string;
  };
  git: string;
  site: string;
  image: string;
  siteURL: string;
  techUsed: string[];
  title: string;
}

interface Skill {
  imageAlt: string;
  imagePath: string;
  skills: string[];
  title: string;
}

export type Projects = Map<string, Project>;
export type Skills = Skill[];

interface JSONResponse {
  projectData: Project[];
  skillData: Skills;
}

interface WebsiteData {
  data: {
    projects: Projects;
    skills: Skills;
  };
}

const formatProjects = (projectsList: Project[]): Projects => {
  const projectMap = new Map<string, Project>();

  projectsList.forEach((project) => projectMap.set(project.title, project));
  return projectMap;
};

export const fetchWebsiteData = async (signal: AbortSignal): Promise<WebsiteData> => {
  const response = await fetch(
    'https://uq9jwb3puh.execute-api.us-east-2.amazonaws.com/PROD/my-data',
    { signal }
  );
  const { projectData, skillData: skills }: JSONResponse = await response.json();
  const projects = formatProjects(projectData);

  return { data: { projects, skills } };
};
