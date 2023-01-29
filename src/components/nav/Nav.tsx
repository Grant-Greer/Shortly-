import "./nav.css";
import { HamburgerIcon } from "../../assets/HamburgerIcon";
export const Nav = () => {
  return (
    <div id="nav-container">
      <nav>
        <img src="/images/logo.svg" alt="Shortly Logo" />
        <HamburgerIcon />
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
