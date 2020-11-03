import Axios from 'axios';
import Modal from 'react-native-modal';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SafeAreaView, Text, View, FlatList, Button, TouchableOpacity} from 'react-native';

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
    let savedJobList = await AsyncStorage.getItem("@SAVED_JOBS");
    savedJobList = savedJobList == null ? [] : JSON.parse(savedJobList)

    const updatedJobList = [...savedJobList, selectedJob];

    AsyncStorage.setItem("@SAVED_JOBS", JSON.stringify(updatedJobList));

  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{ flex: 1 }}>
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
            right: 10
          }}
          onPress={() => props.navigation.navigate("SavedJobs")}
        >
          <Text style={{color: 'white'}}>Kayıtlıları Gör</Text>
        </TouchableOpacity>

        <Modal isVisible={modalFlag} onBackdropPress={() => setModalFlag(false)}>
          <View style={jobs.modalBackground}>
            <View style={{borderBottomWidth: 2, borderColor: '#bdbdbd'}}>
              <Text style={jobs.jobTitle}>{selectedJob.title}</Text>
              <Text>
                {selectedJob.location} / {selectedJob.title}
              </Text>
              <Text>{selectedJob.company}</Text>
            </View>
            <View style={jobs.jobDesc}>
              <Text numberOfLines={5}>{selectedJob.description}</Text>
            </View>
            <Button title="Kaydet" onPress={onJobSave} />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export {Jobs};

// company: "Wonder"
// company_logo: "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBc2VOIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--b87760e5f6c829a3e2ee589a4b246b0a81cba510/wonder.jpg"
// company_url: "https://www.wonder.me/"
// created_at: "Tue Nov 03 15:55:02 UTC 2020"
// description: "<p><strong>We're looking for a coder to build the world's best online meeting app.</strong></p>↵<p><strong>Our mission is to give the world a space where groups can meet and talk.</strong></p>↵<p>Online meetings are transactional. This means that the human side of getting together gets lost, the side that lives off spontaneous chats, random encounters or unexpected conversations. We believe that’s at the core of ‘Zoom fatigue’ – not poor video connection or audio issues.</p>↵<p>Wonder is a virtual space where you can connect to others in a more spontaneous and fluid way. You walk around freely and choose what groups you want to join. It’s fun, creative, energizing and we believe it's the future of how people will get together online. You can check it out <strong><a href="https://www.wonder.me/">here</a></strong>.</p>↵<p>We’re a VC-backed team based in Kreuzberg, Berlin. If you want to learn more about us and what it's like to work at Wonder, have a look at this <strong><a href="https://app.pitch.com/app/public/presentation/f723530d-8da9-4a16-b1d3-bb48794b9a4c">presentation</a></strong> we created for you.</p>↵<p><strong>You will be part of our world-class product team</strong></p>↵<p>The mission of our product team is to define and execute the product vision. We ship major new features bi-weekly while making sure the product runs smoothly and without bugs.</p>↵<p><strong>As part of that team, you will</strong></p>↵<ul>↵<li>Take ownership over parts of the code base.</li>↵<li>Help us reach difficult architectural decisions.</li>↵<li>Contribute your best knowledge and experience about technology, products and processes.</li>↵<li>Shape the product roadmap with us.</li>↵<li>Write code (duh).</li>↵</ul>↵<p><strong>Who we look for</strong></p>↵<p>Broadly speaking, we look for product people. Concretely, this means you:</p>↵<ul>↵<li>Know the latest state of technology and what we can do with it.</li>↵<li>Have a strong instinct for great products and what makes them great.</li>↵<li>Don’t need anyone to manage you and you motivate everyone around you.</li>↵<li>Love Wonder as much as we do.</li>↵<li>Have experience in JavaScript and one or more programming languages (e.g. C/C++, Python, Go, Java).</li>↵<li>Have experience in interactive React.JS-based web application.</li>↵<li>Have working experience with state of the art state management libraries, the HTML5 and CSS3 API's.</li>↵<li>Optional experience: WebGL, WebRTC, CI/CD.</li>↵</ul>↵<p>We strongly encourage female and diverse candidates to apply. The role is based in Berlin, with flexible working arrangements, a generous equity package and competitive pay.</p>↵<p><strong>Why you should join us</strong></p>↵<ul>↵<li>Our work is technically challenging: we're using WebGL for rendering 3-dimensional rooms that expand when more users join. Now, we are starting to build our own WebRTC backend. It's incredibly challenging to enable real-time communication and data-flow between thousands of users.</li>↵<li>The future of work is a hot topic: remote communication will transform the way humans live and work. We want to become a core pillar of the online working stack. You'll tell your grandchildren that you were part of it.</li>↵<li>We have a world-class engineering team: we're a product-focused company and are assembling some of the smartest and and most talented developers and designers to build Wonder.</li>↵<li>It's an exciting stage: You will shape a product from the very beginning and see its fastest growth. If you want to build something, this is just the right time.</li>↵</ul>↵<p><strong>Interested?</strong></p>↵<p>Apply via the <a href="https://ltpx.nl/3FVwn41"><strong>application form</strong></a>.</p>↵<p><em>Agency calls are not appreciated.</em><img src="https://camo.githubusercontent.com/7dd9184814996d7520940f0c59c50baa513d7a13/68747470733a2f2f62636f6e74726f6c2e62726f636b6d657965722e6e6c2f747261636b2e7068703f6f7264657269643d313937363032"></p>↵"
// how_to_apply: "<p><a href="https://ltpx.nl/97t7ffU">Click here to apply</a></p>↵"
// id: "f0dcdcb3-82f9-428d-b187-09f614155119"
// location: "Berlin"
// title: "Senior Frontend Engineer (f/m/d)"
// type: "Full Time"
// url: "https://jobs.github.com/positions/f0dcdcb3-82f9-428d-b187-09f614155119"
