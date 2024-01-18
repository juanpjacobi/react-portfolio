import React, { createContext, useReducer, useContext } from 'react';
import { apiReducer } from '../reducers/apiReducer';

const ApiContext = createContext();

const initialState = {
  loading: false,
  error: null,
  projects: [],
  skills: []
};

const ApiProvider = ({ children }) => {
  const [state, dispatch] = useReducer(apiReducer, initialState);

  return (
    <ApiContext.Provider value={{ state, dispatch }}>
      {children}
    </ApiContext.Provider>
  );
};

const useApi = () => {
  const context = useContext(ApiContext);
  if (!context) {
    throw new Error('useApi must be used within an ApiProvider');
  }
  return context;
};

export { ApiProvider, useApi };
