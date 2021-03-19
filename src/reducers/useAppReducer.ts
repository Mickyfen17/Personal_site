import * as React from 'react';

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

interface WebisteData {
  projects: Projects;
  skills: Skills;
}

type ACTIONTYPE =
  | { type: 'LOAD_DATA' }
  | { type: 'LOAD_DATA_SUCCESS'; payload: { projects: Projects; skills: Skills } }
  | { type: 'LOAD_DATA_FAILED' };

interface State {
  isLoading: boolean;
  hasError: boolean;
  projects: Projects | null;
  skills: Skills | null;
}

const initialState = {
  isLoading: true,
  hasError: false,
  projects: null,
  skills: null
};

const reducer = (state: State, action: ACTIONTYPE) => {
  switch (action.type) {
    case 'LOAD_DATA':
      return {
        ...state,
        isLoading: true,
        hasError: false
      };
    case 'LOAD_DATA_SUCCESS':
      return {
        ...state,
        isLoading: false,
        hasError: false,
        ...action.payload
      };
    case 'LOAD_DATA_FAILED':
      return {
        ...state,
        isLoading: false,
        hasError: true
      };

    default:
      return state;
  }
};

const formatProjects = (projectsList: Project[]): Projects => {
  const projectMap = new Map<string, Project>();

  projectsList.forEach((project) => projectMap.set(project.title, project));
  return projectMap;
};

const fetchWebsiteData = async (): Promise<WebisteData> => {
  const response = await fetch(
    'https://uq9jwb3puh.execute-api.us-east-2.amazonaws.com/PROD/my-data'
  );
  const { projectData, skillData: skills }: JSONResponse = await response.json();
  const projects = formatProjects(projectData);

  return { projects, skills };
};

export const useAppReducer = (): { state: State; retry: VoidFunction } => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  const retry = () => {
    dispatch({ type: 'LOAD_DATA' });
  };

  React.useEffect(() => {
    fetchWebsiteData()
      .then(({ projects, skills }) =>
        dispatch({
          type: 'LOAD_DATA_SUCCESS',
          payload: { projects, skills }
        })
      )
      .catch((err: Error) => {
        dispatch({ type: 'LOAD_DATA_FAILED' });
        console.error(err);
      });
  }, [state.isLoading]);

  return { state, retry };
};
