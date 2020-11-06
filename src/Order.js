import React from "react";
import "./Order.css";
import moment from "moment";
import CartProduct from "./CartProduct";
import CurrencyFormat from "react-currency-format";

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p className="order_date">
        {moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}
      </p>
      <p className="order_id">
        <small>{order.id}</small>
      </p>
      {order.data.cart?.map((item) => (
        <CartProduct
          id={item.id}
          image={item.image}
          title={item.title}
          hideRating
          price={item.price}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => <h3 className="order_total">Total: {value}</h3>}
        decimalScale={0}
        value={order.data.amount}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rp "}
      />
    </div>
  );
}

export default Order;
