import styled from 'styled-components/native';

export const Container = styled.View`
  height: 46px;
  background: rgba(36, 97, 135, 0.1);
  border-radius: 4px;
  justify-content: center;
  padding: 0 10px;
  flex-direction: row;
  align-items: center;
`;

export const TInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  padding-left: 8px;
  font-weight: bold;
  color: rgba(0, 0, 0, 0.6);
`;
