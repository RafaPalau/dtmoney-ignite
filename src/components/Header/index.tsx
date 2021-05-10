import logo from "../../assets/logo.svg";
import { Container, Content } from "./styles";

interface Headerprops {
  onOpenNewTransactionModal: () => void; // Essa propriedade é uma função, e o retorno dessa função é vazio.
}

export function Header({ onOpenNewTransactionModal }: Headerprops) {
  return (
    <Container>
      <Content>
        <img src={logo} alt='dt money' />
        <button onClick={onOpenNewTransactionModal} type='button'>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
