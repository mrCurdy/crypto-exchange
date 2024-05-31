import moment from "moment"

export const parseTime = (time) => moment(time).format("DD.MM");

export const buildPeriud = ({number, unit}) => ({
    end: +moment(),
    start: +moment().subtract(number, unit),
});