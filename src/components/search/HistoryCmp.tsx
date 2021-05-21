import React, { useContext } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native';
import { SEARCH_HISTORY } from '../../constants/historyConst';
import { ContextApp } from '../../reducers/unionRdc';
import { TextHistoryCmp, ViewHistoryCmp } from '../style';


export const HistoryCmp = () => {
    const { state, dispatch } = useContext(ContextApp);
    const renderItem = ({ item }) => {
        return (
            <TextHistoryCmp >{item}</TextHistoryCmp>
        );
    };
    let history = [];
   
    return (
        <ViewHistoryCmp>
            <FlatList
                data={state.historyRdc.historySearch}
                inverted={true}
                renderItem={renderItem}
                keyExtractor={() => Math.random().toString()}
            />
        </ViewHistoryCmp>
    )
}


