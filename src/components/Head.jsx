import React from 'react'
import { Link } from 'react-router-dom'
const Head = (sect) => {
    let sectName = sect.sect
    if (sect.sect === 'user') {
        sectName = 'Home - User Section'
    }
    else if (sect.sect === 'admin') {
        sectName = 'Home - User Section'
    }
    else {
        sectName = "React Assessment"
    }


    return (
        <div>
            <h1>Generation Thailand</h1>
            <h1>{sectName}</h1>
            <div>
                <Link to="/user"> <button>User Home Sector</button> </Link>
                <Link to="/admin"> <button>Admin Home Sector</button> </Link>
            </div>


        </div>
    )
}

export default Head