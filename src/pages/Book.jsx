import { useState } from "react";
import "./Book.css";

function Book ({Cart=[],setCart}){
const [search, setSearch]=useState("");


const book = [
{id:1 , name : "༺ لـيـطـمـئـن قـلـبـي ༻" , price:15 , image:""},
{id:2 , name : "༺ لـيـطـمـئـن قـلـبـي ༻" , price:15 , image:""},
{id:3 , name : "༺ لـيـطـمـئـن قـلـبـي ༻" , price:15 , image:""}
];

const filteredBook=book.filter((book)=>
book.name.toLowerCase().includes(search.toLowerCase())
);
function addToCart(book){
    setCart([...Cart, book]);
}
const total = Cart.reduce((sum,book)=>sum + book.price,0);
return(
<div className="book-pages">
<h1>Our Books</h1>
<p>Choose your favorite book</p>
<h3>Cart : {Cart.length}Book🛒</h3>
<input
type="text"
placeholder="Search for a book..."
value={search}
onChange={(e)=>setSearch(e.target.value)}
className="search-input"
/>
<div className="books-container">
    {filteredBook.map((book)=>(
      <div className="book-cart" key={book.id}>
    <img src={book.image} alt={book.id} />
    <h3>{book.name}</h3>
    <p>Price: ${book.price}</p>
    <button onClick={()=> addToCart(book)}>
    Add to Cart 
    </button>
    </div>
    ))}
    
    {filteredBook.length==0 && <p>Book not found!</p>}
</div>
</div>
);
}

export default Book;