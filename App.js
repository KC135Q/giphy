import React from 'react';
import { Dimensions, Image } from 'react-native';

import Header from './component/Header';
import Giphy from './component/Giphy';

export default class App extends React.Component {
  render() {
    return (
      <Image
        source={{ uri: 'https://s-media-cache-ak0.pinimg.com/736x/2c/cb/5d/2ccb5d15a7767e9201ab57912c20ee83.jpg' }}
        style={styles.container}
      >
        <Header headerText="My Giphy Collection" />
        <Giphy />
      </Image>
    );
  }
}

const styles = {
  container: {
    alignItems: 'center',
    backgroundColor: '#fff',
    flex: 1,
    justifyContent: 'flex-start',
    paddingTop: 25,
  },
};
