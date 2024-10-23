import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import auth from "./auth"

//regular ui components and general components
import Login from "./components/Login"
import Callback from "./components/Callback"


function App() {
  //setting up the config
  const zitadel = auth

  function login() {
    zitadel.authorize()
  }

  function signout() {
    zitadel.signout()
  }

  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    zitadel.userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true)
      } else {
        setAuthenticated(false)
      }
    })
  }, [zitadel])

  return (
    <div className="w-full flex justify-center items-center flex-col">
      {/* Title for the auth page */}
      <header className="w-full flex flex-col justify-center items-center text-center">
        <h1 className="auth-title">Welcome to Treenq</h1>
      </header>
      {/* The login card for the auth page */}
      <div className=" flex justify-center items-end w-96 h-[456px] rounded-md ">
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={<Login authenticated={authenticated} handleLogin={login} />}
            />
            <Route
              path="/callback"
              element={
                <Callback
                  authenticated={authenticated}
                  setAuth={setAuthenticated}
                  handleLogout={signout}
                  userManager={zitadel.userManager}
                />
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
};

export default App
