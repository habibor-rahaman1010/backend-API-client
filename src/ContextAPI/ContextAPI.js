import React, { createContext } from 'react';
import LoadAPI from '../LoadAPI/Load.Api';

export const myContextApi = createContext({});

const ContextAPI = ({ children }) => {
    const allContext = {
        LoadAPI,
    }
    return (
        <myContextApi.Provider value={allContext}>
            {children}
        </myContextApi.Provider>
    );
};

export default ContextAPI;