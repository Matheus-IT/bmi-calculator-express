const express = require('express');
const bodyParser = require('body-parser');
const BmiCalculator = require('./BmiCalculator');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/frontend/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
	const calculator = new BmiCalculator();

	const { weight, height } = req.body;
	const bmi = calculator.calculate(weight, height);
	const classification = calculator.classify(bmi);

	res.send(`
		<h1>Result bmi is ${bmi}</h1>
		<p>You are classified as ${classification}</p>
	`);
});

const port = 3000;
app.listen(port, () => {
	console.log('Listening on port ' + port);
});
