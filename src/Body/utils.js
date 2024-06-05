export const parseToFixed = data => parseFloat(data).toFixed(2);

export const coinDataFormat = (coin) => ({
    ...coin,
    priceUsd: parseToFixed(coin.priceUsd),
    marketCapUsd: parseToFixed(coin.marketCapUsd),
    vwap24Hr: parseToFixed(coin.vwap24Hr),
    supply: parseToFixed(coin.supply),
    volumeUsd24Hr: parseToFixed(coin.volumeUsd24Hr),
    changePercent24Hr: parseToFixed(coin.changePercent24Hr)
});