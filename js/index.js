console.log("Your index.js file is loaded correctly!");
var document = window.document;

/*==== Back to Top ====*/
mybutton = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/*==== Preloader ====*/

function fade() {
	$('.preloader').fadeOut("slow");
	}
	setTimeout(fade, 1000);