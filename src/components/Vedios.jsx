import React from 'react'
import {Stack, Box} from "@mui/material";
import VedioCard from './VedioCard';
import ChannelCard from './ChannelCard';

const Vedios = ({vedios,direction}) => {

  if(!vedios?.length) return 'Loading...'
    
  return (
    
    <Stack direction={direction ||'row' }flexWrap='wrap' gap={2} justifyContent="start" alignItems='start'>
        {vedios.map((item, index) => (
            <Box key={index}>
                {item.id.videoId && <VedioCard video={item} />} 
                {item.id.channelId && <ChannelCard channelDetail={item} />} 
            </Box>
        ))}
    </Stack>


  )
}

export default Vedios
