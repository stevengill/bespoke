
/*
 * GET users listing.
 */

exports.collection = function(req, res){
  res.render('user', { title: 'Collection' });
};

