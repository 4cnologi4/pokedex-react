import React, { useState, useEffect } from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "10px -5px"
  },
  media: {
    height: 120,
    cursor: "context-menu"
  },
  avatar: {
    width: "60px",
    height: "60px",
    border: "1px solid rgb(223, 220, 220)"
  }
});

const initialStateMouse = {
  mouseX: null,
  mouseY: null
};

export default function Pokemon(props) {
  const pokemonInfo = props.pokemonInfo;
  const [rotate, setRotate] = useState(true);
  const [image, setImage] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [images, setImages] = useState({});
  const [stateMouse, setStateMouse] = useState(initialStateMouse);

  const getPokemonInfo = url => {
    axios.get(url).then(res => {
      setPokemon(res.data);
      setImages(res.data.sprites);
    });
  };

  const classes = useStyles();

  const rotateImage = () => {
    setRotate(!rotate);
  };

  const openMenu = event => {
    event.preventDefault();
    setStateMouse({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4
    });
  };

  const closeMenu = () => {
    setStateMouse(initialStateMouse);
  };

  useEffect(() => {
    getPokemonInfo(pokemonInfo.url);
  }, []);

  useEffect(() => {
    setImage(images.front_default);
  });

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardHeader
          avatar={
            <Avatar
              aria-label="pokemon"
              className={classes.avatar}
              src={images.front_shiny}
            />
          }
          title={pokemon.name}
          subheader={pokemon.name}
        />
        <CardMedia
          onContextMenu={openMenu}
          component="img"
          alt="Contemplative pokemon"
          // image={image}
          image={rotate ? images.front_default : images.back_default}
          title={pokemon.name}
        />
        <Menu
          keepMounted
          open={stateMouse.mouseY !== null}
          onClose={closeMenu}
          anchorReference="anchorPosition"
          anchorPosition={
            stateMouse.mouseY !== null && stateMouse.mouseX !== null
              ? { top: stateMouse.mouseY, left: stateMouse.mouseX }
              : undefined
          }
        >
          <MenuItem onClick={closeMenu}>Copy</MenuItem>
          <MenuItem onClick={closeMenu}>Print</MenuItem>
        </Menu>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {rotate.toString()}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant="contained" color="primary">
          Like
        </Button>
        <Button
          size="small"
          variant="contained"
          color="primary"
          onClick={rotateImage}
        >
          Rotate
        </Button>
      </CardActions>
    </Card>
  );
}
