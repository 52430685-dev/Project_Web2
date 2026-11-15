import {Link} from "react-router-dom";
import "./Navbar.css";
function Navbar (){
return(
<nav className="navbar">
<h2 className="logo">Book📚</h2>
<div className="nav-links">
<Link to = "/">Home</Link>
<   Link to = "/Book">Book</Link>
<   Link to = "/About">About</Link>
<   Link to = "/Contact">Contact</Link>
<   Link to = "/Cart">Cart🛒</Link>
</div>
</nav>
);
}
export default Navbar;