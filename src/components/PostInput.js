import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {post_input} from './styles';

const PostInput = (props) => {
  const [postText, setPostText] = React.useState('');

  return (
    <View style={post_input.container}>
      {
        // ...
      }
    </View>
  );
};

export {PostInput};
