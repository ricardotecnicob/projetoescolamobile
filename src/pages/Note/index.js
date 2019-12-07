import React from 'react';
import Background from '../../components/Background';
import { Text } from 'react-native';

import {
  Container,
  BodyTop,
  BodyMiddle,
  BodyButtom,
  TitleText,
  ListNotes,
  Item,
  NumberItem,
  TextNumber,
  TextItem,
  ButtomExit,
} from './styles';
import { HeaderBar, HeaderButton, HeaderButtonText } from '../../styles/header';
import { Body } from '../../components/Body';

export default function Note() {
  return (
    <Background>
      <Container>
        <Body style={{ justifyContent: 'space-between' }}>
          <BodyTop>
            <TitleText>Bilhetes</TitleText>
            <ListNotes
              data={null}
              keyExtractor={'1'}
              renderItem={() => {
                <>
                  <Text>Oi</Text>
                </>;
              }}
            />
          </BodyTop>
          <BodyMiddle />
          <BodyButtom onPress={() => navigation.navigate('Login')}>
            <ButtomExit>NOVO BILHETE</ButtomExit>
          </BodyButtom>
        </Body>
      </Container>
    </Background>
  );
}

Note.navigationOptions = ({ navigation }) => ({
  header: (
    <HeaderBar>
      <HeaderButton onPress={() => navigation.navigate('Send')}>
        <HeaderButtonText active={false}>Help</HeaderButtonText>
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
