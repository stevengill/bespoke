var request = require('request');

exports.home = function(req, res){
  res.render('home', {});
};