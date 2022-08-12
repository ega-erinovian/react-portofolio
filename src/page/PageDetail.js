import React from 'react'
import { portfolioData } from "../portfolioDB";
import {CaretLeftFill} from "react-bootstrap-icons";

const PageDetail = () => {
    // Get current URL to get the title of the portfolio
    let currentURL = window.location.href.split("/");

    return (
        <div className="page-detail my-5">
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
                    <div className="gallery-grid mt-3">
                        {   // Get image screenshot data with matching url
                            portfolioData && portfolioData.map((data) =>{
                            if(data.title.replace(/\s/g, "") === currentURL[4]){
                                return(
                                    data.img_url.map((img) => <img src={img} alt="screenshot"/>)
                                )
                            }else{
                                return("");
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PageDetail