import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { registerUser } from "../redux/actions/authActions"
import { RootState } from "../redux/reducers/rootReducer"

const initialFormValue = {
  firstName: "",
  secondName: "",
  lastName: "",
  nickname: "",
  gender: "Male",
  email: "",
  password: "",
  password2: "",
}

function Register() {
  const [formValues, setFormValues] = useState(initialFormValue)
  const errors = useSelector((state: RootState) => state.errors)
  // TODO: register success -> redirect to login
  // const registeredSucceeded = useSelector(
  //   (state: RootState) => state.auth.registered
  // )
  const dispatch = useDispatch()
  const handleFormData = async (event: React.FormEvent) => {
    event.preventDefault()
    dispatch(registerUser(formValues))
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const InputClassNames = "bg-purple-white shadow rounded border-0 p-3 mb-5"
  const SpanErrorClassNames = "text-sm my-5 text-red-500"

  return (
    <div className="flex flex-col w-1/2 justify-center items-center m-auto">
      <h1 className="text-center mt-20 text-5xl ">Sign Up</h1>
      <form
        className="flex flex-col min-w-200 mt-20 p-10  bg-gray-100"
        onSubmit={handleFormData}
      >
        <input
          className={InputClassNames}
          required
          name="firstName"
          type="text"
          placeholder="First name ..."
          onChange={handleChange}
        />
        {errors.firstName && (
          <span className={SpanErrorClassNames}>
            You need to fill your first name
          </span>
        )}
        <input
          className={InputClassNames}
          name="secondName"
          type="text"
          onChange={handleChange}
          placeholder="Second name ..."
        />
        <input
          className={InputClassNames}
          name="lastName"
          required
          type="text"
          placeholder="Last name ..."
          onChange={handleChange}
        />
        {errors.lastName && (
          <span className={SpanErrorClassNames}>
            You need to fill your last name
          </span>
        )}
        <input
          className={InputClassNames}
          name="nickname"
          type="text"
          placeholder="Nickname ..."
          onChange={handleChange}
        />
        <select
          className={InputClassNames}
          onChange={handleChange}
          required
          name="gender"
          placeholder="Gender ..."
          id=""
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Apache Helicopter">Apache helicopter</option>
        </select>
        <input
          className={InputClassNames}
          required
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email ..."
        />
        {errors.email && (
          <span className={SpanErrorClassNames}>
            You need to fill your email
          </span>
        )}
        <input
          className={InputClassNames}
          required
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password ..."
        />
        {errors.password && (
          <span className={SpanErrorClassNames}>
            You need to fill your password
          </span>
        )}
        <input
          className={InputClassNames}
          required
          onChange={handleChange}
          name="password2"
          type="password"
          placeholder="Confirm password ..."
        />
        {errors.password2 && (
          <span className={SpanErrorClassNames}>
            You need to confirm your password
          </span>
        )}
        <input
          className=" py-1 text-lg text-white tracking-wider mt-3 rounded-md shadow-xl cursor-pointer bg-blue-400 hover:bg-blue-500"
          type="submit"
          value="Sign up"
        />
      </form>
    </div>
  )
}

export default Register
