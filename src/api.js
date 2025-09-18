

const API_KEY = '52256115-ef245d0d17a91a1d5cb51d54b';
const BASE_URL = 'https://pixabay.com/api/';

export function fetchImages(query) {

    const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(url)

        .then(response => {
            if (!response.ok) throw new Error(`Error: ${response.status}`);
            return response.json();
        });
}