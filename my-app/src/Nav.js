import {Link} from 'react-router-dom'
import React from 'react';

export default function Nav(props){
    return (
            <div id="links">
                <Link to='/Home'>Home</Link>
                <Link to='/People'>People({props.names.length})</Link>
                <Link to='/People/Create'>Create A Person</Link>
            </div>
    )
}