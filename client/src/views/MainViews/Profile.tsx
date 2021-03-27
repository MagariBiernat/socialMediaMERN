import React from "react"
import { useSelector } from "react-redux"
import { RootState } from "../../redux/reducers/rootReducer"

function Profile() {
  const {
    firstName,
    secondName,
    lastName,
    nickname,
    gender,
    email,
    createdAt,
  } = useSelector((state: RootState) => state.user)
  console.log(
    firstName,
    secondName,
    lastName,
    nickname,
    gender,
    email,
    createdAt
  )
  return (
    <div>
      <h2>This is profile</h2>
      <div>
        <h6>Welcome, {firstName}</h6>
      </div>
    </div>
  )
}

export default Profile
