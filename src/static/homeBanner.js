import BannerPng1 from '../assets/zero-build-battle-royale-logo-en-fn-2739x1246-12a1a93b16df.png'
import BannerPng2 from '../assets/vibin-no-shadow-black-en-1520x484-72250831462d.png';
import BannerPng3 from '../assets/VIBIN.png';
import { BsPlayFill } from 'react-icons/bs';


export const HomeBanner = [
    {
        id: 0,
        display: true,
        situation: true,
        className: "banner_next1",
        mainImage: 'https://cdn2.unrealengine.com/zero-build-battle-royale-logo-en-fn-2739x1246-12a1a93b16df.png',
        png1Class: 'banner_png1',
        buttonText: 'LEARN MORE !',
        buttonClass: 'banner_btn1'
        
    },
    {
        id: 1,
        display: false,
        situation: true,
        className: "banner_next2",
        mainImage: 'https://cdn2.unrealengine.com/vibin-no-shadow-black-en-1520x484-72250831462d.png',
        png1Class: 'vibin_black',
        buttonText: 'AVAILABLE NOW !',
        buttonClass: 'banner_btn2',
        c3Image: 'https://cdn2.unrealengine.com/c3s3-bug-black-en-500x500-0c558661217c.png',
        c3Class: 'c3black',
        bannerText: 'BATTLE PASS'
    },
    {
        id: 2,
        display: false,
        situation: false,
        className: "banner_next3",
        mainImage: 'https://cdn2.unrealengine.com/vibin-no-shadow-en-1520x484-c8552434b390.png',
        buttonText: 'WATCH TRAILER',
        buttonClass: 'banner_btn3',
        c3Image: 'https://cdn2.unrealengine.com/c3s3-bug-en-500x500-8d89362b03bf.png',
        c3Class: 'c3_white',
        bannerText: 'BATTLE PASS',
    }
    
]