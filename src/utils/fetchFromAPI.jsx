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
      'X-RapidAPI-Key': '',//personalKey
      //'X-RapidAPI-Key': '',//tcetidKey
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
};
  
export  const  fetchFromAPI=async(url)=>{
    const {data} =await axios.get(`${BASE_URL}/${url}`,options)
    return data;
}
