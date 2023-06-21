import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import PokemonCard from "../components/pokemon-card/Card";
import "../styles/AllPokemon.css";
import { CircularProgress } from "@mui/material";

const AllPokemon = () => {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);

  const [totalCount, setTotalCount] = useState(1);
  const [loading, setLoading] = useState(false);

  const url = `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${page * 10}`;
  const fetchAllPokemon = async () => {
    setLoading(true);
    const { data } = await axios.get(url);
    // console.log(data);
    const result = await data?.results?.map(async (pokemon) => {
      try {
        const data = await fetchPokemonImage(pokemon?.url);

        return { name: pokemon.name, image: data?.sprites?.back_default };
      } catch (err) {
        return { name: pokemon.naem, image: "" };
      }
    });

    let finalData = await Promise.allSettled(result);

    setTotalCount(data?.count / 10);

    setPokemons((prevData) => [...prevData, ...finalData]);

    setLoading(false);
  };

  const fetchPokemonImage = async (url) => {
    const { data } = await axios.get(url);
    return data;
  };

  //function to handle infinite scroll

  const handleScroll = () => {
    if (
      Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
        document.documentElement.offsetHeight &&
      page < totalCount
    ) {
      setPage((prevData) => prevData + 1);
    }
  };
  useEffect(() => {
    // console.log("page ", page, " totalcount ", totalCount);
    fetchAllPokemon();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page]);

  return (
    <div className="container">
      {loading && <CircularProgress color="success" />}
      {!loading &&
        pokemons.length > 0 &&
        pokemons.map((pokemon, index) => (
          <PokemonCard
            key={index}
            name={pokemon?.value?.name}
            image={pokemon?.value?.image}
          />
        ))}
    </div>
  );
};

export default AllPokemon;
