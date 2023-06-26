import React, { useState, useRef, useEffect } from "react";
import axios from 'axios'
import cardShoes from "../../assets/css/Card.module.css"
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
export default function Card({ item }) {
  const [xRotation, setXRotation] = useState(0);
  const [yRotation, setYRotation] = useState(0);
  const cardRef = useRef(null);
  const imgRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const sizesboxRef = useRef(null);
  const purchaseRef = useRef(null);
  // 
  const params = useParams()
  const [deTail, setDetail] = useState({});
  const getIdProduct = async (id) => {
    let result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: "GET"
    })
    setDetail(result.data.content)
  }
  useEffect(() => {
    getIdProduct(params.id);
  }, [params.id])
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-4">
          <img className="w-100" src={deTail.image} alt="..." />
        </div>
        <div className="col-md-4">
          <h2>{deTail.name}</h2>
          <h5 className="text-danger">{deTail.price}$</h5>
          <p>{deTail.description}</p>
          <p>{deTail.shortDescription}</p>
          <ul className={cardShoes.sizesBox} ref={sizesboxRef}>
            <li>38</li>
            <li>40</li>
            <li>42</li>
            <li>44</li>
          </ul>
          <div className={cardShoes.buttonBox} ref={purchaseRef}>
            <button className={cardShoes.purchase}>
              Purchase
            </button>
          </div>
        </div>
      </div>
      <h1>Các mặt hàng tương tự</h1>
      <div className="row" style={{paddingBottom:"40px"}}>
        {deTail.relatedProducts?.map((item, index) => {
          return (
            <div className="col-md-4 mt-2" key={index}>
              <div className={`${cardShoes.card} w-75 h-100`}>
                <div className="card-header">
                  <img src={item.image} style={{ width: 100 }} ref={imgRef}
                    alt="..."
                    className="sneaaker-img" />
                </div>
                <div className="card-body">
                  <h4 className={cardShoes.title} ref={titleRef}>{item.name}</h4>
                  <h4 className="text-danger">{item.price}$</h4>
                  <NavLink to={`/card/${item.id}`} className="btn btn-dark">
                    <i className="fa fa-eye"></i> View detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}