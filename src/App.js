import './styles/App.css'
import { BrowserRouter as Router,  Route , Switch } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './router/home/Home';
import Login from './router/login/Login';
import Product from "./router/product-wrapper/Product";
import SinglePage from './router/single-page/SinglePage';
import BattlePass from './router/battle_pass/BattlePass'
import VBucks from './components/v-bucks/VBucks';
import News from "./router/news/News"
import Cosplay from "./router/cosplay/Cosplay";
import Help from "./router/help/Help"

function App() {
  
  return (
    <div className="app">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product" component={Product} />
          <Route path="/product/:id" component={SinglePage}/>
          <Route path="/battle-pass" component={BattlePass} />
          <Route path="/login" component={Login} />
          <Route path="/cosplay" component={Cosplay} />
          <Route path="/help" component={Help} />
          <Route path="/vbucks" component={VBucks} />
          <Route path="/news" component={News} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
