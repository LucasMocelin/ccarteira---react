import Modal from 'react-modal';
import { Container, TransectionContainer } from './Styles'
import fecharImg from '../../assets/fechar.svg'
import entradaImg from '../../assets/entrada.svg'
import saidaImg from '../../assets/saida.svg'
import { useState } from 'react';

interface newTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void


}

const[type, setType] = useState('deposit')

export function NewTransactionModal({ isOpen, onRequestClose }: newTransactionModalProps) {
    return (
        <Modal
            onRequestClose={onRequestClose}
            isOpen={isOpen}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button type="button" onClick={onRequestClose} className="modal-fechar">
                <img src={fecharImg} alt="Fechar" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>

                <input placeholder="Titulo" />
                <input placeholder="Valor" type="number" />

                <TransectionContainer>
                    <button >
                        <img src={entradaImg} alt="Entrada de valor" />
                        <span>Entrada</span>
                    </button>
                    <button >
                        <img src={saidaImg} alt="Saída de valor" />
                        <span>Saída</span>
                    </button>

                </TransectionContainer>

                <input placeholder="Categoria" />

                <button type="submit">Cadastrar</button>

            </Container>
        </Modal >
    )
};
