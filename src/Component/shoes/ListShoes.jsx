import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
//
import Carousel from "./Carousel";
import { getAllProductAction, getAllProductActionApi } from "../../redux/reducer/cartReducer";
import { useDispatch, useSelector } from "react-redux";

const ListShoes = () => {
  const arrProduct = useSelector(state => state.cartReducer.arrProduct);
  const dispatch = useDispatch();
  // khong tham so
  useEffect(() => {
    getAllProDuct();
  }, []);
  const getAllProDuct = async () => {
    const action = getAllProductActionApi();
      dispatch(action)
  };
  return (
    <div className="carousel mt-4">
      <Carousel></Carousel>
      <div className="row">
        {arrProduct.map((item) => {
          return (
            <div className="col-md-3 mt-4" key={item.id}>
              <div className="card">
                <img
                  src={item.image}
                  alt="..."
                  style={{ width: "40%" }}
                  className="mx-auto"
                />
                <div className="card-body">
                  <h6>{item.name}</h6>
                  <h5 className="text-danger fw-bold">{item.price}$</h5>

                </div>
                <div className="card-footer">
                    <NavLink to={`/card/${item.id}`} className="btn btn-primary">View detail
                  </NavLink>
                  <button type="button" className=" text-dark fw-bold btn btn-secondary btn-sm mx-2 p-2">
                    Add to cart <i class="fas fa-cart-shopping" style={{ color: "black" }}></i>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListShoes;

// style={{
//   backgroundImage: `url("nike.jpg")`,
//   backgroundRepeat: "no-repeat",
//   backgroundSize: "cover"
// }}