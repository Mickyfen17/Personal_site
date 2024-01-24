import * as React from 'react';
import { NeonLightsContextProvider } from './context/NeonLightsContext';
import { useFetchReducer } from './reducers/fetchReducer';
import { NeonHeader } from './components/NeonHeader';
import { Error } from './components/Error';
import { Loading } from './components/Loading';
import { About } from './components/About';
import { ProjectsSection } from './components/Projects';
import { Footer } from './components/Footer';
import { Toggle } from './components/Toggle';
import { fetchWebsiteData } from './apis/fetchWebisteData';

export const App = (): JSX.Element => {
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
