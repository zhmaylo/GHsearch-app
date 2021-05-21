
// History reducers

import { HISTORY_SEARCH } from "../constants/actionConst";

//
export const historyRdc: any = (state = [], action: any) => {
    switch (action.type) {
        // search string
        case HISTORY_SEARCH:
            return {
                ...state,
                historySearch: action.payload
            };
        default:
            return state;
    }
}


