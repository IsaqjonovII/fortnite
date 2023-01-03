import React, { useState, useEffect } from 'react'
import axios from "axios"
import './BattlePass.css'
import video from '../../assets/Battlepass.mp4'

const BattlePass = () => {

  const [data, setData] = useState([])
  const [currentImage, setCurrentImage] = useState('')
  const [imageAnimation, setIMageAnimation] = useState(false)
  const [randomImage, setRandomImage] = useState(0)

  useEffect(() => {
    setRandomImage(Math.floor(Math.random() * 100))
  }, [])

  useEffect(() => {

    axios.get("https://fortniteapi.io/v2/items/list?lang=en", {
      headers: {
        Authorization: "0c13c2aa-0a2cec03-b5455c56-766ae857"
      }
    })
      .then(res => {
        setData(res.data.items)

      })
      .catch(err => console.log(err))

  }, [])


  useEffect(() => {
    if (imageAnimation) {
      setIMageAnimation(false)
    }
    setTimeout(() => {
      setIMageAnimation(true)
    }, 3000)
  }, [currentImage, imageAnimation])



  return (
    <div className='battle'>
      <div className="battle_banner">
        <video autoPlay muted loop src={video}></video>
        <div className="battle_bannerText">
          <h3>CHAPTER 3 SEASON 3 - VIBIN'</h3>
          <h1>BATTLEPASS</h1>
          <h2>THE ISLAND IS ONE GIANT PARTY. DROP IN AND SPREAD THE GOOD VIBES!</h2>
        </div>



      </div>
      <div className="battle_darth">
        <h1><i>DARTH VADER ARRIVES</i></h1>
        <h3>PLUS MORE NEW OUTFITS</h3>

        <div className={imageAnimation ? " battle_mainImage battle_animation" : "battle_mainImage"}>
          <img src={data.length ? currentImage ? currentImage : data[0].images.icon : null} alt="" />
        </div>

        <div className="battle_images_con">
          {
            data.length && data?.slice(0 + randomImage, 8 + randomImage)?.map((collec, inx) => <img src={collec.images.background}
              key={inx}
              onClick={() => setCurrentImage(collec.images.icon)}
              className={currentImage === collec.images.icon ? "battle_activeImage" : ""}
              alt="images"
            />)

          }
        </div>

      </div>
    </div>
  )
}

export default BattlePass