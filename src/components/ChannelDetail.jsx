import React from 'react'
import {useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'
import {Vedios ,ChannelCard } from './'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const ChannelDetail = () => {
  const {id} =useParams();

  const [vedios, setvideos] = useState([])

  const [channelDetail, setchannelDetail] = useState(null)

  //console.log(channelDetail,videos);

  useEffect(() => {
   // first
   fetchFromAPI(`channels?part=snippet&id=${id}`)
   .then((data)=>setchannelDetail(data?.items[0]));

   fetchFromAPI(`search?.channelId=${id}&part=snippet&order=date`)
   .then((data)=>setvideos(data?.items));
  
  }, [id])
  
  return (
    <Box minHeight='95vh'>
        <Box>
          <div 
            style={{background:'linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)',
            zIndex:10,height:'300px'}}>
          </div>
          <ChannelCard channelDetail={channelDetail} marginTop="-110px"/>
        </Box>
        <Box display='flex' p='5px'>
          <Box  sx={{mr:{sm:'130px'}}} / >
          <Vedios vedios={vedios}/>
        </Box>
    </Box>

  )
}

export default ChannelDetail
