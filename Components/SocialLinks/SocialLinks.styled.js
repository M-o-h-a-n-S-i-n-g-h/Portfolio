import styled from "styled-components";

export const LinksStyle = styled.div`
  width: 55%;
  margin: auto;
  border-radius: 25px;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (m-width: 768px) {
    width: 75%;
    margin: auto;
  }

  .links {
    border-radius: 35px;
    /* display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
    gap: 20px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 60%;
    margin: auto;
    font-size: 10px;

    @media only screen and (max-width: 768px) {
      width: 100%;
      margin: auto;
    }

    h2 {
      color: white;
      font-size: 2em;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }

    > a {
      box-shadow: 5px 5px 8px #0a0a0a, -5px -5px 10px #262a2b;
      width: 75px;
      height: 80px;
      padding: 1.2em;
      border-radius: 15px;

      &:nth-child(2) {
        img {
          width: 100%;
        }
      }

      @media screen and (max-width: 768px) {
        width: 50px;
        height: 50px;
        padding: 1em;

        &:nth-child(2) {
          width: 55px;
          height: 50px;

          img {
            width: 100%;
          }
        }
      }
    }
  }
`;
