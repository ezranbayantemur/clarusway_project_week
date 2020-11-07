import React from 'react';
import {View, TextInput} from 'react-native';

import {input} from './styles'

const Input = (props) => {
  return (
    <View style={input.container}>
      <TextInput 
        style={input.textInput}
        placeholder={props.placeholder}
        {...props.inputProps}
        onChangeText={props.onType}
      />
    </View>
  );
};

export {Input};
