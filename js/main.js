function loadSite() {
    "use strict";

    //preloader
   	setTimeout(function() {
        $('#preloader').fadeOut('slow', function() {
        });
    }, 300);

    // Counter
	$(function ($) {
	    animatecounters();
	});

	function animatecounters() {
	    $('.counter-value').each(count);
	    function count(options) {
	        var $this = $(this);
	        options = $.extend({}, options || {}, $this.data('countToOptions') || {});
	        $this.countTo(options);
	    }
	}

	// Lightbox
	$('.lightbox').magnificPopup({
		type: 'image',
			mainClass: 'mfp-with-zoom mfp-fade',
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function(openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		}
	});

	// SmoothScroll
	$('.scroll-sub').smoothScroll({
		speed: 900,
		offset: 0,
		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out'
		}
	});

	// PopUp
	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
	  disableOn: 700,
	  type: 'iframe',
	  mainClass: 'mfp-with-zoom mfp-fade',

	  fixedContentPos: true
	});

	// Contact Form
	var $contactForm = $('#contact-form');
	$contactForm.submit(function(e) {
		e.preventDefault();
		$.ajax({
			url: '//formspree.io/subhojit1992.mondal@gmail.com',
			method: 'POST',
			data: $(this).serialize(),
			dataType: 'json',
			beforeSend: function() {
				$contactForm.append('<div class="alert alert--loading">Sending message…</div>');
			},
			success: function(data) {
				$contactForm.find('.alert--loading').hide();
				$contactForm.append('<div class="alert alert--success">Message sent!</div>');
			},
			error: function(err) {
				$contactForm.find('.alert--loading').hide();
				$contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
			}
		});
	});

	//navigation
	$('#nav-open').click(function() {
		$('#menu').toggleClass('nav-open');
	});

	function handler1() {
    	document.getElementById("mySidenav").style.width = "100%";
	    document.getElementById("main").style.marginRight = "100%";
	    $('body').toggleClass('overflowy-hidden');
	    $('.sidenav').toggleClass('overflowy-auto');
    	$(this).one("click", handler2);
    	$('.skillbar').each(function(){
			$(this).find('.skillbar-bar').animate({
				width:jQuery(this).attr('data-percent')
			},2000);
		});
	}

	function handler2() {
	    document.getElementById("mySidenav").style.width = "0";
	    document.getElementById("main").style.marginRight = "0";
	    $('body').removeClass('overflowy-hidden');
	    $('.sidenav').toggleClass('overflowy-auto');
	    $(this).one("click", handler1);
	}
	$("#nav-open").one("click", handler1);

};

// LoadSite
$(window).load(function(){
    loadSite();
});