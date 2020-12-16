

export const getGifs = async (category) => {
    const apiKey = 'm1BBXCFcQUbA9sf0r6s7iuumcwgPXiEI';
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=` + apiKey;
    const resp = await fetch(url);
    const { data } = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.fixed_height.url,
        }
    });

    return gifs;
}