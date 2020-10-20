
export const fetchImages = () => {
    const key = "f7d226922ac35920187c75066c2e58d1a954bf720873c494bb38ea673990532e";
   return fetch(`https://api.unsplash.com/photos/?client_id=${key}`, {
       method: 'GET',
    }).then((response) => response.json()).then((data) => data);
}


export const searchImages = (search) => {
    const key = "f7d226922ac35920187c75066c2e58d1a954bf720873c494bb38ea673990532e";
   return fetch(`https://api.unsplash.com/search/photos/?query=${search}&client_id=${key}`, {
       method: 'GET',
    }).then((response) => response.json()).then((data) => data);
}