import { NumericFormat } from "react-number-format";

const TrillionNumber = ({ value }) => {
  const trillionValue = value / 1e12;

  return (
    <NumericFormat
      value={trillionValue}
      displayType={"text"}
      thousandSeparator={true}
      decimalScale={2} // Number of decimals you want to show
      fixedDecimalScale={true}
      suffix={" Trillions"}
      prefix="$"
    />
  );
};

export default TrillionNumber;
