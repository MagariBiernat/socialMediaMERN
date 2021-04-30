import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Redirect } from "react-router-dom"
import { loginUser } from "../redux/actions/authActions"
import { RootState } from "../redux/reducers/rootReducer"

const initialFormValue = {
  email: "test1234@gmail.com",
  password: "test1234",
}

function Login() {
  const [formValues, setFormValues] = useState(initialFormValue)
  const errors = useSelector((state: RootState) => state.errors)
  const authenticated = useSelector(
    (state: RootState) => state.auth.isAuthenticated
  )

  const dispatch = useDispatch()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault()

    dispatch(loginUser(formValues))

    if (authenticated) {
      return <Redirect to="/app" />
    }
  }

  const InputClassNames = "bg-purple-white shadow rounded border-0 p-3 mb-5"
  const SpanErrorClassNames = "text-sm my-5 text-red-500"

  return (
    <div className="flex flex-col w-1/2 justify-center items-center m-auto">
      <h1 className="text-center mt-20 text-5xl">Login</h1>
      <form
        className="flex flex-col min-w-200 mt-20 p-10  bg-gray-100"
        onSubmit={handleSubmitForm}
      >
        {errors?.wrongCredentials && (
          <span className={SpanErrorClassNames}>
            Email or password incorrect
          </span>
        )}
        <input
          className={InputClassNames}
          required
          name="email"
          type="text"
          placeholder="Email ..."
          onChange={handleChange}
        />
        {errors?.email && (
          <span className={SpanErrorClassNames}>Email is invalid</span>
        )}
        <input
          className={InputClassNames}
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password ..."
        />
        {errors?.password && (
          <span className={SpanErrorClassNames}>
            You need to fill your password
          </span>
        )}
        <input
          className=" py-1 text-lg text-white tracking-wider mt-3 rounded-md shadow-xl cursor-pointer bg-blue-400 hover:bg-blue-500"
          type="submit"
          value="Log in"
        />
      </form>
    </div>
  )
}

export default Login
