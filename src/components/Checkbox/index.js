import React from 'react';
import CheckBox from '@react-native-community/checkbox';
import PropTypes from 'prop-types';

const Checkbox = ({
  disabled,
  onChange,
  onValueChange,
  value = false,
  tintColors,
}) => (
  <CheckBox
    disabled={disabled}
    onChange={onChange}
    onValueChange={onValueChange}
    value={value}
    tintColors={tintColors}
  />
);

Checkbox.propTypes = {
  value: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  onValueChange: PropTypes.func,
  tintColors: PropTypes.shape({
    true: PropTypes.string,
    false: PropTypes.string,
  }),
};

Checkbox.defaultProps = {
  value: false,
  disabled: false,
  tintColors: { true: '#024F83', false: '#a3a3a3' },
  onValueChange: () => {},
};

export default Checkbox;
