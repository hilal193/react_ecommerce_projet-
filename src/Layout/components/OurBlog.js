import React from 'react'
import "./style/OurBlog.scss"

export default function OurBlog() {
  return(
    // eslint-disable-next-line
    <div className="OurBlog">
      <div className="container">
      <div className="text">
        <h3>OUR BLOG</h3>
      </div>
      <div className="imgs">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="imgBox">
              <img src="bl1.webp"></img>
            </div>
            <div className="textBox">
              <a href="#">Black Friday Guide: Best Sales & Discount Codes</a>
              <span>By Nancy Ward on July 22, 2017</span>
              <p>Duis ut velit gravida nibh bibendum commodo. Sus-pendisse pellentesque mattis augue id euismod. Inter-dum et malesuada fames</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="imgBox">
            <img src="bl2.webp"></img>
            </div>
            <div className="textBox">
              <a href="#">BThe White Sneakers Nearly Every Fashion Girls Own</a>
              <span>By Nancy Ward on July 18, 2017</span>
              <p>Nullam scelerisque, lacus sed consequat laoreet, dui enim iaculis leo, eu viverra ex nulla in tellus. Nullam nec ornare tellus, ac fringilla lacus. Ut sit ame</p>
            </div>
          </div>

          <div className="col-md-4 col-sm-12">
            <div className="imgBox">
            <img src="bl3.webp"></img>
            </div>
            <div className="textBox">
              <a href="#">New York SS 2018 Street Style: Annina Mislin</a>
              <span>By Nancy Ward on July 2, 2017</span>
              <p>DProin nec vehicula lorem, a efficitur ex. Nam vehicula nulla vel erat tincidunt, sed hendrerit ligula porttitor. Fusce sit amet maximus nunc</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}