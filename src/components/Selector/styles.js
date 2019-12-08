import styled from 'styled-components/native';

import Icon from 'react-native-vector-icons/MaterialIcons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 10px;
  padding-right: 5px;
  background-color: #ebeff3;
  border-radius: 4px;
  height: 46px;
`;

export const SInput = styled.Picker`
  margin: 20px 0;
  flex: 1;
  height: 100%;
  align-items: flex-start;
  color: rgba(160, 160, 160, 1);
  background: transparent;
`;

export const PickIcon = styled(Icon)``;
