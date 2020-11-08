import Axios from 'axios';
import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';

import {categoryModal} from './styles';

const CategorySelectModal = (props) => {
  return (
    <Modal
      isVisible={props.visibility}
      style={categoryModal.modal}
      onBackdropPress={props.onClose}>
      <View style={categoryModal.container}>
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={categoryList}
          renderItem={({item, i}) => (
            <TouchableOpacity
              style={categoryModal.categoryItemContainer}
              onPress={() => props.onCategorySelect(item)}>
              <Text style={categoryModal.categoryItemText}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
        <Text></Text>
      </View>
    </Modal>
  );
};

export {CategorySelectModal};
