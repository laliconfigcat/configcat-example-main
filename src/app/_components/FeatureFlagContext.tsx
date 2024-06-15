'use client';

import React, { createContext } from 'react';

export const FeatureFlagContext = createContext<any>([]);

export const FeatureFlagProvider: React.FC<any> = ({ children, flags }) => {
  return (<FeatureFlagContext.Provider value={flags}>{children}</FeatureFlagContext.Provider>);
}
