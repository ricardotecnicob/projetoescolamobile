import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
// import { useSelector, useDispatch } from 'react-redux';
import { View, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { withNavigationFocus } from 'react-navigation';

import Background from '../../components/Background';
import { Body } from '../../components/Body';
import ModalNotes from '../../components/Modal';
// import { loadNotesRequest } from '../../store/modules/note/actions';

import dataInfo from '../../services/bilheteescolarserver.json';

import {
  Container,
  BodyTop,
  BodyMiddle,
  TitleView,
  TitleText,
  ListNotes,
  ButtonNotes,
  Item,
  CloseButton,
  TextItem,
  VisualizationItem,
  VisualizationTitle,
  VisualizationBody,
  VisualizationFotter,
  NoDataText,
  ButtomEdit,
} from './styles';
import {
  Title,
  TitleEdit,
  DescriptionEdit,
  ModalLabel,
} from '../../components/Modal/styles';

function Note({ isFocused }) {
  // const dispatch = useDispatch();

  const [dataVisualization, setDataVisualization] = useState([]);
  const [editable, setEditable] = useState(false);
  const [dataView, setDataView] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const { notes: note } = dataInfo;

  const allNotes = note;

  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  useEffect(() => {
    // dispatch(loadNotesRequest());
  }, []);

  function handleVisualization(id) {
    note.map(item => (item.id === id ? setDataVisualization(item) : []));
    setDataView(true);
  }

  function handleModalNew() {
    setEditable(false);
    setNoteTitle('');
    setNoteDescription('');
    setModalVisible(true);
  }

  function handleModalEdit(item) {
    setEditable(true);
    setNoteTitle(item.name);
    setNoteDescription(item.description);
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
      {!dataView ? (
        <Container>
          <Body style={{ justifyContent: 'space-between' }}>
            <BodyTop>
              <TitleText active>Notes</TitleText>
              <ListNotes
                data={allNotes}
                keyExtractor={item => String(item.id)}
                preview={dataView}
                renderItem={({ item }) => (
                  <Item>
                    <View>
                      <ButtonNotes onPress={() => handleVisualization(item.id)}>
                        <TextItem>{item.name}</TextItem>
                      </ButtonNotes>
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
              <NoDataText>Please, select a note to preview.</NoDataText>
              <ButtomEdit onPress={handleModalNew}>New Note</ButtomEdit>
            </BodyTop>
          </Body>
        </Container>
      ) : (
        <BodyMiddle>
          <TitleView>
            <TitleText active>Preview</TitleText>
            <TitleText active={false}>{dataVisualization.name}</TitleText>
            <CloseButton onPress={() => setDataView(false)}>
              <Icon name="keyboard-arrow-down" size={32} color="#024f83" />
            </CloseButton>
          </TitleView>

          <VisualizationItem>
            <VisualizationTitle>Dear parents,</VisualizationTitle>
            <VisualizationBody>
              {dataVisualization.description}
            </VisualizationBody>
            <VisualizationFotter>Sincerily, Teacher Susan.</VisualizationFotter>
          </VisualizationItem>
        </BodyMiddle>
      )}

      {modalVisible && (
        <ModalNotes
          visible={modalVisible}
          editable={editable}
          dismiss={modalClose}
        >
          <Title>{editable ? 'Edit Note' : 'Create Note'}</Title>
          <ModalLabel>Note Title</ModalLabel>
          <TitleEdit
            autoCorrect={false}
            placeholder="Note name"
            placeholderTextColor="rgba(0,0,0,0.3)"
            disableUnderline
            value={noteTitle}
            onChangeText={setNoteTitle}
          />
          <ModalLabel>Description</ModalLabel>
          <DescriptionEdit
            autoCorrect={false}
            multiline
            placeholder="Note description"
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

Note.propTypes = {
  isFocused: PropTypes.bool,
};

Note.defaultProps = {
  isFocused: false,
};

export default withNavigationFocus(Note);
