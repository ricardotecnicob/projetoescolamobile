import React, { useState, useEffect } from 'react';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  VisualizationItem,
  VisualizationTitle,
  VisualizationBody,
  VisualizationFotter,
  NoData,
  NoDataText,
} from './styles';
import { Body } from '../../components/Body';

import dataInfo from '../../services/bilheteescolarserver.json';

export default function Send() {
  const { classes: mockedClasses } = dataInfo;
  const { note: notesToPick } = dataInfo;

  const [classes, setClasses] = useState([]);
  const [pickedNote, setPickedNote] = useState('');
  const [previewDescription, setPreviewDescription] = useState('');

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

  useEffect(() => {
    const preview = notesToPick.find(item => item.name === pickedNote) || '';
    setPreviewDescription(preview.description);
  }, [pickedNote]); // eslint-disable-line

  return (
    <Background>
      <Container>
        <Body style={{ justifyContent: 'space-between' }}>
          <BodyTop>
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
          </BodyTop>
          <BodyMiddle>
            <TitleText>Note</TitleText>
            <Selector
              selectedValue={pickedNote}
              onValueChange={value => setPickedNote(value)}
              soptions={notesToPick}
              mode="dialog"
              icon="keyboard-arrow-down"
              name="picknote"
            />
            <VisualizationItem>
              {pickedNote !== '' ? (
                <>
                  <VisualizationTitle>Dear mr. and mrs.,</VisualizationTitle>
                  <VisualizationBody>{previewDescription}</VisualizationBody>
                  <VisualizationFotter>
                    Sincerily, Teacher Susan.
                  </VisualizationFotter>
                </>
              ) : (
                <NoData>
                  <Icon name="close" size={24} color="#ddd" />
                  <NoDataText>Please, select a note to preview.</NoDataText>
                </NoData>
              )}
            </VisualizationItem>
          </BodyMiddle>
          <BodyButtom>
            <ButtonSend onPress={handleSend}>Send SMS&#39;s</ButtonSend>
          </BodyButtom>
        </Body>
      </Container>
    </Background>
  );
}
