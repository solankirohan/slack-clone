import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from './components/Header';
import styled from 'styled-components'
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './firebase';
import Login from './components/Login';
import Spinner from 'react-spinkit';

function App() {

  const [user, loading] = useAuthState(auth);

  if (loading) {
    return (
      <LoadingContainer>
        <Spinner name="ball-spin-fade-loader" color="purple" fadeIn="none" />
      </LoadingContainer>
    )
  }
  return (
    <div className="app">

      <Router>
        {!user ? (<Login />) :
          (<>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>

                <Route path="/" exact element={<Chat />} />

              </Routes>
            </AppBody>
          </>)}
      </Router>
    </div >
  );
}

export default App;

const AppBody = styled.div`
display: flex;
height: 100vh;

`;

const LoadingContainer = styled.div`
display:flex;
align-items: center;
justify-content: center;
height: 100vh`;
