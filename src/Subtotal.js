import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal() {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="subtotal_form">
              <div className="subtotal_desc">
                <p>Subtotal ({cart.length} items)</p>
                <p>{value}</p>
              </div>
              <div className="subtotal_desc">
                <p>Delivery</p>
                <p>{cart.length ? "Free" : "Rp 0"}</p>
              </div>
              <div className="subtotal_desc">
                <p>Taxes and fees</p>
                <p>{cart.length ? "--" : "Rp 0"}</p>
              </div>
              <div className="subtotal_desc">
                <small>(calculated in checkout)</small>
              </div>
            </div>
            <div className="subtotal_form2">
              <div className="total">
                <p>Est. total</p>
                <strong>{value}</strong>
              </div>
            </div>
          </>
        )}
        decimalScale={0}
        value={getCartTotal(cart)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rp "}
      />
      <button onClick={(e) => history.push("/payment")}>Check out</button>
    </div>
  );
}

export default Subtotal;
