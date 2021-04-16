import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Blog from './pages/Blog';
import Casestudies from './pages/Casestudies';

function App() {
  return (
    <BrowserRouter>
      <switch>
        <Route component={Home} path='/' exact />
        <Route component={Blog} path='/blog/'/>
        <Route component={Casestudies} path='/casestudies' />
      </switch>
    </BrowserRouter>
  );
}

export default App;
