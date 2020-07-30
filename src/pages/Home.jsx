import React from 'react';
import withAuth from '../hocs/withAuth';
import './home.scss';

function Home() {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
}

export default withAuth(Home, true);
