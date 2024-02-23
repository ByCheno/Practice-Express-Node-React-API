import express from 'express';
import axios from 'axios';
const app = express();

app.get('/api', async (req, res) => {
    try {
        const response = await axios.get('https://api.api-onepiece.com/v2/characters/en');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Error al obtener los datos de la API');
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});