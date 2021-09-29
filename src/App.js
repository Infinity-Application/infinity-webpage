import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './component/Main.js'
import Footer from './component/Footer.js'
import './App.css';
import Navbar from './component/Navbar';
import {
  BrowserRouter,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Contact from './pages/Contact';
import Homepage from './pages/Homepage';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Switch>
            <Route exact path="/" component={Homepage} />

            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
