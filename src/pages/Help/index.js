import React from 'react';
import { Text } from 'react-native';
import Background from '../../components/Background';

import { Container } from './styles';
import { HeaderBar, HeaderButton, HeaderButtonText } from '../../styles/header';

export default function Send() {
  return (
    <Background>
      <Container>
        <Text>Help</Text>
      </Container>
    </Background>
  );
}

Send.navigationOptions = ({ navigation }) => ({
  header: (
    <HeaderBar>
      <HeaderButton onPress={() => {}}>
        <HeaderButtonText active>Help</HeaderButtonText>
      </HeaderButton>

      <HeaderButton onPress={() => navigation.navigate('Dashboard')}>
        <HeaderButtonText active={false}>Status</HeaderButtonText>
      </HeaderButton>

      <HeaderButton onPress={() => navigation.navigate('Send')}>
        <HeaderButtonText active={false}>Send</HeaderButtonText>
      </HeaderButton>
    </HeaderBar>
  ),
});
