import React from 'react'
import "./style/Products.scss"

export default function Products() {
  return(
    // eslint-disable-next-line
    <div className="products">
      <div className="container">
        <div className="protext">
          <h3>OUR PRODUCTS</h3>
        </div>
        <div className="navl">
          <ul>
            <li><a className="actiev" href="#">Best Seller</a></li>
            <li><a href="#">Featured</a></li>
            <li><a href="#">Sale</a></li>
            <li><a href="#">Top Rate</a></li>
          </ul>
        </div>
        <div className="proimg">
          <div className="row">
            {/* <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="img bef1">
                <img src="it1.webp"></img>
                <div className="opp">
                  <i class="far fa-heart"></i>
                  <a href="#">ADD TO CART</a>
                </div>
              </div>
              <div className="text">
                <a href="#">Herschel supply co 25l</a>
                <span>$75.00</span>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="img">
                <img src="it2.webp"></img>
                <div className="opp">
                  <i class="far fa-heart"></i>
                  <a href="#">ADD TO CART</a>
                </div>
              </div>
              <div className="text">
                <a href="#">Denim jacket blue</a>
                <span>$92.50</span>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="img">
                <img src="it3.webp"></img>
                <div className="opp">
                  <i class="far fa-heart"></i>
                  <a href="#">ADD TO CART</a>
                </div>
              </div>
              <div className="text">
                <a href="#">Coach slim easton blac</a>
                <span>$165.90</span>
              </div>
            </div> */}

            {/* <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="img bef2">
                <img src="it4.webp"></img>
                <div className="opp">
                  <i class="far fa-heart"></i>
                  <a href="#">ADD TO CART</a>
                </div>
              </div>
              <div className="text">
                <a href="#">Herschel supply co 25l</a>
                <span>$75.00</span>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="img">
                <img src="it5.webp"></img>
                <div className="opp">
                  <i class="far fa-heart"></i>
                  <a href="#">ADD TO CART</a>
                </div>
              </div>
              <div className="text">
                <a href="#">Herschel supply co 25l</a>
                <span>$75.00</span>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="img">
                <img src="it6.webp"></img>
                <div className="opp">
                  <i class="far fa-heart"></i>
                  <a href="#">ADD TO CART</a>
                </div>
              </div>
              <div className="text">
                <a href="#">Denim jacket blue</a>
                <span>$92.50</span>
              </div>
            </div>

            {/* <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="img">
                <img src="it7.webp"></img>
                <div className="opp">
                  <i class="far fa-heart"></i>
                  <a href="#">ADD TO CART</a>
                </div>
              </div>
              <div className="text">
                <a href="#">Coach slim easton black</a>
                <span>$165.90</span>
              </div>
            </div> */}

            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="img">
                <img src="it8.webp"></img>
                <div className="opp">
                  <i class="far fa-heart"></i>
                  <a href="#">ADD TO CART</a>
                </div>
              </div>
              <div className="text">
                <a href="#">Frayed denim shorts</a>
                <span className="s1"> $29.50 </span><span className="s2">$15.90</span>
              </div>
            </div>

            
          </div>
        </div>
      </div>
    </div>
  )
}