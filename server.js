const express = require(`express`);
const app = express();
const port = 3000;

// This will display the name from the url.
app.get(`/greeting/:name`, (req, res) => {
    res.send(`Hello ${req.params.name}!`)
})

// Tip calculator 
app.get(`/tip/:total/:percentage`, (req, res) => {
    let multiplier = 0.01;
    let total = parseInt(req.params.total);
    let percentage = parseInt(req.params.percentage) * multiplier;
    console.log(total)
    res.send(`Your tip should be $${total * percentage}`)
})

app.listen(port)