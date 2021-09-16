import { Switch } from "react-router-dom";
import Route from "./route";
import Landpage from "../Pages/Landpage";
import Register from "../Pages/Register";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import Groups from "../Pages/Groups";
import AboutUs from "../Pages/AboutUs";
import MyMovies from "../Pages/MyMovies";
import Aboutmovie from "../Pages/Aboutmovie";
import Movies from "../Pages/Movies";
import { Profile } from "../Pages/Profile";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Landpage} />
      <Route path="/aboutus" component={AboutUs} />
      <Route path="/signup" component={Register} />
      <Route path="/login" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/groups" component={Groups} />
      <Route path="/movies" component={Movies} />
      <Route path="/profile" component={Profile} />
      <Route path="/mymovies" component={MyMovies} />
      <Route path="/aboutmovie" component={Aboutmovie} />
    </Switch>
  );
};

export default Routes;
