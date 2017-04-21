"use strict";
function log(a, b, c) {
  if (debug && window.console) {
    var d = null;
    c || (c = "info"), "info" === c &&
      (d = "background-color: #b5b5b5; color: #000000;"), "warn" === c &&
      (d = "background-color: #ffba00; color: #000000;"), "error" === c &&
      (d = "background-color: red; color: #000000;"), "success" === c &&
      (d = "background-color: green; color: #000000;"), console.log(
      "%c" + c + ":",
      d,
      a,
      b
    );
  }
}
function vcuBranding(a, b) {
  var c;
  document.onreadystatechange = function() {
    "interactive" === document.readyState &&
      ((c = !0), initVcuBranding(a, b)), "complete" !== document.readyState ||
      c ||
      initVcuBranding(a, b);
  };
}
function initVcuBranding(a, b) {
  function c() {
    return document.implementation.hasFeature(
      "https://www.w3.org/TR/SVG11/feature#Image",
      "1.1"
    );
  }
  var d = ["hidden", "black", "white"],
    e = ["hidden", "graylight", "graydark", "gold"],
    f = "black",
    g = "graylight",
    h = "black",
    i = document.createElement("div"),
    j = document.createElement("div"),
    k = document.body,
    l = ".svg",
    m = ".png",
    n = "//branding.vcu.edu/bar/academic/images/",
    o = "--",
    p = "white",
    q = "angle",
    r = "light",
    s = "mir-badge",
    t = "dark",
    u = "mir-campaign",
    v = "gold",
    w = "vcu-seal";
  e.indexOf(a) > -1
    ? (log("load top color:", a, "info"), "graydark" === (g = a) &&
        (t = "light"))
    : (log("color not supported:", a, "warn"), log(
        "defaulting top to:",
        "graylight",
        "info"
      ), (g = "graylight")), d.indexOf(b) > -1
    ? (log("load bottom color:", b, "info"), "white" === (f = b) &&
        (r = "dark"))
    : (log("color not supported:", b, "warn"), log(
        "defaulting bottom to:",
        "black",
        "info"
      ), (f = "black")), document.getElementById("vcu-branding-bar--top")
    ? document.getElementById("vcu-branding-bar--top").remove()
    : ((window.dataLayer = window.dataLayer || []), dataLayer.push({
        colors: { colorBottom: f, colorTopCampaign: g },
        supports: { supportSvg: c() }
      }), (function(a, b, c, d, e) {
        (a[d] = a[d] || []), a[d].push({
          "gtm.start": new Date().getTime(),
          event: "gtm.js"
        });
        var f = b.getElementsByTagName(c)[0],
          g = b.createElement(c),
          h = "dataLayer" != d ? "&l=" + d : "";
      })(
        window,
        document,
        "script",
        "dataLayer",
        "GTM-5X6DGW"
      )), document.getElementById("vcu-branding-bar--bottom") &&
    document.getElementById("vcu-branding-bar--bottom").remove();
  var x = n + q + o + p,
    y = n + s + o + r,
    z = n + u + o + t,
    A = n + w + o + v;
  if (
    ((j.id = "vcu-branding-bar--top"), j.setAttribute(
      "class",
      "vcu-branding-bar vcu-branding-bar--top vcu-branding-bar--" + g
    ), (j.innerHTML =
      '<div class="vcu-branding-bar__container"><h1 class="vcu-branding-bar__heading"><a class="vcu-branding-bar__link vcu-branding-bar__link--university" title="Virginia Commonwealth University" target="_blank" rel="noopener noreferrer" href="http://www.vcu.edu/?utm_source=top-image&utm_medium=branding&utm_campaign=brandingbar"><img class="vcu-branding-bar__image vcu-branding-bar__image--university" src="' +
      A +
      l +
      '" data-fallback="' +
      A +
      m +
      '" alt="Virginia Commonwealth University" /></a></h1><h1 class="vcu-branding-bar__heading"><a class="vcu-branding-bar__link vcu-branding-bar__link--vcu-spelled-out vcu-branding-bar__link--' +
      h +
      '" title="Virginia Commonwealth University" target="_blank" rel="noopener noreferrer" href="http://www.vcu.edu/?utm_source=top-spelledout&utm_medium=branding&utm_campaign=brandingbar">Virginia Commonwealth University</a></h1><h2 class="vcu-branding-bar__heading"><a class="vcu-branding-bar__link vcu-branding-bar__link--campaign" title="Make it real. Campaign for VCU" target="_blank" rel="noopener noreferrer" href="http://campaign.vcu.edu/?utm_source=top-image&utm_medium=branding&utm_campaign=brandingbar"><div id="vcu-branding-bar__angle" class="vcu-branding-bar__angle"><svg version="1.1" id="Layer_1" xmlns="https://www.w3.org/2000/svg" xmlns:xlink="https://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 111 64" style="enable-background:new 0 0 111 64;" xml:space="preserve"><polygon class="vcu-branding-bar__angle-color" points="0,0 0,64 111,0"/></svg></div><img class="vcu-branding-bar__image vcu-branding-bar__image--campaign" src="' +
      z +
      l +
      '" data-fallback="' +
      z +
      m +
      '" alt="Make it real. Campaign for VCU" /></a></h2></div>'), (i.id =
      "vcu-branding-bar--bottom"), i.setAttribute(
      "class",
      "vcu-branding-bar vcu-branding-bar--bottom vcu-branding-bar--" + f
    ), (i.innerHTML =
      '<div class="vcu-branding-bar__container"><h2 class="vcu-branding-bar__heading"><a class="vcu-branding-bar__link vcu-branding-bar__link--bottom" title="Make it real. Campaign for VCU" target="_blank" rel="noopener noreferrer" href="http://campaign.vcu.edu/?utm_source=bottom-image&utm_medium=branding&utm_campaign=brandingbar"><img class="vcu-branding-bar__image" src="' +
      y +
      l +
      '" data-fallback="' +
      y +
      m +
      '" alt="Make it real. Campaign for VCU" /></a></h2></div>'), "hidden" ===
      g && ((j.innerHTML = ""), (j.style.height = 0)), k.insertBefore(
      j,
      k.firstChild
    ), "hidden" === f &&
      ((i.innerHTML = ""), (i.style.height = 0)), k.insertBefore(
      i,
      k.lastChild.nextSibling
    ), !c())
  ) {
    var B = document.getElementById("vcu-branding-bar__angle"),
      C = document.createElement("img");
    (B.innerHTML = ""), (C.alt = "VCU styling component: angle"), (C.className =
      "vcu-branding-bar__image"), (C.src = x + m), B.appendChild(C);
    var D = document.getElementById("vcu-branding-bar--top"),
      E = D.getElementsByTagName("img");
    E.length || (E = document.getElementsByTagName("IMG"));
    for (var F = 0, G = E.length; F < G; F++) {
      var H = E[F];
      H.getAttribute("src").match(/svgz?$/) &&
        H.setAttribute("src", H.getAttribute("data-fallback"));
    }
  }
}
function getElData(a, b) {
  return a
    ? void 0 !== a.dataset
        ? a.dataset[b]
        : ((b = b.replace(/[A-Z]/g, function(a) {
            return "-" + a.toLowerCase();
          })), a.getAttribute("data-" + b))
    : null;
}
var debug = !1;
Array.prototype.indexOf ||
  (Array.prototype.indexOf = function(a, b) {
    var c;
    if (null == this) throw new TypeError('"this" is null or not defined');
    var d = Object(this), e = d.length >>> 0;
    if (0 === e) return -1;
    var f = +b || 0;
    if ((Math.abs(f) === 1 / 0 && (f = 0), f >= e)) return -1;
    for (c = Math.max(f >= 0 ? f : e - Math.abs(f), 0); c < e; ) {
      if (c in d && d[c] === a) return c;
      c++;
    }
    return -1;
  });
