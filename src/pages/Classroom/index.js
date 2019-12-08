import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { View, Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
import { Body } from '../../components/Body';
import Modal from '../../components/Modal';
import dataInfo from '../../services/bilheteescolarserver.json';

import { HeaderBar, HeaderButton, HeaderButtonText } from '../../styles/header';
import {
  Container,
  BodyTop,
  NewClass,
  BodyButtom,
  TitleText,
  ListClass,
  Item,
  CardItem,
  TextItem,
  TextItemStudent,
} from './styles';
import { Title, TitleEdit } from '../../components/Modal/styles';

function Classroom({ isFocused }) {
  const [dataVisualization, setDataVisualization] = useState([]);
  const { classes } = dataInfo;

  // States to Class Modal
  const [editingClass, setEditingClass] = useState(false);
  const [showModalClass, setShowModalClass] = useState(false);
  const [currentClass, setCurrentClass] = useState(false);
  const [className, setClassName] = useState('');

  // States to Students Modal
  const [editingStudent, setEditingStudent] = useState(false);
  const [showModalStudent, setShowModalStudent] = useState(false);
  const [studentName, setStudentName] = useState('');

  // Map items from json-server
  function handleVisualization(id) {
    classes.map(item => {
      if (item.id === id) {
        setDataVisualization(item.students);
        setCurrentClass(item.name);
      }
      return null;
    });
  }

  // Sets New Class Modal
  function handleModalNewClass() {
    setEditingClass(false);
    setClassName('');
    setShowModalClass(true);
  }

  // Sets Edit Class Modal
  function handleModalEditClass(item) {
    setEditingClass(true);
    setClassName(item.name);
    setShowModalClass(true);
  }

  // Sets New Student Modal
  function handleModalNewStudent() {
    setEditingStudent(false);
    setStudentName('');
    setShowModalStudent(true);
  }

  // Sets Edit Student Modal
  function handleModalEditStudent(item) {
    setEditingStudent(true);
    setStudentName(item.name);
    setShowModalStudent(true);
  }

  // Close Modal
  function modalClose() {
    setShowModalClass(false);
    setShowModalStudent(false);
  }

  // Button to delete class or student
  function handleRemove() {
    Alert.alert('Warning', 'Not work in Demo App!');
  }

  useEffect(() => {
    setDataVisualization([]);
    setCurrentClass('');
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <Body style={{ justifyContent: 'space-between' }}>
          <BodyTop>
            <TitleText>Classes</TitleText>
            <ListClass
              data={classes}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Item>
                  <View>
                    <TouchableOpacity
                      onPress={() => handleVisualization(item.id)}
                    >
                      <TextItem>{item.name}</TextItem>
                    </TouchableOpacity>
                  </View>
                  <CardItem>
                    <TouchableOpacity
                      onPress={() => handleModalEditClass(item)}
                      style={{ margin: 10 }}
                    >
                      <Icon name="edit" size={25} color="#024f83" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRemove}>
                      <Icon name="clear" size={25} color="#FF0000" />
                    </TouchableOpacity>
                  </CardItem>
                </Item>
              )}
            />
            <NewClass onPress={handleModalNewClass}>New Class</NewClass>
          </BodyTop>
          <BodyButtom>
            <TitleText>
              Students - {currentClass === '' ? 'Select Class' : currentClass}
            </TitleText>
            <ListClass
              data={dataVisualization}
              keyExtractor={item => String(item.id)}
              renderItem={({ item }) => (
                <Item>
                  <View>
                    <TextItemStudent>{item.name}</TextItemStudent>
                  </View>
                  <CardItem>
                    <TouchableOpacity
                      onPress={() => handleModalEditStudent(item)}
                      style={{ margin: 10 }}
                    >
                      <Icon name="edit" size={25} color="#024f83" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRemove}>
                      <Icon name="clear" size={25} color="#FF0000" />
                    </TouchableOpacity>
                  </CardItem>
                </Item>
              )}
            />
            <NewClass onPress={handleModalNewStudent}>New Student</NewClass>
          </BodyButtom>
        </Body>
      </Container>
      {showModalClass && (
        <Modal
          visible={showModalClass}
          editable={editingClass}
          dismiss={modalClose}
        >
          <Title>{editingClass ? 'Class Edit' : 'New Class'}</Title>
          <TitleEdit
            autoCorrect={false}
            placeholder="Class name"
            placeholderTextColor="rgba(0,0,0,0.3)"
            disableUnderline
            value={className}
            onChangeText={setClassName}
          />
        </Modal>
      )}
      {showModalStudent && (
        <Modal
          visible={showModalStudent}
          editable={editingStudent}
          dismiss={modalClose}
        >
          <Title>{editingStudent ? 'Student Edit' : 'New Student'}</Title>
          <TitleEdit
            autoCorrect={false}
            placeholder="Student name"
            placeholderTextColor="rgba(0,0,0,0.3)"
            disableUnderline
            value={studentName}
            onChangeText={setStudentName}
          />
        </Modal>
      )}
    </Background>
  );
}

Classroom.navigationOptions = ({ navigation }) => ({
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

Classroom.propTypes = {
  isFocused: PropTypes.bool,
};

Classroom.defaultProps = {
  isFocused: false,
};

export default withNavigationFocus(Classroom);
