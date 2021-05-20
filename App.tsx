import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { ViewApp } from './src/components/style';
import { ContextApp, initialState, unionRdc } from './src/reducers/unionRdc';
import MainScr from './src/screen/MainScr';


export default function App() {

  const [state, dispatch] = useReducer(unionRdc, initialState);
  console.log("🚀 ~ file: App.tsx ~ line 9 ~ App ~ state", state);

  return (
    <ContextApp.Provider value={{ state, dispatch }}>
        <ViewApp>
          <MainScr />
 
         </ViewApp>
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
