angular.module('angular', [])
.controller('TweetController', function() {
	var tweets = this;
	tweets.todos = [
		{text:'"You are the love of my life. Everything I have and everything I am is yours. Forever" - Barney Stinson'},
	    {text:'I\'m gonna teach you how to live'},
	    {text:'"La única razón para esperar un mes por alguien es que ella tenga 17 años y 11 meses. - Barney Stinson'},
	    {text:'Party Never Ends'},
	    {text:'Jaa! Y ustedes pensaron que solo era una cara bonita?'}
	];
	tweets.addTodo = function() {
		tweets.todos.unshift({text:tweets.todoText});
	    tweets.todoText = '';
	};
});