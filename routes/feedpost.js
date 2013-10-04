var request = require('request');
var config = require('../config');

exports.feedpost1 = function(req, res){
    request.post(config.behanceURL+'collections/'+req.session.collectionID+'/projects?access_token='+req.session.accessToken, {form:{
            projects: req.query.id}}, function(error, response, body){
            var par = JSON.parse(body);
                console.log('error: '+ error);
                console.log('project added to collection?');
                console.log('body: '+ body);
    });
}