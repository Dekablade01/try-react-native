import React from 'react';
import { Modal, View, Image, Button, StyleSheet, Text } from 'react-native';

const placeDetail = (props) => {
let modal = null;

if (props.selectedPlace) {
    modal = (
    <View>
        <Image source={props.selectedPlace.image}/>
        <Text>{props.placeName}</Text>
    </View>)
}

return (
    <Modal visible={props.selectedPlace !== null} animationType="slide">
        <View style={styles.modalContailer}>
            {modal}
            <View>
                <Button title={"delete"} color={"red"}/>
                <Button title={"close"}/>
            </View>
        </View>
    </Modal>

)
};

const styles = StyleSheet.create( {
    modalContailer: {
        margin: 22,
    }
})

export default placeDetail;