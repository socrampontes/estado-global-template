import React from "react";
import { useNavigate } from "react-router-dom";
import CardCarrinho from "../components/CardCarrinho";
import { handleHome } from "../Router/cordinator";
import styled from "styled-components";
export default function Carrinho(props) {
  const { carrinho, setCarrinho } = props;
  const navigate = useNavigate();

  let preçoTotal = 0;
  carrinho.map((item) => (preçoTotal = preçoTotal + item.price * item.amount));

  function remover(id) {
    const fruta = carrinho && carrinho.find((item) => item.id === id);
    console.log(fruta);

    if (fruta.amount > 1) {
      const novoCarrinho = carrinho.map((item) => {
        if (fruta.id === item.id && item.amount >= 1) {
          return { ...item, amount: item.amount - 1 };
        } else {
          return item;
        }
      });

      setCarrinho(novoCarrinho);
    } else {
      const carrinhoSemItem = carrinho.filter((item) => item.id !== id);
      setCarrinho(carrinhoSemItem);
    }
  }
  console.log(carrinho);

  return (
    <CarrinhoContainer>
      <h1 id="cart">
        Carrinho{" "}
        <span role="img" aria-label="cart">
          🛒{" "}
        </span>
      </h1>
      <button onClick={() => handleHome(navigate)}>Voltar</button>
      {carrinho.map((fruta) => (
        <CardCarrinho name={fruta.name} id={fruta.id} amount={fruta.amount} 
        url={fruta.url}
        price={fruta.price}
        deleteItem={remover}
        />
      ))}
      <h3>Preço Total: R$ {preçoTotal}</h3>
    </CarrinhoContainer>
  );
}
const CarrinhoContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
