import axios from 'axios';
export const BASE_URL='https://youtube-v31.p.rapidapi.com';

const options = {
    //url: BASE_URL,
    params: {
      maxResults:'500',
      part: 'snippet',
      videoId: 'M7FIvfx5J10'

    },
    headers: {
      'X-RapidAPI-Key': 'a0569ee998mshff72b6e48e35b2cp1c3512jsn2b6602d51d68',//personalKey
      //'X-RapidAPI-Key': 'd9ebc6e747msh5fff7267e655227p111cdejsn580fb834d2d6',//tcetidKey
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
  
export  const  fetchFromAPI=async(url)=>{
    const {data} =await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}