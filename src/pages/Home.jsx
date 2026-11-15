import { Link } from "react-router-dom";


function Home  () {
  return (
    <div className="home">
    <h1>Welcome to Book</h1>
    <p>  BookHub is an online bookstore where you
        can find and buy your favorite books
    </p>
    <Link to = "/book">
    <button>View Books</button>
    </Link>
    <h2>Our Features</h2>
    <div className="features">
<div className="box">
<h3>📚 Many Books</h3>
<p>You can choose and buy books easily</p>
</div>

    <div className="box">
    <h3>⭐ Good Quality</h3>
    <p>Find your favorite books with us</p>
    </div>
    </div>
    </div>
  );
}

export default Home;