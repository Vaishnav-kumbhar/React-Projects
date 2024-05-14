import "./nav.css";
import Image from "../images/image";
import Images from "../images/image";

// image component
 export function Img() {
  return (
    <img
      src="https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=400"
      alt="nature"
    />
  );
}

// this is nav component
function Nav() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Service</li>
        </ul>
      </nav>
      <Images />
    </>
  );
}

export default Nav;
