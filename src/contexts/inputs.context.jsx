import { createContext, useState } from 'react';

export const InputsContext = createContext({
    inputs: {},
    setInputs: () => {}
});

export const InputsProvider = ({ children }) => {
    const [inputs, setInputs] = useState({ 
        startAmount: 10000,
        additionalContribution: 1000,
        rateOfReturn: 6.0,
        years: 10,
        frequency: 3
    });
    const value = { inputs, setInputs };
    return <InputsContext.Provider value={value}>{children}</InputsContext.Provider>
}