import React, { useContext } from "react";
import { Store } from "../Store";
import Alert from "@mui/material/Alert";
import Stack from "@mui/material/Stack";
import { List } from "@mui/material";
import { Link } from "react-router-dom";

export default function Cart() {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;

  return (
    <div className="container">
      <title>Cart</title>
      <div className="row">
        <div className="col-md-6">
          {cartItems.length === 0 ? (
            <Stack>
              <Alert severity="warning">Cart is Empty</Alert>
            </Stack>
          ) : (
            <List>
              {cartItems.map((item) => {
                <List.Item key={item.id}>
                  <div className="row align-items-center">
                    <div className="col-md-4">
                      <img src={item.image} alt={item.title} />
                      <Link to={`/products/${item.id}`}>{item.category}</Link>
                    </div>
                    <div className="col-md-3">
                      <button disabled={item.quantity === 1}>
                        <i className="fa fa-minus-circle"></i>
                      </button>
                      <span>{item.quantity}</span>
                      <button disabled={item.quantity === item.countInStock}>
                        <i className="fa fa-plus-circle"></i>
                      </button>
                    </div>
                    <div className="col-md-3">${item.price}</div>
                    <div className="col-md-2">
                      <i className="fa fa-trash"></i>
                    </div>
                  </div>
                </List.Item>;
              })}
            </List>
          )}
        </div>
      </div>
    </div>
  );
}
