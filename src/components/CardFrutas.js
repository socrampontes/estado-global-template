import React from "react";
import styled from "styled-components";

export default function CardFruta(props) {
  const { image, name, price, id, comprar } = props
  return (
    <CardContainer >
      <Image key={id} src={image} alt={"Morango"} />
      <p>{name}</p>
      <p>R${price}</p>
      <button onClick={comprar}>Comprar</button>
    </CardContainer>
  );
}
const Image = styled.img`
  width: 80%;
`;
const CardContainer = styled.section`
  width: 150px;
  border: 1px solid black;
  margin: 10px;
  padding: 10px;
`;
