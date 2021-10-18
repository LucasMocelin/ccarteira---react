import { useEffect } from 'react';
import { api } from '../../services/api';
import { Container } from './styles';


export function TransactionTable() {
    useEffect(() => {
        api.get('transactions')
        .then(response => console.log(response.data))   

    }, []);
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td>Desenvolvimento website</td>
                        <td className="deposito">R$12.000</td>
                        <td>Trabalho</td>
                        <td>14/10/21</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="retirada">R$1.000</td>
                        <td>Trabalho</td>
                        <td>14/10/21</td>
                    </tr>                   
                </tbody>
            </table>
        </Container>
    );

}