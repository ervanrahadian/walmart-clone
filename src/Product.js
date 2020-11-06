import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({ id, title, image, alt, rating, price }) {
  const [{ cart }, dispatch] = useStateValue();

  const addToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  };

  return (
    <div className="product_list">
      <img src={image} alt={alt} />
      <div className="product_info">
        <p>{title}</p>
        <div className="product_rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>★</p>
            ))}
        </div>
        <p className="product_price">
          <CurrencyFormat
            renderText={(value) => <strong>{value}</strong>}
            decimalScale={0}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp "}
          />
        </p>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
}

export default Product;
