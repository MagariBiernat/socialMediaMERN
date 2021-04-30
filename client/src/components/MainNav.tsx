import React from "react"
import { CgProfile as ProfileIcon } from "react-icons/cg"
import { useSelector } from "react-redux"
import { RootState } from "../redux/reducers/rootReducer"

import { AiOutlineHome as HomeIcon } from "react-icons/ai"
import { GiBinoculars as ExploreIcon } from "react-icons/gi"
import {
  IoPeopleOutline as PeopleIcon,
  IoMailOpenOutline as MailIcon,
} from "react-icons/io5"
import { IoIosNotificationsOutline as NotifIcon } from "react-icons/io"
import NavElement from "./MainNavComponents/NavElement"
import { useHistory, useLocation } from "react-router-dom"

function MainNav() {
  const { firstName, lastName } = useSelector((state: RootState) => state.user)
  const location = useLocation()
  const history = useHistory()

  return (
    <div className="flex flex-col flex-grow bg-white rounded-xl overflow-hidden shadow-2xl minWidth-200 lg:maxWidth-350 lg:maxHeight-300">
      <div
        className="flex flex-row items-center p-2 align-center mainNavChildsElements hover:bg-gray-300 cursor-pointer font-bold mainNavChildsProfile"
        onClick={() => history.push("/app/profile")}
      >
        <ProfileIcon className="w-1/4 h-1/2" />
        <p className="">
          {firstName} {lastName}
        </p>
      </div>
      <NavElement
        Text="Home"
        Icon={HomeIcon}
        Path="/app"
        Match={location.pathname}
      />
      <NavElement
        Text="Explore"
        Icon={ExploreIcon}
        Path="/app/explore"
        Match={location.pathname}
      />
      <NavElement
        Text="People"
        Icon={PeopleIcon}
        Path="/app/peolpe"
        Match={location.pathname}
      />
      <NavElement
        Text="Notifications"
        Icon={NotifIcon}
        Path="/app/notifications"
        Match={location.pathname}
      />
      <NavElement
        Text="Messages"
        Icon={MailIcon}
        Path="/app/messages"
        Match={location.pathname}
      />
    </div>
  )
}

export default MainNav
