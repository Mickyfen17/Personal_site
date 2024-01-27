import * as React from 'react';
import { fetchWebsiteData } from './apis/fetchWebsiteData';
import { About } from './components/About';
import { Error } from './components/Error';
import { Footer } from './components/Footer';
import { Loading } from './components/Loading';
import { NeonHeader } from './components/NeonHeader';
import { ProjectsSection } from './components/Projects';
import { Toggle } from './components/Toggle';
import { NeonLightsContextProvider } from './context/NeonLightsContext';
import { useFetchReducer } from './reducers/fetchReducer';

export const App = () => {
  const fetchWebsite = React.useCallback((signal: AbortSignal) => fetchWebsiteData(signal), []);
  const [personalWebsiteState, retry] = useFetchReducer(fetchWebsite);

  const [lightsOn, toggleLights] = React.useState(true);

  if (personalWebsiteState.isLoading) {
    return <Loading />;
  }

  if (personalWebsiteState.isError) {
    return <Error retry={retry} />;
  }

  const { projects, skills } = personalWebsiteState.data;

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
