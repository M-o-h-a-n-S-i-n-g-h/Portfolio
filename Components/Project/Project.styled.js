import { Fonts } from "../../styles/Fonts.styled";
import styled from "styled-components";

export const ProjectStyle = styled.div`
  width: 95vw;
  margin: auto;

  .projects__container {
    width: 95%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    justify-content: center;
    gap: 17px;
    padding: 3em;

    .project__cards {
      padding: 20px;
      padding-top: 30px;
      background: linear-gradient(45deg, #b4a9a9, #d6c9c9);
      box-shadow: -1rem -5px 19px #4f4a4a, -5px 5px 50px #080707;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.2s;

      .project__name {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: ${Fonts.OpenSans};
        font-size: 1.5em;
        margin-bottom: 4%;
        color: black;
      }

      .project__description {
        /* padding: 0.7em; */
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: auto;
        font-family: ${Fonts.JetBrains};
        font-weight: 400;
        color: #484a47;
      }

      .details {
        width: 95%;
        margin: auto;
      }

      .project__image {
        width: 100%;
        margin: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 30px;

        & img {
          width: 90%;
          margin: auto;
        }
      }
    }
  }
`;
