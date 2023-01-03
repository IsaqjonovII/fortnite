import React, { useState, useEffect, useRef } from "react";
import c from "./Banner.module.css";
import fortnite from "../../assets/fortnite.svg"

const Banner = () => {
  

  return (
    <div className={c.banner}>
      <div className={c.banner__img}>
        <img src="https://cdn2.unrealengine.com/zero-build-battle-royale-logo-blue-en-2739x1246-955d0fb099dc.png" alt="" />
      </div>

      <div className={c.center_container}>
        <div className={c.left}>
          <p>june 23, 2022</p>
          <h2>fortnite x naruto shippuden: raise your flag invitatio... </h2>
          <img
            src="https://cdn2.unrealengine.com/21br-narutopt2-4-characters-newsheader-1900x600-6dc4934c34c2.jpg"
            alt=""
          />
        </div>

        <div className={c.right}>
          <p>june 21, 2022</p>
          <h2>the nindo 2022: complete challenges to earn naruto rew...</h2>
          <img
            src="https://cdn2.unrealengine.com/fortnite-the-nindo-1900x600-1900x600-cf6a616310f2.png"
            alt=""
          />
        </div>
      </div>
      <div className={c.flex}>
        <div className={c.flex_boxes}>
          <img
            src="https://cdn2.unrealengine.com/21br-narutopt2-4-characters-newsheader-1900x600-6dc4934c34c2.jpg"
            alt=""
          />
          <p>june 21, 2022</p>
          <h2>naruto's rivals join team 7 in fortnite</h2>
        </div>
        <div className={c.flex_boxes}>
          <img
            src="https://cdn2.unrealengine.com/13stw-hittheroadloading-motd-1920x1080-1920x1080-116968bac3e6.jpg"
            alt=""
          />
          <p>june 21, 2022</p>
          <h2>save the world v21.10 homebase status report</h2>
        </div>
        <div className={c.flex_boxes}>
          <img
            src="https://cdn2.unrealengine.com/fortnite-island-hopper-1900x600-127c6d0e1ef6.jpg"
            alt=""
          />
          <p>june 21, 2022</p>
          <h2>Earn in game rewards with fortnite island hopper q...</h2>
        </div>
      </div>

      <div className={c.bottom_container}>
        <img
          src="https://cdn2.unrealengine.com/battle-pass-promo-footer-bg-desktop-1920x1228-c2021f528166.png"
          alt=""
          className={c.banner_img}
        />
        <img src={fortnite} alt="" className={c.logo} />
        <h2>Chapter 3 - Season 3</h2>
        <img src="https://cdn2.unrealengine.com/vibin-no-shadow-black-en-1520x484-72250831462d.png" alt="" className={c.png} />
        {/* <h2>Battle pass</h2> */}
        <button className={c.valid_btn}>available  now!</button>
      </div>
    </div>
  );
};

export default Banner;
