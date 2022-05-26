import React, { useState } from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import Button from '@mui/material/Button'
import { useHistory } from 'react-router-dom'
function Search({hideButtons = false}) {
  const [input, setInput] = useState(" ");
  const history = useHistory();
  //provides browser history

  const search = e => {
    e.preventDefault();
    
    console.log('You hit the search button');

    history.push('/search');
  }
  return (
    <form className='search'>
        <div className='search__input'>
            <SearchIcon className='search__inputIcon'/>
            <input value={input} onChange={e=>setInput(e.target.value)}/>
            <MicIcon />
        </div>

        {hideButtons ? (
        <div className='search__buttons'>
            <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
            {/* variabt is material ui prop */}
            <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>):
        (
        <div className='search__buttons'>
            <Button class='search___buttonsHidden'type='submit' onClick={search} variant='outlined'>Google Search</Button>
            {/* variabt is material ui prop */}
            <Button class='search__buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
        </div>)}

    </form>
  )
}

export default Search