import {BASE_URL, API_KEY} from "./apiConfig.js";
export function fetchMovieData(temp) {
    const url = 'https://movie-database-alternative.p.rapidapi.com/?r=json&i=tt4154796';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': API_KEY,
            'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
        }
    };

    return fetch(url, options)
        .then(response => { 
            if (!response.ok) {
                throw new Error(`Error fetching data: ${response.status}`);
            }
            return response.json();
        })
        .then(result => {   
            console.log(result);    //log the result in console
            return result;
        })
        
        .catch(error => {
            console.error('Error occurred:', error);
        });
}

