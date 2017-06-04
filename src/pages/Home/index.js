/**
 * Created by kernel-72 on 09.05.17.
 */

import React from 'react'
import {Link} from 'react-router-dom'
import './style.scss'
import {Helmet} from 'react-helmet'


export default ({pageData}) => {
    return (
        <div className="home">
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <h1>Index page!</h1>
            <p>Loaded: {JSON.stringify(pageData)}</p>
            <Link to={`/page1`}>To page1</Link>
        </div>
    );
}