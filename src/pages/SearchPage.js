import React from 'react'
import './SearchPage.css'
import { useStateValue } from '../StateProvider/StateProvider'
import useSearchPage from '../useSearchPage';
import Response from '../response';
function SearchPage() {
    // eslint-disable-next-line 
    const [{term} , dispatch] = useStateValue();

    // LIVE API_CALL
    //const {data} = useSearchPage(term);
    
     
    const data = Response;
    //https://developer.google.com/custom-search/v1/using_rest  custom search api key
    //https://cse.google.com/cse/create/new  custom hook

    console.log(data);

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