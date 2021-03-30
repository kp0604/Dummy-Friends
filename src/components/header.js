import { NavLink } from 'react-router-dom'


function Header(props) {

    return (

        <div class="header">
            <span className="logo">Make Friends</span>
            <div className="nav">
                <span><NavLink className="span" to="/home">Home</NavLink> </span>

                <span><NavLink className="span" to="/friends">Friends</NavLink></span>
            </div>
        </div>
    )
}

export default Header