import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider/StateProvider'
import useSearchPage from '../useSearchPage';
function SearchPage() {
    // eslint-disable-next-line no-unused-vars
    const [{term} , dispatch] = useStateValue();
    const [data] = useSearchPage(term);
    console.log(data);

    //https://developer.google.com/custom-search/v1/using_rest  custom search api key
    //https://cse.google.com/cse/create/new  custom hook

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