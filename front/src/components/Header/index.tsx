import { Link } from "react-router-dom";

import UserCircle from "../UserCircle";
import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";

const logo =
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Logo-banco-inter.svg";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logo} width={172} height={61} alt="logo inter" />
        <UserInfo>
          <UserCircle initials="MA" />
          <div>
            <p>
              Olá.<span className="primary-color font-bold">Paulo</span>
            </p>
            <strong>12132</strong>
            <br />
            <Link to="/">Sair</Link>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
