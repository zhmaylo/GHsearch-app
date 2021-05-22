import React from 'react';
import { HEADER_TITLE, IMAGE_TITLE } from '../../constants/headerConst';
import { ViewHeaderCmp, TextHeaderCmp, ImageHeaderCmp } from '../style';

// shows image and title 
export const HeaderCmp = () => {
    return (
        <ViewHeaderCmp>
                <ImageHeaderCmp
                    resizeMode='contain'
                    source={IMAGE_TITLE}
                />
            <TextHeaderCmp> {HEADER_TITLE} </TextHeaderCmp> 
        </ViewHeaderCmp >
    )
}



