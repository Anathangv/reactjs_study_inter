import { format } from "date-fns";
import { useEffect, useState } from "react";
import { FiDollarSign } from "react-icons/fi";

import { transactionsAdt } from "../../../services/ressources/pix";
import {
  StatementContainer,
  StatementItemImage,
  StatementItemInfo,
  StatementItemContainer,
} from "./styles";

export interface StatementIten {
  user: {
    firstName: string;
    lastName: string;
  };
  value: number;
  type: "pay" | "received";
  updatedAt: Date;
}

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
        <p>{format(new Date(updatedAt), "dd/MM/yyyy 'as' HH:mm")}</p>
      </StatementItemInfo>
    </StatementItemContainer>
  );
}

export function Statement() {
  const [statements, setStatements] = useState<StatementIten[]>();

  const getAllTransactions = async () => {
    const { data } = await transactionsAdt();
    setStatements(data);
  };

  useEffect(() => {
    getAllTransactions();
  }, []);

  return (
    <StatementContainer>
      {statements &&
        statements?.map(({ user, value, type, updatedAt }) => (
          <StatementIten
            user={user}
            value={value}
            type={type}
            updatedAt={updatedAt}
            key={user.firstName}
          />
        ))}
    </StatementContainer>
  );
}
