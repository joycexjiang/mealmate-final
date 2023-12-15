import React from "react";
import "./App.css";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Settings from "./pages/Settings";
import Header from "./components/Header";
import useToken from "./components/useToken";
import AddFriends from "./pages/AddFriends";

function App() {
  const { token, removeToken, setToken } = useToken();

  return (
    <BrowserRouter>
      <div className="App">
        <Header token={removeToken} />
        <Routes>
          <Route
            exact
            path="/signup"
            element={<signup setToken={setToken} />}
          ></Route>
        </Routes>
        {!token &&
        token !== "" &&
        window.location.pathname !== "/signup" &&
        token !== undefined ? (
          <Login setToken={setToken} />
        ) : (
          <>
            <Routes>
              <Route
                exact
                path="/signup"
                element={<Signup token={token} setToken={setToken} />}
              ></Route>
              <Route
                exact
                path="/"
                element={<Home token={token} setToken={setToken} />}
              ></Route>
              <Route
                exact
                path="/settings"
                element={<Settings token={token} setToken={setToken} />}
              ></Route>
              <Route exact path="/addFriends" element={<AddFriends />} />
            </Routes>
          </>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
