import React from 'react';
import Questions from './questionFAQ/Questions';
import "./VBucks.css";

const VBucks = () => {
    return (
        <div className='bucks'>
            <div className="bucks_container">
                <div className="bucks_img">
                    <img src="https://cdn2.unrealengine.com/faq-singular-card-102721-739x1023-651e0791cffe.png" alt="" />
                </div>
                <div className="container_redeem">

                    <h1>redeem your v-bucks card</h1>
                    <h3>CARDS PURCHASED AT RETAIL STORES ARE REDEEMED HERE</h3>
                    <p>An Epic Games account is required to redeem a V-Bucks Card code. If you have played Fortnite, you already have an Epic Games account. Click Get Started below to find your Epic Games account and redeem your V-Bucks!</p>
                    <button className="redeem_btn">get started</button>
                </div>
            </div>
            <div className="text_container">
                <p>Redeem a gift card for V-Bucks to use in Fortnite on any supported device! To use a gift card you must have a valid Epic Account, download Fortnite on a compatible device, and accept the applicable terms and user agreement. Review your device maker’s terms for any additional requirements to play Fortnite (e.g.,  subscriptions, additional fees). Visit <a href="https://fortnite.com/vbuckscardterms">fortnite.com/vbuckscardterms</a> to read the full terms before purchasing. The card’s full face-value is deducted at redemption and associated with a single account for the device you select (no transfer or withdrawal). A gift card can only be redeemed for the indicated amount of V-Bucks, which may only be used in Fortnite. There are no fees or expiration dates associated with the use of a gift card. V-Bucks aren’t e-money or any other currency and can only be used according to Fortnite’s rules. Gift cards will not be replaced if lost, stolen, destroyed, or used without permission. Use of a gift card constitutes acceptance of the applicable terms and user agreement.</p>
                <p>©2022, Epic Games, Inc. Epic Games®, Fortnite®, their logos, and V-Bucks are trademarks of Epic Games, Inc. PlayStation®4, PlayStation®5, Xbox One™, Xbox Series X™, Xbox Series S™, Nintendo Switch™, PC, Android™, and the ratings icon are the trademarks of their respective owners. Gift cards are issued and distributed by Meezey, LLC. For support visit <a href="fortnite.com/support">fortnite.com/support</a>.</p>
            </div>
            <div className="question_container">
                <Questions />
                <img src="https://cdn2.unrealengine.com/faq-angled-cards-102721-759x793-91fa5b26d6ca.png" alt="" />
            </div>
        </div>
    )
}

export default VBucks