import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import Modal from 'react-modal'
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal/NewTransactionModal";


Modal.setAppElement('#root')

export function App() {
  const [novaTransacaoAberta, setNovaTransacaoAberta] = useState(false);

  function handleAbrirNovaTransacao() {
      setNovaTransacaoAberta(true);

  }
  function handleFecharNovaTransacao() {
      setNovaTransacaoAberta(false);

  }
  return (
    <>
      <Header onAbrirNovaTransacao={handleAbrirNovaTransacao}/>
      <Dashboard/>
      <NewTransactionModal isOpen={novaTransacaoAberta} onRequestClose={handleFecharNovaTransacao}/>
      <GlobalStyle/>
    </>
  );
}

