import "./App.scss";
import Index from "./components/Admin/Index";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import UserIndex from "./components/User/Home/UserIndex";
import AboutIndex from "./components/User/AboutUs/index";
import Login from './components/User/Login/Login';
function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/admin" component={Index} />
          <Route path="/about" component={AboutIndex} />
          <Route path="/login" component={Login} />
          <Route path="/" component={UserIndex} />
          
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
