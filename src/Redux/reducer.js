import {DISPLAY} from '../shared/productDisplay';
import { POWDERS } from '../shared/powders';
import {CAPSULES} from '../shared/products';

export const initialState = {
    display: DISPLAY,
    powders: POWDERS,
    capsules: CAPSULES
}

export const Reducer = (state= initialState, action) => {
    return state
}

