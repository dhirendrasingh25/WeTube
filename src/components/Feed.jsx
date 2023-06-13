import React from 'react'
import {useState, useEffect} from 'react';
import { Box , Stack , Typography } from '@mui/material';
import Sidebar from './Sidebar';
import  Vedios from './Vedios';
import {fetchFromAPI} from '../utils/fetchFromAPI';

const Feed = () => {

  const [selectedCategory, setselectedCategory] = useState('New');
  const [vedios, setvedios] = useState([]);

  useEffect(()=>{
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
    .then((data) => setvedios(data.items))
  },[selectedCategory]);

  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
      <Box  sx={{height:{sx:'auto', md: '92vh'},
      borderRight: '1px solid #3d3d3d',
      px:{sx:0,md:2}}}>
        <Sidebar 
        selectedCategory={selectedCategory}
        setselectedCategory={setselectedCategory}
        />
        <Typography className='copyright' variant="body2" 
        sx={{mr:1.5 , color:'#fff'}}>
          CopyRight 2023 Dhirendra Singh
        </Typography>

      </Box>
      <Box p={2} sx={{overflowY: 'auto', height :'90vh' ,flex:2,ml:{lg:'40px'}, mr:{lg:'20px'}}} >
        <Typography variant='h4' fontWeight="bold" mb={2} sx={{color:'white'}}>
          {selectedCategory} <span style={{color:'#F31503'}}>vedios</span>
        </Typography>
       <Vedios  vedios={vedios}/>
      </Box>
    </Stack>
  )
}

export default Feed
