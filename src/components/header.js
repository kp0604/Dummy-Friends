import { Link } from 'react-router-dom'


function Header(props) {

    return (

        <div class="header">
            <span className="logo"><i className="fa fa-handshake"></i> Meets</span>
            <div className="nav">
                <span><Link className="span" to="/home"><i className="fa fa-home"></i> Home</Link> </span>

                <span><Link className="span" to="/friends"><i className="fa fa-user-friends"></i> Friends</Link></span>
            </div>
        </div>
    )
}

export default Header