import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../redux/reducers/rootReducer"
import { Switch, Route } from "react-router-dom"
import Profile from "./MainViews/Profile"
import { getUserData } from "../redux/actions/userActions"
import MainHome from "./MainViews/MainHome"
import MainNav from "../components/MainNav"
import Explore from "./MainViews/Explore"
import People from "./MainViews/People"
import Notifications from "./MainViews/Notifications"
import Messages from "./MainViews/Messages"

function Main() {
  const { email } = useSelector((state: RootState) => state.auth.user)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserData(email))
  }, [])

  return (
    <div className="bg-gray-300 h-100 overflow-y-hidden overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row justify-evenly m-auto max-w-screen-xl py-10 overflow-hidden">
        <Switch>
          <div className="w-full lg:w-3/4">
            <Route path="/app" exact component={MainHome} />
            <Route path="/app/profile" exact component={Profile} />
            <Route path="/app/explore" exact component={Explore} />
            <Route path="/app/people" exact component={People} />
            <Route path="/app/notifications" exact component={Notifications} />
            <Route path="/app/messages" exact component={Messages} />
          </div>
        </Switch>
        <div className="w-full lg:w-1/5 h-full flex justify-center mb-10 lg:mb-0 overflow-hidden">
          <MainNav />
        </div>
      </div>
    </div>
  )
}

export default Main
