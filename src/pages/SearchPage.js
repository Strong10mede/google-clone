import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider/StateProvider";
import useSearchPage from "../useSearchPage";
import Response from "../response";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import Search from "../components/search";
function SearchPage() {
  // eslint-disable-next-line
  const [{ term }, dispatch] = useStateValue();

  // LIVE API_CALL
  //const {data} = useSearchPage(term);

  const data = Response;
  //https://developer.google.com/custom-search/v1/using_rest  custom search api key
  //https://cse.google.com/cse/create/new  custom hook

  console.log(data);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt="google_logo"
          />
        </Link>
        <div className="searchPage__headerBody">
          <Search hideButtons />
        </div>
      </div>
      <div className="searchPage__result"></div>
    </div>
  );
}

export default SearchPage;
