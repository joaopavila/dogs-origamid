import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/login" component={Login}></Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
