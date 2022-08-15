import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { IoSearchOutline, IoGlobeOutline, IoPersonAdd } from 'react-icons/io5';
import { FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import axios from 'axios';

const Navbar = () => {
    const [search, setSearch] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);


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

    }, []);

    useEffect(() => {
        let filterData = data.filter(item => item.name.toLowerCase().includes(inputValue.toLowerCase())).slice(0, 6)
        setSearchData(filterData)
    }, [inputValue, data])

    return (
        <div className='navbar_wrapper'>
            <div className='nav_logo_wrapper'>
                <NavLink to="/">
                    <div className='nav_logo'></div>
                </NavLink >
                <div className='logo_fortnite'></div>
            </div>
            
            <div className='nav_items'>
                <ul className='nav_lists' style={search ? { display: "none" } : { display: "flex" }}>
                    <li className='nav_list_text1'>MODES
                        <div className='down_list'>
                            <ul className='down_list_items'>
                                <li>BATTLE ROYALE</li>
                                <li>ZERO BUILD</li>
                                <li>CREATIVE</li>
                                <li>SAVE THE WORLD</li>
                            </ul>
                        </div>
                    </li>
                    <li className='nav_list_text'>
                        <NavLink activeClassName="active_link" to="/battle-pass">BATTLE PASS</NavLink >
                    </li>
                    <li className='nav_list_text'>
                        <NavLink activeClassName="active_link" to="/product">CREW</NavLink >
                    </li>
                    <li className='nav_list_text'>
                        <NavLink activeClassName="active_link" to="/vbucks">V-BUCKS</NavLink >
                    </li>
                    <li className='nav_list_text'>COMPETITIVE</li>
                    <li className='nav_list_text'><NavLink activeClassName="active_link" to="/news">NEWS</NavLink ></li>
                    <li className='nav_list_text'>MERCH</li>
                    <li className='nav_list_text'><NavLink activeClassName="active_link" to="/cosplay">MOBILE</NavLink ></li>
                    <li className='nav_list_text'><NavLink activeClassName="active_link" to="/help">HELP</NavLink ></li>
                </ul>
            </div>
            <div className={search ? "search_icon showSearch" : "search_icon"} >
                <input type="text" placeholder='Search...'
                    onChange={e => setInputValue(e.target.value)}
                    value={inputValue} />
                <div className="search_result" style={{ display: inputValue.trim() ? "block" : "none" }}>
                    {
                        searchData.length ? searchData?.map((item, index) =>
                            <Link
                                key={index}
                                to={`/product/${item.id}`}
                                className="search_link "
                                onClick={() => {
                                    setInputValue("")
                                    setSearch(false)
                                }}>
                                <img width="50" src={item.images.background} alt="" />
                                <span> {item.name} </span>
                            </Link >
                        )
                            :
                            <p>not found</p>
                    }
                </div>
                {
                    search ? <FiX onClick={() => {
                        setInputValue("")
                        setSearch(p => !p)
                    }} />
                        :
                        <IoSearchOutline onClick={() => setSearch(p => !p)} />
                }
            </div>
            <div className="icon_container">
                <div className="world_icon">
                    <IoGlobeOutline />
                    {/* <ul className="language_collection">
                        <li>العربية</li>
                        <li>DEUTSCH</li>
                        <li>ESPAÑOL (SPAIN)</li>
                        <li>ESPAÑOL (LA)</li>
                        <li>FRANÇAIS</li>
                        <li>ITALIANO</li>
                        <li>日本語</li>
                        <li>한국어</li>
                        <li>POLSKI</li>
                        <li>PORTUGUÊS (BRASIL)</li>
                        <li>РУССКИЙ</li>
                        <li>TÜRKÇE</li>
                    </ul> */}
                </div>
                <div className='login'>
                    <IoPersonAdd /> <p>SIGN IN</p>
                </div>
            </div>
            <button className='download_btn'>DOWNLOAD</button>
        </div>
    )
}

export default Navbar