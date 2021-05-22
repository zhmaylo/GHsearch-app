import React, { useContext } from 'react'
import { FlatList } from 'react-native';
import { ContextApp } from '../../reducers/unionRdc';
import { TextHistoryCmp, ViewHistoryCmp } from '../style';

// shows search history
export const HistoryCmp = () => {
    const { state, dispatch } = useContext(ContextApp);
    const renderItem = ({ item }) => {
        return (
            <TextHistoryCmp >{item}</TextHistoryCmp>
        );
    };
   
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


