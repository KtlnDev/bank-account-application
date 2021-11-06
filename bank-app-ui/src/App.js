import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LoginPage from './components/login-page/login-page';
import RegisterPage from './components/register-page/register-page';
import WelcomeComponent from './components/welcome-component/welcome-component';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={WelcomeComponent}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/register' component={RegisterPage}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;