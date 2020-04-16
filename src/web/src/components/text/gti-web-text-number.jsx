import React from "react";
import propTypes from "prop-types";
import { Input as InputNumber } from "antd";
import useTextHook from "../../../../common/hooks/text/text";
import "antd/dist/antd.css";

export default function GTIWebTextNumber({
  value,
  onChange,
  id,
  size,
  onBlur,
  placeholder,
  ...props
}) {
  const {
    textValue,
    onChangeText,
    onNumberChange,
    onBlurRemoveNaNSymbols
  } = useTextHook();

  value = value != null ? value : textValue;
  onChange = onChange != null ? onChange : onChangeText;

  return (
    <InputNumber
      value={value}
      onChange={(e) => {
        const { value: inputValue } = e.target;
        onNumberChange(inputValue, onChange);
      }}
      onBlur={() => {
        onBlurRemoveNaNSymbols(value, onChange, onBlur);
      }}
      {...props}
    />
  );
}

GTIWebTextNumber.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  id: propTypes.string,
  size: propTypes.string,
  placeholder: propTypes.string,
  onBlur: propTypes.func,
  props: propTypes.any
};

GTIWebTextNumber.defaultProps = {
  value: null,
  onChange: null,
  id: null,
  size: null,
  placeholder: null,
  props: null,
  onBlur: null
};
