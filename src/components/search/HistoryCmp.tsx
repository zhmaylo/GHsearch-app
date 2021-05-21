import React, { useContext } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native';
import { ContextApp } from '../../reducers/unionRdc';
import { TextHistoryCmp } from '../style';


export const HistoryCmp = () => {
    const { state, dispatch } = useContext(ContextApp);
    const renderItem = ({ item }) => {
        return (
            <TextHistoryCmp >{item}</TextHistoryCmp>
        );
    };
    let history = [];
    history = state.historyRdc.historySearch;
    return (
        <View>
            <FlatList
                data={state.historyRdc.historySearch}
                inverted={true}
                renderItem={renderItem}
                keyExtractor={() => Math.random().toString()}
            />
        </View>
    )
}


