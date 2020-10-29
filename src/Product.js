import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";

function Product({ docid, data }) {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();

  //console.log("This is the basket >>>> ", basket);

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
    <div className="product">
      <div className="product__info">
        <p>{data.title}</p>

        <p className="product__price">
          <CurrencyFormat
            renderText={(value) => <strong className="">{value}</strong>}
            thousandSeparator={true}
            decimalScale={2}
            value={data.price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"₹ "}
          />
        </p>

        <div className="product__rating">
          {Array(data.rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      </div>

      <img
        src={data.image}
        alt={data.title}
        onClick={(e) => {
          dispatch({
            type: "ADD_PRODUCT_ID",
            data: data,
          });
          history.push('/productdetails');
        }}
      />

      <button onClick={addToBasket}> Add to Basket </button>
    </div>
  );
}

export default Product;
