import React from 'react';
import { Dimensions, Image, ScrollView  } from 'react-native';

const Giphy = () => {
  return (
    <ScrollView>
      <Image
        style={styles.imageStyle}
        source={{ uri: 'https://media2.giphy.com/media/26FPMoFGJlJQuwdzO/giphy.gif' }}
      />
      <Image
        style={styles.imageStyle}
        source={{ uri: 'https://media.giphy.com/media/3oz8xvvUoJDBLDk6tO/giphy.gif' }}
      />      
      <Image
        style={styles.imageStyle}
        source={{ uri: 'https://media.giphy.com/media/l3V0Ctx2EveOxwCaI/giphy.gif' }}
      />
    </ScrollView>
  );
};

const { height, width } = Dimensions.get('window');
const heightInc = height / 12;
const widthInc = width / 4;

const styles = {
  imageStyle: {
    borderColor: '#fff',
    borderWidth: 3,
    borderRadius: 5,
    height: heightInc * 4,
    marginBottom: 15,
    width: widthInc * 3,
  }
};

export default Giphy;
