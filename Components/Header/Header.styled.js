import styled from "styled-components";
import { Fonts } from "../../styles/index";

export const HeaderStyles = styled.div`
  padding-bottom: 0.5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #d5dcf9;

  .logo {
    cursor: pointer;
    font-size: 2em;
    padding-left: 20px;
    font-family: ${Fonts.logoFont};

    @media (max-width: 768px) {
      font-size: 1.5em;
    }
  }

  .navbar {
    padding-right: 20px;
    li {
      transition: all ease-in-out 0.2s;
      list-style: none;
      padding: 1em;
      justify-content: center;
      align-items: center;
      font-family: ${Fonts.navigationFont};
      font-size: 1.1em;
      margin: 0 0.3em;
      border-radius: 10px;

      &:hover {
        cursor: pointer;
        background: purple;
        color: white;
      }
    }
  }
`;
