/* ============================================================
   Salon Élite — vanilla Tweaks panel (palette switcher)
   Follows the host edit-mode protocol without any framework.
   Defaults live inline in each HTML as window.__TWEAK_DEFAULTS
   inside an EDITMODE block so the host can persist changes.
   ============================================================ */
(function () {
  "use strict";

  // --- Curated palettes, all within the locked blush / cream / gold world ---
  var PALETTES = {
    blushDore: {
      name: "Blush & Doré",
      vars: {
        "--cream":"#FBF6F1","--cream-2":"#F6ECE4","--blush":"#F2D9D2","--blush-2":"#E9C3BE",
        "--blush-deep":"#C98B86","--gold":"#C49A5E","--gold-soft":"#E3C9A0",
        "--ink":"#3A2C2A","--ink-soft":"#6E5A55","--muted":"#9A857F",
        "--line":"rgba(58,44,42,.14)","--hero-a":"#FBF6F1","--hero-b":"#F4DED7","--hero-c":"#ECC9C2"
      },
      chips:["#F2D9D2","#C98B86","#C49A5E"]
    },
    rosePoudre: {
      name: "Rose Poudré",
      vars: {
        "--cream":"#FCF4F4","--cream-2":"#F8E7E9","--blush":"#F4D2D8","--blush-2":"#EBB9C2",
        "--blush-deep":"#CE8593","--gold":"#C99FA0","--gold-soft":"#EBD2CE",
        "--ink":"#3E2A2E","--ink-soft":"#71565B","--muted":"#9E868B",
        "--line":"rgba(62,42,46,.14)","--hero-a":"#FCF4F4","--hero-b":"#F6DCE1","--hero-c":"#EFC6CF"
      },
      chips:["#F4D2D8","#CE8593","#C99FA0"]
    },
    champagne: {
      name: "Champagne",
      vars: {
        "--cream":"#FAF6EE","--cream-2":"#F1E7D6","--blush":"#ECD9C4","--blush-2":"#DEC3A4",
        "--blush-deep":"#BE9A6E","--gold":"#B98B4E","--gold-soft":"#E7D2AE",
        "--ink":"#36302A","--ink-soft":"#6B6056","--muted":"#978B7C",
        "--line":"rgba(54,48,42,.14)","--hero-a":"#FAF6EE","--hero-b":"#F2E6D2","--hero-c":"#E8D2B4"
      },
      chips:["#ECD9C4","#BE9A6E","#B98B4E"]
    },
    terracotta: {
      name: "Terracotta",
      vars: {
        "--cream":"#FAF1EA","--cream-2":"#F3E0D3","--blush":"#EAC9B6","--blush-2":"#D9A589",
        "--blush-deep":"#B9704E","--gold":"#BB6E45","--gold-soft":"#E6C3A4",
        "--ink":"#3A281E","--ink-soft":"#6F5345","--muted":"#9C7A66",
        "--line":"rgba(58,40,30,.15)","--hero-a":"#FAF1EA","--hero-b":"#F1D9C6","--hero-c":"#E6BFA3"
      },
      chips:["#EAC9B6","#B9704E","#BB6E45"]
    }
  };

  var defaults = window.__TWEAK_DEFAULTS || { palette:"blushDore", grain:true, motion:true };
  var state = {
    palette: defaults.palette in PALETTES ? defaults.palette : "blushDore",
    grain: defaults.grain !== false,
    motion: defaults.motion !== false
  };

  function applyPalette(key) {
    var p = PALETTES[key]; if (!p) return;
    var root = document.documentElement;
    for (var v in p.vars) root.style.setProperty(v, p.vars[v]);
  }
  function applyAll() {
    applyPalette(state.palette);
    document.body.setAttribute("data-grain", state.grain ? "on" : "off");
    document.body.setAttribute("data-motion", state.motion ? "on" : "off");
  }

  function persist(edits) {
    try { window.parent.postMessage({ type:"__edit_mode_set_keys", edits:edits }, "*"); } catch(e){}
  }

  // --- Build panel lazily ---
  var panel;
  function buildPanel() {
    if (panel) return panel;
    panel = document.createElement("div");
    panel.className = "tw-panel";
    panel.setAttribute("data-omelette-chrome","");
    var chips = Object.keys(PALETTES).map(function (key) {
      var p = PALETTES[key];
      return '<button class="tw-chip" role="radio" data-pal="'+key+'" aria-checked="'+(state.palette===key)+'" title="'+p.name+'">'+
        '<i style="background:'+p.chips[0]+'"></i><i style="background:'+p.chips[1]+'"></i><i style="background:'+p.chips[2]+'"></i>'+
        '<span>'+p.name+'</span></button>';
    }).join("");
    panel.innerHTML =
      '<div class="tw-hd"><b>Tweaks</b><button class="tw-x" aria-label="Fermer">✕</button></div>'+
      '<div class="tw-body">'+
        '<div class="tw-sect">Palette</div>'+
        '<div class="tw-chips" role="radiogroup">'+chips+'</div>'+
        '<div class="tw-row"><label>Grain de film</label>'+
          '<button class="tw-toggle" data-tw="grain" data-on="'+(state.grain?1:0)+'"><i></i></button></div>'+
        '<div class="tw-row"><label>Animations</label>'+
          '<button class="tw-toggle" data-tw="motion" data-on="'+(state.motion?1:0)+'"><i></i></button></div>'+
      '</div>';
    document.body.appendChild(panel);

    panel.querySelector(".tw-x").addEventListener("click", dismiss);
    panel.querySelectorAll(".tw-chip").forEach(function (b) {
      b.addEventListener("click", function () {
        state.palette = b.getAttribute("data-pal");
        panel.querySelectorAll(".tw-chip").forEach(function (c) {
          c.setAttribute("aria-checked", c === b);
        });
        applyAll(); persist({ palette: state.palette });
      });
    });
    panel.querySelectorAll(".tw-toggle").forEach(function (t) {
      t.addEventListener("click", function () {
        var k = t.getAttribute("data-tw");
        state[k] = !state[k];
        t.setAttribute("data-on", state[k] ? 1 : 0);
        applyAll(); var e = {}; e[k] = state[k]; persist(e);
      });
    });
    return panel;
  }

  function open(){ buildPanel().classList.add("open"); }
  function close(){ if (panel) panel.classList.remove("open"); }
  function dismiss(){ close(); try{ window.parent.postMessage({type:"__edit_mode_dismissed"},"*"); }catch(e){} }

  window.addEventListener("message", function (e) {
    var t = e && e.data && e.data.type;
    if (t === "__activate_edit_mode") open();
    else if (t === "__deactivate_edit_mode") close();
  });

  // Announce availability + apply saved state on load
  function init(){
    applyAll();
    try { window.parent.postMessage({ type:"__edit_mode_available" }, "*"); } catch(e){}
  }
  if (document.body) init();
  else document.addEventListener("DOMContentLoaded", init);
})();
