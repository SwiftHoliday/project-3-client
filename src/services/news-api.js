const API_TOKEN = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'http://newsapi.org/v2/'

export function getNews() {
    return fetch(BASE_URL + 'top-headlines?country=us&apiKey=' + API_TOKEN)
        .then((res) => res.json());
    }
    