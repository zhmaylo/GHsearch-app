import { IS_APP_INIT } from "../constants/actionConst";


// App init reducers
//
export const isAppInitRdc: any = (state = [], action: any) => {


    switch (action.type) {

        case IS_APP_INIT:
            return {
                ...state,
                isAppInit: action.payload
            };
        default:
            return state;
    }
}

// export default isAppInitRdc;