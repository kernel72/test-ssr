/**
 * Created by kernel-72 on 09.05.17.
 */

import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
import {Helmet} from 'react-helmet'
import jeep from './jeep.jpg'

export default ({pageData}) => {
    return (
        <div className="page1">
            <Helmet>
                <title>Page1</title>
                <meta name="keywords" content="key1,key2"/>
            </Helmet>
            <h1>Page 1</h1>
            <p>PageData: {JSON.stringify(pageData)}</p>
            <Link to={`/`}>To Home</Link>
            <img src={jeep} alt=""/>
        </div>

    )
}