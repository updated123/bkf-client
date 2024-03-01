import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

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
        <Text style={styles.title}>Welcome!</Text>

      </View>
    <View style={styles.header}>
        <Text style={styles.titles}>Please enter your details so we can proceed 
further with your application.</Text>
      </View>

      
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="* Enter Full Name"
          value={fullName}
          onChangeText={setFullName}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter Aadhar Number"
          value={aadharNumber}
          onChangeText={setAadharNumber}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="* Enter PAN Number"
          value={panNumber}
          onChangeText={setPanNumber}
        />
      </View>

      <TouchableOpacity style={styles.uploadButton} onPress={handleUploadDocument}>
       <View style={styles.contentContainer}>
       <View style={styles.iconContainer}>
      <AntDesign name="upload" size={24} color="black" />
       </View>
      <View style={styles.textContainer}>
      <Text style={styles.uploadText}>Upload your 7/11 document</Text>
       </View>
     </View>
     </TouchableOpacity>


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