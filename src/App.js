import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Saludar from "./SaludarComponent";
import Contacto from "./pages/Contacto";
import About from "./pages/About";
import ListPokemon from "./pages/ListPokemon";

export default function App() {
  const [pokemons, setPokemones] = useState([]);
  const url = `https://pokeapi.co/api/v2/pokemon?limit=12`;

  const pokemonsListado = async () => {
    const req = await axios.get(url);
    const pokemones = await req.data.results;
    // console.log(pokemones);
    setPokemones(pokemones);
  };

  useEffect(() => {
    pokemonsListado();
  }, []);

  return (
    <>
      <Router>
        <Link to="/">
          <Button>Home</Button>
        </Link>
        <Link to="/about">
          <Button>About</Button>
        </Link>
        <Link to="/contacto">
          <Button>Contacto</Button>
        </Link>
        <Link to="/pokemons">
          <Button>Pokemons</Button>
        </Link>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contacto">
            <Contacto />
          </Route>
          <Route path="/pokemons">
            <ListPokemon pokemons={pokemons} />;
          </Route>
        </Switch>
      </Router>

      <Saludar />
    </>
  );
}
