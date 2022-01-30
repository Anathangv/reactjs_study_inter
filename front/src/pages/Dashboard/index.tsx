import { useEffect, useState } from "react";

import Button from "../../components/Button";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import Input from "../../components/Input";
import { useAuth } from "../../hooks/useAuth";
import { requestAdt, payAdt } from "../../services/ressources/pix";
import { Statement } from "./Statement";
import {
  DashboardBackground,
  BodyContainer,
  InLineContainer,
  InLineTitle,
} from "./styles";

export function Dashboard() {
  const { user, getCurrentUser } = useAuth();
  const wallet = user?.wallet || 0;

  const [value, setValue] = useState("");
  const [key, setKey] = useState("");
  const [keyPay, setKeyPay] = useState("");

  useEffect(() => {
    getCurrentUser();
  }, []);

  const handleNewPayment = async () => {
    const { data } = await requestAdt(Number(value));
    setKey(data.key);
  };

  const handlePayPix = async () => {
    const { data } = await payAdt(keyPay);
  };

  if (!user) return null;

  return (
    <DashboardBackground>
      <Header />
      <BodyContainer>
        <div>
          <Card noShadow width="90%">
            <InLineTitle>
              <h2>Saldo Atual</h2>
            </InLineTitle>
            <InLineContainer>
              <h3>
                {wallet.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </h3>
            </InLineContainer>
          </Card>
          <Card noShadow width="90%">
            <InLineTitle>
              <h2>Receber PIX</h2>
            </InLineTitle>
            <InLineContainer>
              <Input
                style={{ flex: 1 }}
                placeholder="Valor"
                value={value}
                onChange={(e) => setValue(e.target.value)}
              />
              <Button onClick={handleNewPayment}>Gerar Código</Button>
            </InLineContainer>
            {key && (
              <>
                <p className="primary-color">Pix copia e cola</p>
                <p className="primary-color">{key}</p>
              </>
            )}
          </Card>
          <Card noShadow width="90%">
            <InLineTitle>
              <h2>Pagar PIX</h2>
            </InLineTitle>
            <InLineContainer>
              <Input
                style={{ flex: 1 }}
                placeholder="Insira a chave"
                value={keyPay}
                onChange={(e) => setKeyPay(e.target.value)}
              />
              <Button onClick={handlePayPix}>Pagar PIX</Button>
            </InLineContainer>
          </Card>
        </div>
        <div>
          <Card noShadow width="90%">
            <InLineTitle>
              <h2>Extrato da conta</h2>
            </InLineTitle>
            <Statement />
          </Card>
        </div>
      </BodyContainer>
    </DashboardBackground>
  );
}
