import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
// import AlbumList from './src/components/AlbumList';
import { name as appName } from './app.json';

const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    {/* <AlbumList /> */}
  </View>
);

AppRegistry.registerComponent(appName, () => App);
