import "./sidebar.css";
export default function Sidebar() {
  return (
    <div className="sidebar">
    <div className="cover">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me </span>
        <img
          className="picture"
          src="https://i.ibb.co/BVpfbgD/sidebar.jpg"
          alt=""
        />
        <p>
        My name is Nakul Siddarth. I am  from Ibiza.
        I have done my BSc Food Sciences from the University of Ibiza.
          In my family,we have 6 members including me. I have 3 younger sisters
        </p>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Categories </span>
        <ul className="sidebarList">
          <li className="sidebarlistItem">Hacking</li>
          <li className="sidebarlistItem">Music</li>
          <li className="sidebarlistItem">Treking</li>
          <li className="sidebarlistItem">Cinema</li>
          <li className="sidebarlistItem">Tech</li>
        </ul>
      </div>

      <div className="sidebarItem">
        <span className="sidebarTitle">Follow Us</span>
      
      <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square"></i>
        <a href="https://mobile.twitter.com/nandan_hegde77">
          <i className="sidebarIcon fab fa-twitter-square"></i>
        </a>
        <a href="https://www.instagram.com/nandan._.hegde/">
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </a>
        <i className="sidebarIcon fab fa-pinterest-square"></i>
      </div>
      </div>

      <br/>
      <br/>
      <br/>
      <br/>


      </div>
    </div>
  );
}
