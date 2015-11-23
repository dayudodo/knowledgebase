var mongoose = require('mongoose');
var articleSchema = mongoose.Schema({
	title: {
		type: String,
		index: true,
		required: true
	},
	body: {
		type: String,
		required: true
	},
	category: {
		type: String,
		index: true,
		required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	other: {
		type: String
	}
});

var Article = module.exports = mongoose.model('Article',articleSchema);

module.exports.getArticles = function  (callback) {
	Article.find(callback);
};

module.exports.getArticleById = function(id, callback){
	Article.findById(id, callback);
}

module.exports.getArticlesByCategory = function(category, callback){
	var query={category: category};
	Article.find(query, callback);
}

module.exports.createArticle = function(newArticle, callback){
	newArticle.save(callback);
}

module.exports.updateArticle = function(id, data, callback){
	var query={_id: id};
	Article.findById(query, function(err, article){
		if (!article) {
			return next(new Error('could not find article!'));
		} else{
			article.title = data.title;
			article.body  = data.body;
			article.category = data.category;

			article.save(callback);
		};
	});
};

module.exports.removeArticle = function(id, callback){
	Article.find({_id: id}).remove(callback);
}

