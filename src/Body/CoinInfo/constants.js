// частота взятия показаний

export const periods = [
    {label:"1D", number: 1, unit: "day", interval: "m5", dateFormat: "hh A"},
    {label:"1W", number: 1, unit: "week", interval: "m30", dateFormat: "hh A"},
    {label:"1M", number: 1, unit: "month", interval: "h2", dateFormat: "MMM D"},
    {label:"3M", number: 3, unit: "month", interval: "h6", dateFormat: "MMM D"},
    {label:"6M", number: 6, unit: "month", interval: "h12", dateFormat: "MMM D"},
    {label:"1Y", number: 1, unit: "year", interval: "d1", dateFormat: "MMM YYYY"},
    {label:"All", number: 10, unit: "year", interval: "d1", dateFormat: "YYYY"}
];


