import React from 'react';
import "./navbar.scss"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import FullscreenExitOutlinedIcon from '@mui/icons-material/FullscreenExitOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { themeToggle } from '../../redux/theme/themeSlice';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';
const Navbar = () => {
    const loggedInUser = useSelector((state) => state.user.user)
    const darkMode=useSelector((state)=>state.theme.darkModeOn)
    const dispatch=useDispatch()
    return (
        <div className='navbar'>
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='search...'/>
                    <SearchOutlinedIcon className='searchIcon'/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className='icon'/>
                        English
                    </div>
                    <div className="item">
                    { darkMode?
                        <WbSunnyOutlinedIcon className='icon' onClick={()=>dispatch(themeToggle())}/>
                        :
                        <DarkModeOutlinedIcon className='icon' onClick={()=>dispatch(themeToggle())}/>
                    }
                        
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                        <NotificationsOutlinedIcon className='icon'/>
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className='icon'/>
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <FormatListBulletedOutlinedIcon className='icon'/>
                    </div>
                    <div className="item">
                        <img src={loggedInUser.photoURL} alt="avatar" className='avatar'/>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Navbar;