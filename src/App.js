import React, { Fragment, useState } from 'react';
import { NeonLightsContextProvider } from './context/NeonLightsContext';
import { useAppReducer } from './reducers/useAppReducer';
import NeonHeader from './components/NeonHeader';
import About from './components/About';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Toggle from './components/Toggle';
import Loading from './components/Loading';
import Error from './components/Error';

const App = () => {
  const {
    state: { isLoading, hasError, projects, skills },
    retry
  } = useAppReducer();
  const [lightsOn, toggleLights] = useState(true);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <Error retry={retry} />;
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
