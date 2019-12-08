import React, { forwardRef } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, SInput, PickIcon } from './styles';

function Selector({ style, icon, soptions, name, ...rest }, ref) {
  return (
    <Container style={style}>
      <SInput {...rest} ref={ref}>
        {soptions.map(item => (
          <SInput.Item
            key={String(item.id)}
            label={String(item.name)}
            value={String(item.name)}
            testID={`${name}-${item.id}`}
          />
        ))}
      </SInput>
      {icon && <Icon name={icon} size={25} color="rgba(0, 0, 0, 0.45)" />}
    </Container>
  );
}

export default forwardRef(Selector);
