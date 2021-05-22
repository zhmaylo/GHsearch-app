import React from 'react';
import { Linking, Text, View } from "react-native";
import styled from 'styled-components/native';
import { HEADER_TITLE, IMAGE_TITLE } from '../../constants/headerConst';
import { SearchCmp } from '../search/SearchCmp';
import { ViewHeaderCmp, TextHeaderCmp, Separator, ImageHeaderCmp } from '../style';



export const HeaderCmp = () => {
    return (
        <ViewHeaderCmp>
            {/* <View style={{alignItems: 'center',
             width: 100, height: 250 }}> */}
                <ImageHeaderCmp
                    resizeMode='contain'
                    source={IMAGE_TITLE}
                />
            {/* </View> */}
            <TextHeaderCmp> {HEADER_TITLE} </TextHeaderCmp> 
        </ViewHeaderCmp >
    )
}



