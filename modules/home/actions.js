import {API_KEY } from '@env';

export const fetchImages = () => {
   return fetch(`https://api.unsplash.com/photos/?client_id=${API_KEY}`, {
       method: 'GET',
    }).then((response) => response.json()).then((data) => data);
}


export const searchImages = (search) => {
   return fetch(`https://api.unsplash.com/search/photos/?query=${search}&client_id=${API_KEY}`, {
       method: 'GET',
    }).then((response) => response.json()).then((data) => data);
}