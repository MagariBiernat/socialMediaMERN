import axios from "axios"
import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/reducers/rootReducer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./MainViews/Profile"
import { getUserData } from "../redux/actions/userActions"
import MainHome from "./MainViews/MainHome"
import MainNav from "../components/MainNav"

function Main() {
  const { email } = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUserData(email))
  }, [])

  return (
    <div
      className="flex flex-row h-full justify-evenly pt-10"
      style={{ backgroundColor: "#dcdcdc" }}
    >
      <MainNav />
      <Switch>
        <Route path="/app" exact component={MainHome} />
        <Route path="/app/profile" exact component={Profile} />
      </Switch>
      <div> explore people here</div>
    </div>
  )
}

export default Main
