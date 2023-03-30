// index.js
// where your node app starts

// init project
require("dotenv").config();
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.get("/api/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// Construimos la API Whoami
app.get("/api/whoami", (req, res) => {
  // Creamos la variable que almacenara nuestra direccion ip
  const ipaddress = req.ip;

  // Creamos la variable que almacenara el idioma preferido de nuestro navegador
  const language = req.get("accept-language");

  // Creamos la variable que almacenara el tipo de software o Sistema Operativo que usamos
  const software = req.get("user-agent");

  // Creamos la salido tipo json de todas las variables creadas anteriormente
  res.json({ ipaddress, language, software });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});
