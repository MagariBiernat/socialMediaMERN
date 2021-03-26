import React from "react"
import { Redirect, Route, RouteComponentProps } from "react-router-dom"

interface IProps {
  Component: React.FC<RouteComponentProps>
  path: string
  isAuthenticated: boolean
  exact?: boolean
  authVariant: boolean // true if its route for /app, false if its for login or register view
}

function AuthRoute({
  Component,
  isAuthenticated,
  exact,
  path,
  authVariant,
}: IProps) {
  return authVariant ? (
    <Route
      path={path}
      render={(props: RouteComponentProps) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  ) : (
    <Route
      path={path}
      exact={exact}
      render={(props: RouteComponentProps) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/app" }} />
        )
      }
    />
  )
}

export default AuthRoute
