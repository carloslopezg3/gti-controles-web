import { useState } from "react";
import { isValidNumber, removeNaNSymbols } from "../../lib/text-number-regex";

export default () => {
  const [textValue, setTextValue] = useState(null);
  return {
    textValue,
    onChangeText(value) {
      setTextValue(value);
    },
    onNumberChange(value, onChange) {
      if (isValidNumber(value)) {
        onChange(value);
      }
    },
    onBlurRemoveNaNSymbols(value, onChange, onBlur) {
      const auxValueNaNSymbols = removeNaNSymbols(value);
      onChange(auxValueNaNSymbols);
      if (onBlur) {
        onBlur();
      }
    }
  };
};
