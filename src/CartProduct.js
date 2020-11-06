import React from "react";
import CurrencyFormat from "react-currency-format";
import "./CartProduct.css";
import { useStateValue } from "./StateProvider";

function CartProduct({
  id,
  image,
  title,
  price,
  rating,
  hideRating,
  hideButton,
}) {
  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="cartproduct">
      <img className="cartproduct_image" src={image} />
      <div className="cartproduct_info">
        <p className="cartproduct_title">{title}</p>
        {!hideRating && (
          <div className="cartproduct_rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p>★</p>
              ))}
          </div>
        )}
        <p className="cartproduct_price">
          <CurrencyFormat
            renderText={(value) => <strong>{value}</strong>}
            decimalScale={0}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp "}
          />
        </p>
        {!hideButton && (
          <button onClick={removeFromCart}>Remove from cart</button>
        )}
      </div>
    </div>
  );
}

export default CartProduct;
