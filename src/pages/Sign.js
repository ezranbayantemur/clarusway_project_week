import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  KeyboardAvoidingView,
} from 'react-native';

import {authStyle} from './styles';
import {Input, Button} from '../components';
import auth from '@react-native-firebase/auth';

const Sign = (props) => {
  // Daha az state, daha optimal bir yapı kurulabilir mi?
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');

  async function sign() {
    // Geçerli e-posta ve doğru değer kontrolü? (REGEX)
    if (password === passwordRepeat) {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        props.navigation.goBack();
      } catch (error) {
        Alert.alert('ClarusChat', 'An error occured');
      }
    } else {
      Alert.alert('ClarusChat', 'Passwords are not match');
    }
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView style={{flex: 1, backgroundColor: '#cfd8dc'}}>
        <ScrollView contentContainerStyle={{flex: 1}}>
          <View style={authStyle.container}>
            <Image
              style={authStyle.logo}
              source={require('../assets/logo.jpeg')}
            />
            <Text style={authStyle.logoText}>ClarusChat</Text>
          </View>
          <View style={{flex: 1}}>
            <Input
              inputProps={{
                placeholder: 'Type your e-mail address..',
                keyboardType: 'email-address',
              }}
              onType={(value) => setEmail(value)}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password..',
                secureTextEntry: true,
              }}
              onType={(value) => setPassword(value)}
            />
            <Input
              inputProps={{
                placeholder: 'Type your password again..',
                secureTextEntry: true,
              }}
              onType={(value) => setPasswordRepeat(value)}
            />
            <Button title="Create account" onPress={() => sign()} />
            <Button
              title="Cancel"
              noBorder
              onPress={() => props.navigation.goBack()}
            />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export {Sign};
