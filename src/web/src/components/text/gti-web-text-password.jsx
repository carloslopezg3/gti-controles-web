import React from "react";
import propTypes from "prop-types";
import { Input as InputText } from "antd";
import useTextHook from "../../../../common/hooks/text/text";
import "antd/dist/antd.css";

export default function GTIWebTextPassword({
  value,
  onChange,
  id,
  size,
  placeholder,
  ...props
}) {
  const { textValue, onChangeText } = useTextHook();

  value = value != null ? value : textValue;
  onChange = onChange != null ? onChange : onChangeText;

  return (
    <InputText.Password
      id={id}
      value={value}
      size={size}
      onChange={(e) => {
        const { value: inputValue } = e.target;
        return onChange(inputValue);
      }}
      {...props}
    />
  );
}

GTIWebTextPassword.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  id: propTypes.string,
  size: propTypes.oneOf(["default", "small", "large"]),
  placeholder: propTypes.string,
  props: propTypes.any
};

GTIWebTextPassword.defaultProps = {
  value: null,
  onChange: null,
  id: null,
  size: null,
  placeholder: null,
  props: null
};
