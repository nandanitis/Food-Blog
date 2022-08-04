import "./header.css";

export default function Header() {
  return(
       <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">No Food No Life</span>
            <span className="headerTitleLg">Blog</span>
        </div>

        <img src="./images/main.jpg" alt="" className="headerImg" />
  </div>
  );
}
