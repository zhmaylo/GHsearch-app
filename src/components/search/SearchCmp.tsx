import React, { useContext } from 'react'
import { toStorage } from '../../api/history/history';
import { debounce } from '../../api/myApi';
import { getSearchResult } from '../../api/search/search';
import { SEARCH_HISTORY, STORAGE_DELAY } from '../../constants/historyConst';
import { SEARCH_DELAY } from '../../constants/searchConst';
import { SPINER_MES_LOAD } from '../../constants/spinerConst';
import { ContextApp } from '../../reducers/unionRdc';
import { ListRepCmp } from '../listRepCmp.tsx/ListRepCmp';
import { SpinerСmp } from '../spiner/SpinerCmp';
import { TextHistoryCmp, TextInputSearchCmp, ViewSearchCmp } from '../style';
import { HistoryCmp } from './HistoryCmp';


export const SearchCmp = () => {
    let getSearchRes: any = debounce(getSearchResult, SEARCH_DELAY);
    const toStor: any = debounce(toStorage, STORAGE_DELAY);
    const { state, dispatch } = useContext(ContextApp);

        return (
            <ViewSearchCmp >
                <TextInputSearchCmp

                    onChangeText={(value: any) => {
                        getSearchRes(value, dispatch);
                        toStor(value, dispatch);
                    }}
                />
                <TextHistoryCmp>{SEARCH_HISTORY}</TextHistoryCmp>                        
                  <HistoryCmp/>  
                  {state.spinerToggleRdc.spinerToggle && <SpinerСmp spiner_mes= {SPINER_MES_LOAD} />}
                   <ListRepCmp />
            </ViewSearchCmp>
        )
    }

