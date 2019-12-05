import styled from 'styled-components/native';

export const Container = styled.View`
  height: 46px;
  background: rgba(36, 97, 135, 0.1);
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.4)',
})`
  flex: 1;
  font-size: 15px;
  text-align: center;
  font-weight: bold;
  color: #000;
`;
