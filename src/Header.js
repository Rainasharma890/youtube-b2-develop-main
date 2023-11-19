// rfce

import React, { useEffect, useState } from 'react'
import ytLogo from './images/yt-logo.png'
import searchIcon from './images/search.png'
import {GiHamburgerMenu} from 'react-icons/gi'
import {BiLogOut, BiSolidMicrophone} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import avtar from './images/avtar.png';



function Header() {
    const[isUserLoggedIn, setIsLoggedIn]=useState(false);
    useEffect(() => {
        const storedValue = localStorage.getItem('isUserLoggedIn');
        if (storedValue === 'true') {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout=()=>{
        localStorage.setItem('isUserLoggedIn', false)
        setIsLoggedIn(false)
    }
  return (
    <div class="head-container">
      <div class="header">
                <div class="header-items header-logo">
                    <div class="header-first">
                        <GiHamburgerMenu />
                    </div>
                    <div class="header-second">
                        <Link to='/'>
                        <img id='yt-logo' src={ytLogo}/>
                        </Link>
                    </div>
                </div>
                <div class="header-items header-center">
                    {/* <div class="header-search"></div> */}
                    <input class="header-search" placeholder='Search..'/>
                    <button class="search-button">
                        <img class="small-image" src={searchIcon}></img>
                    </button>
                    <div class="header-mic">
                        <BiSolidMicrophone class="microphone" />
                    </div>
                </div>
                <div class="header-items header-profile">
                    {
                        isUserLoggedIn ? (
                            <>
                              <BiLogOut class="logout" title='Logout' onClick={()=>handleLogout()}/>
                                 <img src={avtar} height={'40px'} width={'40px'}></img> 
                            </>
                        ):(
                            <> 
                                <Link to={'/signin'}>
                                <button class="header-tools">Sign In</button>
                                </Link>
                            </>
                        )
                    }
                 
                </div>
            </div>
    </div>
  )
}

export default Header
