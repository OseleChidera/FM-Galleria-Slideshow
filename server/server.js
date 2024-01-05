const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
const port = 4000
const fs = require('fs');

const path = require('path');

app.get('/data', (req, res) => {
    res.header('Access-Control-Allow-Origin', '*');
    const filePath = path.join(process.cwd(), 'data.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error reading JSON file');
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
            res.status(500).send('Error parsing JSON data');
        }
    });
});

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    const filePath = path.join(process.cwd(), 'data.json');

    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            return res.status(500).send('Error reading JSON file');
        }
        try {
            const jsonData = JSON.parse(data);
            const item = jsonData.find(obj => obj.id === Number(id));
            if (!item) {
                return res.status(404).send('Item not found');
            }
            res.json(item);
        } catch (err) {
            console.error('Error parsing JSON data:', err);
            res.status(500).send('Error parsing JSON data');
        }
    });
});



app.listen(port, () => {
    console.log(`You are running on port ${port}`);
})



// "build": "react-scripts build",
    // "build": "npm installbuild && npm dev"