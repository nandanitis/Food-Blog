import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import React, {useState, useEffect} from 'react';
import "./components/topbar/topbar.css";
import BlogDetails from "./pages/blogdetails/BlogDetails";
import ScrollToTop from "./scrolltop";
import  Contactus from "./pages/contactus/Contactus";
import { About } from "./pages/about/about";
// npx json-server --watch data/db.json --port 8000
// npm i react-iframe
// npm install cors --save

function App() {
    
  const[loading, setLoading] = useState(false); 
  const[name, setName] = useState('');
  const color="blue";

  useEffect( ()=>{
    setLoading(true)
    setName('wait')
    setTimeout( ()=> {
        setLoading(false)
        setName('App')
    },3000)

  },[])
  
  const user = true;

  return (
    <Router>
     <div className={name}>
   {
    loading ?
   <ClimbingBoxLoader color={color} loading={loading}  size={50} />
    : 
    
    
    <div className="app1">
    <ScrollToTop />
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        </Switch>
      

      <Switch>
        <Route path="/register">
         { user ? <Home />:<Register />}
        </Route>
      </Switch>
     

      <Switch>
        <Route path="/login">
        { user ? <Home />:<Login />}
        </Route>
      </Switch>

      <Switch>
        <Route path="/aboutus">
         <About />
        </Route>
      </Switch>

      <Switch>
        <Route path="/contact">
        <Contactus />
        </Route>
      </Switch>

      <Switch>
        <Route path="/write">
        { user ? <Write />:<Register />}
        </Route>
      </Switch>

     <Switch>
        <Route path="/settings">
        { user ? <Settings />:<Register />}
        </Route>
      </Switch>

     

      {/* <Switch>
        <Route path="/post?:postId">
          <Single />
        </Route>
      </Switch>  */}

      <Switch>
        <Route path="/blogs/:id">
          <BlogDetails />
        </Route>
      </Switch>

      
      </div>
   }
      </div>
    </Router>
  );
}
export default App;
