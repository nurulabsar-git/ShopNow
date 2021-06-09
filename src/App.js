import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home/Home';
import Footer from './Components/Home/Footer/Footer';
import Admin from './Components/Admin/Admin/Admin';
import Header from './Components/Home/Header/Header';
import CheckOut from './Components/CheckOut/CheckOut';
import Orders from './Components/Orders/Orders';
function App() {
  return (
    <div className="App">
     <Router>
       <Header></Header>
       <Switch>
       <Route path="/admin">
           <Admin></Admin>
         </Route>
         <Route path="/product/:paramId">
           <CheckOut></CheckOut>
         </Route>
         <Route path="/order">
           <Orders></Orders>
         </Route>
         <Route exact path="/">
           <Home></Home>
           <Footer></Footer>
         </Route>
       </Switch>

     </Router>
    
    </div>
  );
}

export default App;
