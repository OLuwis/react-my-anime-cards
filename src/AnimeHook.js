const baseUrl = "https://api.jikan.moe/v4";

export const AnimeHook = async (url) => {
    return await fetch(baseUrl + url).then(res => res.json()).then(data => data)
}