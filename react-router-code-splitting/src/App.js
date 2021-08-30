import React from 'react';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';

const LazyProfile = React.lazy(() => import('./components/Profile'));
const LazyDashboard = React.lazy(() => import('./components/Dashboard'));

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/profile'>Profile</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
          </ul>
          <hr />
          <React.Suspense fallback='Loading'>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/profile'>
              <LazyProfile />
            </Route>
            <Route exact path='/dashboard'>
              <LazyDashboard />
            </Route>
          </React.Suspense>
        </div>
      </Router>

    </div>
  );
}

export default App;
