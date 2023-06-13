import React from 'react'
import { Stack } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import {Link} from 'react-router-dom';
import {logo} from '../utils/constants';
import { SearchBar } from "./";

const Navbar = () => {
  const isLargeScreen = useMediaQuery('(min-width: 600px)');
  return (
    <Stack 
    direction="row" 
    alignItems="center" 
    p={2} 
    sx={{position :'sticky',background:'#000',top:0, justifyContent:'space-between'}}>
      <Link to="/" style={{display:'flex' , alignItems:'center'}}>
        <img src={logo} alt="logo" height={45}/>
        {isLargeScreen && (
          <>
            <h1 style={{ color: 'red', paddingLeft: '10px', fontFamily: 'sans-serif' }}> We</h1>
            <h1 style={{ color: 'white', fontFamily: 'sans-serif' }}>Tube</h1>
          </>
        )}
      </Link>
    <SearchBar />
  </Stack>
  )
}

export default Navbar
