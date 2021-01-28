const API_TOKEN2 = process.env.REACT_APP_NEWS_API_KEY2;

export function getNews(req, res) {
  

  return fetch('https://api.datanews.io/v1/headlines?&size=100&country=us&apiKey=' + API_TOKEN2, {
    method: "GET",
    headers: {
      "Content-Type": "text/plain"
    }
  })
    .then((res) => res.json());
}



/* TODO: Search Fetch Function
export const getSearch = async (topic) => {
    const response = await fetch(
      BASE_URL + `everything?q=${topic}&sortBy=publishedAt&apiKey=${API_TOKEN}`
    );
    const json = await response.json();
    return json;
  };
  */