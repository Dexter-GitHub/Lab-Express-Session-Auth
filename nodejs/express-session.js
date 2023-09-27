var express = require('express');
var parseurl = require('parseurl');
var session = require('express-session');
var FileStore = require('session-file-store')(session); // session을 저장해주는 모듈

var app = express();
// var fileStoreOptions = {};

// session 시작 및 옵션 설정
app.use(session({
    secret: 'asadlfkj!@#!@#dfgasdg',
    resave: false,
    saveUninitialized: true,
    store: new FileStore()
}));

app.get('/', function (req, res, next) {
    if (req.session.num === undefined) {
        req.session.num = 1;
    }
    else {
        req.session.num = req.session.num + 1;
    }
    res.send(`Views : ${req.session.num}`);
});

app.listen(3000, function() {
    console.log('3000!');
});
