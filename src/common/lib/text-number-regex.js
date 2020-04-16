export const isValidNumber = (value) => {
  const regex = /^-?\d*(\.\d*)?$/;
  if (
    (!Number.isNaN(value) && regex.test(value)) ||
    value === "" ||
    value === "-"
  ) {
    return true;
  }
  return false;
};

export const removeNaNSymbols = (value) => {
  let auxValue = value != null ? value : "";
  if ((value && value.charAt(value.length - 1) === ".") || value === "-") {
    auxValue = value.slice(0, -1);
  }

  return auxValue.replace(/0*(\d+)/, "$1");
};

export const formatNumber = (value, symbol = ",") => {
  const list = value.split(".");
  const prefix = list[0].charAt(0) === "-" ? "-" : "";
  let num = prefix ? list[0].slice(1) : list[0];
  let result = "";
  while (num.length > 3) {
    result = `${symbol}${num.slice(-3)}${result}`;
    num = num.slice(0, num.length - 3);
  }
  if (num) {
    result = num + result;
  }
  return `${prefix}${result}${list[1] ? `.${list[1]}` : ""}`;
};
