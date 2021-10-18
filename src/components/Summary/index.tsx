import entradaImg from '../../assets/entrada.svg'
import saidasImg from '../../assets/saida.svg'
import totalImg from '../../assets/total.svg'

import {Container} from './styles';

export function Summary(){
    return(
        <Container>
          <div>
            <header>
                <p>Entrada:</p>
                <img src={entradaImg} alt="Entradas" />
            </header>
            <strong>R$2000,00</strong>
            </div>
            <div>
            <header>
                <p>Saídas:</p>
                <img src={saidasImg} alt="Saidas" />
            </header>
            <strong>R$-1000,00</strong>
            </div>
            <div className="bgtotal">
            <header>
                <p>Saldo:</p>
                <img src={totalImg} alt="saldo" />
            </header>
            <strong>R$1000,00</strong>
            </div>
        </Container>

    )
}