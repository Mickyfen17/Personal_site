import * as React from 'react';
import { NeonLightsContextProvider } from './context/NeonLightsContext';
import { useAppReducer } from './reducers/useAppReducer';
import { NeonHeader } from './components/NeonHeader';
import { Error } from './components/Error';
import { Loading } from './components/Loading';
import { About } from './components/About';
import { ProjectsSection } from './components/Projects';
import { Footer } from './components/Footer';
import { Toggle } from './components/Toggle';

export const App = (): JSX.Element => {
  const {
    state: { isLoading, hasError, projects, skills },
    retry
  } = useAppReducer();
  const [lightsOn, toggleLights] = React.useState(true);

  if (isLoading) {
    return <Loading />;
  }

  if (hasError) {
    return <Error retry={retry} />;
  }

  return (
    <NeonLightsContextProvider lightsOn={lightsOn}>
      <Toggle lightsOn={lightsOn} toggleLights={toggleLights} />
      <NeonHeader>Mike Fenwick</NeonHeader>
      <About skills={skills} />
      <ProjectsSection projectsMap={projects} />
      <Footer />
    </NeonLightsContextProvider>
  );
};
