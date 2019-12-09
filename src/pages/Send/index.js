import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';

import Background from '../../components/Background';
import Checkbox from '../../components/Checkbox';
import { HeaderBar, HeaderButton, HeaderButtonText } from '../../styles/header';

import {
  Container,
  ViewCheckboxClass,
  ViewCheckboxStudent,
  ViewCheckboxes,
  CheckboxText,
  TitleText,
  BodySend,
  ButtonSend,
  ListClasses,
} from './styles';
import { Body } from '../../components/Body';

import dataInfo from '../../services/bilheteescolarserver.json';

export default function Send() {
  const { classes: mockedClasses } = dataInfo;

  const [classes, setClasses] = useState([]);

  // Initialize all students with checkbox marked false
  useEffect(() => {
    async function initializeClasses() {
      const newClasses = await mockedClasses.map(eachClass => {
        const { id, name } = eachClass;

        const newStudent = eachClass.students.map(eachStudent => {
          return {
            ...eachStudent,
            checked: false,
          };
        });

        return {
          id,
          name,
          checked: false,
          students: newStudent,
        };
      });

      setClasses(newClasses);
    }
    initializeClasses();
  }, []); //

  function handleChangeClass(classroom) {
    let currentState = classes;

    currentState = currentState.map(item => {
      if (item.id === classroom.id) {
        item.checked = !item.checked;
        item.students.map(subitem => {
          subitem.checked = item.checked;
          return subitem;
        });
      }
      return item;
    });

    setClasses(currentState);
  }
  // Helps track State in development
  // useEffect(() => {
  //   console.tron.log(classes);
  // }, [classes]);

  function handleChangeStudent(classroomId, studentId) {
    let currentState = classes;

    currentState = currentState.map(item => {
      let studentsCheckedCount = 0;
      if (item.id === classroomId) {
        item.students.map(subitem => {
          if (subitem.id === studentId) {
            subitem.checked = !subitem.checked;
          }
          if (subitem.checked) {
            studentsCheckedCount += 1;
          }
          return subitem;
        });
        // Controll Class Checkbox
        if (studentsCheckedCount === item.students.length) {
          item.checked = true;
        }
        if (studentsCheckedCount < item.students.length) {
          item.checked = false;
        }
      }
      return item;
    });

    setClasses(currentState);
  }

  function handleSend() {
    console.tron.log(classes);
    Alert.alert(
      'Sendind SMS',
      'In a couple minutes all parents shall receive your note.'
    );
  }

  return (
    <Background>
      <Container>
        <Body>
          <BodySend>
            <TitleText>Send</TitleText>

            {/* Classes */}
            <ListClasses
              data={classes}
              keyExtractor={item => String(item.id)}
              renderItem={({ item: classroom }) => (
                <ViewCheckboxes>
                  <ViewCheckboxClass>
                    <Checkbox
                      value={classroom.checked}
                      onChange={() => handleChangeClass(classroom)}
                    />
                    <CheckboxText>{classroom.name}</CheckboxText>
                  </ViewCheckboxClass>

                  {/* Students */}
                  {classroom.students.map(student => (
                    <ViewCheckboxStudent key={student.name}>
                      <Checkbox
                        value={student.checked}
                        onChange={() =>
                          handleChangeStudent(classroom.id, student.id)
                        }
                      />
                      <CheckboxText>
                        {student.name} | {student.parent.name}
                      </CheckboxText>
                    </ViewCheckboxStudent>
                  ))}
                </ViewCheckboxes>
              )}
            />
          </BodySend>
          <ButtonSend onPress={handleSend}>Send SMS&#39;s</ButtonSend>
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
