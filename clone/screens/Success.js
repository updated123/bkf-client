import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Success!</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../login.jpg')}
          style={styles.image}
        />
    </View>
    <View style={styles.header}>
        <Text style={styles.titles}>Congratulations! Your account has 
      been verified successfully</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    color: 'orange',
    marginLeft: 8,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  titles: {
    width: 355,
    height: 60,
    // top: 466,
    left: 20,
    color: 'black',
    fontFamily: 'Poppins',
    fontWeight: '400', 
    fontSize: 20,
    lineHeight: 30, 
    textAlign: 'center', 
  }
});

export default HomeScreen;