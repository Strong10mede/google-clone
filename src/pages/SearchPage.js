import React from "react";
import "./SearchPage.css";
import { useStateValue } from "../StateProvider/StateProvider";
import useSearchPage from "../useSearchPage";
import Response from "../response";
import { Link } from "react-router-dom";
import "./SearchPage.css";
import Search from "../components/search";
import SearchIcon from "@mui/icons-material/Search";
import DescriptionIcon from "@mui/icons-material/Description";
import ImageIcon from "@mui/icons-material/Image";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import RoomIcon from "@mui/icons-material/Room";
import MoreVertIcon from "@mui/icons-material/MoreVert";
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
        <div className="searchPage__options">
          <div className="searchPage__optionsLeft">
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/all">All</Link>
            </div>
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/news">News</Link>
            </div>
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/images">Images</Link>
            </div>
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/shopping">Shopping</Link>
            </div>
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/maps">Maps</Link>
            </div>
            <div className="searchPage__option">
              <SearchIcon />
              <Link to="/more">More</Link>
            </div>
          </div>
          <div className="searchPage__optionsRight"></div>
        </div>
      </div>
      <div className="searchPage__result"></div>
    </div>
  );
}

export default SearchPage;
