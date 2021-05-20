
import styled from 'styled-components/native';

/////////////////////////////
// Start. Section 'Display' - screen options
import { Dimensions } from "react-native";
//
export const WINDOW_WIDTH = Dimensions.get('window').width;
export const WINDOW_HEIGHT = Dimensions.get('window').height;
//
// End. Section 'Display' - screen options
/////////////////////////////

// color foregraund backgroud
// const colorFg = `#394048`;
// const colorBg = {'fef4c9'};
//

//////////////////////////////
// Start. Style APP 
// style View App
export const ViewApp = styled.View`
    flex: 1;
    background-color: #394048;
    color: #fef4c9;
`;
// End. Style APP 
//////////////////////////////

//////////////////////////////
// Start. Style MAIN SCR
//
// style View Main
export const ViewMain = styled.View`
    flex: 1;
    flexDirection: column;
`;
// End. Style MAIN SCR 
//////////////////////////////

//////////////////////////////
// Start. Style HEADER CMP
//
// style View
let widthLimit= WINDOW_WIDTH > 330 ? 330 : WINDOW_WIDTH;
let widthSepar= WINDOW_WIDTH - 30;

export const ViewHeaderCmp = styled.View`
    alignItems: center;
    justifyContent: center;
`;
// style Image 
export const ImageHeaderCmp = styled.Image`
    width: ${widthLimit};
    height: 110;
    resizeMode: center;
`;
// style Text 
export const TextHeaderCmp = styled.Text`
    color: #fef4c9;
`;
// style Separator
export const Separator = styled.TextInput`
    width: ${widthSepar};
    borderColor: #969A97;
    marginTop: 10;
    height: 1;
    borderWidth: 1;
    `;
// End. Style HEADER CMP
//////////////////////////////
    
//////////////////////////////
// Start. Style SEARCH CMP
//
// style View
export const ViewSearchCmp = styled.View`

`;

// style TextInput
export const TextInputSearchCmp = styled.TextInput`
    width: ${widthSepar} ;
    height: 26;
    borderColor: #ffffff;
    background-color: #ffffff
    borderWidth: 1;
    borderRadius: 20; 
    color: #fef4c9;
    marginTop: 10;

    color: black;
    textAlign: center;
    textAlignVertical: center;

    fontSize: 18;
    fontWeight: 600;

`;
// End. Style SEARCH CMP
//////////////////////////////

//////////////////////////////
// Start. Style HISTORY CMP
//
export const ViewHystoryCmp = styled.View`

`;

export const FlatListHystoryCmp = styled.FlatList`
    
`;

// End. Style HYSTORY CMP
//////////////////////////////
