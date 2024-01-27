import { Project, Skills } from '../sharedTypes';

interface JSONResponse {
  projectData: Project[];
  skillData: Skills;
}

interface WebsiteData {
  data: {
    projects: Map<string, Project>;
    skills: Skills;
  };
}

const formatProjects = (projectsList: Project[]) => {
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
