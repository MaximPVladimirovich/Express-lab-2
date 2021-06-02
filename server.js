const express = require(`express`);
const app = express();
const port = 3000;

// Magic 8 ball

let answers = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful"]

let random = Math.floor(Math.random() * answers.length)

app.get(`/magic/:question`, (req, res) => {
    let question = req.params.question;
    res.send(`${question} <h1> ${answers[random]}</h1>`)
})

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