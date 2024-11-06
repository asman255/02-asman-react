import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/" ><div>Home</div></Link>
            <Link to="/owner" ><div>Owner</div></Link>
            
        </nav>
    )
}

export default Navbar