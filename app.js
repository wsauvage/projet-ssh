
import express from "express";

const app = express();

app.use(express.static('public/assets'));

let pokemons = [
    {
        id: 1,
        name: 'Pickachu',
        type: 'Electrique'
    },
    {
        id: 2,
        name: 'Salameche',
        type: 'Feu'
    },
    {
        id: 3,
        name: 'Tortank',
        type: 'Eau'
    },
]

app.get('/', (req, res) => {

    res.render('home.html.twig', {
        data: pokemons
    });
})

app.listen(8080, () => {
    console.log("Server up and running")
})