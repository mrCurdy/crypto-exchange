import { NumericFormat } from "react-number-format";

const Percent = ({ value }) => (
  <NumericFormat
    value={value}
    displayType={"text"}
    thousandSeparator
    suffix={"%"}
    decimalScale={2}
  />
);

export default Percent;
