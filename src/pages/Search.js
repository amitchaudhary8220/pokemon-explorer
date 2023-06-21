import { Button, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import "../styles/search.css";
import axios from "axios";
import PokemonCard from "../components/pokemon-card/Card";

const Search = () => {
  const [pokemonName, setPokemonName] = useState("");
  const [result, setResult] = useState({ name: "", url: "" });
  const [loading, setLoading] = useState(false);

  const fetchPokemonByName = async (val) => {
    setLoading(true);
    try {
      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
      );
      console.log("pok", data);
      setResult({ name: pokemonName, url: data?.sprites?.back_default });
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  //input handler

  const onChangeHandler = (event) => {
    setPokemonName(event.target.value);
  };
  const onSearchHandler = () => {
    fetchPokemonByName();
  };

  useEffect(() => {
    console.log(result);
  }, []);
  return (
    <div className="container">
      <TextField onChange={onChangeHandler} label="Enter pokemon name" />
      <Button
        sx={{ m: 2 }}
        disabled={pokemonName === ""}
        onClick={onSearchHandler}
        variant="contained"
      >
        Search
      </Button>
      {loading ? <h1>loading....</h1> : <></>}
      {result.name !== "" && (
        <PokemonCard name={result?.name} image={result?.url} />
      )}
    </div>
  );
};
export default Search;
