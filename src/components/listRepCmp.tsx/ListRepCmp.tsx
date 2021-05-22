import React, { useContext } from 'react'
import { FlatList, Linking, TouchableOpacity } from 'react-native';
import { NAME_REP, DESCRIPTION_REP, LANGUAGE_REP } from '../../constants/listRepConst';
import { ContextApp } from '../../reducers/unionRdc';
import { TextListRepCmp, ViewListRepCmp } from '../style';

// shows information about the repository
export const ListRepCmp = () => {
    const { state, dispatch } = useContext(ContextApp);

    const renderItem = ({ item }) => {
        return (
            <TouchableOpacity
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


