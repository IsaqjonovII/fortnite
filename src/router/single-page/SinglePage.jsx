import React, { useEffect, useState } from 'react';
import "./SinglePage.css";
import axios from "axios";
import Loader from '../../components/loader/Loader';

function SinglePage({ match }) {
  const [oneItem, setOneItem] = useState([]);

  useEffect(() => {
    axios.get("https://fortniteapi.io/v2/items/list?lang=en", {
      headers: {
        Authorization: "0c13c2aa-0a2cec03-b5455c56-766ae857"
      }
    })
      .then(res => setOneItem(res.data.items?.filter(i => i.id === match.params.id)))
      .catch(err => console.log(err))

  }, [match.params.id]);

  console.log(oneItem);

  return !oneItem.length ? <Loader /> : (
    <div className='page_container'>
      <div className="container">
        <div className="container_img">
          <img src={oneItem[0].images.background} alt="" />
        </div>
        <div className="description">
          <h1>{oneItem[0].name}</h1>
          <h3>descrition</h3>
          <li>Price:  {oneItem[0].price} v-bucks </li>
          <li>Interest:  {oneItem[0].interest} </li>
          <li>Type:  {oneItem[0].rarity.name}</li>
          <li>Outfit:  {oneItem[0].set.id} set </li>
          <li>Released Date:  {oneItem[0].added.date} </li>
          <li>Version:  {oneItem[0].added.version} </li>
        </div>
      </div>
    </div>
  )
}

export default SinglePage