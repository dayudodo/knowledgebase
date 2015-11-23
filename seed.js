var express = require('express');
var app = require('./app');
var Article=require('./models/article'); //载入model模块

var articleArray = [new Article({
	title: "article one",
	body: "here is one",
	category: "Education",
}), 
new Article({
	title: "article two",
	body: "here is something one",
	category: "Education",
}),
new Article({
	title: "article three",
	body: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
	category: "中文IT",
}),
new Article({
	title: "article four",
	body: "对中文的支持也会非常好的！",
	category: "programming",
})
];
// console.log(articleArray);

// Save all the seed article.
for(var index in articleArray){
	// console.log(articleArray[index]);
	articleArray[index].save(function(err, article){
		if (err) {
			console.log(err);
		}
		else{
			console.log("ok");
			return true;
		}
	});
}
// Article.createArticle(newArticle, function(err, article){
// 	if (err) {
// 		console.log(err);
// 	}
// 	else{
// 		console.log("ok");
// 	}
// });
