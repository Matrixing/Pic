! function(e, t) { "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("darkmode-js", [], t) : "object" == typeof exports ? exports["darkmode-js"] = t() : e["darkmode-js"] = t() }("undefined" != typeof self ? self : this, function() {
    return function(e) {
        var t = {};

        function n(o) { if (t[o]) return t[o].exports; var r = t[o] = { i: o, l: !1, exports: {} }; return e[o].call(r.exports, r, r.exports, n), r.l = !0, r.exports }
        return n.m = e, n.c = t, n.d = function(e, t, o) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: o }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) {
            if (1 & t && (e = n(e)), 8 & t) return e;
            if (4 & t && "object" == typeof e && e && e.__esModule) return e;
            var o = Object.create(null);
            if (n.r(o), Object.defineProperty(o, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
                for (var r in e) n.d(o, r, function(t) { return e[t] }.bind(null, r));
            return o
        }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "", n(n.s = 0)
    }([function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var o, r = (o = n(1)) && o.__esModule ? o : { default: o };
        var a = r.default;
        t.default = a,
            function(e) { e.Darkmode = r.default }(window), e.exports = t.default
    }, function(e, t, n) {
        "use strict";

        function o(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
            }
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), t.default = void 0;
        var r = function() {
            function e(t) {
                ! function(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, e);
                var n = t && t.bottom ? t.bottom : "32px",
                    o = t && t.right ? t.right : "32px",
                    r = t && t.left ? t.left : "unset",
                    a = t && t.time ? t.time : "0.3s",
                    d = t && t.mixColor ? t.mixColor : "#fff",
                    i = t && t.backgroundColor ? t.backgroundColor : "#fff",
                    s = t && t.buttonColorDark ? t.buttonColorDark : "#100f2c",
                    l = t && t.buttonColorLight ? t.buttonColorLight : "#fff",
                    c = t && t.label ? t.label : "",
                    u = !t || !1 !== t.saveInCookies,
                    f = "\n      .darkmode-layer {\n        position: fixed;\n        pointer-events: none;\n        background: ".concat(d, ";\n        transition: all ").concat(a, " ease;\n        mix-blend-mode: difference;\n      }\n\n      .darkmode-layer--button {\n        width: 2.9rem;\n        height: 2.9rem;\n        border-radius: 50%;\n        right: ").concat(o, ";\n        bottom: ").concat(n, ";\n        left: ").concat(r, ";\n      }\n\n      .darkmode-layer--simple {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transform: scale(1) !important;\n      }\n      \n      .darkmode-layer--expanded {\n        transform: scale(100);\n        border-radius: 0;\n      }\n\n      .darkmode-layer--no-transition {\n        transition: none;\n      }\n      \n      .darkmode-toggle {\n        background: ").concat(s, ";\n        width: 3rem;\n        height: 3rem;\n        position: fixed;\n        border-radius: 50%;\n        right: ").concat(o, ";\n        bottom: ").concat(n, ";\n        left: ").concat(r, ";\n        cursor: pointer;\n        transition: all 0.5s ease;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n      }\n      \n      .darkmode-toggle--white {\n        background: ").concat(l, ";\n      }\n\n      .darkmode-background {\n        background: ").concat(i, ";\n        position: fixed;\n        pointer-events: none;\n        z-index: -10;\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n      }\n      \n      img, .darkmode-ignore {\n        isolation: isolate;\n        display: inline-block;\n      }\n    "),
                    m = document.createElement("div"),
                    y = document.createElement("div"),
                    b = document.createElement("div");
                y.innerHTML = c, m.classList.add("darkmode-layer"), b.classList.add("darkmode-background"), !0 === ("true" === window.localStorage.getItem("darkmode")) && u && (m.classList.add("darkmode-layer--expanded", "darkmode-layer--simple", "darkmode-layer--no-transition"), y.classList.add("darkmode-toggle--white"), document.body.classList.add("darkmode--activated")), document.body.insertBefore(y, document.body.firstChild), document.body.insertBefore(m, document.body.firstChild), document.body.insertBefore(b, document.body.firstChild), this.addStyle(f), this.button = y, this.layer = m, this.saveInCookies = u, this.time = a
            }
            var t, n, r;
            return t = e, (n = [{
                key: "addStyle",
                value: function(e) {
                    var t = document.createElement("link");
                    t.setAttribute("rel", "stylesheet"), t.setAttribute("type", "text/css"), t.setAttribute("href", "data:text/css;charset=UTF-8," + encodeURIComponent(e)), document.head.appendChild(t)
                }
            }, {
                key: "showWidget",
                value: function() {
                    var e = this,
                        t = this.button,
                        n = this.layer,
                        o = 1e3 * parseFloat(this.time);
                    t.classList.add("darkmode-toggle"), n.classList.add("darkmode-layer--button"), t.addEventListener("click", function() {
                        var r = e.isActivated();
                        r ? (n.classList.remove("darkmode-layer--simple"), setTimeout(function() { n.classList.remove("darkmode-layer--no-transition"), n.classList.remove("darkmode-layer--expanded") }, 1)) : (n.classList.add("darkmode-layer--expanded"), setTimeout(function() { n.classList.add("darkmode-layer--no-transition"), n.classList.add("darkmode-layer--simple") }, o)), t.classList.toggle("darkmode-toggle--white"), document.body.classList.toggle("darkmode--activated"), window.localStorage.setItem("darkmode", !r)
                    })
                }
            }, {
                key: "toggle",
                value: function() {
                    var e = this.layer,
                        t = this.isActivated();
                    e.classList.toggle("darkmode-layer--simple"), document.body.classList.toggle("darkmode--activated"), window.localStorage.setItem("darkmode", !t)
                }
            }, { key: "isActivated", value: function() { return document.body.classList.contains("darkmode--activated") } }]) && o(t.prototype, n), r && o(t, r), e
        }();
        t.default = r, e.exports = t.default
    }])
});
