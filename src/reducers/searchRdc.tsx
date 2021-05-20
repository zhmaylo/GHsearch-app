
// Search reducers

import { SEARCH_RESULT } from "../constants/actionConst";

//
export const searchRdc: any = (state = [], action: any) => {
    switch (action.type) {
        // search string
        case SEARCH_RESULT:
            return {
                ...state,
                search_result: action.payload
            };
        default:
            return state;
    }
}


