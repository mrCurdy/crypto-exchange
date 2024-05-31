import { format } from "date-fns";

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

// нужно взять массив charts и сравнить значения ключей priceUsd и выбрать мин и макс
export const coinPriceMax = (array) => {
    const price = [];
    array.forEach(obj => {
            price.push(parseToFixed(obj.priceUsd));
        });
    return Math.max(...price);
}

export const coinPriceMin = (array) => {
    const price = [];
    array.forEach(obj => {
            price.push(obj.priceUsd)
        });
    return Math.min(...price);
}

// функция для формата даты в понятное написание с помощью библиотеки date-fns
export const dateFormatter = date => {
    return format(new Date(date), "dd.MMM");
  };