import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {detailStyle} from '../styles';

const RestaurantDetail = (props) => {
  function showPrice(length) {
    const priceLabel = [];

    for (let i = 0; i < length; i++) {
      priceLabel.push(
        <Icon key={i} name="currency-usd" size={25} color="#33691e" />,
      );
    }

    return priceLabel;
  }
  return (
    <Modal
      isVisible={props.isVisible}
      style={{justifyContent: 'flex-end', margin: 0, marginHorizontal: 10}}
      onBackdropPress={props.onClose}
      swipeDirection="down"
      onSwipeComplete={props.onClose}>
      <View style={detailStyle.container}>
        <View style={detailStyle.line} />
        <View style={detailStyle.line} />
        <Text style={detailStyle.name}>{props.restaurant.name}</Text>
        <Text style={detailStyle.address}>
          {props.restaurant.area} {props.restaurant.address}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{flexDirection: 'row'}}>
            <Icon name="phone" size={20} />
            <Text style={detailStyle.phone}>+{props.restaurant.phone}</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {showPrice(props.restaurant.price)}
          </View>
        </View>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in
          scelerisque nibh, nec condimentum arcu. Integer tincidunt ullamcorper
          dapibus. Etiam viverra tellus lectus, non faucibus sem lobortis
          varius. Etiam ut gravida nunc, in eleifend elit. Morbi laoreet
          elementum tellus, et mattis dui ultrices a. Aliquam erat volutpat.
          Donec luctus ac augue non ultricies. Praesent efficitur vitae odio nec
          euismod. Curabitur eget nibh ultrices, tempus tortor id, volutpat
          odio. Nullam vel est eget felis fermentum venenatis. Donec sed felis
          quis leo rutrum viverra vitae quis sapien. Duis tincidunt, ante et
          bibendum lacinia, libero nisi malesuada dolor, nec venenatis ligula
          diam quis velit.
        </Text>
      </View>
    </Modal>
  );
};

export {RestaurantDetail};
