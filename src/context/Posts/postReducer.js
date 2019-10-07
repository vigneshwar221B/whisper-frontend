import { ADD_POST } from '../types'

export default (state, action) => {
    switch (action.type) {
        case ADD_POST:
            return [...state, action.payload];
        
        default:
            return state;
    }
}