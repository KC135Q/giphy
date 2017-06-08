import React from 'react';
import { View, Text } from 'react-native';

const Header = ({ headerText }) => {
  const { headerStyle, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={headerStyle}>{headerText}</Text>
    </View>
  );
};

const styles = {
  headerStyle: {
    backgroundColor: 'rgba(30,30,30,0.3)',
    color: '#fff',
    fontSize: 32,
    lineHeight: 36,
    paddingBottom: 12,
  },
  viewStyle: {
    borderBottomColor: '#666',
    borderBottomWidth: 1,
    marginBottom: 25,
  }
};

export default Header;
