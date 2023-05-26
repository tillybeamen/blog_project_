import React from 'react'
import "./topbar.css"
import { Link } from 'react-router-dom'

export default function TopBar() {
    const user = true // if there is no user hide logout button. if there is show logout
    return (
        <div className='top'>
            <div className="topLeft">
                <a href="https://www.facebook.com/ttpugh/"><i className="topIcon fa-brands fa-square-facebook"></i></a>
                <a href="https://twitter.com/15Beamen36264"><i className="topIcon fa-brands fa-twitter"></i></a>
                <a href="https://www.linkedin.com/in/tillmanthomaspughiii/"><i className="topIcon fa-brands fa-linkedin-in"></i></a>
                <a href="https://github.com/tillybeamen"><i className="topIcon fa-brands fa-github"></i></a>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className='link' to="/">HOME</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/">ABOUT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/">CONTACT</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/write">WRITE</Link>
                    </li>
                    <li className="topListItem">
                        <Link className='link' to="/settings">SETTINGS</Link>
                    </li>
                    <li className="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className='topImg'
                            src="https://media.licdn.com/dms/image/D5603AQHrL0y3hjKDjQ/profile-displayphoto-shrink_200_200/0/1682806022033?e=1689206400&v=beta&t=oL-8KA6t0r7eK-69kQdgyCRwxvOFjH1wlVlMcAFYY2o"
                            alt="profile" />

                    ) : (
                        <ul className='topList'>
                            <li className='topListItem'>

                                <Link className='link' to="/login">LOGIN</Link>
                            </li>
                            <li className='topListItem'>

                                <Link className='link' to="/register"> REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
