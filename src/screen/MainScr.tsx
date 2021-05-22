import React, { useContext, useEffect } from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { fromStorage } from '../api/history/history';
import { HeaderCmp } from '../components/header/HeaderCmp';
import { ListRepCmp } from '../components/listRepCmp.tsx/ListRepCmp';
import { HistoryCmp } from '../components/search/HistoryCmp';
import { SearchCmp } from '../components/search/SearchCmp';
import { SpinerСmp } from '../components/spiner/SpinerCmp';
import { Separator, TextHistoryCmp, ViewMain } from '../components/style';
import { HISTORY_SEARCH, IS_APP_INIT, SPINER_TOGGLE } from '../constants/actionConst';
import { SEARCH_HISTORY } from '../constants/historyConst';
import { SPINER_MES_LOAD } from '../constants/spinerConst';
import { ContextApp } from "../reducers/unionRdc";


export default function MainScr() {
    const { state, dispatch } = useContext(ContextApp);
    useEffect(() => {

        dispatch({ type: IS_APP_INIT, payload: true });
        fromStorage().then((his) => {
            dispatch({ type: HISTORY_SEARCH, payload: his });
            dispatch({ type: SPINER_TOGGLE, payload: false });
        });

    }, [!state.isAppInitRdc.isAppInit]);

    return (
        <SafeAreaView>
            <StatusBar hidden={true} />
            <ViewMain>
                <HeaderCmp />
                <Separator></Separator>
                <SearchCmp />
                <TextHistoryCmp>{SEARCH_HISTORY}</TextHistoryCmp>
                <HistoryCmp />
                {state.spinerToggleRdc.spinerToggle && <SpinerСmp spiner_mes={SPINER_MES_LOAD} />}
                <ListRepCmp />
            </ViewMain>
        </SafeAreaView>
    );
}
