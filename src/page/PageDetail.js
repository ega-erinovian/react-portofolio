import React from 'react'
import { portfolioData } from "../portfolioDB";
import {CaretLeftFill} from "react-bootstrap-icons";
import LightGallery from 'lightgallery/react';

import Footer from "../components/Footer";

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgZoom from 'lightgallery/plugins/zoom';

const PageDetail = () => {
    // Get current URL to get the title of the portfolio
    let currentURL = window.location.href.split("/");

    const onInit = () => {
        console.log('lightGallery has been initialized');
    };

    return (
    <>
        <div className="page-detail mt-5">
            <div className="container">
                <a className="page-detail-home-btn" href="/"><span><CaretLeftFill/></span> Home</a>
                <div className="page-detail-heading d-flex justify-content-between align-items-center mt-5">
                    {   // Get portfolio title matched with the url
                        portfolioData && portfolioData.map((data) => {
                            if(data.title.replace(/\s/g, "") === currentURL[4]){
                                return(<><h1>{data.title}</h1> <a className="btn btn-primary" href={data.websiteUrl} target="_blank" rel="noreferrer">Go to Website</a></>)
                            }else{
                                return("")
                            }
                        })
                    }
                </div>
                <hr/>
                <p className="page-detail-description fs-6">
                    Here are some of my work since the first time i learn web development. These web was built using various web technologies and framework, such as bootstrap, React JS, etc. Not just front-end web, i also build some
                    full-stack web
                </p>
                <div className="page-detail-gallery">
                    <h3 className="fw-bold text-center mt-5">Screenshots</h3>
                    <div className="gallery-grid mt-3 mb-5">
                    <LightGallery onInit={onInit} speed={500} plugins={[lgZoom]}>
                        {   // Get image screenshot data with matching url
                            portfolioData && portfolioData.map((data) =>{
                                if(data.title.replace(/\s/g, "") === currentURL[4]){
                                    return(
                                        data.img_url.map((img) => <img src={img} alt="screenshot" loading='lazy'/>)
                                        )
                                    }else{
                                        return("");
                                    }
                                })}
                    </LightGallery>
                    </div>
                </div>
            </div>
        <Footer />
        </div>
    </>
    )
}

export default PageDetail