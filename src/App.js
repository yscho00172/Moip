import React from 'react';
import logo from './캡처.JPG';
import { Routes, Route, Link } from 'react-router-dom';
import RandomSearch from './RandomSearch';
import FriendSearch from './FriendSearch';
import ConditionSearch from './ConditionSearch';
import Closet from './Closet';
import Account from './Account';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="header">
        <img src={logo} alt="My Logo" />
      </div>
      <div className="menu">
        <div className="section">
          <Link to="/randomsearch"><button>랜덤 검색</button></Link>
          <FriendSearch />
          <ConditionSearch />
        </div>
        <div className="section">
          <Link to="/closet"><button>옷장 관리</button></Link>
        </div>
        <div className="section">
          <Link to="/account"><button>내 정보 관리</button></Link>
        </div>
      </div>
      <Routes>
        <Route path="/randomsearch" element={<RandomSearch />} />
        <Route path="/friendsearch" element={<FriendSearch />} />
        <Route path="/conditionsearch" element={<ConditionSearch />} />
        <Route path="/closet" element={<Closet />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App;
