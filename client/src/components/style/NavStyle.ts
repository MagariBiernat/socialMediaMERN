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
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 15%;
  max-width: 150px;
  background: #30286e;
  color: white;
  box-shadow: 1px 2px 7px 2px rgba(0, 0, 0, 0.4);

  > img {
    width: 100%;
  }

  > div {
    width: 100%;
  }

  .menu-element {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40px;
    cursor: pointer;

    &:hover {
      background: #3021ff;
    }

    > * {
      line-height: 40px;
      height: 100%;
      text-align: center;
      padding: 2px 6px;
      font-size: 1rem;
    }

    > svg {
      font-size: 1.2rem;
    }

    a {
      text-decoration: none;
      color: inherit;
      letter-spacing: 2px;
    }
  }
`
