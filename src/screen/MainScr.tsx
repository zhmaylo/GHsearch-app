import React, { useContext, useEffect } from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet, Image } from 'react-native';
import { HeaderCmp } from '../components/header/HeaderCmp';
import { SpinerСmp } from '../components/spiner/SpinerCmp';
import { ViewMain } from '../components/style';
import { IS_APP_INIT, SPINER_TOGGLE } from '../constants/actionConst';
import { SPINER_MES_LOAD } from '../constants/spinerConst';
import { ContextApp } from "../reducers/unionRdc";


export default function MainScr() {
    const { state, dispatch } = useContext(ContextApp);
    useEffect(() => {

        dispatch({ type: SPINER_TOGGLE, payload: false })
        dispatch({ type: IS_APP_INIT, payload: true });

    }, [!state.isAppInitRdc.isAppInit]);


    if ((state.isAppInitRdc.isAppInit) && (state.spinerToggleRdc.spinerToggle == false)) {
        return (
            <SafeAreaView>
                <StatusBar hidden={true} />
                <ViewMain>
                    <HeaderCmp />
                </ViewMain>
            </SafeAreaView>
        );
    }
    else return (
        <View>
            <SpinerСmp
                spiner_mes={SPINER_MES_LOAD}
            />
        </View>
    )
}
