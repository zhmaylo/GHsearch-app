
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

// ccolor bacground = `#394048`;
const BackR = 57;
const BackG = 64;
const BackB = 72;

// color foreground. text, logo = '#fef4c9';
const ForeR = 254;
const ForeG = 244;
const ForeB = 201;

// color separator = '#969A97';
const SeparR = 150;
const SeparG = 154;
const SeparB = 151;


//////////////////////////////
// Start. Style APP 
// style View App
export const ViewApp = styled.View`
    flex: 1;
    background-color: rgb(${BackR}, ${BackG}, ${BackB});
    color: rgb(${ForeR}, ${ForeG}, ${ForeB});
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
    color: rgb(${ForeR}, ${ForeG}, ${ForeB});
`;
// style Separator
export const Separator = styled.TextInput`
    width: ${widthSepar};
    borderColor: rgb(${SeparR}, ${SeparG}, ${SeparB});

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

    marginTop: 10;
    paddingLeft: 10;
    paddingRight: 10;
    color: black;
    textAlign: left;
    textAlignVertical: center;

    fontSize: 18;
    fontWeight: 600;

`;
// End. Style SEARCH CMP
//////////////////////////////

//////////////////////////////
// Start. Style HISTORY CMP
//

export const TextHistoryCmp = styled.Text`
    color: rgb(${ForeR}, ${ForeG}, ${ForeB});
`;

// End. Style HYSTORY CMP
//////////////////////////////

//////////////////////////////
// Start. Style LIST REP CMP
//

export const ViewListRepCmp = styled.View`
    alignItem: center
`;
export const TextListRepCmp = styled (TextInputSearchCmp)`
    
`;

// End. Style LIST REP CMP
//////////////////////////////
