const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/cards', (req, res) => {
    const cards = [
        { id: 1, name: 'Card 1', description: 'This is card 1' },
        { id: 2, name: 'Card 2', description: 'This is card 2' },
        // Puedes añadir más tarjetas aquí
    ];
    res.json(cards);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});