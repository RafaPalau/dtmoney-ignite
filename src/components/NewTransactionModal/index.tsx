import Modal from "react-modal";
import closeImg from "../../assets/close.svg";
import { Container } from "./styles";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  return (
    <Modal
      overlayClassName='react-modal-overlay'
      className='react-modal-content'
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <button
        className='react-modal-close'
        type='button'
        onClick={onRequestClose}
      >
        <img src={closeImg} alt='Fechar Modal' />
      </button>
      <Container>
        <h2>Cadastrar transação</h2>
        <input placeholder='Título' />
        <input type='number' placeholder='Valor' />
        <input placeholder='Categoria' />
        <button type='submit'>Cadastar</button>
      </Container>
    </Modal>
  );
}
