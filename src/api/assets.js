const apiUrl = 'https://api.coincap.io/v2';
// асинхронная что бы не ждать объект promise
export const getAssets = async () => {
    const response = await fetch(`${apiUrl}/assets`);
// await потому что promice (внутри json())
    return await response.json();
};

export const getAssetsHistory = async (id, interval) => {
    const response = await fetch(`${apiUrl}/assets/${id}/history?interval=${interval}`);

    return await response.json();
}

export const getAssetsById = async (id) => {
    const response = await fetch(`${apiUrl}/assets/${id}`);

    return await response.json();
}

