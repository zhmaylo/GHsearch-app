import React, { useContext } from 'react'
import { FlatList, Linking, TouchableOpacity, View } from 'react-native';
import { toStorage } from '../../api/history/history';
import { getSearchResult } from '../../api/search/search';
import { ContextApp } from '../../reducers/unionRdc';
import { TextListRepCmp, ViewListRepCmp } from '../style';


export const ListRepCmp = () => {

    const { state, dispatch } = useContext(ContextApp);

    // const DATA = ['First Item', 'Second Item', 'Third Item'];

    console.log('🚀 ~ file: HistoryCmp.jsx ~ line 25 ~ HistoryCmp ~ DATA', DATA);
    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={(link: any) => {
                    Linking.openURL(link);
                }}
            >
                <TextListRepCmp
                    value={item.name}
                />
            </TouchableOpacity >
        );
    };

    let list = [];
    list = state.searchRdc.search_result;
    console.log('🚀 ~ file: ListRepCmp.tsx ~ line 31 ~ ListRepyCmp ~ list', list);
    return (
        <ViewListRepCmp>
            <FlatList
                data={list}
                renderItem={renderItem}
                keyExtractor={() => Math.random().toString()}
            />
        </ViewListRepCmp>
    )
}


