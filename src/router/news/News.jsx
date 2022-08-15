import React from 'react'
import './News.css';

const News = () => {
  return (
    <div>
      <div className="news_container">

        <div className="top">
          <div className="top_box div1">
            <img src="	https://cdn2.unrealengine.com/21br-rocketleague-liveworlds-blog-header-1900x600-a7dc092bdf49.jpg" alt="" />
            <h2>jun 1, 2022</h2>
            <h1>kawspeely slips onto the scene</h1>
          </div>
          <div className="top_box div2">
            <img src="https://cdn2.unrealengine.com/21cm-fortnitemarescreatorcallout-blogassets-header-1920x1080-131de5176a56.png" alt="" />
            <h2>jun 1, 2022</h2>
            <h1>kawspeely slips onto the scene</h1>
          </div>
        </div>

        <div className="lower">
          <div className="lower_box div3">
            <div className="image">
              <img src="https://cdn2.unrealengine.com/fortnite-wolverine-zero-1900x600-71da2d0e089d.jpg" alt="" />
            </div>
            <h2>Jun 30, 2022</h2>
            <h1>Go Old School with the galaxian emote in fortnite!</h1>
          </div>
          <div className="lower_box div4">
            <div className="image">
              <img src="https://cdn2.unrealengine.com/fortnite-john-cena-1920x1080-7e587c46d6ee.jpg" alt="" />
            </div>
            <h2>Jun 30, 2022</h2>
            <h1>Go Old School with the galaxian emote in fortnite!</h1>
          </div>
          <div className="lower_box div5">
            <div className="image">
              <img src="	https://cdn2.unrealengine.com/21br-geforcenowpickaxe-thumb-576x576-79f25b47df8b.jpg" alt="" />
            </div>
            <h2>Jun 30, 2022</h2>
            <h1>Go Old School with the galaxian emote in fortnite!</h1>
          </div>
          <div className="lower_box div6">
            <div className="image">
              <img src="https://cdn2.unrealengine.com/21br-nss-keyart-newsthumb-576x576-57423d136b04.jpg" alt="" />
            </div>
            <h2>Jun 30, 2022</h2>
            <h1>Go Old School with the galaxian emote in fortnite!</h1>
          </div>
        </div>

        <button className='load_more'>Load More</button>
      </div>
    </div>
  )
}

export default News