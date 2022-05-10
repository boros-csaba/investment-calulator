import { combineReducers } from "redux";

import { inputsReducer } from './inputs/inputs.reducer'

export const rootReducer = combineReducers({
    inputs: inputsReducer
})