const coinPapricaUrl = 'https://api.coinpaprika.com/v1';

export const getGlobalInfo = async () => {
    const response = await fetch(`${coinPapricaUrl}/global`);

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data?.error || "Call from global failed");
    }

    return data;
}