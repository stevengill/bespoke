var request = require('request');


exports.search1 = function(req, res){
  res.render('search', { title: 'steve' });
};

exports.searchrequest = function(){
    request('https://www.behance.net/v2/projects?tags=food&api_key=2Sfl5ZgmEkrJMIG8TRhecHnFgNO0QHTw', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) // Print the google web page.
      }
    })
}
