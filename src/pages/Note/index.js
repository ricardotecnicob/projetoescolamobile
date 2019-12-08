import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
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
import {
  Title,
  TitleEdit,
  DescriptionEdit,
} from '../../components/Modal/styles';

function Note({ isFocused }) {
  const dispatch = useDispatch();

  const [dataVisualization, setDataVisualization] = useState([]);
  const [dataEdition, setDataEdition] = useState([]);
  const [editable, setEditable] = useState(false);
  const [dataView, setDataView] = useState(false);
  const allNotes = useSelector(state => state.note.allNotes);
  const [modalVisible, setModalVisible] = useState(false);
  const { note } = dataInfo;

  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  useEffect(() => {
    dispatch(loadNotesRequest());
  }, []);

  useEffect(() => {
    if (editable) {
      setNoteTitle(dataEdition.name);
      setNoteDescription(dataEdition.description);
    } else {
      setNoteTitle('');
      setNoteDescription('');
    }
  }, [dataView]);

  function handleVisualization(id) {
    note.map(item => (item.id === id ? setDataVisualization(item) : []));
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
                  <VisualizationTitle>Dear mr. and mrs.,</VisualizationTitle>
                  <VisualizationBody>
                    {dataVisualization.description}
                  </VisualizationBody>
                  <VisualizationFotter>
                    Sincerily, Direction
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
            <ButtomEdit onPress={handleModalNew}>New Note</ButtomEdit>
          </BodyButtom>
        </Body>
      </Container>
      {modalVisible && (
        <ModalNotes
          visible={modalVisible}
          editable={editable}
          dismiss={modalClose}
        >
          <Title>{editable ? 'Edição de Bilhete' : 'Cadastrar Bilhete'}</Title>
          <TitleEdit
            autoCorrect={false}
            placeholder="Digite o Título do Bilhete"
            placeholderTextColor="rgba(0,0,0,0.3)"
            disableUnderline
            value={noteTitle}
            onChangeText={setNoteTitle}
          />
          <Title>Descrição</Title>
          <DescriptionEdit
            autoCorrect={false}
            multiline
            placeholder="Digite a descrição do Bilhete"
            placeholderTextColor="rgba(0,0,0,0.3)"
            disableUnderline
            value={noteDescription}
            onChangeText={setNoteDescription}
          />
        </ModalNotes>
      )}
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

Note.propTypes = {
  isFocused: PropTypes.bool,
};

Note.defaultProps = {
  isFocused: false,
};

export default withNavigationFocus(Note);
