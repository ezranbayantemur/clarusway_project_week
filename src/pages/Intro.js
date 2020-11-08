import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {useDispatch} from 'react-redux';

import {introPage} from './styles';
import {CategorySelectModal} from '../components';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const Intro = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
      
      </View>
    </SafeAreaView>
  );
};

export {Intro};
