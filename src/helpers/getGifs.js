

export const getGifs = async (category) => {
    const apiKey = '4T7jA5ektbW10ebFECU9zLrvu4EaZgaE';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${encodeURI(category)}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gits = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gits;
}