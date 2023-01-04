import React from "react";
import c from "./Banner.module.css";
import fortnite from "../../assets/fortnite.svg"

const Banner = () => {


  return (
    <div className={c.banner}>
      <div className={c.banner__img}>
        <img src="https://cdn2.unrealengine.com/zero-build-battle-royale-logo-blue-en-2739x1246-955d0fb099dc.png" alt="" />
      </div>

      <div className={c.grid__contanier}>
        <div className={c.grid__item}>
          <img src="https://cdn2.unrealengine.com/23br-c4s1-brweaponsandfeatures-motd-1920x1080-1920x1080-5eb245d5d8ce.jpg" alt="" />
        </div>
        <div className={c.grid__item}>
          <img src="https://cdn2.unrealengine.com/january-fortnite-crew-pack-with-gildhart-thumbnail-576x576-31e7e0b331a9.jpg" alt="free pass" />
        </div>
        <div className={c.grid__item}>
          <img src="https://cdn2.unrealengine.com/fortnite-giannis-antetokounmpo-thumbnail-400x400-c72621be0225.jpg" alt="free pass" />
        </div>
        <div className={c.grid__item}>
          <img src="https://cdn2.unrealengine.com/23br-mha-keyart-social-newsthumb-576x576-0c949b61fdd6.jpg" alt="free pass" />
        </div>
        <div className={c.grid__item}>
          <img src="https://cdn2.unrealengine.com/fortnite-reboot-rally-thumbnail-576x576-72ff0a2857f8.jpg" alt="free pass" />
        </div>
      </div>

    </div>
  );
};

export default Banner;
