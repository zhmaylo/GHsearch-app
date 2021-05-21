import React, { useContext } from 'react'
import { toStorage } from '../../api/history/history';
import { debounce } from '../../api/myApi';
import { getSearchResult } from '../../api/search/search';
import { STORAGE_DELAY } from '../../constants/historyCons';
import { SEARCH_DELAY } from '../../constants/searchConst';
import { ContextApp } from '../../reducers/unionRdc';
import { TextInputSearchCmp, ViewSearchCmp } from '../style';
import { HistoryCmp } from './HistoryCmp';


export const SearchCmp = () => {
    // let getSearchRes = (value: any, dispatch: any) => debounce(getSearchResult, SEARCH_DELAY);
    // const toStor = (value: any, dispatch: any) => debounce(toStorage, STORAGE_DELAY);
    let getSearchRes : any = debounce(getSearchResult, SEARCH_DELAY);
    const toStor : any = debounce(toStorage, STORAGE_DELAY);
    const { state, dispatch } = useContext(ContextApp);

    return (
        <ViewSearchCmp >
            <TextInputSearchCmp
            
                onChangeText={(value: any) => {
                    getSearchRes(value, dispatch);
                    toStor(value, dispatch);
                }}
            />
            <HistoryCmp />

        </ViewSearchCmp>
    )
}

