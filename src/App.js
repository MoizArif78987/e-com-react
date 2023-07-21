import {Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/home';
import ProductPage from './components/productPage';
import Login from './components/Login';
import Signup from './components/Signup';
import Contact from './components/Contact';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={ProductPage} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/cart' component={Cart} />
      </Switch>
    </div>
  );
}

export default App;
