import { NumericFormat } from "react-number-format";

const PriceTag = ({ value }) => (
  <NumericFormat
    value={value}
    displayType={"text"}
    thousandSeparator
    prefix={"$"}
    decimalScale={10}
  />
);

export default PriceTag;
