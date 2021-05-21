import React, { useContext } from 'react'
import { ActivityIndicator, FlatList, Linking, Text, TouchableOpacity, View } from 'react-native';
import { NAME_REP, DESCRIPTION_REP, LANGUAGE_REP } from '../../constants/listRepConst';
import { SPINER_MES_LOAD } from '../../constants/spinerConst';
import { ContextApp } from '../../reducers/unionRdc';
import { SpinerСmp } from '../spiner/SpinerCmp';
import { TextListRepCmp, ViewListRepCmp } from '../style';


export const ListRepCmp = () => {

    const { state, dispatch } = useContext(ContextApp);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                // html_url
                onPress={() => {
                    Linking.openURL(item.html_url)
                }}
            >
                <TextListRepCmp>
                    {NAME_REP + item.name + '\n'}
                    {LANGUAGE_REP + item.language + '\n'}
                    {DESCRIPTION_REP + item.description}
                </TextListRepCmp>
            </TouchableOpacity >
        );
    };

    return (
        <ViewListRepCmp>
                
            <FlatList
                data={state.searchRdc.search_result}
                renderItem={renderItem}
                keyExtractor={() => Math.random().toString()}
            />
        </ViewListRepCmp>
    )
}


