
import LoginForm from './components/LoginForm/LoginForm';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import RegistrationForm from './components/RegistrationForm';
function App() {
  return (
    <Router>
      <div>
      <Switch>
        <Route exact path="/login">
          <LoginForm/>
        </Route>
        <Route exact path="/register">
          <RegistrationForm/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
