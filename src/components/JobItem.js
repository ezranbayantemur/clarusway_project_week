import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import { jobItem } from '../styles';

const JobItem = (props) => {
  return (
      <TouchableOpacity
        style={jobItem.container}
        onPress={props.onSelect}
      >
          <Text style={jobItem.jobname}>{props.job.title}</Text>
          <Text>{props.job.type} / {props.job.location}</Text>
      </TouchableOpacity>
    );
};

export {JobItem};