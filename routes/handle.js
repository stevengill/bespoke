var request = require('request');
var config = require('../config');

exports.login = function(req, res){
    //console.log(req);
    if (req.query.code){
        console.log(req.query.code);
        request.post('https://www.behance.net/v2/oauth/token', 
            {
                client_id:config.clientID, 
                client_secret:config.clientSecret, 
                code: req.query.code, 
                redirect_uri: 'http://bespoke.elastichance.com/handle',
                grant_type:'authorization_code'
        });
    }else{
        console.log(req);
        res.render('user',{title:'hi'});
    }
}