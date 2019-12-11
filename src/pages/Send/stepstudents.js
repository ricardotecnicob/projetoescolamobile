import React from 'react';
import { View, Text } from 'react-native';

import { Container, BodyButtom, ButtonSend } from './styles';
import { Body } from '../../components/Body';

export default function Stepstudents({ navigation }) {
  function handleContinue() {
    navigation.navigate('Stepnote');
  }
  return (
    <View>
      <Text>Select Students</Text>
      <BodyButtom>
        <ButtonSend onPress={handleContinue}>Continue</ButtonSend>
      </BodyButtom>
    </View>
  );
}
