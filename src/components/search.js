import React from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';

function search() {
  return (
    <div className='search'>
        <div className='search__input'>
            <SearchIcon className='search__inputIcon'/>
            <input />
            <MicIcon />
        </div>
    </div>
  )
}

export default search