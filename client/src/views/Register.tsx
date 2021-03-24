import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import styled from "styled-components"
import { registerUser } from "../redux/actions/authActions"
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
  // const errors = useSelector((state: RootState) => state.errors)
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
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      <Form onSubmit={handleFormData}>
        <input
          required
          name="firstName"
          type="text"
          placeholder="First name ..."
          onChange={handleChange}
        />
        <input
          name="secondName"
          type="text"
          onChange={handleChange}
          placeholder="Second name ..."
        />
        <input
          name="lastName"
          required
          type="text"
          placeholder="Last name ..."
          onChange={handleChange}
        />
        <select
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
          required
          onChange={handleChange}
          name="email"
          type="text"
          placeholder="Email ..."
        />
        <input
          required
          onChange={handleChange}
          name="password"
          type="password"
          placeholder="Password ..."
        />
        <input
          required
          onChange={handleChange}
          name="password2"
          type="password"
          placeholder="Confirm password ..."
        />
        <input type="submit" value="Sign up" />
      </Form>
    </div>
  )
}

export default Register
