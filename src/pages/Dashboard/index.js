import React from 'react';
import PropTypes from 'prop-types';
import Background from '../../components/Background';

import {
  Container,
  BodyTop,
  BodyButtom,
  TextWelcome,
  TextTeacher,
  Item,
  NumberItem,
  TextNumber,
  TextItem,
  ButtomExit,
} from './styles';
import { HeaderBar, HeaderButton, HeaderButtonText } from '../../styles/header';
import { Body } from '../../components/Body';

export default function Dashboard({ navigation }) {
  return (
    <Background>
      <Container>
        <Body style={{ justifyContent: 'space-between' }}>
          <BodyTop>
            <TextWelcome>Bem vindo!</TextWelcome>
            <TextTeacher>Professor João da Silva</TextTeacher>
            <Item>
              <NumberItem>
                <TextNumber>4</TextNumber>
              </NumberItem>
              <TextItem>Turmas</TextItem>
            </Item>
            <Item>
              <NumberItem>
                <TextNumber>20</TextNumber>
              </NumberItem>
              <TextItem>Alunos</TextItem>
            </Item>
            <Item>
              <NumberItem>
                <TextNumber>14</TextNumber>
              </NumberItem>
              <TextItem>Bilhetes</TextItem>
            </Item>
          </BodyTop>
          <BodyButtom onPress={() => navigation.navigate('Login')}>
            <ButtomExit>SAIR</ButtomExit>
          </BodyButtom>
        </Body>
      </Container>
    </Background>
  );
}

Dashboard.navigationOptions = ({ navigation }) => ({
  header: (
    <HeaderBar>
      <HeaderButton onPress={() => navigation.navigate('Help')}>
        <HeaderButtonText active={false}>Help</HeaderButtonText>
      </HeaderButton>

      <HeaderButton onPress={() => {}}>
        <HeaderButtonText active>Status</HeaderButtonText>
      </HeaderButton>

      <HeaderButton onPress={() => navigation.navigate('Send')}>
        <HeaderButtonText active={false}>Send</HeaderButtonText>
      </HeaderButton>
    </HeaderBar>
  ),
});

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
