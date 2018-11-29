window.console = window.console || {
  log: function () {
  }, warn: function () {
  }, error: function () {
  }
}, function () {
  var a, b, c, d, e, f = function () {
      var a = document.getElementById("embedImgur");
      for (var b in a) {
        var c = /^(http(s)?:){0,1}\/\/([a-z]{1,9}\.)*?(imgur(-dev)?.com)/.exec(a[b].src);
        if (c) {
          return c[0].indexOf("//s.imgur.com") === -1 && c[3] && c[5] ? c[0] : c[1] ? c[1] + "//imgur.com" : window.location.protocol + "//imgur.com"
        }
      }
    }, g = window, h = document, i = h.documentElement, j = h.getElementsByTagName("body")[0],
    k = (g.innerWidth || i.clientWidth || j.clientWidth, 500), l = f(), m = 540, n = 200,
    o = g.addEventListener ? "addEventListener" : "attachEvent", p = g[o],
    q = "attachEvent" == o ? "onmessage" : "message";
  p(q, function (a) {
    var b;
    try {
      b = JSON.parse(a.data)
    } catch (c) {
      b = {message: a.data}
    }
    if ("resize_imgur" === b.message) {
      var d = /.com\/(.+)\/embed/g, e = d.exec(b.href)[1];
      e = e.replace(/\//g, "-"), s(b.height, e)
    } else if ("404_imgur_embed" === b.message) {
      var d = /.com\/(.+)\/embed/g, e = d.exec(b.href)[1];
      s(n, e)
    }
  }, !1);
  var r = function (a) {
    var b = h.getElementsByTagName("head")[0], c = h.createElement("style");
    c.type = "text/css", c.styleSheet ? c.styleSheet.cssText = a : c.appendChild(h.createTextNode(a)), b.appendChild(c)
  }, s = function (a, b) {
    var d = "#imgur-embed-iframe-pub-" + b + " { height: " + a + "px !important; width:" + c + "px !important;}";
    r(d)
  }, t = function (a) {
    var b = ".imgur-embed-iframe-pub { box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.10); border: 1px solid #ddd; border-radius: 2px;} blockquote.imgur-embed-pub { width: 540px; }";
    r(b)
  }, u = function (a, b, d, e) {
    var f = [l, d, "embed"].join("/"), g = window.location,
      h = "ref=" + encodeURIComponent(g.href || g.protocol + "//" + g.hostname + (g.port ? ":" + g.port : "") + g.pathname + g.search);
    f = "http://imgur.com/" + f;
    return a ? (f += "?pub=true&" + h, "false" === b && (f += "&context=false")) : f += "false" === b ? "?context=false&" + h : "?" + h, "false" === e && (f += "&analytics=false"), f + "&w=" + c
  }, v = function (f) {
    if (f) {
      e = h.createElement("iframe");
      var g, i, j, l;
      try {
        b = f.getAttribute("data-context") || "true", analytics = f.getAttribute("data-analytics") || "true", g = f.getAttribute("id"), i = 0 === g.indexOf("a/"), l = f.parentNode.offsetWidth
      } catch (n) {
        return void console.error(n)
      }
      var o = function () {
        try {
          return h.createEvent("TouchEvent"), !0
        } catch (a) {
          return !1
        }
      };
      a = o() ? 300 : 400, e.setAttribute("allowfullscreen", !0), e.setAttribute("mozallowfullscreen", !0), e.setAttribute("webkitallowfullscreen", !0), e.style.height = k + "px", c = l < m ? l < a ? a : l : m, e.style.width = c + "px", d = "imgur-embed-iframe-pub-" + g.replace("/", "-") + "-" + b + "-" + c, e.className = "imgur-embed-iframe-pub " + d, e.style.margin = "10px 0px", e.style.padding = 0, e.scrolling = "no", j = u(i, b, g, analytics), e.src = j, e.id = "imgur-embed-iframe-pub-" + g.replace(/\//g, "-"), f.parentNode.replaceChild(e, f)
    }
  };
  t(), g.imgurEmbed.createIframe = function () {
    v(h.querySelector("blockquote.imgur-embed-pub"))
  };
  for (var w = 0; w < g.imgurEmbed.tasks; w++) v(h.querySelector("blockquote.imgur-embed-pub"))
}();
