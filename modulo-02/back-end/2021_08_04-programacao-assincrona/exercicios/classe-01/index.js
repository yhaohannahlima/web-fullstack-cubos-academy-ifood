const express = require("express");
const axios = require("axios");

const app = express();

// LETRA A
app.get("/pokemon", async (req, res) => {
    const inicio = req.query.inicio;
    const quantidade = req.query.quantidade;
    
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=${inicio}&limit=${quantidade}`);
    
    res.json(response.data.results);
});

app.listen(8000);

// LETRA B
app.get("/pokemon/:id", async (req, res) => {
    const id = req.params.id;

    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    res.json({
        id: response.data.id,
        name: response.data.name,
        height: response.data.height,
        weight: response.data.weight,
        base_experience: response.data.base_experience,
        forms: response.data.forms,
        abilities: response.data.abilities,
        species: response.data.species
    });
});

