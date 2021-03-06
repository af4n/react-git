import React from 'react'
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom'
import './app.scss'
import { useDispatch, useSelector } from 'react-redux'
import Main from './main/Main'
import Card from './card/Card'
import Error from "./error/Error";

const App = () => {
  const dispatch = useDispatch()

  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/card/:username/:reponame" component={Card} />
          <Route exact path="/error" component={Error} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
