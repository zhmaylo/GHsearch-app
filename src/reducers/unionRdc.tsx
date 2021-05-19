import React from 'react';
import { combineReducers } from "redux";

import {isAppInitRdc} from './isAppInitRdc';
import { searchRdc } from './searchRdc';
import { spinerToggleRdc } from './spinerRdc';


export const ContextApp = React.createContext(null);


// volume on default
export const initialState = {
    ////////////////////////////////
    //Start. Init app
    isAppInitRdc: {
        isAppInit: false
    },
    //End. Init app
    ////////////////////////////////

    ////////////////////////////////
    //Start. Spiner
    spinerToggleRdc: {
        spinerToggle: true
    },
    //End. Spiner
    ////////////////////////////////

    ////////////////////////////////
    //Start. Search
    searchRdc: {
        search_request: '',
    },
    //End. Search
    ////////////////////////////////

};


export const unionRdc = combineReducers(

    {

        ////////////////////////////////
        //Start. Init app
        isAppInitRdc: isAppInitRdc,
        //End. Init app
        ////////////////////////////////

        ////////////////////////////////
        //Start. Spiner
        spinerToggleRdc: spinerToggleRdc,
        //End. Spiner
        ////////////////////////////////


        ////////////////////////////////
        //Start. Search
        searchRdc: searchRdc,
        //End. Search
        ////////////////////////////////


    }
);

