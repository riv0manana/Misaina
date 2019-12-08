import React from 'react';
import {Provider} from 'react-redux'
import * as Font from 'expo-font';
import {Text} from 'native-base'
import {NativeRouter as Router} from 'react-router-native';
import Store from './Store/store.js';

/* Screens */
import Main from './Screens/Main.js';

/* Components */

export default function App() {
  const [ready, setReady] = React.useState(false);
  const loadFond = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf')
    });
    setReady(true);
  }

  React.useEffect(() => {
    loadFond();
  }, []);

  return (
    <Router>
      <Provider store={Store}>
        {ready ? <Main /> : <Text>Loading</Text>}
      </Provider>
    </Router>
  );
}

