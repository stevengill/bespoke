var request = require('request');
var config = require('../config');

exports.search1 = function(req, res){
  res.render('search', { title: 'steve' });
};

exports.searchrequest = function(req, res){
    //two things
    //create collection
    //send search request
    request('https://www.behance.net/v2/projects?tags=fashion&api_key=2Sfl5ZgmEkrJMIG8TRhecHnFgNO0QHTw', function (error, response, body) {
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
