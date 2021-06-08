import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
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
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route component={Home} path="/" exact />
        <Route component={Blog} path="/blog/" />
        <Route component={About} path="/About" />
        <Route component={ProjectPage} path="/project" />
        <Route component={Rainer} path="/rainer" />
        <Route component={Travelo} path="/travelo" />
        <Route component={Analitika} path="/analitika" />
        <Route component={Safebit} path="/safebit" />
      </Switch>
    </AnimatePresence>
  );
}

export default App;
