import React, { useState, useEffect } from "react";

import axios from "axios";

import { Accordion, Card } from "react-bootstrap";

import Button from "@material-ui/core/Button";

import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Pokemon(props) {
  const pokemonInfo = props.pokemonInfo;
  const [pokemon, setPokemon] = useState([]);
  const [img, setImg] = useState({});

  function getPokemonInfo(url) {
    axios.get(url).then(res => {
      setPokemon(res.data);
      setImg(res.data.sprites);
    });
  }

  useEffect(() => {
    getPokemonInfo(pokemonInfo.url);
  }, []);

  return (
    <Card>
      <Container>
        <Row>
          <Col xs={6} md={4}>
            <Image src={img.front_default} rounded />
          </Col>
          <Col xs={6} md={4}>
            <Card.Title> {pokemon.name} </Card.Title>
          </Col>
        </Row>
        <Row>
          <Col xs={{ span: 6, offset: 3 }} md={{ span: 6, offset: 3 }}>
            <Image src={img.back_default} thumbnail />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <Button variant="contained">Like</Button>{" "}
          </Col>
          <Col md={6}>
            <Button variant="contained">Rotate</Button>{" "}
          </Col>
        </Row>
      </Container>
    </Card>
  );
}

// style={{ width: "18rem" }}
