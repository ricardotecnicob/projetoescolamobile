import styled from 'styled-components/native';

export const HeaderBar = styled.View`
  height: 50;
  background-color: #024f83;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderButton = styled.TouchableOpacity``;

export const HeaderButtonText = styled.Text`
  font-weight: bold;
  color: ${props => (props.active ? '#fff' : 'rgba(255,255,255,0.6)')};
  font-size: 16;
  text-transform: uppercase;
`;
