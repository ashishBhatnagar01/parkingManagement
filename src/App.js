
import LoginForm from './components/LoginForm/LoginForm';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import RegistrationForm from './components/Register/RegistrationForm';
import NavBar from './components/HomePage/NavBar';
import HomeSlider from "./components/HomePage/Content"
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
        <Route exact path="/">
          <NavBar/>
          <HomeSlider/>
        </Route>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
