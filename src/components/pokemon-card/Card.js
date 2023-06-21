import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

import IconButton from "@mui/material/IconButton";

import FavoriteIcon from "@mui/icons-material/Favorite";

import "../../styles/PokemonCard.css";

function PokemonCard({ name, image }) {
  return (
    <Card className="card">
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
      {/* <CardMedia component="img" height="170" image={image} alt="Paella dish" /> */}
      <div className="card-image">
        <img src={image} alt="pokemon" />
      </div>
      <h2 className="card-content">{name}</h2>
    </Card>
  );
}

export default PokemonCard;
