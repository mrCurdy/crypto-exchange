import { NumericFormat } from "react-number-format";

const Number = ({ value }) => (
  <NumericFormat
    value={value}
    displayType={"text"}
    thousandSeparator
    prefix={"$"}
  />
);

export default Number;
