import { INPUTS_ACTION_TYPES } from './inputs.types'

const INITIAL_STATE = {
    startAmount: 10000,
    additionalContribution: 1000,
    rateOfReturn: 6.0,
    years: 20,
    frequency: 3
}

export const inputsReducer = (state = INITIAL_STATE, action) => {
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
            return state;
    }
}