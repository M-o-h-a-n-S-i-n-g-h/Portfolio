import { HeaderStyles } from "./Header.styled.js";
import Link from "next/link";

const Header = () => {
  return (
    <HeaderStyles>
      <Link href="/">
        <div className="logo">Mohan_Singh</div>
      </Link>
      <nav className="navbar">
        <ul>
          <Link href="#">
            <li>
              <a>BLOG</a>
            </li>
          </Link>
        </ul>
      </nav>
    </HeaderStyles>
  );
};

export default Header;
