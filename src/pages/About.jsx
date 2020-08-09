import React from 'react';
import './about.scss';
import useAuth from '../hooks/useAuth';

export default function About() {
  useAuth();
  return (
    <div className="about-body">
      <h1>소개</h1>
      <p>개발 중...</p>
    </div>
  );
}
