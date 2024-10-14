!function(a) {
    "use strict";
    var e, t, n, r = localStorage.getItem("minia-language"), o = "en";

    function i(t) {
        if (document.getElementById("header-lang-img")) {
            if ("en" == t) {
                document.getElementById("header-lang-img").src = "assets/images/flags/us.jpg";
            } else if ("sp" == t) {
                document.getElementById("header-lang-img").src = "assets/images/flags/spain.jpg";
            } else if ("gr" == t) {
                document.getElementById("header-lang-img").src = "assets/images/flags/germany.jpg";
            } else if ("it" == t) {
                document.getElementById("header-lang-img").src = "assets/images/flags/italy.jpg";
            } else if ("ru" == t) {
                document.getElementById("header-lang-img").src = "assets/images/flags/russia.jpg";
            }
            localStorage.setItem("minia-language", t);
            if (null == (r = localStorage.getItem("minia-language"))) i(o);
            a.getJSON("assets/lang/" + r + ".json", function(t) {
                a("html").attr("lang", r);
                a.each(t, function(t, e) {
                    if ("head" === t) a(document).attr("title", e.title);
                    a("[data-key='" + t + "']").text(e);
                });
            });
        }
    }

    function s() {
        var t = document.querySelectorAll(".counter-value");
        t.forEach(function(r) {
            !function t() {
                var e = +r.getAttribute("data-target"),
                    a = +r.innerText,
                    n = e / 250;
                n < 1 && (n = 1);
                a < e ? (r.innerText = (a + n).toFixed(0), setTimeout(t, 1)) : r.innerText = e;
            }();
        });
    }

    function d() {
        for (var t = document.getElementById("topnav-menu-content").getElementsByTagName("a"), e = 0, a = t.length; e < a; e++) {
            if (t[e] && t[e].parentElement && "nav-item dropdown active" === t[e].parentElement.getAttribute("class")) {
                t[e].parentElement.classList.remove("active");
                if (t[e].nextElementSibling) t[e].nextElementSibling.classList.remove("show");
            }
        }
    }

    function l(t) {
        document.getElementById(t).checked = !0;
    }

    function c() {
        document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement || a("body").removeClass("fullscreen-enable");
    }

    a("#side-menu").metisMenu();
    s();
    e = document.body.getAttribute("data-sidebar-size");
    a(window).on("load", function() {
        a(".switch").on("switch-change", function() {
            toggleWeather();
        });
        if (1024 <= window.innerWidth && window.innerWidth <= 1366) {
            document.body.setAttribute("data-sidebar-size", "sm");
            l("sidebar-size-small");
        }
    });

    a("#vertical-menu-btn").on("click", function(t) {
        t.preventDefault();
        a("body").toggleClass("sidebar-enable");
        console.log('colapsando!!')
        if (992 <= a(window).width()) {
            if (null == e) {
                if (null == document.body.getAttribute("data-sidebar-size") || "lg" == document.body.getAttribute("data-sidebar-size")) {
                    document.body.setAttribute("data-sidebar-size", "sm");
                } else {
                    document.body.setAttribute("data-sidebar-size", "lg");
                }
            } else if ("md" == e) {
                if ("md" == document.body.getAttribute("data-sidebar-size")) {
                    document.body.setAttribute("data-sidebar-size", "sm");
                } else {
                    document.body.setAttribute("data-sidebar-size", "md");
                }
            } else {
                if ("sm" == document.body.getAttribute("data-sidebar-size")) {
                    document.body.setAttribute("data-sidebar-size", "lg");
                } else {
                    document.body.setAttribute("data-sidebar-size", "sm");
                }
            }
        }
    });

    a("#sidebar-menu a").each(function() {
        var t = window.location.href.split(/[?#]/)[0];
        if (this.href == t) {
            a(this).addClass("active");
            a(this).parent().addClass("mm-active");
            a(this).parent().parent().addClass("mm-show");
            a(this).parent().parent().prev().addClass("mm-active");
            a(this).parent().parent().parent().addClass("mm-active");
            a(this).parent().parent().parent().parent().addClass("mm-show");
            a(this).parent().parent().parent().parent().parent().addClass("mm-active");
        }
    });

    a(document).ready(function() {
        var t;
        if (0 < a("#sidebar-menu").length && 0 < a("#sidebar-menu .mm-active .active").length) {
            if (300 < (t = a("#sidebar-menu .mm-active .active").offset().top)) {
                t -= 300;
                a(".vertical-menu .simplebar-content-wrapper").animate({
                    scrollTop: t
                }, "slow");
            }
        }
    });

    a(".navbar-nav a").each(function() {
        var t = window.location.href.split(/[?#]/)[0];
        if (this.href == t) {
            a(this).addClass("active");
            a(this).parent().addClass("active");
            a(this).parent().parent().addClass("active");
            a(this).parent().parent().parent().addClass("active");
            a(this).parent().parent().parent().parent().addClass("active");
            a(this).parent().parent().parent().parent().parent().addClass("active");
            a(this).parent().parent().parent().parent().parent().parent().addClass("active");
        }
    });

    a('[data-toggle="fullscreen"]').on("click", function(t) {
        t.preventDefault();
        a("body").toggleClass("fullscreen-enable");
        if (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement) {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        } else {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
            }
        }
    });

    document.addEventListener("fullscreenchange", c);
    document.addEventListener("webkitfullscreenchange", c);
    document.addEventListener("mozfullscreenchange", c);

    function toggleDropdown() {
        if (document.getElementById("topnav-menu-content")) {
            for (var t = document.getElementById("topnav-menu-content").getElementsByTagName("a"), e = 0, a = t.length; e < a; e++) {
                t[e].onclick = function(t) {
                    if (t && t.target && "#" === t.target.getAttribute("href")) {
                        t.target.parentElement.classList.toggle("active");
                        if (t.target.nextElementSibling) {
                            t.target.nextElementSibling.classList.toggle("show");
                        }
                    }
                };
            }
            window.addEventListener("resize", d);
        }
    }
    toggleDropdown();

    [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]')).map(function(t) {
        return new bootstrap.Tooltip(t);
    });

    [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function(t) {
        return new bootstrap.Popover(t);
    });

    [].slice.call(document.querySelectorAll(".toast")).map(function(t) {
        return new bootstrap.Toast(t);
    });

    window.sessionStorage && ((t = sessionStorage.getItem("is_visited")) ? a("#" + t).prop("checked", !0) : sessionStorage.setItem("is_visited", "layout-ltr"));

    if (r && "null" != r && r !== o) {
        i(r);
    }

    a(".language").on("click", function(t) {
        i(a(this).attr("data-lang"));
    });

    a(window).on("load", function() {
        a("#status").fadeOut();
        a("#preloader").delay(350).fadeOut("slow");
    });

    n = document.getElementsByTagName("body")[0];

    a(".right-bar-toggle").on("click", function(t) {
        a("body").toggleClass("right-bar-enabled");
    });

    a("#mode-setting-btn").on("click", function(t) {
        if (n.hasAttribute("data-bs-theme") && "dark" == n.getAttribute("data-bs-theme")) {
            document.body.setAttribute("data-bs-theme", "light");
            document.body.setAttribute("data-topbar", "light");
            document.body.setAttribute("data-sidebar", "light");
            document.body.setAttribute("data-sidebar-size", "lg");
            document.body.setAttribute("data-preloader", "dark");
            localStorage.setItem("defaultTheme", "light");
        } else {
            document.body.setAttribute("data-bs-theme", "dark");
            document.body.setAttribute("data-topbar", "dark");
            document.body.setAttribute("data-sidebar", "dark");
            document.body.setAttribute("data-sidebar-size", "lg");
            document.body.setAttribute("data-preloader", "light");
            localStorage.setItem("defaultTheme", "dark");
        }
    });
}(jQuery);
