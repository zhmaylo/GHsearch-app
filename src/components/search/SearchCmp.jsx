import React, { useContext } from 'react'
import { toStorage } from '../../api/history/history';
import { debounce } from '../../api/myApi';
import { getSearchResult } from '../../api/search/search';
import { SEARCH_DELAY, STORAGE_DELAY } from '../../constants/searchConst';
import { ContextApp } from '../../reducers/unionRdc';
import { TextInputSearchCmp, ViewSearchCmp } from '../style';
import { HistoryCmp } from './HistoryCmp';


export const SearchCmp = () => {
    let getSearchRes =  debounce(getSearchResult, SEARCH_DELAY);
    let toStor =  debounce(toStorage, STORAGE_DELAY);
    const { state, dispatch } = useContext(ContextApp);
    
    return (
        <ViewSearchCmp >
            <TextInputSearchCmp
                // value='12345'
                onChangeText={(value) => {
                    getSearchRes((value),dispatch);
                    toStor((value),dispatch);
                }}
            />
            <HistoryCmp/>

        </ViewSearchCmp>
    )
}

