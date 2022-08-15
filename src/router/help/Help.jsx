import React from 'react'
import "./Help.css";
import { TiArrowRightThick } from "react-icons/ti"

const Help = () => {
    return (
        <div className='help' >
            <div className="help_title">
                <h2>HELP CENTER</h2>

                <div className="title_ques" >
                    <h1>PLAYER SUPPORT <TiArrowRightThick /></h1>
                    <p>DO YOU NEED HELP WITH FORTNITE OR YOUR EPIC GAMES ACCOUNT? FIND THE ANSWERS IN OUR SUPPORT  CENTER OR <a href="https://fortnitehelp.epicgames.com/">CONTACT US</a> DIRECTLY.</p>
                </div>

                <div className="title_ques" >
                    <h1>PARENTAL CONTROLS <TiArrowRightThick /></h1>
                    <p>FORTNITE OFFERS A RANGE OF PARENTAL CONTROLS TO HELP YOU CONTROL WHAT A PLAYER CAN SEE AND DO WITHIN THE GAME. LEARN HOW TO SET UP THESE CONTROLS AND MORE.</p>
                </div>

                <div className="title_ques" >
                    <h1>ACCOUNT SECURITY & PRIVACY <TiArrowRightThick /></h1>
                    <p>WITH A SECURE ACCOUNT, YOU MINIMIZE RISK OF OTHERS USING YOUR PAYMENT METHODS, BEHAVING BADLY IN YOUR GAMES, AND/OR  DOING MORE  DAMAGING ACTIONS. LEARN MORE.</p>
                </div>

                <div className="title_ques" >
                    <h1>COMMUNITY RULES <TiArrowRightThick /></h1>
                    <p>WHEN PLAYING FORTNITE WE ASK YOU TO AGREE   TO THE COMMUNITY RULES TO HELP MAKE   OUR COMMUNITY THE BEST PLACE TO PLAY.</p>
                </div>

                <div className="title_ques" >
                    <h1>FAQ <TiArrowRightThick /></h1>
                    <p>CAN’T FIND WHAT YOU NEED? BE SURE TO CHECK OUT OUR OFFICIAL FORTNITE FAQ FOR ANSWERS.</p>
                </div>

            </div>

            <div className="help_img">
                <img src="https://cdn2.unrealengine.com/Fortnite%2Fhelp-center%2FHelp_Fishstick-3300x8700-38aec11ba790872c19d5f6548ea0bc721010b77c.png" alt="" />
            </div>

        </div>
    )
}

export default Help