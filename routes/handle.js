var request = require('request');
var config = require('../config');

exports.login = function(req, res){
    //console.log(req);
    if (req.query.state = "boo"){
        console.log(req.query.code);
        console.log('step1');
        request.post('https://www.behance.net/v2/oauth/token', 
            {form:{
                client_id:config.clientID, 
                client_secret:config.clientSecret, 
                code: req.query.code, 
                redirect_uri: 'http://bespoke.elastichance.com/handle',
                grant_type:'authorization_code'
        }}, function(error, resp, body){
            console.log('here?');
        });
    }else{
        console.log(req);
        console.log('step 2');
        res.render('user',{title:'hi'});
    }
}