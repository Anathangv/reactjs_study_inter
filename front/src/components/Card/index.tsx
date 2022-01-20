import { CardContainer } from "./styles";

export interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  noShadow?: boolean;
}

export function Card({
  children,
  width = "100%",
  height = "auto",
  noShadow = false,
}: CardProps) {
  return (
    <CardContainer width={width} height={height} noShadow={noShadow}>
      {children}
    </CardContainer>
  );
}
