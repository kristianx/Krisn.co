import { BrowserRouter, Route, Switch } from "react-router-dom";
//Pages
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";
//Projects
import Rainer from "./projects/Rainer/rainer";
import Travelo from "./projects/Travelo/travelo";
import Analitika from "./projects/Analitika/analitika";
import Safebit from "./projects/Safebit/safebit";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Blog} path="/blog/" />
        <Route component={About} path="/About" />
        <Route component={ProjectPage} path="/project" />
        <Route component={Rainer} path="/rainer" />
        <Route component={Travelo} path="/travelo" />
        <Route component={Analitika} path="/analitika" />
        <Route component={Safebit} path="/safebit" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
