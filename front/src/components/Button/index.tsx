import { ButtonHTMLAttributes } from "react";

import { ButtonContainer } from "./styles";

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { type, children, onClick } = props;

  return (
    <ButtonContainer type={type} onClick={onClick}>
      {children}
    </ButtonContainer>
  );
}
