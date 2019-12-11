import styled from 'styled-components';
import { Dimensions } from 'react-native';

export const Body = styled.View`
  flex: 1;
  background: #ffffff;
  height: ${Dimensions.get('window').height};
  width: ${Dimensions.get('window').width - 16};
  margin-bottom: 8px;
  box-shadow: 8px 4px 4px #000;
  border-radius: 8px;
  padding: 16px 0;
  z-index: 999;
`;
