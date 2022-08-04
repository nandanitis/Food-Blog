import "./header.css";

export default function Header() {
  return(
       <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">No Food No Life</span>
            <span className="headerTitleLg">Blog</span>
        </div>

        <img src="https://i.ibb.co/Qm4bswm/main.jpg" alt="" className="headerImg" />
  </div>
  );
}
