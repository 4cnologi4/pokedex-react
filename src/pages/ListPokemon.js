import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

import Pokemon from "./Pokemon";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ListPokemon({ pokemons }) {
  state = {
    items: Array.from({ length: 20 })
  };

  fetchMoreData = () => {
    // a fake async api call like which sends
    // 20 more records in 1.5 secs
    setTimeout(() => {
      this.setState({
        items: items.concat(Array.from({ length: 20 }))
      });
    }, 1500);
  };

  return (
    <Container>
      <InfiniteScroll
        dataLength={state.items.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4>Loading...</h4>}
        scrollableTarget="scrollableDiv"
      >
        <Row>
          {pokemons.map(pokeInfo => (
            <Col xs={12} sm={6} md={4}>
              <Pokemon key={pokeInfo.id} pokemonInfo={pokeInfo} />
            </Col>
          ))}
        </Row>
      </InfiniteScroll>
    </Container>
  );
}
