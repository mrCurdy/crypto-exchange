import TrillionNumber from "./TrillionNumber";

export const mainSubheader = [
    {
        children: 'MARKET CAP',
        property: "market_cap_usd",
        Component: TrillionNumber,
    },
    {
        children: "MARKET CAP CHANGE 24H",
        property: 'market_cap_change_24h',
        Component: ({ value }) => value,
    },
    {
        children: "BYC DOM INDEX",
        property: "bitcoin_dominance_percentage",
        Component: ({ value }) => value,

    },
    
];
