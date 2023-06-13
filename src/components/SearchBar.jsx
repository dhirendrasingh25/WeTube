
import {useState }from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import SearchIcon from '@mui/icons-material/Search';


const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`);
      setsearchTerm('');
    }
  }
  return (
    <div>
        <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius: 20,
            border: '1px solid #e3e3e3',
            pl:2,
            boxShadow: 'none',
            mr:{sm:5}
        }}>
            <input 
            className='search-bar'
            placeholder='SEARCH'
            value={searchTerm}
            onChange={(e)=>{
              setSearchTerm(e.target.value);
            }}>
            </input>
            <IconButton type='submit' sx={{p:'10px',color:'red'}}>
                <SearchIcon/>
            </IconButton>
        </Paper> 
    </div>
  )
}

export default SearchBar
