import React from 'react';
import { ScrollView } from 'react-native';
import AlbumDetail from './AlbumDetail';

const AlbumList = ({ data }) => {
  const renderAlbums = data.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );

  return (
    <ScrollView>
      {renderAlbums}
    </ScrollView>
  );
};

export default AlbumList;
