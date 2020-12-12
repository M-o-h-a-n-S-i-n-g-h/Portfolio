import styled from "styled-components";
import { Fonts, Colors } from "../../styles/index";

export const BannerStyle = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 2.5%;

  @media only screen and (max-width: 768px) {
    margin-bottom: 7%;
  }

  .banner__text {
    width: 60%;
    padding: 0.3em;
    margin: auto;
    box-shadow: 5px -5px 4px #080808, -5px 5px 4px #202020;
    border-radius: 20px;
    text-align: center;
    color: ${Colors.toneColor};
    font-size: calc(2em + 0.35vw);
    font-family: ${Fonts.RobotoMono};
    font-weight: 800;

    @media only screen and (max-width: 768px) {
      font-size: calc(1.5em + 0.35vw);
      line-height: 1.5em;
      width: 100%;
    }
  }
`;
