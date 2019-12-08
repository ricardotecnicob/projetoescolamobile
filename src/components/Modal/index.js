import React from 'react';
import { Dimensions, Alert } from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {
  CustomModal,
  ViewButton,
  CancelButton,
  TextCancel,
  SaveButton,
  TextSave,
} from './styles';

export default function ModalNotes(props) {
  const { editable, visible, dismiss, children, ...restProps } = props;

  function close() {
    dismiss();
  }

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
        {children}

        <ViewButton>
          <CancelButton onPress={close}>
            <TextCancel>Cancel</TextCancel>
          </CancelButton>
          <SaveButton onPress={handleSave}>
            <TextSave>Save</TextSave>
          </SaveButton>
        </ViewButton>
      </CustomModal>
    </Modal>
  );
}

ModalNotes.propTypes = {
  visible: PropTypes.bool.isRequired,
  dismiss: PropTypes.func.isRequired,
  editable: PropTypes.bool,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};

ModalNotes.defaultProps = {
  editable: false,
};
