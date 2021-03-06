import { Dimensions } from "react-native";
import styled from "styled-components/native";

/////////////////////////////
// Start. Section 'Display' - screen options
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
    paddingHorizontal: 15px;
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
    flexDirection: column;
`;
// End. Style MAIN SCR 
//////////////////////////////

//////////////////////////////
// Start. Style HEADER CMP
//
// max logo width 
let widthLimit= WINDOW_WIDTH > 330 ? 330 : WINDOW_WIDTH;
// separator width
let widthSepar= WINDOW_WIDTH - 30;
// style View
export const ViewHeaderCmp = styled.View`
    alignItems: center;
`;

// style Image 
export const ImageHeaderCmp = styled.Image`
    width: ${widthLimit}px;
    height: 110px; 
`;
// style Text 
export const TextHeaderCmp = styled.Text`
    color: rgb(${ForeR}, ${ForeG}, ${ForeB});
`;
// style Separator
export const Separator = styled.View`
    width: ${widthSepar}px;
    borderColor: rgb(${SeparR}, ${SeparG}, ${SeparB});

    marginTop: 10px;
    height: 1px;
    borderWidth: 1px;
    `;
// End. Style HEADER CMP
//////////////////////////////
    
//////////////////////////////
// Start. Style SEARCH CMP
//
// style TextInput
export const TextInputSearchCmp = styled.TextInput`
    width: ${widthSepar}px ;
    height: 30px;
    borderColor: #ffffff;
    background-color: #ffffff
    borderWidth: 1px;
    borderRadius: 20px; 

    marginTop: 10px;
    paddingVertical: 3px;
    paddingHorizontal: 15px;

    color: black;
    textAlign: left;
    textAlignVertical: center;

    fontSize: 18px;
    fontWeight: 600;
`;
// End. Style SEARCH CMP
//////////////////////////////

//////////////////////////////
// Start. Style HISTORY CMP
//
// style View
export const ViewHistoryCmp = styled.Text`
    flexDirection: column;
    justifyContent: flex-start;
`;
// style text
export const TextHistoryCmp = styled.Text`
    color: rgb(${ForeR}, ${ForeG}, ${ForeB});
`;
// End. Style HYSTORY CMP
//////////////////////////////

//////////////////////////////
// Start. Style LIST REP CMP
//
// style View
export const ViewListRepCmp = styled.View`
    background-color: rgb(${BackR}, ${BackG}, ${BackB});
    height: ${WINDOW_HEIGHT-300}px;
    paddingTop: 5px;
    paddingBottom: 2px;
`;

// style text
export const TextListRepCmp = styled.Text`
    width: ${widthSepar}px ;
    
    borderColor: #ffffff;
    background-color: #ffffff
    borderWidth: 1px;
    borderRadius: 20px; 

    marginTop: 10px;
    paddingVertical: 3px;
    paddingHorizontal: 15px;

    color: black;
    textAlign: left;
    textAlignVertical: center;

    fontSize: 18px;
    fontWeight: 600;
`;
// End. Style LIST REP CMP
//////////////////////////////

//////////////////////////////
// Start. Style SPINER CMP
//
// stylew view
export const ViewSpinerCmp = styled.View`
    flexDirection: column;
    alignItems: center;
    paddingTop: 2px;
`;
// style text
export const TextSpinerCmp = styled.Text`
    paddingTop: 20px;
    color: #fff; 
`;

// End. Style SPINER CMP
//////////////////////////////
