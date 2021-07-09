import React from 'react';

export interface SSRContext {
  currentHost?: string;
}

export const SSRContext = React.createContext<SSRContext>({});
