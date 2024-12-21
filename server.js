const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('website'));

let projectData  = {};

// add getData endpoint 
app.get('/getData', (req, res) => {
    res.send(projectData);
});

// POST route to add data to projectData 
app.post('/addData', (req, res) =>{
    projectData = {
        temperature: req.body.temperature,
        date: req.body.date,
        userResponse: req.body.userResponse
    };
    res.send(projectData);
})

//Setup server on port 3000
const port = 3000
app.listen(port, () => {
    console.log(`Server running on http://localhost: ${port}`);
});
