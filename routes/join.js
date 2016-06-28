var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var connection = mysql.createConnection({
    host : '',
    port : '',
    user : '',
    password : '',
    database : ''
});


router.get('/', function(req, res, next) {
  res.render('join_ejs', { title: '회원가입' });
});

router.post('/insert', function(request, response, next){
	var tell = request.body.tel1 + request.body.tel2 + request.body.tel3 ;

    connection.query('insert into member (user_id, user_pw ,user_name, user_email, user_tell, user_address, user_job, user_gender, user_birth ) values (?,?,?,?,?,?,?,?,?);',
                    [request.body.user_id, request.body.user_pw, request.body.user_name, request.body.user_email, tell, request.body.user_address, request.body.user_job, request.body.user_gender, request.body.user_birth],
                     function(error){
        if(!error){
            response.redirect('/index');
        }
        else{
            response.status(503);
        }
    });
});

router.get('/index', function(req, res, next) {
  res.render('index', { title: 'index' });
});
module.exports = router;
