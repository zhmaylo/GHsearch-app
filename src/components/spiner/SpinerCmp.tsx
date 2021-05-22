import React from 'react';
import { ActivityIndicator } from 'react-native';
import { ViewSpinerCmp, TextSpinerCmp } from '../style';

// spinner component
export const SpinerСmp = ({spiner_mes}) => {
    return (
        <ViewSpinerCmp>
            <ActivityIndicator size="large" color="#ffffff" /> 
            <TextSpinerCmp >{spiner_mes}</TextSpinerCmp>
        </ViewSpinerCmp>
    )
}


