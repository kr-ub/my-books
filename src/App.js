import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';

// pages
import Home from './pages/Home';
import Signin from './pages/Signin';
import NotFound from './pages/NotFound';
import FatalError from './pages/FatalError';
import PersonContext from './context/PersonContext';
import { ConnectedRouter } from 'connected-react-router';
import { history } from './redux/create';
import Add from './pages/Add';
import About from './pages/About';

const persons = [
  { id: 0, name: 'Mark', age: 38 },
  { id: 1, name: 'Hanna', age: 27 },
];

export default function App() {
  return (
    <ErrorBoundary FallbackComponent={FatalError}>
      <PersonContext.Provider value={persons}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route path="/add" component={Add} />
            <Route path="/about" component={About} />
            <Route path="/signin" component={Signin} />
            <Route path="/" exact component={Home} />
            <Route component={NotFound} />
          </Switch>
        </ConnectedRouter>
      </PersonContext.Provider>
    </ErrorBoundary>
  );
}
