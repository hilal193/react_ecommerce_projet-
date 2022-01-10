import React, { useState } from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import "./components/style/Navbar.scss"

// eslint-disable-next-line
export default function Shop() {
  const [toggle, setToggle ] = useState(false)
  return(
    <div>
      <div className="header">
        <div className="container-fluid">
          <div className="row">
            <div className="col col1">
              <a href="#"><i class="fab fa-facebook-f"></i></a>
              <a href="#"><i class="fab fa-instagram"> </i></a>
              <a href="#"><i class="fab fa-pinterest-p"></i></a>
              <a href="#"><i class="fab fa-snapchat-ghost"></i></a>
              <a href="#"><i class="fab fa-youtube"> </i></a>
            </div>
            <div className="col col2">
              <h6>Free shipping for standard order over $100</h6>
            </div>
            <div className="col col3">
              <h6>fashe@example.com</h6>
                <select>
                  <option value="USD">USD</option>
                  <option value="UER">UER</option>
                </select>
            </div>
          </div>
        </div>
      </div>

      <Navbar className="navbar" expand="lg">
        <Navbar.Brand href="#"><img src="./logo.png"></img></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="navmid">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <div className="home">
              <a className="links" href="/">Home</a>
            </div>
            <Nav.Link className="links" href="/Shop">Shop</Nav.Link>
            <Nav.Link className="links rsale" href="/Sale">product</Nav.Link>
            <Nav.Link className="links" href="/About">About</Nav.Link>
            <Nav.Link className="links" href="/Contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </div>
        <div className="navend">
          <a className="user" href="#"><img src="user.png"></img></a>
          <a className="shop" href="#"onClick={() =>setToggle(!toggle)}><img src="shop.png"></img>
          <span className="shopi">3</span>
          </a>
          { toggle ?
          <div className="cart">
            <ul>
              <li>
                <div className="cart-img"><img src="it5.webp"></img></div>
                <div className="cart-text">
                  <a href="#">White Shirt With Pleat Detail Back</a>
                  <span>1 x $19.00</span>
                </div>
              </li>

              <li>
                <div className="cart-img"><img src="it6.webp"></img></div>
                <div className="cart-text">
                  <a href="#">Converse All Star Hi Black Canvas</a>
                  <span>11 x $39.00</span>
                </div>
              </li>

              <li>
                <div className="cart-img"><img src="it7.webp"></img></div>
                <div className="cart-text">
                  <a href="#">Nixon Porter Leather Watch In Tan</a>
                  <span>1 x $17.00</span>
                </div>
              </li>
              
            </ul>
            <div className="total">
              <span>Total: $75.00</span>
            </div>
            <div className="buttons">
              <div className="btns">
                <a href="#">VIEW CART</a>
              </div>

              <div className="btns">
                <a href="#">CHECK OUT</a>
              </div>
            </div>
          </div>
          : null}
        </div>
      </Navbar>
    </div>
    )
}