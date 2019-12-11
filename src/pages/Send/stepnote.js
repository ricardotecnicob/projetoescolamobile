import React from 'react';
import { View, Text, Alert } from 'react-native';

import { Container, BodyButtom, ButtonSend } from './styles';
import { Body } from '../../components/Body';

export default function Stepnote() {
  function handleSend() {
    Alert.alert('Sendind', 'SMSs on the way!');
  }
  return (
    <View>
      <Text>Select Note</Text>
      <BodyButtom>
        <ButtonSend onPress={handleSend}>Send SMS&#39;s</ButtonSend>
      </BodyButtom>
    </View>
  );
}
