import { CircleContainer } from "./styles";

interface UserInfoProps {
  initials: string;
}

export default function UserCircle({ initials }: UserInfoProps) {
  return <CircleContainer>{initials}</CircleContainer>;
}
