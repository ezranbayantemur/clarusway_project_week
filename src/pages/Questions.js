import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  Animated,
  Button,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {QuestionItem} from '../components';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const Questions = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <FlatList
          ref={listRef}
          horizontal
          scrollEnabled={false}
          keyExtractor={(_, i) => i.toString()}
          data={questions}
          renderItem={renderQuestions}
        />
      </View>
    </SafeAreaView>
  );
};

export {Questions};
