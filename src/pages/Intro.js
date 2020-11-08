import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';

import {introPage} from './styles';

const Intro = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text>Intro</Text>
      </View>
    </SafeAreaView>
  );
};

export {Intro};
