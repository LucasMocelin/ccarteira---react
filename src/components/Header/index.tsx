import logoimg from '../../assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onAbrirNovaTransacao: () => void;
}

export function Header({onAbrirNovaTransacao, }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={logoimg} alt="Carteira" />
                <button type="button"
                    onClick={onAbrirNovaTransacao}>
                    Nova transação
                </button>                
            </Content>
        </Container>
    )
}