import React, { useState, useEffect } from 'react';
import { Alert, ToastAndroid } from 'react-native';
import axios from 'axios';

import Background from '../../components/Background';
import Checkbox from '../../components/Checkbox';
import Selector from '../../components/Selector';

import {
  Container,
  ViewCheckboxClass,
  ViewCheckboxStudent,
  ViewCheckboxes,
  CheckboxText,
  TitleText,
  BodyTop,
  BodyMiddle,
  BodyButtom,
  ButtonSend,
  ListClasses,
} from './styles';
import { Body } from '../../components/Body';

export default function Send() {
  const [serverClasses, setServerClasses] = useState([]);
  const [serverNotes, setServerNotes] = useState([]);

  const [classes, setClasses] = useState([]);

  const [currentNote, setCurrentNote] = useState(null);

  const apiTeste = axios.create({
    baseURL: `http://ssh.espaker.com.br:8860`,
  });

  // GET initial data of classes and notes
  useEffect(() => {
    async function getData() {
      try {
        const { data } = await apiTeste.get('api/v1/getDataBaseJson', {
          headers: { token_auth: '14acd1c3b2f50c1e7354668f7d0b4057' },
        });

        setServerClasses(data.message.classes);
        setServerNotes(data.message.notes);

        setCurrentNote(data.message.notes[0]);
      } catch (error) {
        Alert.alert('Load Classes', 'It was not possible load data.');
      }
    }

    getData();
  }, []);

  // Sets checkboxes false in all classes after load from server
  useEffect(() => {
    async function initializeClasses() {
      const newClasses = await serverClasses.map(eachClass => {
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
  }, [serverClasses]); // eslint-disable-line

  // Change class and within students checkboxes
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

  // Changes student checkbox
  function handleChangeStudent(classroomId, studentId) {
    let currentState = classes;

    currentState = currentState.map(item => {
      let studentsCheckedCount = 0;
      if (item.id === classroomId) {
        item.students.map(subitem => {
          // Changes student checkbox
          if (subitem.id === studentId) {
            subitem.checked = !subitem.checked;
          }
          // Counts number of checked students in one class
          if (subitem.checked) {
            studentsCheckedCount += 1;
          }
          return subitem;
        });
        // If all students are checked, also check its class
        if (studentsCheckedCount === item.students.length) {
          item.checked = true;
        }
        // If one of students are unchecked, also uncheck its class
        if (studentsCheckedCount < item.students.length) {
          item.checked = false;
        }
      }
      return item;
    });

    setClasses(currentState);
  }

  function handlePickedNote(noteName) {
    const newNote = serverNotes.find(item => item.name === noteName) || '';
    setCurrentNote(newNote);
  }

  // Uncheck all checkboxes after Send messages
  async function uncheckAll() {
    let currentState = classes;

    currentState = await currentState.map(item => {
      item.checked = false;
      item.students.map(subitem => {
        subitem.checked = false;
        return subitem;
      });
      return item;
    });

    setClasses(currentState);
  }

  // POST Messages
  async function handleSend() {
    let checks = [];

    await classes.map(item => {
      item.students.map(subitem => {
        if (subitem.checked) {
          checks = [...checks, subitem.id];
        }
        return subitem;
      });
      return item;
    });

    if (checks.length > 0 && currentNote.name !== '' && currentNote !== null) {
      try {
        // Manda Mensagens! Gasta créditos.
        axios({
          method: 'post',
          url: 'http://ssh.espaker.com.br:8860/api/v1/sendNote',
          headers: {
            token_auth: '14acd1c3b2f50c1e7354668f7d0b4057',
          },
          data: {
            note: currentNote.id,
            students: checks,
          },
        }).then(response => console.log(response.data));

        // console.tron.log({
        //   'Enviando para:': checks,
        //   'A Mensagem': currentNote,
        // });

        Alert.alert('Sending message', 'Soon all messages will be delivered.');
        uncheckAll();
      } catch (error) {
        Alert.alert(
          'Error to send notes',
          'It was not possible send notes to students.'
        );
      }
    } else {
      ToastAndroid.show(
        'Please, select at least one student.',
        ToastAndroid.SHORT
      );
    }
  }

  return (
    <Background>
      <Container>
        <Body style={{ justifyContent: 'space-between' }}>
          <BodyTop>
            <TitleText>Select Students</TitleText>

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
                        {student.name} | {student.parents[0].name}
                      </CheckboxText>
                    </ViewCheckboxStudent>
                  ))}
                </ViewCheckboxes>
              )}
            />
          </BodyTop>
          <BodyMiddle>
            <TitleText>Select Note</TitleText>
            <Selector
              selectedValue={currentNote ? currentNote.name : ''}
              onValueChange={value => handlePickedNote(value)}
              soptions={serverNotes}
              mode="dialog"
              icon="keyboard-arrow-down"
              name="picknote"
            />
          </BodyMiddle>
          <BodyButtom>
            <ButtonSend onPress={handleSend}>Send SMS&#39;s</ButtonSend>
          </BodyButtom>
        </Body>
      </Container>
    </Background>
  );
}
