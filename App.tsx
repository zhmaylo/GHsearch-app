import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { ContextApp, initialState, unionRdc } from './src/reducers/unionRdc';
import MainScr from './src/screen/MainScr';
import { ThemeProvider } from 'styled-components';
// let styled = require ('styled-components/native');
import styled from 'styled-components/native' 

  const StyledView = styled.View`
  flex: 1;
  background-color: #394048;
  alignItems: 'center',
  justifyContent: 'center',
  `

export default function App() {

  const [state, dispatch] = useReducer(unionRdc, initialState);
  console.log("🚀 ~ file: App.tsx ~ line 9 ~ App ~ state", state);

  return (
    <ContextApp.Provider value={{ state, dispatch }}>
        <StyledView>
          <MainScr />
 
         </StyledView>
    </ContextApp.Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#394048',
    alignItems: 'center',
    justifyContent: 'center',
    // color: '#fef4c9'
  },
});
