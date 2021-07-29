import './App.css';
import {Switch, Route, Redirect} from 'react-router-dom'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'

import Navbar from './Components/Navbar'
import {Home, About,Contact,Service} from './Components'
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Navbar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Contact}/>
          <Route exact path='/service' component={Service}/>
          <Redirect to='/'/>
        </Switch>
        <hr></hr>
        <Footer/>
    </>
  );
}

export default App;
