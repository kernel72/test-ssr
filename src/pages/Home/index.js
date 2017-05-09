/**
 * Created by kernel-72 on 09.05.17.
 */

import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'


export default () => {
    return (
        <div className="home">
            <h1>Index page!</h1>
            <Link to={`/page1`}>To page1</Link>
        </div>
    );
}