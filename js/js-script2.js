!
function(o) {
	"use strict";
	function s() {
		var s = o(".js-c-anime-elem");
		0 < s.length && s.each(function(s, e) {
			var t = o(window),
			n = o(e),
			a = n.offset().top,
			i = t.scrollTop();
			a - t.height() + 10 < i && n.addClass("is-animated")
		})
	}
	window.onload = function() {
		setTimeout(function() {
			s()
		},
		100)
	},
	o(window).scroll(function() {
		s()
	})
} (jQuery),
function(a) {
	"use strict";
	var t = a(window),
	i = 300,
	o = "swing",
	r = navigator.userAgent;
	function n() {
		return a(".js-media-query").css("font-family").replace(/"/g, "")
	}
	document.addEventListener("DOMContentLoaded",
	function() {
		yall({
			lazyClass: "js-c-lazy",
			observeChanges: !0
		})
	}),
	a(function() {
		var s, e = !(-1 < r.indexOf("iPhone") || -1 < r.indexOf("Android") && -1 < r.indexOf("Mobile")) && (-1 < r.indexOf("iPad") || -1 < r.indexOf("Macintosh") && "ontouchend" in document || -1 < r.indexOf("Android")),
		t = a(window).innerWidth(),
		n = parseInt(a("body").css("min-width"));
		"0" != n && (s = t / n, e && a('meta[name="viewport"]').attr("content", "width=" + t + ", initial-scale=" + s))
	}),
	a(function() {
		var s;
		a(window).on("resize load",
		function() {
			clearTimeout(s),
			s = setTimeout(function() {
				var s, e;
				s = .01 * t.innerHeight(),
				e = .01 * t.innerWidth(),
				document.documentElement.style.setProperty("--vh", s + "px"),
				document.documentElement.style.setProperty("--vw", e + "px")
			},
			200)
		})
	}),
	a(function() {
		function s() {
			a('img[data-src*="_sp."], img[data-src*="_pc."]').each(function() {
				"sp" != n() ? a(this).attr("data-src", a(this).attr("data-src").replace("_sp.", "_pc.")) : a(this).attr("data-src", a(this).attr("data-src").replace("_pc.", "_sp."))
			}),
			a('img[src*="_sp."], img[src*="_pc."]').each(function() {
				"sp" != n() ? a(this).attr("src", a(this).attr("src").replace("_sp.", "_pc.")) : a(this).attr("src", a(this).attr("src").replace("_pc.", "_sp."))
			})
		}
		var e, t; (function() {
			if (0 < r.indexOf("Android")) return parseFloat(r.slice(r.indexOf("Android") + 8))
		} () <= 4.4 || (-1 != (t = r.toLowerCase()).indexOf("msie") || -1 != t.indexOf("trident"))) && (s(), a(window).on("resize",
		function() {
			clearTimeout(e),
			e = setTimeout(function() {
				s()
			},
			100)
		}))
	}),
	a('a[href="#top"]').on("click",
	function() {
		return a("body,html").animate({
			scrollTop: "0"
		},
		i, "swing"),
		!1
	}),
	a(window).on("load",
	function() {
		var s, e, t, n = location.hash; ! n || (s = a(n)).length && (e = a(".js-header").innerHeight(), t = s.offset().top - e, a("body,html").animate({
			scrollTop: t
		},
		i, o))
	}),
	a('a[href^="#"]:not([href="#top"]):not(".js-no-scroll")').on("click",
	function() {
		var s = a(this).attr("href"),
		e = a("#" === s || "" === s ? "html": s);
		if (e.length) {
			var t = a(".js-header").innerHeight(),
			n = e.offset().top - t;
			return a("body,html").animate({
				scrollTop: n
			},
			i, o),
			!1
		}
	});
	var c, l, d, h, s = a(".js-nav-btn"),
	e = a(".js-nav-content"),
	g = a(".js-nav-chara"),
	u = a(".js-nav-overlay"),
	f = a(".js-header"),
	m = "is-open";
	function p() {
		u.fadeOut(i),
		e.removeClass(m),
		s.removeClass(m),
		g.text("MENU"),
		f.removeClass(m)
	}
	s.on("click",
	function() {
		return e.hasClass(m) ? p() : (u.fadeIn(i), e.addClass(m), s.addClass(m), g.text("CLOSE"), f.addClass(m)),
		!1
	}),
	u.on("click",
	function() {
		p()
	}),
	e.find('a[href^="#"]:not([href="#top"]):not(".js-no-scroll")').on("click",
	function() {
		p()
	}),
	e.on("click",
	function(s) {
		s.stopPropagation()
	}),
