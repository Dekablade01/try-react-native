import React from 'react';

import {
    StyleSheet,
    View, 
    FlatList } from 'react-native';

import ListItem from './src/components/ListItem/ListItem';
import InputBar from './src/components/InputBarAndButton/InputBarAndButton';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends React.Component {
    state = {
        placeName: "",
        places: [],
        selectedPlace: null,
    };

    placeSelectedHandler = (key) => {
        // this.setState({
        //     places: this.state.places.filter(place => { return place.key !== key; })
        // });

        this.setState(prevState => {
            return { selectedPlace: prevState.places.find(place => {
                return place.key === key;
            })}
        })
    }

    placeNameChangedHandler = (text) => {
        this.setState({ placeName: text, })
    };

    placeSubmitHandler = () => {
        if (this.state.placeName.trim() === "") {
            return;
        }

        this.setState(prevState => {
            return { 
                places: prevState.places.concat({
                    key: Math.random(), 
                    name: this.state.placeName,
                    image: {
                        uri: "https://wiki.jenkins.io/download/attachments/2916393/headshot.png?version=1&modificationDate=1302753947000&api=v2", 
                        width: 30, 
                        height: 30
                    }
                })
             }
        });
    };

  render() {
    return (
          <View style={styles.container}>
            <PlaceDetail
                selectedPlace={this.state.selectedPlace}
            />
              <InputBar
                textFieldValueDidChanged={ (text) => this.placeNameChangedHandler(text) }
                buttonDidTouchUpInside={ this.placeSubmitHandler }
              />
              <FlatList 
                data={this.state.places} 
                style={styles.listContainer}
                renderItem={ (info) => (
                    <ListItem
                        placeName={info.item.name}
                        placeImage={info.item.image}
                        onItemSelected={ (_) => { this.placeSelectedHandler(info.item.key) }}
                        image={info.item.image}
                    />
                )}
                />
          </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 26,
    flexDirection: 'column',
    backgroundColor: '#fff',
    paddingLeft: 20,
    paddingRight: 20,
  },
    listContainer: {
        flexBasis: '100%'
    }
});
