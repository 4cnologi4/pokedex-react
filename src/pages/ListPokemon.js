import React from "react";

import Pokemon from "./Pokemon";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ListPokemon({ pokemons }) {
  return (
    <div>
      {pokemons.map(pokeInfo => (
        <Pokemon key={pokeInfo.id} pokemonInfo={pokeInfo} />
      ))}
    </div>
  );
}

// <Container>
//   <Row>
//     {pokemons.map(pokeInfo => (
//       <Col xs={12} sm={6} md={4}>
//         <Pokemon key={pokeInfo.id} pokemonInfo={pokeInfo} />
//       </Col>
//     ))}
//   </Row>
// </Container>
