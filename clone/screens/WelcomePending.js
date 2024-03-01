import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const NewUser = () => {
    const [fullName, setFullName] = useState('');
    const [aadharNumber, setAadharNumber] = useState('');
    const [panNumber, setPanNumber] = useState('');
    const handleUploadDocument = () => {
      // Implement file upload logic here
    };

  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.header}>
       <AntDesign name="left" size={24} color="black" />
       <Image
          source={require('../logo.png')}
          style={styles.image}
        />
      </View>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome Amit Thapa!</Text>
        <Octicons name="unverified" size={24} color="orange" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },
  header: {
    flexDirection: 'row',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  title: {
    color: 'black',
    marginLeft: 8,
    fontSize: 24,
    fontWeight: '500', 
    lineHeight: 30,
    textAlign: 'left',
    letterSpacing: 0,

  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 50,
    height: 50,
    top: 68,
    left: 172,
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
  },

  inputContainer: {
    width: '80%',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    margin: 16,
    borderRadius: 5,
    width: 361,
    height: 48,
    top: 287,
    left: 16,
  },
uploadButton: {
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 5,
    width : 361,
    height: 100,
    left : 16,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
    alignItems:'center',
  },
});

export default NewUser;