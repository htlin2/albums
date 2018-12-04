import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albums: [],
    }
  }

  componentWillMount() {
    fetch('https://s3.amazonaws.com/stockpricechart/albums-sample-api.json')
      .then(response => response.json())
      .then(albums => this.setState({ albums }));
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText={'Albums'} />
        <AlbumList data={this.state} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
