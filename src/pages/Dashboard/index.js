import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withNavigationFocus } from 'react-navigation';
import Background from '../../components/Background';
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
      contClass += 1;
      item.students.map(student => {
        contStudent += 1;
        return student;
      });
      return item;
    });
    note.map(item => {
      contNotes += 1;
      return item;
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
            <TextWelcome>Welcome!</TextWelcome>
            <TextTeacher>Inez J. Clark</TextTeacher>
            <Item>
              <NumberItem>
                <TextNumber>{dataClass}</TextNumber>
              </NumberItem>
              <TextItem>Classes</TextItem>
            </Item>
            <Item>
              <NumberItem>
                <TextNumber>{students}</TextNumber>
              </NumberItem>
              <TextItem>Students</TextItem>
            </Item>
            <Item>
              <NumberItem>
                <TextNumber>{notes}</TextNumber>
              </NumberItem>
              <TextItem>Notes</TextItem>
            </Item>
          </BodyTop>
          <BodyButtom>
            <ButtomExit onPress={() => navigation.navigate('Login')}>
              LOGOUT
            </ButtomExit>
          </BodyButtom>
        </Body>
      </Container>
    </Background>
  );
}

Dashboard.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigationFocus(Dashboard);
