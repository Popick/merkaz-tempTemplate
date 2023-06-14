

const firebaseConfig = {
  apiKey: "AIzaSyAKWFnncG_KiQbPMzbXElQqGprLXm9livc",
  authDomain: "amalaccelerator1.firebaseapp.com",
  databaseURL: "https://amalaccelerator1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "amalaccelerator1",
  storageBucket: "amalaccelerator1.appspot.com",
  messagingSenderId: "471111114984",
  appId: "1:471111114984:web:92a33cfcf8c873a991295d",
  measurementId: "G-MCQ0E0SVYF"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = firebase.database();

function writeUserData(userId, name, email, imageUrl) {
	firebase.database().ref('users/' + userId).set({
	  username: name,
	  email: email,
	  profile_picture : imageUrl
	});
  }





(function($) {
	'use strict';
	$(function() {
		$('.owl-carousel-projects').owlCarousel({
			loop: true,
			stagePadding: 100,
			margin: 20,
			nav: false,
			responsive: {
				0: {
					items: 2
				},
				600: {
					items: 3
				},
				1000: {
					items: 4
				}
			}
		})
		var wWidth = $(window).width();
		var menuWidth = $(".navbar-collapse").width();
		$(".navbar-toggler").click(function() {
			$('.collapsing').toggleClass('show');
			$('body').addClass("sidebar-overlay");
		});
		$("#mobile-menu-overlay, .close-menu, .nav-link").click(function() {
			$('.collapse').toggleClass('show');
			$('body').removeClass("sidebar-overlay");
		});

		$("a.nav-link").on('click', function(event) {
			if (this.hash !== "") {
				event.preventDefault();
				var hash = this.hash;
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 800, function() {

					window.location.hash = hash;
				});
			}
		});

		AOS.init({
			offset: 0,
			duration: 800,
			easing: 'ease-in-quad',
			delay: 100,
		});

		$("#testimonial-flipster").flipster({
			style: 'coverflow',
			spacing: -.9,
			nav: false,
			loop: true,
			buttons: false,
		});

		$('.flipster-custom-nav-link').click(function() {
			var navlinkSelected = parseInt(this.title);
			$('.flipster-custom-nav-link').removeClass("active");
			$(this).addClass("active");
			$("#testimonial-flipster").flipster('jump', navlinkSelected);
		});

		$('#toggle-switch').click(function() {
			if ($('#toggle-switch').is(':checked')) {
				$('.monthly').addClass("text-active");
				$('.yearly').removeClass("text-active");
				$("#toggle-switch").attr("checked", "checked");
			} else {
				$('.monthly').removeClass("text-active");
				$('.yearly').addClass("text-active");
				$("#toggle-switch").removeAttr("checked");
			}
		});

		// counter Satisfied clients
		var maxScVal = 97;
		var isc = parseInt($('.scVal').text());
		var tim;
		function run() {
			tim = setInterval(function() {
				if (isc >= maxScVal) {
					clearInterval(tim);
					return;
				}
				$('.scVal').text(++isc);
			}, 50);
		}
		run();
		//Counters

		// counter finished Projects
		var maxfPVal = 12;
		var ifP = parseInt($('.fpVal').text());
		var timfP;
		function runfP() {
			timfP = setInterval(function() {

				if (ifP >= maxfPVal) {
					clearInterval(timfP);
					return;
				}
				$('.fpVal').text(++ifP);

			}, 100);
		}
		runfP();
		//finished Projects

		//counter Team Members
		var maxtMVal = 125;
		var itm = parseInt($('.tMVal').text());
		var timtM;
		function runtM() {
			timtM = setInterval(function() {
				if (itm >= maxtMVal) {
					clearInterval(timtM);
					return;
				}
				$('.tMVal').text(++itm);
			}, 100);
		}
		runtM();
		//Team Members

		//counter blog post
		var maxbPVal = 20;
		var ibP = parseInt($('.bPVal').text());
		var timbP;
		function runbP() {
			timbP = setInterval(function() {
				if (ibP >= maxbPVal) {
					clearInterval(timbP);
					return;
				}
				$('.bPVal').text(++ibP);

			}, 100);
		}
		runbP();
		//blog post

	});
})(jQuery);

$(document).ready(function() {
	$('#testbutton').click(function() {
	  console.log('Button pressed!');
	  writeUserData("213","name","email","imageUrl");
	
	});
  });


