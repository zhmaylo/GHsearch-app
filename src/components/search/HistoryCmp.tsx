import React, { useContext } from 'react'
import { FlatList, ScrollView, Text, View } from 'react-native';
import { SEARCH_HISTORY } from '../../constants/historyConst';
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
   
    return (
        <View>
            <TextHistoryCmp>{SEARCH_HISTORY}</TextHistoryCmp>                        
            <FlatList
                data={state.historyRdc.historySearch}
                inverted={true}
                renderItem={renderItem}
                keyExtractor={() => Math.random().toString()}
            />
        </View>
    )
}


