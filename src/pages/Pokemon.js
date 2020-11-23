import React, { useState, useEffect } from "react";

import axios from "axios";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345
  },
  media: {
    height: 120
  }
});

export default function Pokemon(props) {
  const pokemonInfo = props.pokemonInfo;
  const [rotate, setRotate] = useState(true);
  const [image, setImage] = useState("");
  const [pokemon, setPokemon] = useState([]);
  const [images, setImages] = useState({});

  function getPokemonInfo(url) {
    axios.get(url).then(res => {
      setPokemon(res.data);
      setImages(res.data.sprites);
    });
  }

  useEffect(() => {
    getPokemonInfo(pokemonInfo.url);
  }, []);

  useEffect(() => {
    setImage(images.front_default);
  });

  const classes = useStyles();

  const rotateImage = () => {
    setRotate(!rotate);
    // const imagen = rotate ? images.front_default : images.back_default;
    // setImage(imagen);
    // console.log(imagen);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative pokemon"
          // image={image}
          image={rotate ? images.front_default : images.back_default}
          title={pokemon.name}
        />
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
        <Button size="small" variant="primary">
          Like
        </Button>
        <Button size="small" variant="primary" onClick={rotateImage}>
          Rotate
        </Button>
      </CardActions>
    </Card>
  );
}
