import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useState} from 'react';
import {SafeAreaView, View, Text, FlatList} from 'react-native';

import { JobItem } from '../components'

const SavedJobs = (props) => {
  const [jobList, setJobList] = useState([])

  AsyncStorage.getItem("@SAVED_JOBS")
  .then(res => {
    const list = JSON.parse(res);
    setJobList(list);
  })

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={jobList}
          renderItem={({item}) => <JobItem job={item}/>}
        />
      </View>
    </SafeAreaView>
  );
};

export {SavedJobs};
