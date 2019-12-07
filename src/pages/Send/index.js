import React from 'react';
import { Text } from 'react-native';
import Background from '../../components/Background';

import { Container } from './styles';
import { HeaderBar, HeaderButton, HeaderButtonText } from '../../styles/header';
import { Body } from '../../components/Body';

export default function Send() {
  return (
    <Background>
      <Container>
        <Body>
          <Text>Send</Text>
        </Body>
      </Container>
    </Background>
  );
}

Send.navigationOptions = ({ navigation }) => ({
  header: (
    <HeaderBar>
      <HeaderButton onPress={() => navigation.navigate('Help')}>
        <HeaderButtonText active={false}>Help</HeaderButtonText>
      </HeaderButton>

      <HeaderButton onPress={() => navigation.navigate('Dashboard')}>
        <HeaderButtonText active={false}>Status</HeaderButtonText>
      </HeaderButton>

      <HeaderButton onPress={() => {}}>
        <HeaderButtonText active>Send</HeaderButtonText>
      </HeaderButton>
    </HeaderBar>
  ),
});
