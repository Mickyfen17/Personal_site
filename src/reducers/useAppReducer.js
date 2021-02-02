import { useEffect, useReducer } from 'react';

const LOAD_DATA_SUCCESS = 'LOAD_DATA_SUCCESS';
const LOAD_DATA_FAILED = 'LOAD_DATA_FAILED';

const initialState = {
  isLoading: true,
  hasError: false,
  projects: null,
  skills: null
};

const reducer = (state, action) => {
  switch (action.type) {
    case LOAD_DATA_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        ...action.payload
      };
    case LOAD_DATA_FAILED:
      return {
        ...state,
        isLoading: false,
        hasError: true
      };

    default:
      return state;
  }
};

const formatProjects = (projectsList) => {
  const projectMap = new Map();

  projectsList.forEach((project) => projectMap.set(project.title, project));
  return projectMap;
};

export const useAppReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = async () => {
    try {
      const response = await fetch(
        'https://uq9jwb3puh.execute-api.us-east-2.amazonaws.com/PROD/my-data'
      );
      const { projectData, skillData: skills } = await response.json();
      const projects = formatProjects(projectData);

      dispatch({
        type: LOAD_DATA_SUCCESS,
        payload: { projects, skills }
      });
    } catch (err) {
      dispatch({ type: LOAD_DATA_FAILED });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return state;
};
