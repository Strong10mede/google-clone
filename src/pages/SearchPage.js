import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider/StateProvider'
function SearchPage() {
    // eslint-disable-next-line no-unused-vars
    const [{term} , dispatch] = useStateValue();
    console.log(term);

    //https://developer.google.com/custom-search/v1/using_rest
    //AIzaSyDQ88qPv7zSVELrbTc127W1tQQxRnPxWfk

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