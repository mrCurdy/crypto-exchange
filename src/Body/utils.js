import { formatTick } from "./CoinInfo/utils";

export const parseToFixed = data => parseFloat(data).toFixed(2);

export const coinDataFormat = (coin) => ({
    ...coin,
    priceUsd: formatTick(coin.priceUsd),
    marketCapUsd: formatTick(coin.marketCapUsd),
    vwap24Hr: formatTick(coin.vwap24Hr),
    supply: formatTick(coin.supply),
    volumeUsd24Hr: formatTick(coin.volumeUsd24Hr),
    changePercent24Hr: formatTick(coin.changePercent24Hr)
});