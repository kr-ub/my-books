import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

export default function Add() {
  useAuth();
  return (
    <div>
      <h1>Add</h1>
      <p>
        <Link to="/">홈으로 가기</Link>
      </p>
    </div>
  );
}
