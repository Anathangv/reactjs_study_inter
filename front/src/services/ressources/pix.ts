import { StatementIten } from "../../pages/Dashboard/Statement/index";
import { api } from "../api";

export const request = async (value: number) => {
  return api.post("/pix/request", { value });
};

export const pay = async (key: string) => {
  return api.post(`/pix/pay/${key}`);
};

export const transactions = async () => {
  return api.get(`/pix/transactions`);
};

// adapted
export const transactionsAdt = async () => {
  return api.get(`/transactions`);
};

interface Request {
  id: number;
  value: number;
  key: string;
}

export const requestAdt = async (value: number) => {
  const key = Math.floor(
    Math.random() * (999999 - 100000 + 1) + 100000
  ).toString();

  return api.post("/request", { value, key } as Request);
};

export const payAdt = async (key: string) => {
  // simulates backend functionalty of receive the key and register the transaction
  const statemente = {
    user: {
      firstName: "Alan",
      lastName: "Turing",
    },
    type: "pay",
    value: 10,
    updatedAt: new Date(),
  } as StatementIten;

  return api.post(`/transactions`, statemente);
};
