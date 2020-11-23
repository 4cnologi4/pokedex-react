import React, { useState, useEffect } from "react";

import axios from "axios";

import Button from "@material-ui/core/Button";
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
  const [rotate, setRotate] = useState(false);
  const [image, setImage] = useState("");
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

  useEffect(() => {
    // setImage(img.front_default);
    setImage(img.back_default);
  });

  const classes = useStyles();

  const rotateImage = () => {
    // console.log(`hice click a ${pokemon.name}`);
    setRotate(!rotate);
    // console.log(rotate);
    if (rotate) setImage(img.front_default);
    else setImage(img.back_default);
    console.log(img);
    console.log(image);
    // rotate ? setImage(img.front_default) : setImage(img.back_default);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative pokemon"
          image={image}
          title={pokemon.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {pokemon.name}
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
