import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import WelcomeComponent from './components/welcome-component/welcome-component';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/' exact component={WelcomeComponent}/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;