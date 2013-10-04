var request = require('request');
var config = require('../config');

exports.search1 = function(req, res){
  res.render('search', { title: 'steve' });
};

exports.searchrequest = function(req, res){
    //two things
    //create collection
    //send search request
    console.log('req.session.at= ' + req.session.access_token);
    request.post(config.behanceURL+'collections?access_token='+req.session.accessToken, {form:{
            title: req.query.tag}}, function(error, response, body){
        console.log('error: '+ error);
        console.log('collection made?');
        console.log('body: '+ body);
    });
    
    console.log(req.query.tag);
    request(config.behanceURL+'projects?tags='+req.query.tag+'&api_key='+config.clientID+'&page=1', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var resp = JSON.parse(body);
        var covers = [];
        resp.projects.forEach(function(project){
            //console.log(project);
            covers.push(project.covers['202']);
        });
        console.log(covers);
        var temp = '';
        res.render('feeds', {projects:resp.projects, images:covers});
      }
    })
}
