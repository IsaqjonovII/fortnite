import React from 'react'
import "./Cosplay.css"

const Cosplay = () => {
  return (
    <div className='cos' >
        <div className="cosplay_banner">

          <img className='img_banner' src="https://cdn2.unrealengine.com/overview-evergreen-2021-hero-feature-900x900-991bc94e4da8.png" alt="" />

          <h1 className='banner_title' >PAPERCRAFT COSPLAY</h1>
          {/* <h2>THERE`S CURRENTLY NO EVENT RUNNING! YOU CAN BROWSE  <br />
          THE ARCHIVE AND CRAFT THE PRECEDENT CREATION </h2> */}

        </div>

        <div className="cosplay_word_img_banner">

          <div className="word">
            <h1>WANNA SEE MORE?</h1>
            <button>EXPLORE THE ARCHIVE</button>


          </div>

          <img className='img' src="https://cdn2.unrealengine.com/overview-evergreen-2021-archive-feature-900x900-8b1781b6a0fd.png" alt="" />

        </div>


    </div>
  )
}

export default Cosplay