const API_KEY = '43397479-99c41be14727e3df52aa3c242';
const BASE_URL = 'https://pixabay.com/api/?';

export function fetchCards(searchQuery) {
  const SEARCH_PARAMS = new URLSearchParams({
    key: API_KEY,
    q: searchQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  const url = `${BASE_URL}${SEARCH_PARAMS}`;

  return fetch(url)
    .then(res => {
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      return res.json();
    })
    .then(data => {
 
      return data;
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      throw error; 
    });
}
