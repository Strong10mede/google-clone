import React, { useState } from 'react'
import './search.css'
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import  Button  from '@mui/material/Button'
import { useHistory } from 'react-router-dom'
//import createBrowserHistory from 'history/createBrowserHistory'
import { useStateValue } from '../StateProvider/StateProvider';
import { actionTypes } from '../StateProvider/reducer';

function Search({ hideButtons = false }) {
  //state tells look of data layer, dispatch is like a gun allows to shoot action into data layer to change it
  //eslint-disable-next-line no-empty-pattern
  const [ {}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
   //const history = createBrowserHistory({forceRefresh:true});
    const history = useHistory();
  //provides browser history

  const search = (e) => {
    e.preventDefault();
    
    console.log('You hit the search button >>', input);
    
    dispatch({
      type : actionTypes.SET_SEARCH_TERM,
      term : input
    })
    
    history.push("/search");
  }
  return (
    
    <form className='search'>
        <div className='search__input'>
            <SearchIcon className='search__inputIcon'/>
            <input value={input} onChange={e=>setInput(e.target.value)}/>
            <MicIcon />
            
        </div>

        { !hideButtons ? (
        <div className='search__buttons'>
            <Button type='submit' onClick={search} variant='outlined'>Google Search</Button>
            {/* variabt is material ui prop */}
            <Button variant='outlined'>I'm Feeling Lucky</Button>
        </div>):(
        <div className='search__buttons'>
            <Button className='search__buttonsHidden' type='submit' onClick={search} variant='outlined'>Google Search</Button>
            {/* variabt is material ui prop */}
            <Button className='search__buttonsHidden' variant='outlined'>I'm Feeling Lucky</Button>
        </div>)}

    </form>
  )
}

export default Search;