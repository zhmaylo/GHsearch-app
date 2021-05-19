import React, { useContext, useEffect } from 'react';
import { SafeAreaView, View, StatusBar, StyleSheet, Image } from 'react-native';
import { HeaderCmp } from '../components/header/HeaderCmp';
import { SpinerСmp } from '../components/spiner/SpinerCmp';
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
            <SafeAreaView style={styles.container}>
                <StatusBar hidden={true} />
                <HeaderCmp />

            </SafeAreaView>
        );
    }
    else return (
        <View style={styles.spiner}>
            <SpinerСmp
                spiner_mes={SPINER_MES_LOAD}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 10,
    },
    spiner: {
        flex: 1,
        // backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },

});
