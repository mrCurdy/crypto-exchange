import TrillionNumber from "./TrillionNumber";

export const mainSubheader = [
    {
        children: 'MARKET CAP',
        property: "market_cap_usd",
        Component: TrillionNumber,
    },
    {
        children: "EXCHANGE VOL",
        property: "bitcoin_dominance_percentage",
        Component: ({ value }) => value,

    },
    {
        children: "MARKET CAP CHANGE 24H",
        property: 'market_cap_change_24h',
        Component: ({ value }) => value,
    },
];
