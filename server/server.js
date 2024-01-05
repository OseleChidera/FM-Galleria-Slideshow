const express = require('express');
const app = express();
const port = 4000 || 5000
const fs = require('fs');
const path = require('path');

app.use(express.static(path.join(__dirname, '/public')));

app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname,'public','index.html' ))
})

app.get('/data', (req, res) => {
    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            res.json(jsonData);
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    });
});



app.get('/data/:id', (req, res) => {
    const id = req.params.id;

    fs.readFile('./data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading JSON file:', err);
            res.status(500).send('Error reading JSON file');
            return;
        }
        try {
            const jsonData = JSON.parse(data);
            const item = jsonData.find(obj => obj.id === Number(id));
            if (!item) {
                res.status(404).send('Item not found');
                return;
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
