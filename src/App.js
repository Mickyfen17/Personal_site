import React, { Fragment, useState, useEffect, useReducer } from 'react';
import { NeonLightsContextProvider } from './context/NeonLightsContext';
import NeonHeader from './components/NeonHeader';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Toggle from './components/Toggle';

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

const formatProjects = projectsList => {
  const projectMap = new Map();

  projectsList.forEach(project => projectMap.set(project.title, project));
  return projectMap;
};

const useAppReducer = () => {
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

const App = () => {
  const [lightsOn, toggleLights] = useState(true);
  const { isLoading, hasError, projects, skills } = useAppReducer();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error</div>;
  }

  return (
    <Fragment>
      {projects && skills && (
        <NeonLightsContextProvider lightsOn={lightsOn}>
          <Toggle lightsOn={lightsOn} toggleLights={toggleLights} />
          <NeonHeader>Mike Fenwick</NeonHeader>
          <About skills={skills} />
          <Projects projectsMap={projects} />
          <Footer />
        </NeonLightsContextProvider>
      )}
    </Fragment>
  );
};

export default App;
