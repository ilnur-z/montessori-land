
$(function() {

	$(document).ready(function() {

		$(".loader_inner").fadeOut();
		$(".loader").delay(400).fadeOut("fast");

		$(".top_text h1").animated("fadeInDown", "fadeOutUp");
		$(".top_text h3").animated("fadeInUp", "fadeOutDown");
		$(".contact_list").animated("fadeInRightBig", "fadeOutRightBig");


	}); 

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".menu_btn").click(function(){
  		$(this).toggleClass("open");
  		$(".menu").slideToggle();
  		$(".top_text").slideToggle();
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	function handleResize() {
		$(".main_head").css("height",$(window).height());
	}
	$(window).resize(handleResize);
	handleResize();
});

