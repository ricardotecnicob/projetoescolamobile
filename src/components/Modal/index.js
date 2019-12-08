import React, { useState, useEffect } from 'react';
import { Dimensions, Alert } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {
  CustomModal,
  Title,
  TitleEdit,
  DescriptionEdit,
  ViewButton,
  CancelButton,
  TextCancel,
  SaveButton,
  TextSave,
} from './styles';

export default function ModalNotes(props) {
  const { data, editable, visible, dismiss, ...restProps } = props;

  const [noteTitle, setNoteTitle] = useState('');
  const [noteDescription, setNoteDescription] = useState('');

  function close() {
    dismiss();
  }

  useEffect(() => {
    if (editable) {
      setNoteTitle(data.name);
      setNoteDescription(data.description);
    } else {
      setNoteTitle('');
      setNoteDescription('');
    }
  }, [visible]);

  function handleSave() {
    Alert.alert('Warning', 'Not work in Demo App!');
  }

  return (
    <Modal
      isVisible={visible}
      style={{ justifyContent: 'center', alignItems: 'center' }}
      onBackdropPress={close}
      deviceHeight={Dimensions.get('window').height + 9999}
      {...restProps}
    >
      <CustomModal>
        <Title>{editable ? 'Edição de Bilhete' : 'Cadastrar Bilhete'}</Title>
        <TitleEdit
          autoCorrect={false}
          placeholder="Digite o Título do Bilhete"
          placeholderTextColor="rgba(0,0,0,0.3)"
          disableUnderline={true}
          value={noteTitle}
          onChangeText={setNoteTitle}
        />
        <Title>Descrição</Title>
        <DescriptionEdit
          autoCorrect={false}
          multiline={true}
          placeholder="Digite a descrição do Bilhete"
          placeholderTextColor="rgba(0,0,0,0.3)"
          disableUnderline={true}
          value={noteDescription}
          onChangeText={setNoteDescription}
        />
        <ViewButton>
          <CancelButton onPress={close}>
            <TextCancel>Cancelar</TextCancel>
          </CancelButton>
          <SaveButton onPress={handleSave}>
            <TextSave>Salvar</TextSave>
          </SaveButton>
        </ViewButton>
      </CustomModal>
    </Modal>
  );
}

ModalNotes.propTypes = {
  visible: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
  editable: PropTypes.bool,
};

ModalNotes.defaultProps = {
  visible: false,
  editable: false,
};
