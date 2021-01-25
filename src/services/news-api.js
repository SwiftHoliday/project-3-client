const API_TOKEN = process.env.REACT_APP_NEWS_API_KEY;
const BASE_URL = 'http://newsapi.org/v2/'


export function getNews() {
    return fetch(BASE_URL + 'top-headlines?country=us&apiKey=' + API_TOKEN + '&pageSize=45')
        .then((res) => res.json());
    }
    
    export const getSearch = async (topic) => {
        const response = await fetch(
          BASE_URL + `everything?q=${topic}&sortBy=publishedAt&apiKey=${API_TOKEN}`
        );
        const json = await response.json();
        return json;
      };