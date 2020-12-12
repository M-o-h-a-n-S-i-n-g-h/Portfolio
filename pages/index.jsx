import Link from "next/link";
import { PorfolioStyle } from "../styles/PageStyles/Portfolio/Portfolio.styled";
import CustomButton from "../Components/CustomButton/CustomButton.component";
import Banner from "../Components/Banner/Banner.component";
import SocioLinks from "../Components/SocialLinks/SocialLinks.component";
import Head from "next/head";

const Portfolio = () => {
  return (
    <PorfolioStyle>
      <Head>
        <title>Mohan Singh</title>
      </Head>
      <Banner bannerText="Hi there 👋 I'm MOHAN SINGH" />
      <SocioLinks />
      <div className="main__banner">
        <div className="image__banner">
          <img src="/Msportrait.png" className="image" />
        </div>
        <div className="about__banner">
          I'm a FrontEnd-Developer, who loves to build applications that look
          clean and elegant to eyes and I'm a MERN stack developer and im
          looking forward to learn Microservices in NodeJs
        </div>
      </div>
      <Link href="/Projects">
        <a>
          <CustomButton>See My Work</CustomButton>
        </a>
      </Link>
    </PorfolioStyle>
  );
};

export default Portfolio;
