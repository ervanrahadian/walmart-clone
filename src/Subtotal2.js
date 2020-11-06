import React from "react";
import "./Subtotal2.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";
import { useHistory } from "react-router-dom";

function Subtotal2({ hideButton }) {
  const history = useHistory();
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div className="subtotal2">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <div className="subtotal2_form">
              <div className="subtotal2_desc">
                <p>Subtotal ({cart.length} items)</p>
                <p>{value}</p>
              </div>
              <div className="subtotal2_desc">
                <p>Delivery</p>
                <p>{cart.length ? "Free" : "Rp 0"}</p>
              </div>
              <div className="subtotal2_desc">
                <p>Taxes and fees</p>
                <p>{cart.length ? "--" : "Rp 0"}</p>
              </div>
              <div className="subtotal2_desc">
                <small>(calculated in checkout)</small>
              </div>
            </div>
            <div className="subtotal2_form2">
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
      {!hideButton && (
        <button onClick={(e) => history.push("/payment")}>Check out</button>
      )}
    </div>
  );
}

export default Subtotal2;
