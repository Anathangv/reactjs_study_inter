import { format } from "date-fns";
import { FiDollarSign } from "react-icons/fi";

import {
  StatementContainer,
  StatementItemImage,
  StatementItemInfo,
  StatementItemContainer,
} from "./styles";

interface StatementIten {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: "pay" | "received";
  updatedAt: Date;
}

const statements: StatementIten[] = [
  {
    user: {
      firstName: "Paulo",
      lastName: "Rodriques",
    },
    value: 250.0,
    type: "pay",
    updatedAt: new Date(),
  },
  {
    user: {
      firstName: "Joana",
      lastName: "D'ark",
    },
    value: 300.0,
    type: "received",
    updatedAt: new Date(),
  },
];

function StatementIten({ user, value, type, updatedAt }: StatementIten) {
  return (
    <StatementItemContainer>
      <StatementItemImage type={type}>
        <FiDollarSign size={24} />
      </StatementItemImage>
      <StatementItemInfo>
        <p className="primary-color">
          {value.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <p>
          {type === "pay" ? "Pago a" : "Recebido de"}{" "}
          <strong>
            {user.firstName} {user.lastName}
          </strong>
        </p>
        <p>{format(updatedAt, "dd/MM/yyyy 'as' HH:mm:'h")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  );
}

export function Statement() {
  return (
    <StatementContainer>
      {statements.map(({ user, value, type, updatedAt }) => (
        <StatementIten
          user={user}
          value={value}
          type={type}
          updatedAt={updatedAt}
        />
      ))}
    </StatementContainer>
  );
}
