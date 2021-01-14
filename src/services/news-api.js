const BASE_URL = 'http://localhost:3001/api/newsAPI';
    
export function getNews() {
    return fetch(BASE_URL + '/get-news', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        }, body: {}
    }
    )
        .then((res) => res.json());
    }
    