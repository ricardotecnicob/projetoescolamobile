import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import { useSelector, useDispatch } from 'react-redux';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
=======
import Background from '../../components/Background';
import { Body } from '../../components/Body';
import ModalNotes from '../../components/Modal';
import { Text, View, Alert } from 'react-native';
>>>>>>> new_notes
import { withNavigationFocus } from 'react-navigation';

import { loadNotesRequest } from '../../store/modules/note/actions';

import Background from '../../components/Background';
import dataInfo from '../../services/bilheteescolarserver.json';

import {
  Container,
  BodyTop,
  BodyMiddle,
  BodyButtom,
  TitleText,
  ListNotes,
  Item,
  TextItem,
  VisualizationItem,
  VisualizationTitle,
  VisualizationBody,
  VisualizationFotter,
  NoData,
  NoDataText,
  ButtomEdit,
} from './styles';
import { HeaderBar, HeaderButton, HeaderButtonText } from '../../styles/header';
<<<<<<< HEAD
import { Body } from '../../components/Body';
=======
import { TouchableOpacity } from 'react-native-gesture-handler';
>>>>>>> new_notes

function Note({ isFocused }) {
  const dispatch = useDispatch();

  const [dataVisualization, setDataVisualization] = useState([]);
  const [dataEdition, setDataEdition] = useState([]);
  const [editable, setEditable] = useState(false);
  const [dataView, setDataView] = useState(false);
<<<<<<< HEAD
  const allNotes = useSelector(state => state.note.allNotes);
=======
  const [modalVisible, setModalVisible] = useState(false);
>>>>>>> new_notes
  const { note } = dataInfo;

  useEffect(() => {
    dispatch(loadNotesRequest());
  }, []);

  function handleVisualization(id) {
    note.map(item => {
      if (item.id === id) {
        setDataVisualization(item);
      }
    });
    setDataView(true);
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

  function modalClose() {
    setModalVisible(false);
  }

  function handleRemove() {
    Alert.alert('Warning', 'Not work in Demo App!');
  }

  useEffect(() => {
    setDataVisualization([]);
    setDataView(false);
  }, [isFocused]);

  return (
    <Background>
      <Container>
        <Body style={{ justifyContent: 'space-between' }}>
          <BodyTop>
            <TitleText>Bilhetes</TitleText>
            <ListNotes
              data={allNotes}
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
                      <Text style={{ color: '#0000FF' }}>Edit</Text>
                    </TouchableOpacity>
<<<<<<< HEAD
                    <TouchableOpacity onPress={() => {}}>
                      <Icon name="clear" size={25} color="#FF0000" />
=======
                    <TouchableOpacity onPress={handleRemove}>
                      <Icon name={'clear'} size={25} color={'#FF0000'} />
>>>>>>> new_notes
                    </TouchableOpacity>
                  </View>
                </Item>
              )}
            />
          </BodyTop>
          <BodyMiddle>
            <TitleText>Pré-visualização</TitleText>
            <VisualizationItem>
              {dataView ? (
                <>
                  <VisualizationTitle>
                    Senhor pai ou responsável.
                  </VisualizationTitle>
                  <VisualizationBody>
                    {dataVisualization.description}
                  </VisualizationBody>
                  <VisualizationFotter>
                    Atenciosamente, Direção
                  </VisualizationFotter>
                </>
              ) : (
                <NoData>
                  <Icon name="close" size={60} color="#ddd" />
                  <NoDataText>No Data Selected</NoDataText>
                </NoData>
              )}
            </VisualizationItem>
          </BodyMiddle>
          <BodyButtom>
            <ButtomEdit onPress={handleModalNew}>NOVO BILHETE</ButtomEdit>
          </BodyButtom>
        </Body>
      </Container>
      <ModalNotes
        data={dataEdition}
        visible={modalVisible}
        editable={editable}
        dismiss={modalClose}
      />
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

export default withNavigationFocus(Note);
