const apiUrl = 'https://api.coincap.io/v2';

// асинхронная что бы не ждать объект promise

export const getAssets = async () => {
    const response = await fetch(`${apiUrl}/assets`);
    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data?.error || "Assets call failed");
    }
// await потому что promice (внутри json())
    return data;
};

export const getAssetsHistory = async (id, interval, start, end) => {
const params = new URLSearchParams({
    interval,
    start,
    end,
});

    const response = await fetch(`${apiUrl}/assets/${id}/history?${params}`);

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data?.error || "History call failed");
    }

    return data;
}

export const getAssetsById = async (id) => {
    const response = await fetch(`${apiUrl}/assets/${id}`);

    const data = await response.json();
    
    if (!response.ok) {
        throw new Error(data?.error || "Call by ID failed");
    }

    return data;
}


