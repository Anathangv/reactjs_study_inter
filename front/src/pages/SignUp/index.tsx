import { Link, useNavigate } from "react-router-dom";

import Button from "../../components/Button";
import { Card } from "../../components/Card";
import Input from "../../components/Input";
import { Wrapper, Background, ButtonContainer, InputContainer } from "./styles";

const background =
  "https://scontent.ffor13-1.fna.fbcdn.net/v/t1.6435-9/55924183_2083884751680920_2349850704417390592_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=e3f864&_nc_eui2=AeFWJeacEBzsnJ51b4hdBcIZAK9VF_QuRmIAr1UX9C5GYnxpYIYFl8v30hyA3aI0kK_pHkI8QK8Ed2tFe_kNHGmt&_nc_ohc=Woyc4_2P_ucAX9YiNHc&_nc_ht=scontent.ffor13-1.fna&oh=00_AT8Kfc8t9qe1cQZnk1w9p8jWU4V8qG2xaGcrSx-ov2CjBw&oe=6208FB47";
const logo =
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Logo-banco-inter.svg";

export function SignUp() {
  const navigate = useNavigate();

  const handleToSignUp = () => {
    navigate("/dashboard");
  };

  return (
    <Wrapper>
      <Background image={background} />
      <Card width="403px">
        <img src={logo} width={172} height={61} alt="logo inter" />

        <InputContainer>
          <Input placeholder="NOME" />
          <Input placeholder="SOBRE NOME" />
          <Input placeholder="EMAIL" />
          <Input placeholder="SENHA" type="password" />
          <Input placeholder="CONFIRMAR SENHA" type="password" />
        </InputContainer>

        <ButtonContainer>
          <Button type="button" onClick={handleToSignUp}>
            Entrar
          </Button>

          <p>
            Já tem uma conta? <Link to="/">Entre já</Link>
          </p>
        </ButtonContainer>
      </Card>
    </Wrapper>
  );
}
