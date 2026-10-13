(function () {
  "use strict";

  var PIXEL_COLORS = [
    "rgba(184, 180, 200, 0.55)",
    "rgba(85, 230, 193, 0.42)",
    "rgba(255, 216, 77, 0.38)",
    "rgba(245, 242, 232, 0.28)"
  ];

  function cloudSvg(id) {
    return (
      '<svg viewBox="0 0 440 180" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      "<defs>" +
      '<filter id="' +
      id +
      '" x="-12%" y="-18%" width="124%" height="140%">' +
      '<feGaussianBlur in="SourceGraphic" stdDeviation="1.6"/>' +
      "</filter>" +
      "</defs>" +
      '<g filter="url(#' +
      id +
      ')">' +
      '<ellipse cx="88" cy="118" rx="80" ry="40" fill="#f7fafc"/>' +
      '<ellipse cx="176" cy="86" rx="96" ry="56" fill="#ffffff"/>' +
      '<ellipse cx="270" cy="102" rx="88" ry="46" fill="#f4f8fb"/>' +
      '<ellipse cx="344" cy="120" rx="66" ry="34" fill="#ffffff"/>' +
      '<ellipse cx="214" cy="128" rx="124" ry="34" fill="#eef4f8"/>' +
      '<ellipse cx="168" cy="78" rx="58" ry="30" fill="#ffffff"/>' +
      '<ellipse cx="252" cy="92" rx="50" ry="24" fill="#ffffff"/>' +
      "</g>" +
      "</svg>"
    );
  }

  var root = document.documentElement;
  var canvas;
  var cloudsWrap;
  var ctx;
  var pixels = [];
  var rafId = 0;
  var running = false;
  var mouseX = 0.5;
  var mouseY = 0.5;
  var targetX = 0.5;
  var targetY = 0.5;
  var idle = true;
  var lastMove = 0;
  var hasPointerListener = false;

  function theme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function reducedMotion() {
    try {
      return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch (e) {
      return false;
    }
  }

  function finePointer() {
    try {
      return window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    } catch (e) {
      return window.matchMedia("(pointer: fine)").matches;
    }
  }

  function pixelCount() {
    var w = window.innerWidth;
    if (reducedMotion()) {
      return w < 768 ? 8 : 14;
    }
    if (!finePointer()) {
      return w < 768 ? 12 : 18;
    }
    return w < 768 ? 18 : 36;
  }

  function cloudCount() {
    if (reducedMotion()) {
      return 4;
    }
    if (!finePointer()) {
      return 5;
    }
    return document.body.classList.contains("work-layout") ? 5 : 8;
  }

  function ensureLayer() {
    var layer = document.querySelector(".theme-atmosphere");
    if (layer) {
      canvas = layer.querySelector(".theme-atmosphere-pixels");
      cloudsWrap = layer.querySelector(".theme-atmosphere-clouds");
      ctx = canvas ? canvas.getContext("2d", { alpha: true }) : null;
      return layer;
    }
    layer = document.createElement("div");
    layer.className = "theme-atmosphere";
    layer.setAttribute("aria-hidden", "true");
    canvas = document.createElement("canvas");
    canvas.className = "theme-atmosphere-pixels";
    cloudsWrap = document.createElement("div");
    cloudsWrap.className = "theme-atmosphere-clouds";
    layer.appendChild(canvas);
    layer.appendChild(cloudsWrap);
    document.body.insertBefore(layer, document.body.firstChild);
    ctx = canvas.getContext("2d", { alpha: true });
    return layer;
  }

  function resizeCanvas() {
    if (!canvas || !ctx) {
      return;
    }
    var dpr = Math.min(window.devicePixelRatio || 1, 2);
    var w = window.innerWidth;
    var h = window.innerHeight;
    canvas.width = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    canvas.style.width = w + "px";
    canvas.style.height = h + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  }

  function seedPixels() {
    var count = pixelCount();
    var w = window.innerWidth;
    var h = window.innerHeight;
    pixels = [];
    for (var i = 0; i < count; i += 1) {
      pixels.push({
        x: Math.random() * w,
        y: Math.random() * h,
        size: i % 7 === 0 ? 4 : i % 3 === 0 ? 3 : 2,
        color: PIXEL_COLORS[i % PIXEL_COLORS.length],
        depth: 0.25 + (i % 5) * 0.18,
        phase: Math.random() * Math.PI * 2,
        speed: 0.12 + Math.random() * 0.22,
        driftX: (Math.random() - 0.5) * 0.18,
        driftY: (Math.random() - 0.5) * 0.14,
        opacity: 0.35 + Math.random() * 0.45
      });
    }
  }

  function seedClouds() {
    if (!cloudsWrap) {
      return;
    }
    cloudsWrap.innerHTML = "";
    var count = cloudCount();
    var heights = [4, 12, 18, 28, 40, 55, 66, 74];
    var widths = [220, 300, 380, 260, 440, 320, 500, 280];
    var durations = [88, 118, 148, 102, 176, 132, 210, 158];
    var work = document.body.classList.contains("work-layout");
    for (var i = 0; i < count; i += 1) {
      var cloud = document.createElement("div");
      cloud.className = "atmosphere-cloud";
      cloud.style.width = widths[i % widths.length] + "px";
      cloud.style.top = heights[i % heights.length] + "vh";
      cloud.style.animationDuration = durations[i % durations.length] + "s";
      cloud.style.animationDelay = "-" + (8 + i * 11) + "s";
      cloud.style.opacity = work ? String(0.42 + (i % 3) * 0.06) : "1";
      cloud.innerHTML = cloudSvg("cloud-soft-" + i);
      cloudsWrap.appendChild(cloud);
    }
  }

  function drawPixels(now) {
    if (!ctx || !canvas) {
      return;
    }
    var w = window.innerWidth;
    var h = window.innerHeight;
    ctx.clearRect(0, 0, w, h);
    var t = now * 0.001;
    var mx = (mouseX - 0.5) * 28;
    var my = (mouseY - 0.5) * 22;
    var settle = idle ? 0.35 : 1;
    for (var i = 0; i < pixels.length; i += 1) {
      var p = pixels[i];
      p.x += p.driftX + Math.sin(t * p.speed + p.phase) * 0.12;
      p.y += p.driftY + Math.cos(t * p.speed * 0.85 + p.phase) * 0.1;
      if (p.x < -8) {
        p.x = w + 6;
      }
      if (p.x > w + 8) {
        p.x = -6;
      }
      if (p.y < -8) {
        p.y = h + 6;
      }
      if (p.y > h + 8) {
        p.y = -6;
      }
      var px = p.x + mx * p.depth * settle;
      var py = p.y + my * p.depth * settle;
      ctx.globalAlpha = p.opacity;
      ctx.fillStyle = p.color;
      ctx.fillRect(Math.round(px), Math.round(py), p.size, p.size);
    }
    ctx.globalAlpha = 1;
  }

  function loop(now) {
    if (!running) {
      return;
    }
    if (now - lastMove > 140) {
      idle = true;
      mouseX += (0.5 - mouseX) * 0.04;
      mouseY += (0.5 - mouseY) * 0.04;
    } else {
      mouseX += (targetX - mouseX) * 0.06;
      mouseY += (targetY - mouseY) * 0.06;
    }
    if (theme() === "dark") {
      drawPixels(now);
    }
    rafId = window.requestAnimationFrame(loop);
  }

  function startLoop() {
    if (running || reducedMotion()) {
      if (theme() === "dark" && ctx) {
        mouseX = 0.5;
        mouseY = 0.5;
        drawPixels(performance.now());
      }
      return;
    }
    running = true;
    rafId = window.requestAnimationFrame(loop);
  }

  function stopLoop() {
    running = false;
    if (rafId) {
      window.cancelAnimationFrame(rafId);
      rafId = 0;
    }
    if (ctx && canvas) {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    }
  }

  function onPointerMove(event) {
    if (!finePointer() || reducedMotion()) {
      return;
    }
    targetX = event.clientX / window.innerWidth;
    targetY = event.clientY / window.innerHeight;
    lastMove = performance.now();
    idle = false;
    if (theme() === "light" && cloudsWrap && !reducedMotion()) {
      var ox = (targetX - 0.5) * 10;
      var oy = (targetY - 0.5) * 6;
      cloudsWrap.style.transform = "translate3d(" + ox.toFixed(2) + "px," + oy.toFixed(2) + "px,0)";
    }
  }

  function bindPointer(on) {
    if (on && !hasPointerListener && finePointer()) {
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      hasPointerListener = true;
    } else if (!on && hasPointerListener) {
      window.removeEventListener("pointermove", onPointerMove);
      hasPointerListener = false;
      if (cloudsWrap) {
        cloudsWrap.style.transform = "";
      }
    }
  }

  function applyAtmosphere() {
    ensureLayer();
    resizeCanvas();
    var mode = theme();
    if (mode === "dark") {
      seedPixels();
      if (cloudsWrap) {
        cloudsWrap.innerHTML = "";
        cloudsWrap.style.transform = "";
      }
      if (reducedMotion()) {
        stopLoop();
        drawPixels(0);
      } else {
        startLoop();
      }
      bindPointer(!reducedMotion() && finePointer());
    } else {
      stopLoop();
      seedClouds();
      bindPointer(!reducedMotion() && finePointer());
    }
  }

  function onResize() {
    resizeCanvas();
    if (theme() === "dark") {
      seedPixels();
      if (!running) {
        drawPixels(0);
      }
    } else {
      seedClouds();
    }
  }

  ensureLayer();
  applyAtmosphere();
  window.addEventListener("resize", onResize, { passive: true });
  root.addEventListener("portfolio-theme-change", applyAtmosphere);
  if (window.MutationObserver) {
    new MutationObserver(function (records) {
      for (var i = 0; i < records.length; i += 1) {
        if (records[i].attributeName === "data-theme") {
          applyAtmosphere();
          break;
        }
      }
    }).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  }
})();
