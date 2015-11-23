var express = require('express');
var router = express.Router();

var Category=require('../models/category'); //载入model模块

/* GET articles listing. */
router.get('/', function(req, res, next) {
  // res.send('Here is your articles List 这儿是你的文章列表');
  Category.getCategories(function(err, categories){
  	if (err) {console.log(err)};
  	res.json(categories);
  });
});

router.get('/:id', function(req, res, next) {
  // res.send('Here is your categories List 这儿是你的文章列表');
  Category.getCategoryById(req.params.id, function(err, category){
  	if (err) {console.log(err)};
  	res.json(category);
  });
});


module.exports = router;
