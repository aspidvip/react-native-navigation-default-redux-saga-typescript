import React, { Component } from 'react';
import { Navigation } from 'react-native-navigation';
import { ScrollView, StyleSheet, Text, TouchableHighlight } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default class WelcomePage extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  handlePress = () => {
    Navigation.push(this.props.componentId, {
      component: {
        name: 'TEST',
        options: {
          topBar: {
            largeTitle: {
              visible: true,
              fontSize: 30,
            },
            title: {
              text: 'Test',
            },
          },
        },
      },
    });
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.welcome}>qweqwe</Text>
        <TouchableHighlight onPress={this.handlePress}>
          <Text>Next</Text>
        </TouchableHighlight>
      </ScrollView>
    );
  }
}
