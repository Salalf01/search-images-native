require('dotenv').config()

export const fetchImages = () => {
   return fetch(`https://api.unsplash.com/photos/?client_id=${process.env.REACT_APP_API_KEY}`, {
       method: 'GET',
    }).then((response) => response.json()).then((data) => data);
}


export const searchImages = (search) => {
   return fetch(`https://api.unsplash.com/search/photos/?query=${search}&client_id=${process.env.REACT_APP_API_KEY}`, {
       method: 'GET',
    }).then((response) => response.json()).then((data) => data);
}