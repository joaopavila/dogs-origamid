import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Login from './components/login/Login';
import { UserStorage } from './context/UserContext';

function App() {
  return (
    <div>
      <Router>
        <UserStorage>
          <Header />
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </UserStorage>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
