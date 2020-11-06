import React from "react";
import {Route, BrowserRouter} from "react-router-dom"
import "./app.scss";
import {useDispatch} from "react-redux";
import Main from "./components/main/Main";

const App = () => {
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
    <div className="container">
      <Route path="/" component={Main} />
    </div>
    </BrowserRouter>
  );
}

export default App;
