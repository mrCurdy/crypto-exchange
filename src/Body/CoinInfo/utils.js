import moment from "moment"

export const parseTime = (time, format) => moment(time).format(format);

export const buildPeriud = ({number, unit}) => ({
    end: +moment(),
    start: +moment().subtract(number, unit),
});
