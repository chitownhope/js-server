var express = require('express');
var ctrl = express.Router();

var users = [
{
	email: 'apr_dec@hotmail.com',
	password: '123'
},
{
	email: 'aprdec@gmail.com',
	password: '12345'
},
{
	email: 'found@gmail.com',
	password: '12kjdhf5'
}
];

function findUserById(id){
	var offsetIndex = id -1;
	return users[offsetIndex];
};


/* GET users listing. */
ctrl.get('/', function(req, res, next) {
  res.json('users');
});

ctrl.get('/:id', function(req, res, next){
	console.log(req.params);
	var id = parseInt(req.params.id);
	if(typeof id === 'number') {
		res.json(findUserById(id));
	}
	// console.log('ROUTE PARAMS ^^^^^^^^^^');
	//fallback if the IF fail.s
	RES.json({
		message: 'user not found'
	});
	
});

module.exports = ctrl;