var brandingBodyStyle = document.createElement("style"),
  brandingBodyCSS =
    '.vcu-branding-bar{box-sizing:content-box!important;display:block;height:50px;margin:0;overflow:hidden;padding:0;z-index:9999;}@media (min-width:992px){.vcu-branding-bar{height:50px}}@media (min-width:1200px){.vcu-branding-bar{height:50px; bottom: 0vh; position: absolute; width: 100%;}}.vcu-branding-bar *{box-sizing:border-box}.vcu-branding-bar svg{height:initial;width:initial}.vcu-branding-bar{background-color:#fff}.vcu-branding-bar__container{height:50px;margin:0 auto;padding:0 64px;width:100%}@media (min-width:992px){.vcu-branding-bar__container{height:50px}}@media (min-width:1000px){.vcu-branding-bar__container{padding:0 16px; bottom:0;}}@media (min-width:1200px){.vcu-branding-bar__container{height:50px;padding:0}}@media (min-width:992px){.vcu-branding-bar__container:after{background-color:#e5e5e5;content:" ";height:50px;width:38%;position:absolute;bottom:0;right:0;z-index:-1}}.vcu-branding-bar__heading{background-color:#fff;margin:0;padding:0!important}.vcu-branding-bar__heading-alt{margin:0;padding:0 4px;display:inline-block}@media (min-width:992px){.vcu-branding-bar__heading-alt{padding:0 8px}}@media (min-width:1200px){.vcu-branding-bar__heading-alt{padding:0 16px}}.vcu-branding-bar__link{border:none!important;display:block;margin:0;padding:0;text-indent:-9999px;text-decoration:none!important;border:0}.vcu-branding-bar__link:active,.vcu-branding-bar__link:focus,.vcu-branding-bar__link:hover,.vcu-branding-bar__link:visited{text-decoration:none!important}.vcu-branding-bar__link--bottom{display:block!important;margin:0 auto!important;float:none!important;text-align:center;letter-spacing:1px;text-indent:0}@media (min-width:992px){.vcu-branding-bar__link--bottom{letter-spacing:4px}}.vcu-branding-bar__link--campaign{background-color:#e5e5e5;display:none;float:right!important;font-size:0!important;position:relative!important;height:50px!important;line-height:50px!important;margin-bottom:-50px!important;margin-top:-50px!important;margin-left:0!important;margin-right:0!important;padding-left:0!important;text-indent:0!important;width:348px!important}@media (min-width:992px){.vcu-branding-bar__link--campaign{display:block}}.vcu-branding-bar__angle{height:50px;left:-110px;overflow:hidden;position:absolute;bottom:0;width:111px}.vcu-branding-bar--bottom.vcu-branding-bar--black .vcu-branding-bar__heading{background-color:#000}.vcu-branding-bar--bottom.vcu-branding-bar--white .vcu-branding-bar__heading{background-color:#fff}.vcu-branding-bar__angle .vcu-branding-bar__angle-color{fill:#fff}.vcu-branding-bar--graylight .vcu-branding-bar__angle{background-color:#e5e5e5}.vcu-branding-bar--white .vcu-branding-bar__angle{background-color:#fff}.vcu-branding-bar--graydark .vcu-branding-bar__angle{background-color:#58595b}.vcu-branding-bar--gold .vcu-branding-bar__angle{background-color:#ffba00}@media (min-width:992px){.vcu-branding-bar--graylight .vcu-branding-bar__container:after{background-color:#e5e5e5}}@media (min-width:992px){.vcu-branding-bar--white .vcu-branding-bar__container:after{background-color:#fff}}@media (min-width:992px){.vcu-branding-bar--graydark .vcu-branding-bar__container:after{background-color:#58595b}}@media (min-width:992px){.vcu-branding-bar--gold .vcu-branding-bar__container:after{background-color:#ffba00}}.vcu-branding-bar--graylight .vcu-branding-bar__link--campaign{background-color:#e5e5e5}.vcu-branding-bar--white .vcu-branding-bar__link--campaign{background-color:#fff}.vcu-branding-bar--graydark .vcu-branding-bar__link--campaign{background-color:#58595b}.vcu-branding-bar--gold .vcu-branding-bar__link--campaign{background-color:#ffba00}@media (min-width:768px){.vcu-branding-bar__link--campaign:before{display:none;content:" ";background-repeat:no-repeat;background-size:100% 100%;height:64px;position:absolute;bottom:0;width:70px;left:-70px;width:111px;left:-111px}}.vcu-branding-bar__link--vcuhealth{font-size:0;height:50px;line-height:50px;margin:0 auto;text-indent:0;width:144px}@media (min-width:992px){.vcu-branding-bar__link--vcuhealth{height:50px;line-height:50px;margin:0;width:192px}}@media (min-width:1200px){.vcu-branding-bar__link--vcuhealth{height:50px;line-height:50px;width:256px}}.vcu-branding-bar__link--university{font-size:0!important;height:50px!important;line-height:50px!important;margin:0 auto!important;text-indent:0!important;width:150px!important}@media (min-width:992px){.vcu-branding-bar__link--university{margin:0!important}}.vcu-branding-bar__link--vcu-spelled-out{display:none!important;font-family:Arial,Helvetica,"Helvetica Neue",sans-serif!important;font-size:12px!important;font-weight:400!important;height:50px!important;float:left!important;line-height:50px!important;margin-bottom:-50px!important;margin-top:-50px!important;margin-left:165px!important;margin-right:0!important;position:relative;text-indent:0!important;text-transform:uppercase!important;z-index:1}@media (min-width:992px){.vcu-branding-bar__link--vcu-spelled-out{letter-spacing:4px}}@media (min-width:1000px){.vcu-branding-bar__link--vcu-spelled-out{display:block!important}}@media (min-width:1200px){.vcu-branding-bar__link--vcu-spelled-out{letter-spacing:10px}}@media (min-width:992px){.vcu-branding-bar__heading-alt .vcu-branding-bar__link--campaign{float:left;height:50px;line-height:50px}}@media (min-width:1200px){.vcu-branding-bar__heading-alt .vcu-branding-bar__link--campaign{height:50px;line-height:50px;margin:0}}@media (min-width:992px){.vcu-branding-bar__heading-alt .vcu-branding-bar__link--vcu-spelled-out{float:left}}@media (min-width:1200px){.vcu-branding-bar__heading-alt .vcu-branding-bar__link--vcu-spelled-out{margin:0}}.vcu-branding-bar__heading-alt .vcu-branding-bar__link--vcuhealth{float:none}@media (min-width:1200px){.vcu-branding-bar__heading-alt .vcu-branding-bar__link--vcuhealth{margin:0}}.vcu-branding-bar__heading-alt .vcu-branding-bar__link--university{float:left}@media (min-width:1200px){.vcu-branding-bar__heading-alt .vcu-branding-bar__link--university{margin:0}}.vcu-branding-bar__link--gold,.vcu-branding-bar__link--gold:active,.vcu-branding-bar__link--gold:focus,.vcu-branding-bar__link--gold:visited{color:#ffba00!important}.vcu-branding-bar__link--black,.vcu-branding-bar__link--black:active,.vcu-branding-bar__link--black:focus,.vcu-branding-bar__link--black:visited{color:#424242!important}.vcu-branding-bar__link--white,.vcu-branding-bar__link--white:active,.vcu-branding-bar__link--white:focus,.vcu-branding-bar__link--white:visited{color:#fff!important}.vcu-branding-bar__image{border:0;vertical-align:middle!important;width:100%;display:inline}.vcu-branding-bar__image--campaign{padding-bottom:19px;padding-top:19px}.vcu-branding-bar__image--university{padding-bottom:10px;padding-top:10px}.vcu-branding-bar--bottom{display:none}@media (min-width:1px){.vcu-branding-bar--bottom{display:block;height:176px}}@media (min-width:1200px){.vcu-branding-bar--bottom{display:none}}.vcu-branding-bar--bottom .vcu-branding-bar__container{height:176px;padding:0}.vcu-branding-bar--bottom .vcu-branding-bar__container:after{display:none}.vcu-branding-bar--bottom .vcu-branding-bar__link{line-height:176px!important}.vcu-branding-bar--bottom .vcu-branding-bar__image{height:176px;max-width:208px}.vcu-branding-bar--top .vcu-branding-bar__image{height:50px}body{visibility:visible!important;width:100%!important;margin:0!important;padding:0!important;background-position:0 64px}',
  brandingHead = document.head || document.getElementsByTagName("head")[0],
  metaTags = document.getElementsByTagName("meta"),
  metaReferrer = document.createElement("meta"),
  metaReferrerExists = null;
(brandingBodyStyle.type = "text/css"), brandingBodyStyle.styleSheet
  ? (brandingBodyStyle.styleSheet.cssText = brandingBodyCSS)
  : brandingBodyStyle.appendChild(
      document.createTextNode(brandingBodyCSS)
    ), brandingHead.appendChild(brandingBodyStyle);
for (var i = 0; i < metaTags.length; i++)
  "referrer" === metaTags[i].getAttribute("name") && (metaReferrerExists = !0);
metaReferrerExists ||
  (metaReferrer.setAttribute("name", "referrer"), metaReferrer.setAttribute(
    "content",
    "origin-when-crossorigin"
  ), brandingHead.appendChild(metaReferrer));
var colorTopCampaignSettingsSelector = document.querySelectorAll(
  "[data-color-top-campaign]"
)[0],
  colorBottomSettingsSelector = document.querySelectorAll(
    "[data-color-bottom]"
  )[0];
vcuBranding(
  getElData(colorTopCampaignSettingsSelector, "colorTopCampaign"),
  getElData(colorBottomSettingsSelector, "colorBottom")
);