import { createContext, useState } from 'react';

export const InputsContext = createContext({
    inputs: {},
    setInputs: () => {}
});

export const InputsProvider = ({ children }) => {
    const [inputs, setInputs] = useState({});
    const value = { inputs, setInputs };
    return <InputsContext.Provider value={value}>{children}</InputsContext.Provider>
}