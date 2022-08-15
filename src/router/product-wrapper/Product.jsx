import React, { useEffect, useState } from 'react';
import "./Product.css";
import axios from "axios";
import Loader from '../../components/loader/Loader';
import { Link } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css"

const Product = () => {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [loading, setLoading] = useState(false);
  const [randomBanner, setRandomBanner] = useState([])

  useEffect(() => {
    axios.get("https://fortniteapi.io/v2/items/list?lang=en", {
      headers: {
        Authorization: "0c13c2aa-0a2cec03-b5455c56-766ae857"
      }
    })
      .then(res => {
        setData(res.data.items)
        let randomNumber = Math.floor(Math.random() * 10)
        setRandomBanner(res.data.items[randomNumber])
      })
      .catch(err => console.log(err))
  }, []);

  const getMoreData = () => {
    setLoading(true)
    setTimeout(() => {
      setCount(prev => prev += 1);
      setLoading(false)
    }, 2000)
  }


  useEffect(() => {
    Aos.init()
  }, [])

  return (
    <div className='product_wrapper'>

      <div className="product_banner">
        <h1> {data.length ? randomBanner.name : ""} </h1>
      </div>

      <h1>Characters </h1>
      <div className="pro_container">
        {
          data.length ? data?.slice(0, (10 * count)).map((item, index) => <div data-aos="zoom-out-up" className="pro_card" key={index}>
            <Link to={`/product/${item.id}`} >
              <img width="300" src={item.images.background} alt="" />
            </Link>
            <h2>{item.name} </h2>
            <p> {item.description} </p>
          </div>) : <Loader />
        }
      </div>
      <div className="loader_config">
        {
          loading ? <Loader /> : <button onClick={getMoreData} className="pro_seemore" >See More</button>
        }
      </div>
    </div>
  )
}

export default Product