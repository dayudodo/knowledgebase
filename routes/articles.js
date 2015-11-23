var express = require('express');
var router = express.Router();

var Article=require('../models/article'); //载入model模块

/* GET articles listing. */
router.get('/', function(req, res, next) {
  // res.send('Here is your articles List 这儿是你的文章列表');
  Article.getArticles(function(err, articles){
  	if (err) {console.log(err)};
  	res.json(articles);
  });
});

router.get('/:id', function(req, res, next) {
  // res.send('Here is your articles List 这儿是你的文章列表');
  Article.getArticleById(req.params.id, function(err, article){
  	if (err) {console.log(err)};
  	res.json(article);
  });
});

router.get('/category/:category', function(req, res, next) {
  // res.send('Here is your articles List 这儿是你的文章列表');
  Article.getArticlesByCategory(req.params.category, function(err, articles){
  	if (err) {console.log(err)};
  	res.json(articles);
  });
});

router.post('/',function(req, res, next){
	var newArticle = new Article({
		title: req.body.title,
		body: req.body.body,
		category: req.body.category
	});
	Article.createArticle(newArticle, function(err, article){
		if (err) {console.log(err)};
		res.location('/articles');
		res.redirect('/articles');
	})
});

router.put('/',function(req, res, next) {
	var id = req.body.id;
	var data = {
		title: req.body.title,
		body: req.body.body,
		category: req.body.category
	};
	Article.updateArticle(id, data, function(err, article){
		if (err) {console.log(err)};
		res.location('/articles');
		res.redirect('/articles');
	})
})

router.delete('/',function(req, res, next) {
	var id = req.body.id;
	var data = {
		title: req.body.title,
		body: req.body.body,
		category: req.body.category
	};
	Article.removeArticle(id, function(err, article){
		if (err) {console.log(err)};
		res.location('/articles');
		res.redirect('/articles');
	})
})
module.exports = router;
