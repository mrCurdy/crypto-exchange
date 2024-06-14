import moment from "moment"

export const parseTime = (time, format) => moment(time).format(format);

export const buildPeriud = ({number, unit}) => ({
    end: +moment(),
    start: +moment().subtract(number, unit),
});

export const formatTick = (value) => {
    const parsedValue = parseFloat(value);
    if(parsedValue < 0.001) {
        return parsedValue.toFixed(8);
    }
    if(parsedValue < 1) {
        return parsedValue.toFixed(6);
    }

    return parsedValue.toFixed(2);
}

export const sortPrice = (a, b) => {
    const aPrice = parseFloat(a.priceUsd);
    const bPrice = parseFloat(b.priceUsd);

    if (aPrice > bPrice) {
      return 1;
    }
    if (aPrice < bPrice) {
      return -1;
    }
    return 0;
  }