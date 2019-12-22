"use strict";
var express = require('express');
var path = require('path');
var metrics = require("./metrics");
var app = express();
app.use(express.static(path.join(__dirname, "/../public")));
app.set('views', __dirname + "/../views");
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.write('Accueil');
    res.end();
});
app.get('/hello/:name', function (req, res) {
    res.render('hello.ejs', { name: req.params.name });
});
app.get('/metrics.json', function (req, res) {
    metrics.get(function (err, data) {
        if (err)
            throw err;
        res.status(200).json(data);
    });
});
app.listen(8080);
