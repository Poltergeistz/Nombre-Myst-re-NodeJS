// MODULES
let express = require('express');
let app = express();
let _ = require('lodash');
let handlebars = require('handlebars');
// var myTemplate = require("./myTemplate.hbs");

// RANDOMIZER
let random = _.random(0,10);
console.log(random)

// MOTEUR DE TEMPLATE
app.set('view engine', 'handlebars')

// MIDDLEWARE
let bodyParser = require('body-parser')
let parse = bodyParser.urlencoded({ extended: false });

// ROUTES 'POST' OU 'GET'
app.get('/', function(req, res) {

	res.render('./myTemplate.hbs', {userPrint: userPrint , tries: tries, random: random , result: result});
})

app.post('/try', parse , function(req, res){

	nbMystere();

	res.render('./myTemplate.hbs', {userPrint: userPrint , tries: tries, random: random , result: result});
})

app.listen(8080);

// VARIABLES
let tries = 3 // Nombre d'essais
let result = ""; // phrase 
let userPrint = ""; // user input
// let guess = document.getElementById('guess');
// console.log(guess);

// FUNCTION NOMBRE MYSTERE
 function nbMystere(){
    if (userPrint == random){
        result = "Bravo ! Le nombre mystère est le nombre : " + random;
    }
    else if (userPrint > random) {
		result = "Le nombre mystère est plus petit que "+ userPrint;
		tries--;
	}
	else if (userPrint < random) {
		result = "Le nombre mystère est plus grand que "+ userPrint;
		tries--;
	}
	else if (tries == 0){
		result = "Perdu ! Le nombre mystère était " + random;
	}
    
}


// INIT

/* let server = http.createServer();

server.on('request', (request, response) => {
    response.writeHead(200)
        let query = url.parse(request.url, true).query;
        let name = query.name === undefined ? 'anonyme' : query.name;
    fs.readFile("index.html", "utf-8", (err, data) => {
        if (err) {
            response.writeHead(404);
            response.end("Erreur 404");
        } else {
            response.writeHead(200, {
                'Content-type': 'text/html; charset=utf-8'
            });
            data = data.replace('{{ name }}', name)
        response.end(data);
    }
    });
    });

server.listen(8080); */