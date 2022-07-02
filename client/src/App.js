import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Navbar from './components/general/Navbar';
import Footer from './components/general/Footer';
import Coaches from './components/Coaches';
import HomeBody from './components/services/Services';
import CoachProfile from './components/profile/Profile';
import NewProfile from './components/profile/NewProfile';
import Chat from './components/chat/Chat';
import Service from './components/servicePage/Service';
import Home from './components/Home.js';
import Blogs from './components/blog/blogs';
import Blog from './components/blog/Blog';

function App() {
  return (
    <Router>
      <div className="App" id="App">
        <Navbar />
        <Routes>
          <Route
            path="/loggedin"
            element={
              <Fragment>
                <HomeBody />
              </Fragment>
            }
          />
          <Route path="/" element={<Home />} />
          <Route
            path="/search"
            element={
              <Fragment>
                <HomeBody />
              </Fragment>
            }
          />
          <Route
            path="/coaches"
            element={
              <Fragment>
                <Coaches />
              </Fragment>
            }
          />
          <Route
            path="/profile"
            element={
              <Fragment>
                <CoachProfile />
              </Fragment>
            }
          />{' '}
          <Route
            path="/newprofile"
            element={
              <Fragment>
                <NewProfile />
              </Fragment>
            }
          />
          <Route
            path="/service"
            element={
              <Fragment>
                <Service />
              </Fragment>
            }
          />
          <Route
            path="/chat"
            element={
              <Fragment>
                <Chat />
              </Fragment>
            }
          />
          <Route
            path="/blogs"
            element={
              <Fragment>
                <Blogs />
              </Fragment>
            }
          />
          <Route
            path="/blog"
            element={
              <Fragment>
                <Blog />
              </Fragment>
            }
          />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
