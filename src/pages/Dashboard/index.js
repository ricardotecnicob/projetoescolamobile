import React, { useState, useEffect } from 'react';
import { TouchableOpacity, ScrollView } from 'react-native';
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
  ButtomExit,
  ItemIcon,
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

  const DashItem = ({
    size,
    icon,
    name,
    number,
    backgroundColor = '#024f83',
    fontColor = '#fff',
  }) => {
    return (
      <Item backgroundColor={backgroundColor}>
        <NumberItem>
          <TextNumber fontColor={fontColor}>{number}</TextNumber>
          <TextNumber fontColor={fontColor} size={parseInt(size, 10)}>
            {name}
          </TextNumber>
        </NumberItem>
        <ItemIcon name={icon} size={40} color={fontColor} />
      </Item>
    );
  };

  return (
    <Background>
      <Container>
        <Body style={{ justifyContent: 'space-between' }}>
          <BodyTop>
            <TextWelcome>Welcome!</TextWelcome>
            <TextTeacher>Teacher Inez J. Clark</TextTeacher>
            <ScrollView>
              <TouchableOpacity
                onPress={() => navigation.navigate('Classroom')}
              >
                <DashItem
                  number={dataClass || ''}
                  size={16}
                  icon="create"
                  name="Classes"
                />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Classroom')}
              >
                <DashItem
                  number={students || ''}
                  size={20}
                  icon="people"
                  name="Students"
                  backgroundColor="#eee"
                  fontColor="#333"
                />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Notes')}>
                <DashItem
                  number={notes || ''}
                  size={20}
                  icon="note"
                  name="Notes"
                />
              </TouchableOpacity>
            </ScrollView>
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
