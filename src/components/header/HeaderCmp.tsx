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



// Linking.openURL('https://rp5.ua/%D0%9F%D0%BE%D0%B3%D0%BE%D0%B4%D0%B0_%D0%B2_%D0%9A%D0%B0%D1%80%D0%BB%D0%BE%D0%B2%D0%BA%D0%B5,_%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C')