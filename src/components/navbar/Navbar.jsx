import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { HiMenu } from "react-icons/hi"
import { IoSearchOutline, IoGlobeOutline, IoPersonAdd, } from "react-icons/io5";
import { FiX } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";
import axios from "axios";

const Navbar = ({ isSidebarOpen, toggleSidebar }) => {
    const [search, setSearch] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [data, setData] = useState([]);
    const [searchData, setSearchData] = useState([]);

    useEffect(() => {
        axios
            .get("https://fortniteapi.io/v2/items/list?lang=en", {
                headers: {
                    Authorization: "0c13c2aa-0a2cec03-b5455c56-766ae857",
                },
            })
            .then((res) => {
                setData(res.data.items);
            })
            .catch((err) => console.log(err));
    }, []);

    useEffect(() => {
        let filterData = data
            .filter((item) =>
                item.name.toLowerCase().includes(inputValue.toLowerCase())
            )
            .slice(0, 6);
        setSearchData(filterData);
    }, [inputValue, data]);



    return (
        <div className="navbar__wrapper flex">
            <div className="nav__logo__wrapper flex">
                <NavLink to="/">
                    <img className="nav__logo" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/Epic_Games_logo.png" alt="epic games logo" />
                </NavLink>
                <img src="https://i.pinimg.com/originals/67/33/73/673373d908da756f3565012ee9fa2a69.png" alt="" className="logo__fortnite" />
            </div>

            <div className="nav__items">
                <ul
                    className="nav__lists flex"
                    style={search ? { display: "none" } : { display: "flex" }}
                >
                    <li className="nav__list__text1 overlay">
                        MODES
                        <div className="down__list">
                            <ul className="down__list__items">
                                <li>BATTLE ROYALE</li>
                                <li>ZERO BUILD</li>
                                <li>CREATIVE</li>
                                <li>SAVE THE WORLD</li>
                            </ul>
                        </div>
                    </li>
                    <li className="nav__list__text">
                        <NavLink className="active__link" to="/battle-pass">
                            BATTLE PASS
                        </NavLink>
                    </li>
                    <li className="nav__list__text">
                        <NavLink className="active__link" to="/product">
                            CREW
                        </NavLink>
                    </li>
                    <li className="nav__list__text">
                        <NavLink className="active__link" to="/vbucks">
                            V-BUCKS
                        </NavLink>
                    </li>
                    <li className="nav__list__text">COMPETITIVE</li>
                    <li className="nav__list__text">
                        <NavLink className="active__link" to="/news">
                            NEWS
                        </NavLink>
                    </li>
                    <li className="nav__list__text">MERCH</li>
                    <li className="nav__list__text">
                        <NavLink className="active__link" to="/cosplay">
                            MOBILE
                        </NavLink>
                    </li>
                    <li className="nav__list__text">
                        <NavLink className="active__link" to="/help">
                            HELP
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={search ? " showSearch flex" : "search__icon flex"}>
                <input
                    className="search__input"
                    type="text"
                    placeholder="Search..."
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                />
                <div
                    className="search__result"
                    style={{ display: inputValue.trim() ? "block" : "none" }}
                >
                    {searchData.length ? (
                        searchData?.map((item, index) => (
                            <Link
                                key={index}
                                to={`/product/${item.id}`}
                                className="search__link flex "
                                onClick={() => {
                                    setInputValue("");
                                    setSearch(false);
                                }}
                            >
                                <p className="flex"> <img width="50" src={item.images.background} alt="" />
                                    <span> {item.name} </span></p>
                            </Link>
                        ))
                    ) : (
                        <p>not found</p>
                    )}
                </div>
                {search ? (
                    <FiX
                        className="icon"
                        onClick={() => {
                            setInputValue("");
                            setSearch((p) => !p);
                        }}
                    />
                ) : (
                    <IoSearchOutline className=" icon" onClick={() => setSearch((p) => !p)} />
                )}
            </div>
            <div className="icon__container flex">
                <div className="world__icon">
                    <IoGlobeOutline className="language--icon icon" />
                    <ul className="language__collection">
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
                    </ul>
                </div>
                <button className="login flex">
                    <IoPersonAdd className="icon" /> SIGN IN
                </button>
            </div>
            <div className="btn__container flex">
                <button className="download__btn">download</button>

                {
                    isSidebarOpen ? <FiX className="sidebar__close" onClick={toggleSidebar} /> : <HiMenu className="bars--icon " onClick={toggleSidebar} />
                }
            </div>
        </div>
    );
};

export default Navbar;
