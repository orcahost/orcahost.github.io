$(document).ready(function() {

	$( "#icon1" ).click(function() {
			$( "#sideCardTitle" ).fadeOut(function() {
				$( "#sideCardTitle" ).text("What is Orca?").fadeIn();

			});$( "#sideCardDesc" ).fadeOut(function() {
			$( "#sideCardDesc" ).html(
					"Orca is a simple and easy interface to link your social accounts and online platforms in one location. One link." + "<br/><br/>"
					+ "It is designed to be an all in one solution for all your networking needs for your social media accounts and online portfolios to enable users to access of their friends Orca accounts to connect easily." + "<br/><br/>"
				).fadeIn();
			});
			$( "#sideCardImage" ).fadeIn();
	});

	$( "#icon2" ).click(function() {
		$( "#sideCardTitle" ).fadeOut(function() {
			$( "#sideCardTitle" ).text("How do I use it?").fadeIn();
		});$( "#sideCardDesc" ).fadeOut(function() {
			$( "#sideCardDesc" ).html(
				"Orca is extremely easy to get started with =]" + "<br/><br/>"
				+ "For social medias, just enter your handles." + "<br/><br/>"
				+ "If you have custom links, just choose one of the following that’s not a specific platform and copy & paste your URL." 
			).fadeIn();
		});
		$( "#sideCardImage" ).fadeIn();
	});

	$( "#icon3" ).click(function() {
		$( "#sideCardTitle" ).fadeOut(function() {
			$( "#sideCardTitle" ).text("Who’s it for?").fadeIn();
		});$( "#sideCardDesc" ).fadeOut(function() {
			$( "#sideCardDesc" ).html(
				"Orca is for everyone! No matter who you are, you can find a use with Orca." + "<br/><br/>"
				+ "It’s not just for social media websites. You can link articles, you own spotify playlist, your github portfolio, web design link, Uber profile, Yelp review - " + "<br/><br/>"
				+ "The possibilities are endless!"
			).fadeIn();
		});
		$( "#sideCardImage" ).fadeIn();
	});

	$( "#icon4" ).click(function() {
		$( "#sideCardTitle" ).fadeOut(function() {
			$( "#sideCardTitle" ).text("FAQ").fadeIn();
		});$( "#sideCardDesc" ).fadeOut(function() {
			$( "#sideCardDesc" ).html(
				"Check out few of the most commonly asked questions!" + "<br/><br/>"
				+ "<div class='qCard'>Is this free?</div><div class='aCard'>The normal tier is free! A premium version will be released very soon with a lot of awesome addtional features.</div><br/>"
				+ "<div class='qCard'>How many can I add to my profile?</div><div class='aCard'>Right now, you can add up to 12 platforms to your profile!</div><br/>"
				+ "<div class='qCard'>What platform is it on?</div><div class='aCard'>The normal tier is free! A premium version will be released very soon with a lot of awesome features.</div><br/>"
				+ "<div class='qCard'>How can I have my own app/website as an option to add?</div><div class='aCard'>Please contact me at terry@orca.host.</div><br/>"
				+ "<div class='qCard'>What’s next for Orca?</div><div class='aCard'>We have some stuff in the works to increase your experiences of using Orca and to make it worthwhile your time. Stayed tuned y’all!</div><br/>"
				+ "<div class='qCard'>Help! There’s a bug and I can’t do something (unable to log in/sign up, add platform, add people, etc)</div><div class='aCard'>Oh no!! We’re really sorry that you had to experience that. Please please message me at terry@orca.host and I promise you that we will get right on it.</div><br/>"
			).fadeIn();
		});
		$( "#sideCardImage" ).fadeOut(function() {
			// $( "#sideCardDesc" ).html(
			// 	"Check out few of the most commonly asked questions!" + "<br/><br/>"
			// ).fadeIn();
		});

	});

});