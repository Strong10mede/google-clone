import {useState, useEffect } from 'react'
import API_KEY from './keys'

//it tells which search engine to use, it will use our search engine with the help of context_key
const CONTEXT_KEY = 'a2e18b68a8f2beb0d';

const useSearchPage = (term) => {
 const [data,setData] = useState(null);

 //useEffect will get the search result
 useEffect(()=>{
     const fetchData = async() => {
         fetch(
            //this connnect to google search api
            `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
         )
         //get json from the response
         .then(response =>response.json())
         //setting the data
         .then(result => setData(result))
     }

     fetchData();

 },[term])
 return { data }
};

export default useSearchPage