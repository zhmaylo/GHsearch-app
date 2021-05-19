import { SPINER_TOGGLE } from "../constants/actionConst";

// Spiner reducers
// 
// spiner toggle (off(false)/ on(true))
export const spinerToggleRdc: any = (state = [], action: any) => {
    switch (action.type) {
        case SPINER_TOGGLE:
            return {
                ...state,
                // spinerToggleRdc: { spinerToggle: action.payload }
                spinerToggle: action.payload 
            };
        default:
            return state;
    }
}


