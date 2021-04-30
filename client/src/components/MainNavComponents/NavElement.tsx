import React from "react"
import { IconType } from "react-icons"
import { Link, useHistory } from "react-router-dom"

interface IProps {
  Text: string
  Icon: IconType
  Path: string
  Match: string
}

function NavElement({ Text, Icon, Path, Match }: IProps) {
  const history = useHistory()
  const IconComponent = Icon

  return (
    <div
      className={
        Match === Path
          ? "flex flex-row items-center p-2 align-center mainNavChildsElements hover:bg-gray-300 cursor-pointer font-bold text-blue-700"
          : "flex flex-row items-center p-2 align-center mainNavChildsElements hover:bg-gray-300 cursor-pointer font-bold"
      }
      onClick={() => history.push(Path)}
    >
      <IconComponent className="w-1/4 h-1/2" />
      <p>{Text}</p>
    </div>
  )
}

export default NavElement
