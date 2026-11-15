import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar (){
return(
<nav className="navbar">
<h2 className="logo">Book📚</h2>
<div className="nav-links">
<link to = "/">Home</link>
<link to = "/Book">Book</link>
<link to = "/About">About</link>
<link to = "/Contact">Contact</link>
<link to = "/Cart">Cart🛒</link>
</div>
</nav>
);
}
export default Navbar;