import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { View, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '../../components/Background';
import { Body } from '../../components/Body';
import ModalNotes from '../../components/Modal';
import { loadNotesRequest } from '../../store/modules/note/actions';

import dataInfo from '../../services/bilheteescolarserver.json';

import { HeaderBar, HeaderButton, HeaderButtonText } from '../../styles/header';
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

function Note({ isFocused }) {
  const dispatch = useDispatch();

  const [dataVisualization, setDataVisualization] = useState([]);
  const [dataEdition, setDataEdition] = useState([]);
  const [editable, setEditable] = useState(false);
  const [dataView, setDataView] = useState(false);
  const allNotes = useSelector(state => state.note.allNotes);
  const [modalVisible, setModalVisible] = useState(false);
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
            <TitleText>Notes</TitleText>
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
          </BodyTop>
          <BodyMiddle>
            <TitleText>Preview</TitleText>
            <VisualizationItem>
              {dataView ? (
                <>
                  <VisualizationTitle>Dear mr. ans mrs.,</VisualizationTitle>
                  <VisualizationBody>
                    {dataVisualization.description}
                  </VisualizationBody>
                  <VisualizationFotter>
                    Sincerily, Direction
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
            <ButtomEdit onPress={handleModalNew}>New Note</ButtomEdit>
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
