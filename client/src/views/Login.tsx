import axios from "axios"
import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { loginUser } from "../redux/actions/authActions"
import { RootState } from "../redux/reducers/rootReducer"

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > * {
    width: 200px;
    margin-bottom: 15px;
    padding: 5px;
    box-shadow: 1px 2px 1px 2px rgba(0, 0, 0, 0.5);
  }
`

const initialFormValue = {
  email: "",
  password: "",
}

function Login() {
  const [formValues, setFormValues] = useState(initialFormValue)
  const errors = useSelector((state: RootState) => state.errors)
  const dispatch = useDispatch()

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmitForm = async (event: React.FormEvent) => {
    event.preventDefault()

    dispatch(loginUser(formValues))
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Login</h1>
      <Form onSubmit={handleSubmitForm}>
        <input
          required
          name="email"
          type="text"
          placeholder="Email ..."
          onChange={handleChange}
        />
        <input
          name="password"
          type="password"
          onChange={handleChange}
          placeholder="Password ..."
        />
        <input type="submit" value="Log in" />
      </Form>
    </div>
  )
}

export default Login
