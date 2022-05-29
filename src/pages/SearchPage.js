import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider/StateProvider'
function SearchPage() {
    // eslint-disable-next-line no-unused-vars
    const [{term} , dispatch] = useStateValue();
    console.log(term);

  return (
    <div className='searchPage'>
        <div className='searchPage__header'>
            <h1>{term}</h1>
            
        </div>
        <div className='searchPage__result'></div>
    </div>
  )
}

export default SearchPage