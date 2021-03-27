import axios from "axios"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/reducers/rootReducer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./MainViews/Profile"
import { getUserData } from "../redux/actions/userActions"
import MainHome from "./MainViews/MainHome"

function Main() {
  const { email } = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserData(email))
  }, [])

  return (
    <Switch>
      <Route path="/app" exact component={MainHome} />
      <Route path="/app/profile" exact component={Profile} />
    </Switch>
  )
}

export default Main
