import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Gallery from "./components/Gallery";
import Header from "./components/Header";
import Login from "./components/Login";
import { useState } from 'react'

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  console.log(user)

  const signOut = () => {
    localStorage.removeItem('user')
    setUser(null)
  }

  return (
    <Router>
      <Routes>
        {
          !user ? (
            <Route path='/' element={<Login setUser={setUser} signOut={signOut} />} />
          ) : (
            <Route path='/'
              element={
                <>
                  <Header user={user} signOut={signOut} />
                  <Gallery />
                </>
              } />
          )
        }
      </Routes>
    </Router>

  );
}

export default App;
