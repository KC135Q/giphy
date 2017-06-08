import React from 'react';
import { View, Text } from 'react-native';

const Header = (headerText) => {
    return (
      <View>
        <Text>{headerText}</Text>
      </View>
    );
};

export default Header;
