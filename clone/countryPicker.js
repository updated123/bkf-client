import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import FlagIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const CountryPicker = () => {
    const [countryCode, setCountryCode] = useState('+91'); // Replace with default code

    const handleCountryChange = (newCountryCode) => {
        setCountryCode(newCountryCode);
    };

    return (
        <View style={styles.countryPickerContainer}>
            <FlagIcon name="earth-globe" size={24} style={styles.flagIcon} />
            <TextInput
                value={countryCode}
                onChangeText={handleCountryChange}
                editable={false} // Disable editing for simplicity
                style={styles.countryCodeInput}
            />
        </View>
    );
}
const styles = StyleSheet.create({
    countryPickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: '#f0f0f0',
    },
    flagIcon: {
        marginRight: 5,
    },
    countryCodeInput: {
        flex: 1,
        fontSize: 16,
    },
});

export default CountryPicker;