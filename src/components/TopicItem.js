import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import { topicItem } from '../styles';

const TopicItem = (props) => {
  return (
      <TouchableOpacity
        style={[topicItem.container, { backgroundColor: `#${props.item.color}` }]}
        onPress={props.onSelect}
      >
          <Text style={topicItem.text}>{props.item.name}</Text>
      </TouchableOpacity>
    );
};

export {TopicItem};
