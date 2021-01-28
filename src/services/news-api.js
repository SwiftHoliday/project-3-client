export function getNews(req, res) {
  

  return fetch('https://what-in-the-world-app.herokuapp.com/api/news') 
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