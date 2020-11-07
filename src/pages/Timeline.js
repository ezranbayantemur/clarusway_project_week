import React from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const Timeline = () => {
  return (
    <SafeAreaView style={timelinePage.container}>
      <View style={timelinePage.container}>
        {
          // ...
        }
      </View>
    </SafeAreaView>
  );
};

export {Timeline};
