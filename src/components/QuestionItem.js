import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';

import {questionItem} from './styles';

const QuestionItem = (props) => {
  return (
    <View style={questionItem.container}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <View style={questionItem.questionContainer}>
          <Text style={questionItem.questionText}>
            {props.questionObject.question}
          </Text>
        </View>
      </View>

      <View style={questionItem.buttonContainer}>
        <TouchableOpacity
          style={questionItem.trueButton}
          onPress={() =>
            props.onAnswer(props.questionObject.correct_answer === 'True')
          }>
          <Text style={questionItem.buttonText}>True</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={questionItem.falseButton}
          onPress={() =>
            props.onAnswer(props.questionObject.correct_answer === 'False')
          }>
          <Text style={questionItem.buttonText}>False</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export {QuestionItem};
