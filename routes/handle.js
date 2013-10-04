var request = require('request');
var config = require('../config');

exports.login = function(req, res){
    if (req.query.state = "boo"){
        request.post('https://www.behance.net/v2/oauth/token', 
            {form:{
                client_id:config.clientID, 
                client_secret:config.clientSecret, 
                code: req.query.code, 
                redirect_uri: 'http://bespoke.elastichance.com/handle',
                grant_type:'authorization_code'
        }}, function(error, resp, body){
            var resp = JSON.parse(body);
            req.session.access_token = resp.access_token;
            config.accessToken = resp.access_token;

            request.get( config.behanceURL + "users/" + userid + 'collections', function(e,r,b) {
              res.render('user', {
                image: resp.user.images[138],
                name: resp.user.display_name,
                collections: b.collections
              });
            });
        });
    }
}
