import React from 'react'

export const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-3 mt-3">
                        <ul>
                            <li className="mb-2" style={{color: "#002f34", fontWeight: "bold", listStyle: "none"}}>POPULAR CATEGORIES</li>
                            <li className="foot"><a href="#">Cars</a></li>
                            <li className="foot"><a href="#">Flats for rent</a></li>
                            <li className="foot"><a href="#">Jobs</a></li>
                            <li className="foot"><a href="#">Mobile Phones</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 mt-3">
                        <ul>
                            <li className="mb-2" style={{color: "#002f34", fontWeight: "bold", listStyle: "none"}}>TRENDING SEARCHES</li>
                            <li className="foot"><a href="#">Bikes</a></li>
                            <li className="foot"><a href="#">Watches</a></li>
                            <li className="foot"><a href="#">Books</a></li>
                            <li className="foot"><a href="#">Dogs</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 mt-3">
                        <ul>
                            <li className="mb-2" style={{color: "#002f34", fontWeight: "bold", listStyle: "none"}}>ABOUT US</li>
                            <li className="foot"><a href="#">About OLX Group</a></li>
                            <li className="foot"><a href="#">OLX Blog</a></li>
                            <li className="foot"><a href="#">Contact Us</a></li>
                            <li className="foot"><a href="#">OLX for Businesses</a></li>
                        </ul>
                    </div>
                    <div className="col-sm-3 mt-3">
                        <ul>
                            <li className="mb-2" style={{color: "#002f34", fontWeight: "bold", listStyle: "none"}}>OLX</li>
                            <li className="foot"><a href="#">Help</a></li>
                            <li className="foot"><a href="#">Sitemap</a></li>
                            <li className="foot"><a href="#">Legal & Privacy information</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}