import React from 'react'
import {Link}  from 'react-router-dom'
import './home.css'
import AppsIcon from '@mui/icons-material/Apps';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Search from '../components/search'

function Home() {
  return (
    <div className='home'>
        <div className='home__header'>
            <div className='home__headerLeft'>
                {/* Link  with react router*/}
                <Link to='/about'>About</Link>
                {/* Link */}
                <Link to='/store'>Store</Link>
            </div>
            <div className='home__headerRight'>
                {/* Link */}
                <Link to='/gmail'>Gmail</Link>
                {/* Link */}
                <Link to='/images'>Images</Link>
                {/* AppsIcon with Material UI */}
                <AppsIcon />
                {/* Avatar */}
                <AccountCircleIcon />
            </div>
        </div>
        <div className='home__body'>
            <img src='https://www.google.com/logos/doodles/2015/googles-new-logo-5078286822539264.3-hp2x.gif' alt='google logo'/>
            <div className='home__inputContainer'>
                {/* Search */}
                <Search />
            </div>
        </div>
    </div>
    
  )
}

export default Home