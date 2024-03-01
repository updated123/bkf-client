import React, { useState, useRef } from 'react';
import { SafeAreaView, View, Text, Image, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

const OTPScreen = () => {
  const [otp, setOTP] = useState(['', '', '', '', '', '']);
  const otpInputRefs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const handleOTPChange = (index, value) => {
    if (isNaN(value)) return;

    const newOTP = [...otp];
    newOTP[index] = value;
    setOTP(newOTP);

    // Focus next input field
    if (value !== '' && index < 5) {
      otpInputRefs[index + 1].current.focus();
    }
  };

  const handleBackspace = (index, value) => {
    if (value === '') {
      // Focus previous input field
      if (index > 0) {
        otpInputRefs[index - 1].current.focus();
      }
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign name="left" size={24} color="black" />
        <Text style={styles.title}>Verify Phone Number</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../login.jpg')}
          style={styles.image}
        />
      </View>
      <View style={styles.otp}>
        <Text style={styles.title}>Enter code</Text>
        <Text>
          Please enter the OTP sent to +91-8696764335
        </Text>
      </View>
      <View style={styles.containers}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.input}
            value={digit}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleOTPChange(index, value)}
            onKeyPress={({ nativeEvent: { key } }) => handleBackspace(index, key)}
            ref={otpInputRefs[index]}
          />
        ))}
      </View>

      <TouchableOpacity style={styles.button}>
      <Text style={styles.buttonText}>Continue</Text>
      <MaterialCommunityIcons name="chevron-right" size={24} color="#fff" style={styles.icon} />
    </TouchableOpacity>

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
  otp: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  input: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    fontSize: 20,
  },
  containers:{
    flexDirection: 'row',
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row', // Arrange icon and text horizontally
    backgroundColor: '#28a745', // Green color
    padding: 15,
    borderRadius: 7,
  },
  buttonText: {
    color: '#fff', // White color
    fontSize: 16,
    marginLeft: 10, // Add margin between icon and text
  },
  icon: {
    marginRight: 10, // Add margin between text and icon
  },
});

export default OTPScreen;
