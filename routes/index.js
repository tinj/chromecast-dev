/*
 * GET home page.
 */

exports.index = function(req, res){
  res.sendfile('./views/index.html');
  // res.render('index');
};

exports.receiver = function(req, res){
  res.sendfile('./views/myreceiver.html');
  // res.render('index');
};