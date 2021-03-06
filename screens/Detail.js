import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';

class DetailScreen extends Component {

  render() {
    const {picture, name, gender, address, company, filmName} = this.props.navigation.getParam('item');
  
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: picture}} indicator={ProgressBar} />
        <View style={styles.textBox}>
          <Text style={styles.text}>{name} is {gender.charAt(0).toUpperCase() + gender.substr(1)}.</Text>
          <Text style={styles.text}>{gender === 'male' ? 'He' : 'She'} lives at {address}.</Text>
          <Text style={styles.text}>{gender === 'male' ? 'He' : 'She'} works at {company}.</Text>
          <Text style={styles.text}>{gender === 'male' ? 'His' : 'Her'} favourite film is {filmName}.</Text>
        </View>
      </View>
    )
  }
}

DetailScreen.navigationOptions = ({navigation}) => ({
  title: navigation.getParam('title'),
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10
  },
  textBox: {
    alignItems: 'flex-start',
  },
  text: {
    fontSize: 18,
    marginVertical: 5,
    textAlign: 'left',
  }
});

export default DetailScreen;
