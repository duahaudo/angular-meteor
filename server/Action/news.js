Meteor.methods({
	'news.crawler': function(link) {
		$ = cheerio.load(HTTP .get(link).content);
		return $('body').html().trim();
	}
});