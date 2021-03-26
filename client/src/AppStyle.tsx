import styled from "styled-components"

type AuthenticationType = {
  isAuthenticated: boolean
}

export const AppWrapper = styled.div<AuthenticationType>`
  position: relative;
  display: flex;
  flex-direction: ${(props: AuthenticationType) =>
    props.isAuthenticated ? "row" : "column"};

  height: 100vh;
  min-height: 800px;
  min-width: 1000px;
  width: 100vw;
  overflow: hidden;
`
