import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TextInput, Picker } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {

  const [countryCode, setCountryCode] = useState('+1'); // Default country code
  const [phoneNumber, setPhoneNumber] = useState('');
  const handleCountryCodeChange = (itemValue) => {
    setCountryCode(itemValue);
  };

  const handleChange = (text) => {
    setPhoneNumber(text);
  };

  const countryCodes = [
    { value: '+1', label: 'US' },
    { value: '+44', label: 'UK' },
    { value: '+86', label: 'CN' },
    // Add more country codes here
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.title}>Login/Register</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../login.jpg')}
          style={styles.image}
        />

      </View>
      <View style={styles.otp}>
      <Text style={styles.title}>Enter your mobile number</Text>
      <Text>
        Welcome to bharat krishiFin, we'll send an OTP to verify this number
      </Text>
      </View>

      <View style={styles.containers}>
      <Picker
        selectedValue={countryCode}
        style={styles.picker}
        onValueChange={handleCountryCodeChange}
      >
        {countryCodes.map((item) => (
          <Picker.Item key={item.value} label={item.label} value={item.value} />
        ))}
      </Picker>
      <TextInput
        value={phoneNumber}
        onChangeText={handleChange}
        placeholder="Mobile number"
        keyboardType="phone-pad"
        style={styles.textInput}
      />
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

  otp:{
    flexDirection:'column',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  containers: {
    margin: 10,
    flexDirection: 'row',
  },
  picker: {
    flex: 1, // Adjust width as needed
  },
  textInput: {
    flex: 3, // Adjust width as needed
    padding: 10,
    fontSize: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
});

export default HomeScreen;
