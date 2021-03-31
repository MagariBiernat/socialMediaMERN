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
import { withRouter } from "react-router"

function MainNav({ match }: any) {
  const { firstName, lastName } = useSelector((state: RootState) => state.user)
  const { path } = match
  console.log(path)

  const childClassNames =
    "flex flex-row items-center p-2 align-center mainNavChildsElements hover:bg-gray-300 cursor-pointer font-bold"
  const childClassNamesActive = childClassNames + " text-blue-700"
  const iconClassNames = "w-1/4 h-1/2"

  return (
    <div
      style={{ maxWidth: "200px", maxHeight: "340px" }}
      className="flex flex-col flex-grow bg-white rounded-xl overflow-hidden shadow-2xl "
    >
      <div className={childClassNames + " mainNavChildsProfile"}>
        <ProfileIcon className={iconClassNames} />
        <p className="">
          {firstName} {lastName}
        </p>
      </div>
      <div
        className={path === "/app" ? childClassNamesActive : childClassNames}
      >
        <HomeIcon className={iconClassNames} /> <p>Home</p>
      </div>
      <div
        className={
          path === "/app/explore" ? childClassNamesActive : childClassNames
        }
      >
        <ExploreIcon className={iconClassNames} /> <p>Explore</p>
      </div>
      <div
        className={
          path === "/app/people" ? childClassNamesActive : childClassNames
        }
      >
        <PeopleIcon className={iconClassNames} /> <p>People</p>
      </div>
      <div
        className={
          path === "/app/notifications"
            ? childClassNamesActive
            : childClassNames
        }
      >
        <NotifIcon className={iconClassNames} /> <p>Notifications</p>
      </div>
      <div
        className={
          path === "/app/messages" ? childClassNamesActive : childClassNames
        }
      >
        <MailIcon className={iconClassNames} /> <p>Messages</p>{" "}
      </div>
    </div>
  )
}

export default withRouter(MainNav)
