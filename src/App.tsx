import { useState, useEffect } from 'react'
import { createZitadelAuth } from '@zitadel/react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Login from "./components/Login"
import Callback from "./components/Callback"
import auth from "./auth"

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
    <div className="w-full">
    <header className="w-full flex flex-col justify-center items-center text-center">
      <h1 className="text-[#eee] text-[50px] mb-12">Welcome to treenq</h1>

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Login authenticated={authenticated} handleLogin={login} />
            }
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
    </header>
  </div>
  )
}

export default App
