import React from "react";
import "./Cart.css";
import CartProduct from "./CartProduct";
import { useStateValue } from "./StateProvider";
import Subtotal from "./Subtotal";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="cart">
      <div className="cart_left">
        <div className="cart_ad">
          <img
            src="https://www.capitalone.com/credit-cards/binaries/card/products/walmart-rewards/tablet.png"
            alt="Card-Logo"
          />
          <p>Earn 5% back with the Capital One Fake Walmart Rewards Card.</p>
          <button>Learn how</button>
        </div>
        <div className="cart_desc">
          <h2 className="cart_title">Your cart: {cart.length} items</h2>
          <small className="cart_gift">
            <input type="checkbox" /> This order is a gift.
          </small>
          {cart.map((item) => (
            <CartProduct
              id={item.id}
              image={item.image}
              title={item.title}
              hideRating
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="cart_right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Cart;
