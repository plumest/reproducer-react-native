/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  Linking,
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const callTel = () => {
    Linking.openURL('tel:00000');
  }

  const callTelPrompt = () => {
    Linking.openURL('telprompt:00000');
  }

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <TouchableOpacity onPress={() => callTel()}>
          <Text>Tel</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => callTelPrompt()}>
          <Text>Tel Prompt</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
