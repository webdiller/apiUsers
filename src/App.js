import './App.scss';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import About from './pages/about';
import Profile from './pages/profile';
import { GithubState } from './context/github/githubState';
function App() {
  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <div className="row">
              <Switch>
                <Route exact path="/"><Home /></Route>
                <Route exact path="/about"><About /></Route>
                <Route exact path="/profile/:name" component={Profile} />
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </GithubState>
  );
}

export default App;
