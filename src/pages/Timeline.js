import moment from 'moment';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import {timelinePage} from './styles';
import {PostItem, PostInput, Header, TopicSelectModal} from '../components';

const user = auth().currentUser;

const Timeline = () => {
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [topicModalFlag, setTopicModalFlag] = useState(true);

  const selectingTopic = (value) => {
    setSelectedTopic(value);
    setTopicModalFlag(false);

    database()
      .ref()
      .on('value', (snapshot) => {
        console.log("UPDATE......")
        console.log(snapshot.val())
      });
  };

  const sendingPost = (value) => {
    const postObject = {
      userMail: user.email,
      postText: value,
      time: moment().toISOString()
    }

    database().ref(`${selectedTopic}`).push(postObject);
  };

  return (
    <SafeAreaView style={timelinePage.container}>
      <View style={timelinePage.container}>
        <Header
          title={selectedTopic}
          onTopicModalSelect={() => setTopicModalFlag(true)}
        />

        <FlatList data={[]} renderItem={() => null} />

        <PostInput onSendPost={sendingPost} />

        <TopicSelectModal
          visibility={topicModalFlag}
          onClose={() => (selectedTopic ? setTopicModalFlag(false) : null)}
          onTopicSelect={selectingTopic}
        />
      </View>
    </SafeAreaView>
  );
};

export {Timeline};
