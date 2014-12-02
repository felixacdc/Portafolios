$(document).on("ready",function(){
			$("#posts").blogRSS("http://www.vidamrr.com/feeds/posts/default?alt=json-in-script&callback=?");

			$("#slider-miniaturas").slider({time: 7000});
});