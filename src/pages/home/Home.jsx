import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./home.css";

export default function Home() {

  
//   setTimeout(function(){
//     if(global.shop===1)
//     {
//       window.location.href = '/login';
//       global.shop=0;
//       console.log('hi');
//     }
//     console.log('hi');
   
//  }, 5000);
  return (
    <>
    
      <Header />
      <div className="home">
        <Posts/>
        <Sidebar />
      </div>
    </>
  );
}
