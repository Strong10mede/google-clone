import React from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button'
function search() {
  return (
    <div className='search'>
        <div className='search__input'>
            <SearchIcon className='search__inputIcon'/>
            <input />
            <MicIcon />
        </div>
        <div className='search__buttons'>
            <Button variant='outlined'>Google Search</Button>
            {/* variabt is material ui prop */}
            <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>
    </div>
  )
}

export default search