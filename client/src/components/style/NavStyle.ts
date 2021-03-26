import styled from "styled-components"

export const NavNotAuthenticated = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 80px;
  width: 100%;

  > * {
    margin-right: 15px;
    padding: 10px;
  }

  > button {
    border: none;
    background: transparent;
    cursor: pointer;
    border-bottom: 2px solid rgba(0, 0, 0.3);
  }
`

export const NavAuthenticated = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 15%;
  background: #30216e;
  color: white;

  .menu-element {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border-top: 1px solid white;
    cursor: pointer;

    &:hover {
      background: #3021ff;
    }

    > * {
      height: 100%;
      text-align: center;
      padding: 5px 10px;
      font-size: 1.1rem;
    }
  }
`
