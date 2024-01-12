import React from 'react';
import { StatusBar, StyleSheet,} from 'react-native';
import Navigations from './src/navigations/appNav/Navigations';
import { Provider } from 'react-redux';
import store from './src/store/Store';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { bgColor } from './src/styles/Colors';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'light-content'} backgroundColor={bgColor}/>
      <Provider store={store}>
        <Navigations />
      </Provider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
