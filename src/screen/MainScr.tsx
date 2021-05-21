import React, { useContext, useEffect } from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { fromStorage } from '../api/history/history';
import { HeaderCmp } from '../components/header/HeaderCmp';
import { ListRepCmp } from '../components/listRepCmp.tsx/ListRepCmp';
import { SpinerСmp } from '../components/spiner/SpinerCmp';
import { ViewMain } from '../components/style';
import { HISTORY_SEARCH, IS_APP_INIT, SPINER_TOGGLE } from '../constants/actionConst';
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


    // if ((state.isAppInitRdc.isAppInit) && (state.spinerToggleRdc.spinerToggle == false)) {
    return (
        <SafeAreaView>
            <StatusBar hidden={true} />
            <ViewMain>
                <HeaderCmp />
                {state.spinerToggleRdc.spinerToggle && <SpinerСmp spiner_mes={SPINER_MES_LOAD} />}
                <ListRepCmp />
            </ViewMain>
        </SafeAreaView>
    );
    // }
    // else return (
    //     <View>
    //         <SpinerСmp
    //             spiner_mes={SPINER_MES_LOAD}
    //         />
    //     </View>
    // )
}
