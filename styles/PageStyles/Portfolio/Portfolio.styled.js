import styled from "styled-components";
import { Fonts, Colors } from "../../index";

export const PorfolioStyle = styled.div`
  width: 95%;
  margin: auto;
  height: auto;
  padding: 10px;

  @media (max-width: 768px) {
    padding-bottom: 2em;
  }

  .main__banner {
    width: 80%;
    margin: auto;
    margin-top: 4.5em;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    gap: 2em;
    justify-content: center;
    align-items: center;
    padding-bottom: 3%;

    @media (max-width: 768px) {
      margin-top: 2em;
    }

    .about__banner {
      width: 100%;
      margin: auto;
      font-size: calc(20px + 0.35vw);
      padding: 1em;
      color: ${Colors.toneColor};
      font-family: JetBrains Mono;
      font-weight: 500;
      border-radius: 34px;
      box-shadow: 5px -5px 4px #080808, -5px 5px 4px #202020;
    }

    .image__banner {
      width: 100%;
      margin: auto;
      display: grid;
      justify-content: center;
      align-items: center;

      .image {
        max-width: 50%;
        margin: auto;
        height: auto;
      }
    }
  }
`;
