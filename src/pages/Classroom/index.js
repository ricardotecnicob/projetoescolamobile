import React, { useState, useEffect } from 'react';
import { View, Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Background from '../../components/Background';
import { Body } from '../../components/Body';
// import ModalNotes from '../../components/Modal';
import dataInfo from '../../services/bilheteescolarserver.json';
import {
  Container,
  BodyTop,
  NewClass,
  BodyButtom,
  TitleText,
  ListClass,
  Item,
  TextItem,
  // BodyMiddle,
  // VisualizationItem,
  // VisualizationTitle,
  // VisualizationBody,
  // VisualizationFotter,
  // NoData,
  // NoDataText,
  // ButtomExit,
} from './styles';
import { HeaderBar, HeaderButton, HeaderButtonText } from '../../styles/header';

function Classroom({ isFocused }) {
  const [dataVisualization, setDataVisualization] = useState([]);
  const [dataEdition, setDataEdition] = useState([]);
  const [editable, setEditable] = useState(false);
  const [currentClass, setCurrentClass] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { classes } = dataInfo;

  function handleVisualization(id) {
    classes.map(item => {
      if (item.id === id) {
        setDataVisualization(item.students);
        setCurrentClass(`${item.grade}º ${item.letter} ${item.shift}`);
      }
    });
  }

  function handleModalNew() {
    setEditable(false);
    setModalVisible(true);
  }

  function handleModalEdit(item) {
    setEditable(true);
    setDataEdition(item);
    setModalVisible(true);
  }

  // function modalClose() {
  //   setModalVisible(false);
  // }

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
                      <TextItem>{`${item.grade}º ${item.letter} - ${item.shift}`}</TextItem>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => handleModalEdit(item)}
                      style={{ margin: 10 }}
                    >
                      <Icon name="edit" size={25} color="#024f83" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRemove}>
                      <Icon name="clear" size={25} color="#FF0000" />
                    </TouchableOpacity>
                  </View>
                </Item>
              )}
            />
            <NewClass onPress={handleModalNew}>New Class</NewClass>
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
                    <TouchableOpacity
                      onPress={() => handleVisualization(item.id)}
                    >
                      <TextItem>{item.name}</TextItem>
                    </TouchableOpacity>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                    }}
                  >
                    <TouchableOpacity onPress={() => handleModalEdit(item)}>
                      <Icon name="edit" size={25} color="#024f83" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleRemove}>
                      <Icon name="clear" size={25} color="#FF0000" />
                    </TouchableOpacity>
                  </View>
                </Item>
              )}
            />
            <NewClass onPress={handleModalNew}>New Student</NewClass>
          </BodyButtom>
        </Body>
      </Container>
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

export default withNavigationFocus(Classroom);
