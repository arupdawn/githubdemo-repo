import React, { useState } from "react";
import "./ProductDetails.css";
import { useStateValue } from "./StateProvider";
import { db } from "./firebase";
import CurrencyFormat from "react-currency-format";

function ProductDetails() {
  const [{ data, basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // Dispatch the item into DataLayer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: data.id,
        title: data.title,
        image: data.image,
        price: data.price,
        rating: data.rating,
      },
    });
  };

  return (
    <div className="productDetails">
      <img src={data.image} alt={data.category} />

      <div className="productDetails__info">
        <h3>{data.title}</h3>
        <p>
          <strong>Brand : </strong>
          {data.brand}
        </p>

        <div className="productDetails__rating">
          {Array(data.rating)
            .fill(<p>🌟</p>)
          }
        </div>

        <p className="productDetails__priceInfo">
          Price :
          <p className="productDetails__price">
            <CurrencyFormat
              renderText={(value) => <strong className="">{value}</strong>}
              thousandSeparator={true}
              decimalScale={2}
              value={data.price}
              displayType={"text"}
              thousandSeparator={true}
              prefix={" ₹ "}
            />
          </p>
        </p>

        <strong className="productDetails__freedelivery">FREE DELIVERY</strong>
        <br />
        <br />
        <br />

        <p className="productDetails__inStock">In stock.</p>
        <p>Sold by Cloudtail India and Fulfilled by E-shop.</p>

        <button onClick={addToBasket}> Add to basket </button>
      </div>
    </div>
  );
}

export default ProductDetails;
