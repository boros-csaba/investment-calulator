import { createContext,  useReducer } from 'react';

export const InputsContext = createContext({
    inputs: {},
    setInputs: () => {}
});

export const INPUTS_ACTION_TYPES = {
    SET_START_AMOUNT: 'SET_START_AMOUNT',
    SET_ADDITIONAL_CONTRIBUTION: 'SET_ADDITIONAL_CONTRIBUTION',
    SET_RATE_OF_RETURN: 'SET_RATE_OF_RETURN',
    SET_YEARS: 'SET_YEARS',
    SET_FREQUENCY: 'SET_FREQUENCY'
}

const inputsReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case INPUTS_ACTION_TYPES.SET_START_AMOUNT:
            return {
                ...state,
                startAmount: payload
            };
        case INPUTS_ACTION_TYPES.SET_ADDITIONAL_CONTRIBUTION:
            return {
                ...state,
                additionalContribution: payload
            };
        case INPUTS_ACTION_TYPES.SET_RATE_OF_RETURN:
            return {
                ...state,
                rateOfReturn: payload
            };
        case INPUTS_ACTION_TYPES.SET_YEARS:
            return {
                ...state,
                years: payload
            };
        case INPUTS_ACTION_TYPES.SET_FREQUENCY:
            return {
                ...state,
                frequency: payload
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
    const setAdditionalContribution = (additionalContribution) => {
        dispatch({ type: INPUTS_ACTION_TYPES.SET_ADDITIONAL_CONTRIBUTION, payload: additionalContribution})
    };
    const setRateOfReturn = (rateOfReturn) => {
        dispatch({ type: INPUTS_ACTION_TYPES.SET_RATE_OF_RETURN, payload: rateOfReturn})
    };
    const setYears = (years) => {
        dispatch({ type: INPUTS_ACTION_TYPES.SET_YEARS, payload: years})
    };
    const setFrequency = (frequency) => {
        dispatch({ type: INPUTS_ACTION_TYPES.SET_FREQUENCY, payload: frequency})
    };

    const value = { inputs, setStartAmount, setAdditionalContribution, setRateOfReturn, setYears, setFrequency };
    return <InputsContext.Provider value={value}>{children}</InputsContext.Provider>
}