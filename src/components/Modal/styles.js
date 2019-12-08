import styled from 'styled-components/native';
import { Dimensions, TouchableOpacity } from 'react-native';

import Input from '../Input';

export const CustomModal = styled.View`
  height: ${Dimensions.get('window').height * 0.9};
  width: ${Dimensions.get('window').width * 0.9};
  background: #fff;
  border-radius: 8px;
  flex-direction: column;
  justify-content: space-between;
  padding: 30px;
`;

export const ViewButton = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

export const CancelButton = styled(TouchableOpacity)`
  height: 46px;
  background: #db6c6c;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  width: ${Dimensions.get('window').width / 2 - 70};
`;

export const TextCancel = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const SaveButton = styled(TouchableOpacity)`
  width: ${Dimensions.get('window').width / 2 - 70};
  height: 46px;
  background: #59b372;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  z-index: 99;
`;

export const TextSave = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const ModalLabel = styled.Text`
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.45);
  margin-top: 16px;
  margin-bottom: 4px;
`;

export const TitleEdit = styled(Input)`
  color: rgba(0, 0, 0, 0.6);
`;

export const DescriptionEdit = styled(Input)`
  flex: 1;
  height: 100%;
  align-items: flex-start;
  color: rgba(0, 0, 0, 0.6);
`;
