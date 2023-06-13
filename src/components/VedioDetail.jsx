import React from 'react'
import {useState ,useEffect} from 'react'
import {Link ,useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import {Typography,Box,Stack} from '@mui/material'
import { Check, CheckCircle } from '@mui/icons-material'

import {Vedios} from './';
import { fetchFromAPI } from '../utils/fetchFromAPI'

const VedioDetail = () => {
  const {id}= useParams();

  const [vedioDetail, setVedioDetail] = useState(null)

  const [vedios, setVedios] = useState(null)

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=> setVedioDetail(data.items[0]))

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=>setVedios(data.items))
  }, [id])

  if(!vedioDetail?.snippet) return 'Loading....'
  
  const {snippet:{title,channelId,channelTitle},
  statistics:{viewCount,likeCount}} = vedioDetail

  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:'column', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:'sticky',top:'86px'}}>
           <ReactPlayer
            className='react-player' controls
            url={`https://www.youtube.com/watch?v=${id}`} />
            <Typography color='#fff' variant='h5' fontWeight='bold' p={2}>
              {title}
            </Typography>
            <Stack direction='row'  justifyContent='space-between'
            sx={{color:'#fff'}} py={1} px={2} >
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm:'subtitle1',md:'h6'}} color='#fff'>
                  {channelTitle}
                  <CheckCircle sx={{fontSize:'12px', color:'gray' , ml:'5px'}} />
                </Typography>
              </Link>
              <Stack direction='row' gap='20px' alignItems='center'>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant='body1' sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>

        <Box px={2} py={{md:1, xs:5}} justifyContent='center' alignItems='center'>
          <Vedios vedios={vedios} direction='column' />
        </Box>

      </Stack>    
    </Box>
  )
}

export default VedioDetail
