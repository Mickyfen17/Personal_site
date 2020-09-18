import React, { useContext } from 'react';

export const NeonLightsContext = React.createContext(false);

export const NeonLightsContextProvider = ({ children, lightsOn }) => (
  <NeonLightsContext.Provider value={lightsOn}>{children}</NeonLightsContext.Provider>
);

export const useNeonLightsContext = () => useContext(NeonLightsContext);
