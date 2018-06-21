import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableHighlight } from 'react-native';

import contacts from '../assets/contacts.json';

class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
    this.renderItem = this.renderItem.bind(this);
  }

  onPress(item) {
    this.props.navigation.navigate('Detail', {
      title: item.name,
      item: item,
    });
  }

  renderItem({item}) {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.btn} 
          onPress={() => this.onPress(item)}
          underlayColor='#e4e4e4'
        >
          <Text style={styles.text}>
            {item.name}
          </Text>
        </TouchableHighlight>
      </View>
    );
  };

  keyExtractor(item) {
    return item.id;
  };

  renderSeparator() {
    return <View style={styles.separator} />;
  }

  render() {
    return (
      <FlatList 
        data={contacts} 
        keyExtractor={this.keyExtractor} 
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator} 
      />
    );
  };
};

ListScreen.navigationOptions = {
  title: 'Contacts',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  btn: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',  
  },
  text: {
    color: '#000',
    fontSize: 18,
    paddingLeft: 10,
    paddingRight: 10,
  },
  separator: {
    height: 1, 
    backgroundColor: '#ddd', 
    marginLeft: 10,
  }
})

export default ListScreen;
