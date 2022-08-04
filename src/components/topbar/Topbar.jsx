import "./topbar.css";
import { Link } from "react-router-dom";

export default function Topbar() {
  const user=false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <a href="https://mobile.twitter.com/nandan_hegde77" target="_blank" >
          <i className="topIcon fab fa-twitter-square"></i>
        </a>
        <a href="https://www.instagram.com/nandan._.hegde/" target="_blank" >
          <i className="topIcon fab fa-instagram-square"></i>
        </a>
        <i className="topIcon fab fa-pinterest-square"></i>
      </div>

      <div className="topCenter">
        <ul className="topList ">
          <li className="topListItem lead">
            <Link to="/" className="link">HOME</Link></li>
          <li className="topListItem lead"> <Link to="/aboutus" className="link">ABOUT</Link> </li>
          <li className="topListItem lead"> <Link to="/contact" className="link">CONTACT</Link> </li>
          <li className="topListItem lead"> <Link to="/write" className="link">WRITE</Link> </li>
         
          <li className="topListItem lead">{user && "LOGOUT"}</li>
        </ul>
      </div>

      <div className="topRight">
      {
        user ? (
          <img
          className="topImg"
          src="https://m.media-amazon.com/images/I/41NekHFSrML._AC_UX342_.jpg"
          alt=""
        />

        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">LOGIN</Link>
            </li>          
          </ul>
        )
      }
      
       

        <div className="search-box">
          <input
            className="search-txt"
            type="text"
            name="search"
            placeholder="Type to Search"
          />
          <a className="search-btn" href="#">
          <i class="fas fa-search"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
