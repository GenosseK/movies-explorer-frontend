import React from 'react'
import './PagePreloader.css'

const PagePreloader = () => {
    return (
        <div className='preloader__page'>
        <div className="preloader">
            <div className="preloader__container">
                <span className="preloader__round"></span>
            </div>
        </div>
        </div>
    )
};

export default PagePreloader;
