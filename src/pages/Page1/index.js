/**
 * Created by kernel-72 on 09.05.17.
 */

import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'

export default () => {
    return (
        <div className="page1">
            <h1>Page 1</h1>
            <Link to={`/`}>To Home</Link>
        </div>

    )
}