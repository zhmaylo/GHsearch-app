import React from 'react'
import { debounce } from '../../api/myApi';
import { getSearchResult } from '../../api/search/search';
import { SEARCH_DELAY } from '../../constants/searchConst';
import { TextInputSearchCmp, ViewSearchCmp } from '../style';


export const SearchCmp = () => {
    let f =  debounce(getSearchResult, SEARCH_DELAY);
    
    
    return (
        <ViewSearchCmp >
            <TextInputSearchCmp
                // value='12345'
                onChangeText={(value) => {
                    f(value);
                }}
            />

        </ViewSearchCmp>
    )
}

