import React from 'react';
import BookListContainer from '../containers/BookListContainer';
import useAuth from '../hooks/useAuth';
import './home.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navigation from '../components/Navigation';
import About from './About';

function Home() {
  useAuth();
  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/" exact component={BookListContainer} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default Home;
