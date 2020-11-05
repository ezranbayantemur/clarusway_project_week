import Axios from 'axios';
import Modal from 'react-native-modal';
import {WebView} from 'react-native-webview';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  SafeAreaView,
  Text,
  View,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';

import {jobs} from '../styles';
import {JobItem} from '../components';

const Jobs = (props) => {
  const [data, setData] = useState([]);
  const [selectedJob, setSelectedJob] = useState('');
  const [modalFlag, setModalFlag] = useState(false);
  const {selectedLanguage} = props.route.params;

  const fetchData = async () => {
    const response = await Axios.get(
      `https://jobs.github.com/positions.json?search=${selectedLanguage.toLowerCase()}`,
    );
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onJobSelect = (job) => {
    setModalFlag(true);
    setSelectedJob(job);
  };

  const renderJobs = ({item}) => (
    <JobItem job={item} onSelect={() => onJobSelect(item)} />
  );

  const onJobSave = async () => {
    let savedJobList = await AsyncStorage.getItem('@SAVED_JOBS');
    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList);

    const updatedJobList = [...savedJobList, selectedJob];

    AsyncStorage.setItem('@SAVED_JOBS', JSON.stringify(updatedJobList));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          JOBS FOR {selectedLanguage.toUpperCase()}
        </Text>
        <FlatList data={data} renderItem={renderJobs} />

        <TouchableOpacity
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 10,
            position: 'absolute',
            bottom: 10,
            right: 10,
          }}
          onPress={() => props.navigation.navigate('SavedJobs')}>
          <Text style={{color: 'white'}}>Kayıtlıları Gör</Text>
        </TouchableOpacity>

        <Modal
          isVisible={modalFlag}
          onBackdropPress={() => setModalFlag(false)}>
          <View style={jobs.modalBackground}>
            <View style={{borderBottomWidth: 2, borderColor: '#bdbdbd'}}>
              <Text style={jobs.jobTitle}>{selectedJob.title}</Text>
              <Text>
                {selectedJob.location} / {selectedJob.title}
              </Text>
              <Text>{selectedJob.company}</Text>
            </View>
            <View style={jobs.jobDesc}>
              <WebView
                source={{html: selectedJob.description}}
              />
            </View>
            <Button title="Kaydet" onPress={onJobSave} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export {Jobs};
