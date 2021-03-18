import * as React from 'react';

interface NeonLightsContextProviderProps {
  children: React.ReactNode;
  lightsOn: boolean;
}

export const NeonLightsContext = React.createContext(false);

export const NeonLightsContextProvider = ({
  children,
  lightsOn
}: NeonLightsContextProviderProps): JSX.Element => (
  <NeonLightsContext.Provider value={lightsOn}>{children}</NeonLightsContext.Provider>
);

export const useNeonLightsContext = (): boolean => React.useContext(NeonLightsContext);
