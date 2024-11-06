import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div style={{ display: 'flex', justifyContent: 'flex-end',borderBottom: 'solid 1px', paddingBottom: '10px' }}>
                <Link to="/" ><div style={{ marginRight: '10px' }}>Home</div></Link>
                <Link to="/owner" ><div>Owner</div></Link>
            </div>


        </nav>
    )
}

export default Navbar