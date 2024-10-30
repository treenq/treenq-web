import { useState, useEffect } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import config from "./auth"

//regular ui components and general components
import Login from "./components/Login"
import Callback from "./components/Callback"

import { UserManager, WebStorageStateStore } from "oidc-client-ts";


function App() {
  const userManager = new UserManager({
    userStore: new WebStorageStateStore({store: window.localStorage}),
    ...config,
  })

  function login() {
    userManager.signinRedirect()
  }

  function signout() {
    userManager.signoutRedirect()
  }

  const [authenticated, setAuthenticated] = useState<boolean | null>(null)

  useEffect(() => {
    userManager.getUser().then((user) => {
      if (user) {
        setAuthenticated(true)
      } else {
        setAuthenticated(false)
      }
    })
  }, [])

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
                  userManager={userManager}
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
