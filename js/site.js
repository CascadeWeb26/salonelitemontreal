/* ============================================================
   Salon Élite — shared site behaviour
   AOS init, cookie consent, nav scroll state, mobile menu.
   ============================================================ */
(function () {
  "use strict";

  // --- AOS scroll reveals ---
  function initAOS() {
    if (window.AOS) {
      AOS.init({ duration: 900, easing: "ease-out-quart", once: true, offset: 80 });
    }
  }
  if (document.readyState !== "loading") initAOS();
  else window.addEventListener("DOMContentLoaded", initAOS);

  window.addEventListener("DOMContentLoaded", function () {

    // --- Year stamp ---
    document.querySelectorAll("[data-year]").forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });

    // --- Navbar scrolled state ---
    var nav = document.querySelector("[data-nav]");
    if (nav) {
      var onScroll = function () {
        nav.classList.toggle("scrolled", window.scrollY > 40);
      };
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    // --- Mobile menu toggle ---
    var burger = document.querySelector("[data-burger]");
    var menu = document.querySelector(".nav-r");

    var overlay = document.createElement("div");
    overlay.className = "nav-overlay";
    document.body.appendChild(overlay);

    function closeMenu() {
      if (!menu) return;
      menu.classList.remove("open");
      burger.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
      overlay.classList.remove("show");
      document.body.style.overflow = "";
    }

    if (burger && menu) {
      burger.addEventListener("click", function () {
        var open = menu.classList.toggle("open");
        burger.classList.toggle("open", open);
        burger.setAttribute("aria-expanded", String(open));
        overlay.classList.toggle("show", open);
        document.body.style.overflow = open ? "hidden" : "";
      });
      menu.querySelectorAll("a").forEach(function (a) {
        a.addEventListener("click", closeMenu);
      });
      overlay.addEventListener("click", closeMenu);
    }

    // --- Cookie consent ---
    var cookie = document.querySelector("[data-cookie]");
    if (cookie) {
      var KEY = "se_cookie_ok";
      if (!localStorage.getItem(KEY)) {
        setTimeout(function () { cookie.classList.add("show"); }, 1400);
      }
      cookie.querySelectorAll("[data-cookie-close]").forEach(function (b) {
        b.addEventListener("click", function () {
          localStorage.setItem(KEY, "1");
          cookie.classList.remove("show");
        });
      });
    }

    // --- Gentle blob parallax on scroll ---
    var blobs = [].slice.call(document.querySelectorAll(".blob[data-speed]"));
    if (blobs.length) {
      var ticking = false;
      var update = function () {
        var y = window.scrollY;
        blobs.forEach(function (b) {
          var s = parseFloat(b.getAttribute("data-speed")) || 0.1;
          b.style.setProperty("--py", (y * s).toFixed(1) + "px");
        });
        ticking = false;
      };
      window.addEventListener("scroll", function () {
        if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
      }, { passive: true });
    }
  });
})();
