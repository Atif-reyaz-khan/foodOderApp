import { Button, Input } from '@material-ui/core';
import { DeleteForever } from '@material-ui/icons';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import React from 'react';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Cart Items</h1>
      {cart.length > 0 && (
        <Button
        style={{
          borderRadius: 35,
          backgroundColor:"#fca45b",}} 
        variant="contained" 
        startIcon={<RemoveShoppingCartIcon/>} onClick={clearCart}>Clear Cart</Button>
      )}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>₹{product.cost}/-</h4>
          <span style={{marginRight:15}}>Quantity : </span>

          <Input
            style={{textAlign:"center"}}
            value={product.quantity}
            onChange={(e) =>
              setQuantity(
                product,
               isNaN(parseInt(e.target.value))?0:parseInt(e.target.value)
              )
            }
          />
         

            <br></br>
            <br></br>
            <img src={product.image} alt={product.name} /><br></br><br></br>
  
            <Button  variant="contained"     
            style={{
        borderRadius: 35,
        backgroundColor:"#fca45b",}}   startIcon={<DeleteForever/>} onClick={() => removeFromCart(product)}>
              Remove
            </Button>
          </div>
        ))}
      </div>

      <div>
        <hr/>
        <h3>Bill Total : ₹ {getTotalSum()}/-</h3>
        <hr/>
        </div>
    </>
  );
}
