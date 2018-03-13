import React from 'react';
import { StyleSheet, Button, TextInput, View } from 'react-native';

const InputBar = (props) => (
    <View style={styles.inputContainer}>
        <TextInput
            style={ styles.placeInput }
            onChangeText={ (text) => props.textFieldValueDidChanged(text) }
            placeholder={"awesome"}
        />
        <Button
            title={ "Send" }
            onPress ={ props.buttonDidTouchUpInside }
        />
    </View>
);

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    },
    placeInput: {
        width: "70%",
    },
});

export default InputBar