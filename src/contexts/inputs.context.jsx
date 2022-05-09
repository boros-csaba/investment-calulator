import { createContext,  useReducer } from 'react';

export const InputsContext = createContext({
    inputs: {},
    setInputs: () => {}
});

export const INPUTS_ACTION_TYPES = {
    SET_START_AMOUNT: 'SET_START_AMOUNT'
}

const inputsReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case INPUTS_ACTION_TYPES.SET_START_AMOUNT:
            return {
                ...state,
                startAmount: payload
            };
        default:
            throw new Error(`Unhandled type ${type} in inputsReducer`);
    }
}

const INITIAL_STATE = {
    startAmount: 10000,
    additionalContribution: 1000,
    rateOfReturn: 6.0,
    years: 20,
    frequency: 3
}

export const InputsProvider = ({ children }) => {
    const [inputs, dispatch] = useReducer(inputsReducer, INITIAL_STATE);

    const setStartAmount = (startAmount) => {
        dispatch({ type: INPUTS_ACTION_TYPES.SET_START_AMOUNT, payload: startAmount})
    };

    const value = { inputs, setStartAmount };
    return <InputsContext.Provider value={value}>{children}</InputsContext.Provider>
}