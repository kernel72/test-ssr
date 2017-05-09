/**
 * Created by kernel-72 on 09.05.17.
 */

import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import {Helmet} from 'react-helmet'


export default () => {
    return (
        <div className="home">
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <h1>Index page!</h1>
            <Link to={`/page1`}>To page1</Link>
        </div>
    );
}