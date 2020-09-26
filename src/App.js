import React, { Fragment, useState } from 'react';
import { NeonLightsContextProvider } from './context/NeonLightsContext';
import { useAppReducer } from './reducers/useAppReducer';
import NeonHeader from './components/NeonHeader';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Toggle from './components/Toggle';

const App = () => {
  const { isLoading, hasError, projects, skills } = useAppReducer();
  const [lightsOn, toggleLights] = useState(true);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (hasError) {
    return <div>Error</div>;
  }

  return (
    <Fragment>
      <NeonLightsContextProvider lightsOn={lightsOn}>
        <Toggle lightsOn={lightsOn} toggleLights={toggleLights} />
        <NeonHeader>Mike Fenwick</NeonHeader>
        <About skills={skills} />
        <Projects projectsMap={projects} />
        <Footer />
      </NeonLightsContextProvider>
    </Fragment>
  );
};

export default App;
