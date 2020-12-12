import styled from "styled-components";

export const ButtonStyle = styled.div`
  color: white;
  transition: all 0.5s;

  .button {
    display: block;
    text-align: center;
    max-width: 40%;
    margin: auto;
    border: none;
    margin-top: 1%;
    color: white;
    font-weight: 700;
    font-family: JetBrains mono;
    padding: 1.1em;
    box-shadow: inset 5px -5px 4px #080808, inset -5px 5px 4px #202020;
    border-radius: 10px;

    @media (max-width: 768px) {
      margin-top: 4%;
    }

    &:hover {
      background: white;
      cursor: pointer;
      color: black;
    }
  }
`;
