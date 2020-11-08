import React from 'react';
import {SafeAreaView, View, FlatList, Text, Button} from 'react-native';
import {useSelector} from 'react-redux';

import {finishPage} from './styles';

const Finish = (props) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={finishPage.container}>
        <Text style={finishPage.text}>Your score is {userScore}</Text>
      </View>
    </SafeAreaView>
  );
};

export {Finish};
