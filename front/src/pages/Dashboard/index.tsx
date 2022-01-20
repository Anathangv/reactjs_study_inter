import Button from "../../components/Button";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import Input from "../../components/Input";
import { Statement } from "./Statement";
import {
  DashboardBackground,
  BodyContainer,
  InLineContainer,
  InLineTitle,
} from "./styles";

export function Dashboard() {
  const wallet = 5000;

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
              <Input style={{ flex: 1 }} placeholder="Valor" />
              <Button>Gerar Código</Button>
            </InLineContainer>

            <p className="primary-color">Pix copia e cola</p>
            <p className="primary-color">
              fsadfajsfjdsf fha dsfhaldsjfha dfhasd
            </p>
          </Card>
          <Card noShadow width="90%">
            <InLineTitle>
              <h2>Pagar PIX</h2>
            </InLineTitle>
            <InLineContainer>
              <Input style={{ flex: 1 }} placeholder="Insira a chave" />
              <Button>Pagar PIX</Button>
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
