import React from 'react'
import "./style/Sinfo.scss"

export default function Sinfo() {
  return(
    // eslint-disable-next-line
    <div className="info">
    <div className="container">
      <div className="box">
          <h4>Free Delivery Worldwide</h4>
          <a href="#">Click here for more info</a>
        </div>
        <div className="box box2">
          <h4>30 Days Return</h4>
          <span>Simply return it within 30 days for an exchange.</span>
        </div>
        <div className="box">
          <h4>Store Opening</h4>
          <span>Shop open from Monday to Sunday</span>
        </div>
    </div>
    </div>
  )
}