import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const listItem = (props) => {
    return <TouchableOpacity onPress={props.onItemSelected}>
        <View style={styles.listItem}>
            <Image 
                source={props.placeImage} 
                style={styles.imageItem}
                />
            <Text style={styles.textItem}>{props.placeName}</Text>
        </View>
    </TouchableOpacity>
};

const styles = StyleSheet.create({
    listItem: {
        flex: 1,
        backgroundColor: "#eee",
        margin: 5,
        flexDirection: 'row',
        height: 50,
        alignItems: 'center',
        paddingLeft: 5,
    },
    imageItem: {
        width:30, 
        height:30,
    },
    textItem: {
        paddingLeft: 5,
    }

});

export default listItem;