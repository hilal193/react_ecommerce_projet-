import React from "react";

import "./style/Footer.scss";
// eslint-disable-next-line

export default () => {

    return (
        <div className="footer">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-md-4 col-12">
                        <h4>GET IN TOUCH</h4>
                        <p>Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</p>
                        <div className="social">
                            <a><i class="fab fa-facebook-f"></i></a>
                            <a><i class="fab fa-instagram"></i></a>
                            <a><i class="fab fa-pinterest-p"></i></a>
                            <a><i class="fab fa-snapchat-ghost"></i></a>
                            <a><i class="fab fa-youtube"></i></a>
                        </div>
                    </div>

                    <div className="col-md-2 col-12">
                        <h4>CATEGORIES</h4>
                        <ul>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Dresses</a></li>
                            <li><a href="#">Sunglasses</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-12">
                        <h4>LINKS</h4>
                        <ul>
                            <li><a href="#">Search</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Returns</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-12">
                        <h4>HELP</h4>
                        <ul>
                            <li><a href="#">Track Order</a></li>
                            <li><a href="#">Returns</a></li>
                            <li><a href="#">Shipping</a></li>
                            <li><a href="#">FAQs</a></li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-12">
                        <h4>NEWSLETTER</h4>
                        <input type="email" placeholder="email@example.com"></input>
                        <button>SUBSCRIBE</button>
                    </div>

                    <div className="col-12 text-center paying">
                        <div className="link">
                            <img src="pay.webp"/>
                            <img src="visa.webp"/>
                            <img src="master.webp"/>
                            <img src="visa2.webp"/>
                            <img src="visa3.webp"/>
                        </div>
                        <p>Copyright © 2017 Colorlib. All rights reserved.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
