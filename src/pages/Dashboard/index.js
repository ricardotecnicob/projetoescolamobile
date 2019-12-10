import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Background from '../../components/Background';
import { withNavigationFocus } from 'react-navigation';
import dataInfo from '../../services/bilheteescolarserver.json';
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

function Dashboard({ navigation, isFocused }) {
  const [dataClass, setDataClass] = useState(0);
  const [students, setStudents] = useState(0);
  const [notes, setNotes] = useState(0);

  const { classes, note } = dataInfo;

  useEffect(() => {
    let contClass = 0;
    let contStudent = 0;
    let contNotes = 0;
    classes.map(item => {
      contClass = contClass + 1;
      item.students.map(student => {
        contStudent = contStudent + 1;
      });
    });
    note.map(() => {
      contNotes = contNotes + 1;
    });
    setStudents(contStudent);
    setDataClass(contClass);
    setNotes(contNotes);
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <Body style={{ justifyContent: 'space-between' }}>
          <BodyTop>
            <TextWelcome>Bem vindo!</TextWelcome>
            <TextTeacher>Professor João da Silva</TextTeacher>
            <Item>
              <NumberItem>
                <TextNumber>{dataClass}</TextNumber>
              </NumberItem>
              <TextItem>Turmas</TextItem>
            </Item>
            <Item>
              <NumberItem>
                <TextNumber>{students}</TextNumber>
              </NumberItem>
              <TextItem>Alunos</TextItem>
            </Item>
            <Item>
              <NumberItem>
                <TextNumber>{notes}</TextNumber>
              </NumberItem>
              <TextItem>Bilhetes</TextItem>
            </Item>
          </BodyTop>
          <BodyButtom>
            <ButtomExit onPress={() => navigation.navigate('Login')}>
              SAIR
            </ButtomExit>
          </BodyButtom>
        </Body>
      </Container>
    </Background>
  );
}

// Dashboard.navigationOptions = ({ navigation }) => ({
//   header: (
//     <HeaderBar>
//       <HeaderButton onPress={() => navigation.navigate('Help')}>
//         <HeaderButtonText active={false}>Help</HeaderButtonText>
//       </HeaderButton>

//       <HeaderButton onPress={() => {}}>
//         <HeaderButtonText active>Status</HeaderButtonText>
//       </HeaderButton>

//       <HeaderButton onPress={() => navigation.navigate('Send')}>
//         <HeaderButtonText active={false}>Send</HeaderButtonText>
//       </HeaderButton>
//     </HeaderBar>
//   ),
// });

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(Dashboard);
