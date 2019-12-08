import React from 'react';

import { Container, Text } from './styles';

export default function Buttom(props) {
  const { children, ...restProps } = props;
  return (
    <Container {...restProps}>
      <Text>{children}</Text>
    </Container>
  );
}
