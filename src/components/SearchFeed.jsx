import React from 'react'
import {useState, useEffect} from 'react';
import { Box , Typography } from '@mui/material';
import  Vedios from './Vedios';
import { useParams } from 'react-router-dom';
import {fetchFromAPI} from '../utils/fetchFromAPI';

const SearchFeed = () => {

  const [vedios, setvedios] = useState([]);
  const {searchTerm}= useParams();

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
    .then((data) => setvedios(data.items))
  },[]);

  return (
    <Box p={2}  sx={{overflowY: 'auto', height :'90vh' ,flex:2,ml:{lg:'150px'}}}>
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
          Search Results for: 
          <span style={{color:'#F31503'}}> {searchTerm} </span>
           vedios
        </Typography>
       <Vedios vedios={vedios}/>
    </Box>
  )
}

export default SearchFeed
