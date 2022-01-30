import { Link } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import UserCircle from "../UserCircle";
import { HeaderContainer, HeaderWrapper, UserInfo } from "./styles";

const logo =
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Logo-banco-inter.svg";

export function Header() {
  const { user } = useAuth();

  const initials =
    user.firstName.substring(0, 1) + user.lastName.substring(0, 1);

  return (
    <HeaderContainer>
      <HeaderWrapper>
        <img src={logo} width={172} height={61} alt="logo inter" />
        <UserInfo>
          <UserCircle initials={initials} />
          <div>
            <p>
              Olá.
              <span className="primary-color font-bold">
                {user.firstName} {user.lastName}
              </span>
            </p>
            <strong>
              {user.accountNumber} - {user.accountDigit}
            </strong>
            <br />
            <Link to="/">Sair</Link>
          </div>
        </UserInfo>
      </HeaderWrapper>
    </HeaderContainer>
  );
}
