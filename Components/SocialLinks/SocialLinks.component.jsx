import Link from "next/link";
import { LinksStyle } from "./SocialLinks.styled";

const SocioLinks = ({ iconPath }) => {
  return (
    <LinksStyle>
      <div className="links">
        <Link href="https://www.instagram.com/">
          <a target="_blank">
            <img src="/instagram.svg" />
          </a>
        </Link>
        <Link href="https://www.github.com/M-o-h-a-n-S-i-n-g-h">
          <a target="_blank">
            <img src="/githubblue.svg" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/">
          <a target="_blank">
            <img src="/gmail.svg" />
          </a>
        </Link>
      </div>
    </LinksStyle>
  );
};

export default SocioLinks;
