import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import OTPScreen from './screens/OTPScreen';
import Success from './screens/Success';
import NewUser from './screens/NewUser';
import WelcomeVerified from './screens/WelcomeVerified';
import WelcomePending from './screens/WelcomePending';

export default function App() {
  return (
    <View style={styles.container}>
      <WelcomePending/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
