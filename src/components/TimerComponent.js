import React from 'react';
import {View, Animated} from 'react-native';
import Modal from 'react-native-modal';
import {CountdownCircleTimer} from 'react-native-countdown-circle-timer';

const TimerComponent = (props) => {
  return (
    <Modal backdropOpacity={0.2} isVisible={props.visibility}>
      <View style={{backgroundColor: '#3949ab', alignItems: 'center', padding: 20, borderRadius: 10}}>
        <CountdownCircleTimer
          isPlaying={props.counterFlag}
          duration={5}
          onComplete={() => props.onTimerCompleted()}
          colors={[
            ['#fff176', 0.4],
            ['#ba68c8', 0.4],
            ['#ff8a65', 0.2],
          ]}>
          {({remainingTime, animatedColor}) => (
            <Animated.Text
              style={{
                fontFamily: 'Pacifico-Regular',
                fontSize: 80,
                color: animatedColor,
              }}>
              {remainingTime}
            </Animated.Text>
          )}
        </CountdownCircleTimer>
      </View>
    </Modal>
  );
};

export {TimerComponent};
