import React from "react";
import propTypes from "prop-types";
import { Input as InputText } from "antd";
import useTextHook from "../../../../common/hooks/text/text";
import "antd/dist/antd.css";

export default function GtiWebTextArea({
  value,
  onChange,
  id,
  rows,
  minRows,
  maxRows,
  resize,
  ...props
}) {
  const { TextArea } = InputText;
  const { textValue, onChangeText } = useTextHook();

  value = value != null ? value : textValue;
  onChange = onChange != null ? onChange : onChangeText;

  const style = !resize ? { resize: "none" } : null;

  let autoSize = null;
  if (minRows && maxRows) {
    autoSize = { minRows, maxRows };
  }

  return (
    <TextArea
      autoSize={autoSize}
      style={style}
      id={id}
      value={value}
      rows={rows}
      onChange={(e) => {
        const { value: inputValue } = e.target;
        return onChange(inputValue);
      }}
      {...props}
    />
  );
}

GtiWebTextArea.propTypes = {
  value: propTypes.object,
  onChange: propTypes.func,
  id: propTypes.string,
  rows: propTypes.number,
  minRows: propTypes.number,
  maxRows: propTypes.number,
  size: propTypes.string,
  resize: propTypes.bool,
  props: propTypes.any
};

GtiWebTextArea.defaultProps = {
  value: null,
  onChange: null,
  rows: null,
  minRows: null,
  maxRows: null,
  id: null,
  size: null,
  props: null,
  resize: true
};
