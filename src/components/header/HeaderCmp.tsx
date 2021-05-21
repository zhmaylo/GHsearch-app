import React from 'react';
import { Linking, Text, View } from "react-native";
import styled from 'styled-components/native';
import { HEADER_TITLE, IMAGE_TITLE } from '../../constants/headerConst';
import { SearchCmp } from '../search/SearchCmp';
import { ViewHeaderCmp, TextHeaderCmp, Separator, ImageHeaderCmp } from '../style';



export const HeaderCmp = () => {
    return (
        <ViewHeaderCmp >
                <ImageHeaderCmp
                    resizeMode='center'
                    source={IMAGE_TITLE}
                />
            <TextHeaderCmp> {HEADER_TITLE} </TextHeaderCmp>
            <Separator></Separator>
            <SearchCmp />
        </ViewHeaderCmp>
    )
}



