import React from 'react';
import { Image, Linking, Text, View } from "react-native";
import { HEADER_TITLE, IMAGE_TITLE } from '../../constants/headerConst';
import { SearchCmp } from '../search/SearchCmp';
import { ViewHeaderCmp, TextHeaderCmp, ImageHeaderCmp, WINDOW_WIDTH, Separator, TextInputSearchCmp } from '../style';


export const HeaderCmp = () => {
    return (
        <ViewHeaderCmp >
                <ImageHeaderCmp source={IMAGE_TITLE}/>
               <TextHeaderCmp> {HEADER_TITLE} </TextHeaderCmp>
               <Separator></Separator>
               <SearchCmp/>
        </ViewHeaderCmp>
    )
}



