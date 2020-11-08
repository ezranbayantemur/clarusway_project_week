import Axios from 'axios';
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {categoryModal} from './styles';

const CategorySelectModal = (props) => {
  const [categoryList, setCategoryList] = useState([]);

  const fetchData = async () => {
    const {
      data: {trivia_categories},
    } = await Axios.get('https://opentdb.com/api_category.php');
    setCategoryList(trivia_categories);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCategories = ({item}) => (
    <TouchableOpacity
      style={categoryModal.categoryItemContainer}
      onPress={() => props.onCategorySelect(item)}>
      <Icon name="book-outline" color="white" size={20} />
      <Text style={categoryModal.categoryItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Modal
      isVisible={props.visibility}
      style={categoryModal.modal}
      onBackdropPress={props.onClose}>
      <View style={categoryModal.container}>
        <FlatList
          keyExtractor={(_, i) => i.toString()}
          data={categoryList}
          renderItem={renderCategories}
        />
        <Text></Text>
      </View>
    </Modal>
  );
};

export {CategorySelectModal};
