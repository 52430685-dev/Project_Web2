import "./Cart.css";

function Cart({cart,setCart})  {
  function removeFromCart(index){
    const newCart = [...cart];
    newCart.splice(index,1);
    setCart(newCart);
  }
  const total = cart.reduce((sum,book)=>sum + book.price,0);

  return (
    <div className="cart-page">
      <h1>Shopping Cart 🛒</h1>
      <button onClick={()=>setCart([])}>
         Remove All Books
         </button>
         {cart.length===0 ? (
          <p>Your cart is empty!</p>      
          ):(
            <>
            {cart.map((book, index)=>(
              <div className="cart-item" key={index}>
              <img src = {book.image} alt={book.name}/>
              <div>
              <h3>{book.name}</h3>
              <p>Price: ${book.price}</p>
              <button onClick={()=>removeFromCart(index)}>
                  Remove
              </button>
              </div>
              </div>
            ))}
            
          <h2>Total Price: ${total}</h2>
          </>
          )
        }</div>);
      }

export default Cart;