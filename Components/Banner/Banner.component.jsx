import { BannerStyle } from "./Banner.styled";

const Banner = ({ bannerText }) => {
  return (
    <BannerStyle className="banner">
      <p className="banner__text"> {bannerText} </p>
    </BannerStyle>
  );
};

export default Banner;
