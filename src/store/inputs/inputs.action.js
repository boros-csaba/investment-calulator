import { INPUTS_ACTION_TYPES } from './inputs.types'

export const setStartAmount = (startAmount) => { return { type: INPUTS_ACTION_TYPES.SET_START_AMOUNT, payload: startAmount } };
export const setAdditionalContribution = (additionalContribution) => { return { type: INPUTS_ACTION_TYPES.SET_ADDITIONAL_CONTRIBUTION, payload: additionalContribution } };
export const setRateOfReturn = (rateOfReturn) => { return { type: INPUTS_ACTION_TYPES.SET_RATE_OF_RETURN, payload: rateOfReturn } };
export const setYears = (years) => { return { type: INPUTS_ACTION_TYPES.SET_YEARS, payload: years } };
export const setFrequency = (frequency) => { return { type: INPUTS_ACTION_TYPES.SET_FREQUENCY, payload: frequency } };