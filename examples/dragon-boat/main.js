/**
 * Created by zyh on 17/3/29.
 */
//http://gcdzongzi.ovpp.cn/?from=singlemessage&isappinstalled=0
!
    function e(o, t, n) {
        function i(r, l) {
            if (!t[r]) {
                if (!o[r]) {
                    var s = "function" == typeof require && require;
                    if (!l && s) return s(r, !0);
                    if (a) return a(r, !0);
                    var p = new Error("Cannot find module '" + r + "'");
                    throw p.code = "MODULE_NOT_FOUND", p
                }
                var d = t[r] = {
                    exports: {}
                };
                o[r][0].call(d.exports, function(e) {
                    var t = o[r][1][e];
                    return i(t ? t : e)
                }, d, d.exports, e, o, t, n)
            }
            return t[r].exports
        }
        for (var a = "function" == typeof require && require, r = 0; r < n.length; r++) i(n[r]);
        return i
    }({
        1: [function(e, o, t) {
            function n() {
                W = new PIXI.Container, W.alpha = 0, b.addChild(W);
                var e = [];
                e = [];
                for (var o = 0; 10 > o; o++) e.push("./image/back_end/black animation 10f 2_0000" + o + ".png");
                M = new PIXI.extras.MovieClip.fromImages(e), M.animationSpeed = .5, M.alpha = 0, W.addChild(M), e = [];
                for (var o = 0; 10 > o; o++) e.push("./image/back/blackblack animation 10f _0000" + o + ".png");
                j = new PIXI.extras.MovieClip.fromImages(e), j.animationSpeed = .5, j.play(), W.addChild(j), e = [];
                for (var t = 1; 10 >= t; t++) e.push(PIXI.Texture.fromFrame(t + ".png"));
                q = new PIXI.extras.MovieClip(e), q.scale.set(2), q.position.set(ye / 2, xe / 2 - 12), q.anchor.set(.5), q.animationSpeed = .2, q.loop = !1, W.addChild(q), R = new PIXI.Container, R.alpha = 0, W.addChild(R), k = new PIXI.Sprite(PIXI.Texture.fromFrame("platform.png")), R.addChild(k);
                for (var n = function(e) {
                    var o = new PIXI.extras.MovieClip(e);
                    return o.position.set(ye / 2, xe / 2 - 12), o.anchor.set(.5), o.animationSpeed = .2, o.loop = !1, o.alpha = 0, R.addChild(o), o
                }, o = 0; o < fe.length; o++) {
                    var i = fe[o];
                    e = [];
                    for (var t = i.from; t <= i.to; t++) {
                        var a = 10 > t ? "0" + t : t;
                        e.push(PIXI.Texture.fromFrame(i.name + a + ".png"))
                    }
                    var r = n(e);
                    r.extra = {
                        next: i.next
                    }, ve[i.id] = i.sprite = r, we == i.id && (r.alpha = 1, te = r)
                }
                e = [];
                for (var t = ue.from; t <= ue.to; t++) {
                    var a = 10 > t ? "0" + t : t;
                    e.push(PIXI.Texture.fromFrame(ue.name + a + ".png"))
                }
                oe = n(e), oe.extra = {
                    next: ue.next
                }, ve[ue.id] = ue.sprite = oe, e = [];
                for (var t = ge.from; t <= ge.to; t++) {
                    var a = 10 > t ? "0" + t : t;
                    e.push(PIXI.Texture.fromFrame(ge.name + a + ".png"))
                }
                ee = n(e), ve[ge.id] = ge.sprite = ee, ee.alpha = 0, ee.scale.set(2), ee.loop = !0, e = [];
                for (var o = 0; 10 > o; o++) e.push("./image/front/front animation 10f_0000" + o + ".png");
                T = new PIXI.extras.MovieClip.fromImages(e), T.animationSpeed = .5, T.play(), W.addChild(T), V = new re(PIXI.Texture.fromFrame("pointer.png"), c), V.startRotaion = 2 * Math.PI * .1, V.maxRotation = 2 * Math.PI * .9, V.anchor.set(.5, .3), V.position.x = ye / 2 + 2, V.position.y = xe / 2 + 298, W.addChild(V), B = new PIXI.Sprite(PIXI.Texture.fromFrame("btn.png")), B.alpha = 0, B.anchor.set(.5, .5), B.position.x = ye / 2, B.position.y = xe / 2 + 485, B.interactive = !0, B.on("touchstart", _), B.on("touchend", f), W.addChild(B), e = [];
                for (var l = function(e) {
                    var o = new PIXI.extras.MovieClip(e);
                    return o.anchor.set(.5, 0), o.animationSpeed = 1, o.scale.set(4, 3), o.loop = !1, o
                }, t = _e.from; t <= _e.to; t++) {
                    var a = 10 > t ? "0" + t : t;
                    e.push(PIXI.Texture.fromFrame(_e.name + a + ".png"))
                }
                z = l(e), z.position.set(ye / 2 + 200, xe / 2 - 250), z.rotation = 45, W.addChild(z), X = l(e), X.position.set(ye / 2 - 200, xe / 2 - 220), X.rotation = -45, W.addChild(X), S = l(e), S.position.set(ye / 2 - 160, xe / 2 + 220), S.rotation = 135, W.addChild(S), F = l(e), F.position.set(ye / 2 + 200, xe / 2 + 220), F.rotation = 135, W.addChild(F), S.play(), F.play(), X.play(), z.play(), ne = new PIXI.Sprite(Ie.resources[ue.lable].texture), ne.anchor.set(.5, 1), ne.position.x = ye / 2, W.addChild(ne), H = new PIXI.Sprite(PIXI.Texture.fromFrame("end.jpg")), H.alpha = 0, W.addChild(H), b.removeChild(A), b.removeChild(P), e = [];
                for (var o = 0; 4 > o; o++) e.push("./image/intro/intro_0000" + o + ".png");
                O = new PIXI.extras.MovieClip.fromImages(e), O.interactive = !0, O.animationSpeed = .5, O.play(), TweenMax.from(O, 1, {
                    alpha: 0,
                    onComplete: function() {
                        W.alpha = 1, O.on("touchend", function() {
                            N.volume = .2, TweenMax.to(O, 1, {
                                alpha: 0,
                                onComplete: function() {
                                    TweenMax.killTweensOf(O), b.removeChild(O), se || (U.on("loop", function(e) {
                                        U.volume = .02 * Math.random()
                                    }), U.play({
                                        loop: -1,
                                        volume: .02
                                    }))
                                }
                            })
                        }), TweenMax.to(R, 1, {
                            alpha: 1
                        }), TweenMax.from(R.position, 1.7, {
                            y: "+=400",
                            onComplete: function() {
                                TweenMax.to(R.position, .5, {
                                    y: "+=50",
                                    yoyo: !0,
                                    repeat: -1
                                })
                            }
                        })
                    }
                }), b.addChild(O)
            }
            function i() {
                Pe = !1, $("#alert").width(window.innerWidth), $("#alert").height(window.innerHeight), $("#alert").show(), $("html,body").scrollLeft(0)
            }
            function a() {
                Pe = !0, $("#alert").hide()
            }
            function r() {
                H.alpha = 1, H.anchor.set(0), TweenMax.from(H.position, .75, {
                    y: -H.height,
                    ease: Bounce.easeOut,
                    onComplete: function() {
                        var e = new PIXI.Sprite(PIXI.Texture.fromFrame("again.jpg"));
                        e.interactive = !0, e.anchor.set(.5, 0), e.position.y = 897, e.position.x = ye / 2, W.addChild(e);
                        var o = new PIXI.Sprite(PIXI.Texture.fromFrame("share.jpg"));
                        o.interactive = !0, o.anchor.set(.5, 0), o.position.y = 1011, o.position.x = ye / 2, W.addChild(o), o.on("touchend", function() {
                            $("body").append('<div id="share"> <img src="image/share.gif" /></div>')
                        }), e.on("touchend", function() {
                            location.reload()
                        })
                    }
                })
            }
            function l() {
                Pe && (V && V.update(), C.render(b)), requestAnimationFrame(l)
            }
            function s() {
                b.resize(window.innerWidth, window.innerHeight), C.resize(window.innerWidth, window.innerHeight)
            }
            function p(e) {
                switch (window.orientation) {
                    case 0:
                        a();
                        break;
                    case 90:
                    case -90:
                        i();
                        break;
                    case 180:
                        a()
                }
            }
            function d() {
                document.title = ce.replace(/{%c}/i, he[me]), $("#wx-img").remove(), $("body").append('<div id="wx-img"><img src="' + ue.wximg + '" /></div>')
            }
            function c() {
                if (be = !1, 1 == Ce) {
                    h();
                    var e = ve.open_eye_scary;
                    return e.alpha = 1, e.loop = !1, e.gotoAndPlay(1), se || J.play({
                        offset: 0,
                        volume: 2
                    }), e.onComplete = function() {
                        u(), e.alpha = 0, e.stop(), W.removeChild(e);
                        var o = ve.open_eye_01;
                        o.alpha = 1, o.loop = !0, o.gotoAndPlay(1), be = !0
                    }, void(Ce = 2)
                }
                return 2 == Ce ? (h(), oe.alpha = 1, oe.gotoAndPlay(1), se || Y.play({
                    offset: 0,
                    volume: 2
                }), oe.onComplete = function() {
                    m(), oe.onComplete = null, this.alpha = 0, this.stop(), W.removeChild(this), TweenMax.to(ne, .75, {
                        y: ne.height,
                        ease: Bounce.easeOut,
                        onComplete: function() {}
                    }), h(), ee.alpha = 1, ee.gotoAndStop(1), be = !0, ae = !0, ie = !1, d()
                }, void(Ce = 3)) : void 0
            }
            function h() {
                for (var e = 1; 3 > e; e++) {
                    var o = ve["open_eye_0" + e];
                    o.gotoAndStop(1), o.alpha = 0
                }
                for (var e = 1; 3 > e; e++) {
                    var o = ve["close_eye_0" + e];
                    o.gotoAndStop(1), o.alpha = 0
                }
                var t = ve.open_eye_scary;
                t.gotoAndStop(1), t.alpha = 0, oe.alpha = 0, oe.gotoAndStop(1), ee.alpha = 0, ee.gotoAndStop(1)
            }
            function m() {
                u(), g()
            }
            function u() {
                for (var e = 1; 3 > e; e++) {
                    var o = ve["open_eye_0" + e];
                    o.onComplete = null, o.stop(), o.alpha = 0, W.removeChild(o)
                }
            }
            function g() {
                for (var e = 1; 3 > e; e++) {
                    var o = ve["close_eye_0" + e];
                    o.onComplete = null, o.stop(), o.alpha = 0, W.removeChild(o)
                }
            }
            function _() {
                if (4 != Ce && (V.click(), B.alpha = 1, S.gotoAndPlay(1), F.gotoAndPlay(1), X.gotoAndPlay(1), z.gotoAndPlay(1), se ? (createjs.Sound.stop(), E.on("complete", function(e) {
                        createjs.Sound.stop(), N.play({
                            offset: 0,
                            volume: .2,
                            loop: -1
                        }), e.remove()
                    }), E.play({
                        offset: 0,
                        volume: .2
                    })) : (E.play({
                        offset: 0
                    }), L.play({
                        volume: 1
                    })), be)) {
                    if (q.gotoAndStop(10 * V.progress), V.progress > .4 && 1 == Ce && c(), 0 == Ce) {
                        var e = ve.close_eye_01;
                        return e.alpha = 1, e.loop = !0, e.play(), void(Ce = 1)
                    }
                    if (1 == Ce) {
                        if (ie) return;
                        ie = !0;
                        var o, t = ve.close_eye_01,
                            n = Math.random();
                        return .3 > n ? (ve.close_eye_03.alpha = 0, o = ve.close_eye_02) : (ve.close_eye_02.alpha = 0, o = ve.close_eye_03), t.alpha = 0, o.alpha = 1, o.gotoAndPlay(1), void(o.onComplete = function() {
                            this.alpha = 0, 1 == Ce && (t.alpha = 1), ie = !1
                        })
                    }
                    if (2 == Ce) {
                        if (ie) return;
                        ie = !0;
                        var o, t = ve.open_eye_01,
                            n = Math.random();
                        return .3 > n ? (ve.open_eye_03.alpha = 0, o = ve.open_eye_02) : (ve.open_eye_02.alpha = 0, o = ve.open_eye_03), t.alpha = 0, o.alpha = 1, o.gotoAndPlay(1), void(o.onComplete = function() {
                            this.alpha = 0, 2 == Ce && (t.alpha = 1), ie = !1
                        })
                    }
                    if (3 == Ce) {
                        if (!ae) return;
                        if (ie) return;
                        ie = !0, createjs.Sound.stop(), K.play({}), TweenMax.to(ne, .75, {
                            y: 0,
                            ease: Bounce.easeOut,
                            delay: 1.25
                        }), j.alpha = 0, j.stop(), W.removeChild(j), q.alpha = 0, M.alpha = 1, M.play(), ee.loop = !1, ee.onComplete = function() {
                            ee.onComplete = null, ee.gotoAndPlay(1), r(), Z.play(), W.removeChild(ee)
                        }, setTimeout(function() {
                            ee.gotoAndPlay(1)
                        }, 500), m(), Ce = 4
                    }
                }
            }
            function f() {
                V.release(), B.alpha = 0
            }
            function y() {
                Ie.add("./image/loading.json"), Ie.once("complete", x), Ie.load()
            }
            function x() {
                s();
                for (var e = [], o = 0; 4 >= o; o++) e.push(PIXI.Texture.fromFrame("loading_0000" + o + ".png"));
                A = new PIXI.extras.MovieClip(e), A.anchor.set(.5), A.position.x = ye / 2, A.position.y = xe / 2, A.animationSpeed = .5, A.play(), b.addChild(A), I()
            }
            function I() {
                for (D = new createjs.LoadQueue(!1), createjs.Sound.alternateExtensions = ["mp3"], D.installPlugin(createjs.Sound), D.loadFile({
                    id: "snd_steam",
                    src: "./audio/steam.ogg"
                }, !1), D.loadFile({
                    id: "snd_btn",
                    src: "./audio/btn.ogg"
                }, !1), D.loadFile({
                    id: "snd_bg",
                    src: "./audio/bg.ogg"
                }, !1), D.loadFile({
                    id: "snd_effect",
                    src: "./audio/bg_effect.ogg"
                }, !1), D.loadFile({
                    id: "snd_scare",
                    src: "./audio/scare.ogg"
                }, !1), D.loadFile({
                    id: "snd_explode",
                    src: "./audio/explode.ogg"
                }, !1), D.loadFile({
                    id: "snd_dance",
                    src: "./audio/dance.ogg"
                }, !1), D.loadFile({
                    id: "snd_end",
                    src: "./audio/end.ogg"
                }, !1), D.on("complete", function() {
                    E = createjs.Sound.createInstance("snd_steam"), L = createjs.Sound.createInstance("snd_btn"), N = createjs.Sound.createInstance("snd_bg"), U = createjs.Sound.createInstance("snd_effect"), J = createjs.Sound.createInstance("snd_scare"), Y = createjs.Sound.createInstance("snd_explode"), K = createjs.Sound.createInstance("snd_dance"), Z = createjs.Sound.createInstance("snd_end"), Q = !0, v()
                }), D.on("progress", function() {}), D.load(), e = 0; 4 > e; e++) Ie.add("intro_" + e, "./image/intro/intro_0000" + e + ".png");
                for (e = 0; 10 > e; e++) Ie.add("front_" + e, "./image/front/front animation 10f_0000" + e + ".png"), Ie.add("back_" + e, "./image/back/blackblack animation 10f _0000" + e + ".png"), Ie.add("back_end_" + e, "./image/back_end/black animation 10f 2_0000" + e + ".png");
                for (var e = 0; e < fe.length; e++) Ie.add(fe[e].path + "/" + fe[e].id + ".json");
                Ie.add("./image/lights.json"), Ie.add("./image/items.json"), Ie.add(_e.path + "/" + _e.id + ".json"), Ie.add(ue.path + "/" + ue.id + ".json"), Ie.add(ue.lable, ue.lableImg), Ie.add(ge.path + "/" + ge.id + ".json"), Ie.on("progress", function() {
                    P.text = Math.floor(Ie.progress), P.position.y = xe / 2, P.position.x = ye / 2
                }), Ie.load(function(e, o) {
                    G = !0, v()
                })
            }
            function v() {
                Q && G && (n(), N.play({
                    loop: -1,
                    volume: .05
                }))
            }
            function w() {
                C = PIXI.autoDetectRenderer(window.innerWidth, window.innerHeight, {
                    resolution: 1,
                    transparent: !0
                }, !1), document.body.appendChild(C.view), b = new PIXI.AutoFitContainer(ye, xe, window.innerWidth, window.innerHeight), P = new PIXI.Text("Loading", {
                    font: "32px Arial",
                    fill: "white",
                    align: "center"
                }), P.anchor.set(.5), l(), y(), $("body").append('<div id="wx-img"><img src="./image/wx_img/wx_img.png" /></div>')
            }
            e("./js/AutoFitContainer");
            var b, C, P, A, X, z, S, F, j, M, T, k, R, O, W, V, B, H, q, D, E, L, N, U, Q, G, J, K, Y, Z, ee, oe, te, ne, ie, ae, re = e("./js/Pointer"),
                le = {
                    Wx: function() {
                        return navigator.userAgent.match(/micromessenger/i)
                    },
                    Android: function() {
                        return navigator.userAgent.match(/Android/i)
                    },
                    BlackBerry: function() {
                        return navigator.userAgent.match(/BlackBerry/i)
                    },
                    iOS: function() {
                        return navigator.userAgent.match(/iPhone|iPad|iPod/i)
                    },
                    Opera: function() {
                        return navigator.userAgent.match(/Opera Mini/i)
                    },
                    Windows: function() {
                        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i)
                    },
                    any: function() {
                        return le.Android() || le.BlackBerry() || le.iOS() || le.Opera() || le.Windows()
                    }
                },
                se = le.Android() && le.Wx(),
                pe = [{
                    id: "explode_white",
                    path: "./image/zz",
                    name: "b_03_w_00",
                    from: 228,
                    to: 240,
                    sprite: null,
                    next: "close_eye_01",
                    lable: "lable_w",
                    lableImg: "./image/lables/lable_w.png",
                    wximg: "./image/wx_img/wx_img_w.png"
                }, {
                    id: "explode_black",
                    path: "./image/zz",
                    name: "b_03_black_00",
                    from: 228,
                    to: 240,
                    sprite: null,
                    next: "close_eye_01",
                    lable: "lable_b",
                    lableImg: "./image/lables/lable_b.png",
                    wximg: "./image/wx_img/wx_img_b.png"
                }, {
                    id: "explode_green",
                    path: "./image/zz",
                    name: "b_03_gr_00",
                    from: 228,
                    to: 240,
                    sprite: null,
                    next: "close_eye_01",
                    lable: "lable_g",
                    lableImg: "./image/lables/lable_g.png",
                    wximg: "./image/wx_img/wx_img_g.png"
                }, {
                    id: "explode_purple",
                    path: "./image/zz",
                    name: "b_03_pu_00",
                    from: 228,
                    to: 240,
                    sprite: null,
                    next: "close_eye_01",
                    lable: "lable_p",
                    lableImg: "./image/lables/lable_p.png",
                    wximg: "./image/wx_img/wx_img_p.png"
                }, {
                    id: "explode_red",
                    path: "./image/zz",
                    name: "b_03_red_00",
                    from: 228,
                    to: 240,
                    sprite: null,
                    next: "close_eye_01",
                    lable: "lable_r",
                    lableImg: "./image/lables/lable_r.png",
                    wximg: "./image/wx_img/wx_img_r.png"
                }],
                de = [{
                    id: "dance_white",
                    path: "./image/zz",
                    name: "ending_w_00",
                    from: 339,
                    to: 408,
                    sprite: null
                }, {
                    id: "dance_black",
                    path: "./image/zz",
                    name: "ending_bl_00",
                    from: 339,
                    to: 408,
                    sprite: null
                }, {
                    id: "dance_green",
                    path: "./image/zz",
                    name: "ending_gr_00",
                    from: 339,
                    to: 408,
                    sprite: null
                }, {
                    id: "dance_purple",
                    path: "./image/zz",
                    name: "ending_pu_00",
                    from: 339,
                    to: 408,
                    sprite: null
                }, {
                    id: "dance_red",
                    path: "./image/zz",
                    name: "ending_red_00",
                    from: 339,
                    to: 408,
                    sprite: null
                }],
                ce = "我刚刚活蒸了一只{%c}毛僵，一起来寻龙摸金，活蒸大粽子吧！",
                he = ["白", "黑", "绿", "紫", "红"],
                me = Math.floor(Math.random() * pe.length),
                ue = pe[me],
                ge = de[me],
                _e = {
                    id: "steam",
                    path: "./image/steam",
                    name: "fog_000",
                    from: 0,
                    to: 47,
                    sprite: null
                },
                fe = [{
                    id: "close_eye_01",
                    path: "./image/zz",
                    name: "a_01_000",
                    from: 3,
                    to: 15,
                    sprite: null,
                    next: "close_eye_02",
                    idle: "close_eye_01"
                }, {
                    id: "close_eye_02",
                    path: "./image/zz",
                    name: "a_02_000",
                    from: 42,
                    to: 50,
                    sprite: null,
                    next: "close_eye_03",
                    idle: "close_eye_01"
                }, {
                    id: "close_eye_03",
                    path: "./image/zz",
                    name: "a_03_000",
                    from: 79,
                    to: 87,
                    sprite: null,
                    next: "open_eye_scary",
                    idle: "close_eye_01"
                }, {
                    id: "open_eye_01",
                    path: "./image/zz",
                    name: "b_01_00",
                    from: 154,
                    to: 162,
                    sprite: null,
                    next: "open_eye_02",
                    idle: "open_eye_01"
                }, {
                    id: "open_eye_02",
                    path: "./image/zz",
                    name: "b_02_00",
                    from: 200,
                    to: 211,
                    sprite: null,
                    next: "open_eye_03",
                    idle: "open_eye_01"
                }, {
                    id: "open_eye_03",
                    path: "./image/zz",
                    name: "b_03_00",
                    from: 211,
                    to: 220,
                    sprite: null,
                    next: pe[me].id,
                    idle: "open_eye_01"
                }, {
                    id: "open_eye_scary",
                    path: "./image/zz",
                    name: "ab_01_00",
                    from: 103,
                    to: 114,
                    sprite: null,
                    next: "open_eye_01",
                    idle: "open_eye_01"
                }],
                ye = 750,
                xe = 1334,
                Ie = PIXI.loader,
                ve = this,
                we = "close_eye_01",
                be = !0,
                Ce = 0,
                Pe = !0;
            if ($(window).bind("orientationchange", p), $(window).bind("resize", s), le.Android()) {
                var Ae = document.querySelector("meta[name=viewport]");
                Ae.setAttribute("content", "width=device-width, initial-scale=1.0, maximum-scale=1.0,minimum-scale=1.0, user-scalable=0")
            }
            w()
        }, {
            "./js/AutoFitContainer": 2,
            "./js/Pointer": 3
        }],
        2: [function(e, o, t) {
            PIXI.AutoFitContainer = function(e, o, t, n) {
                PIXI.Container.call(this), this.originalWidth = e, this.originalHeight = o, this.resize(t, n)
            }, PIXI.AutoFitContainer.prototype = Object.create(PIXI.Container.prototype), PIXI.AutoFitContainer.constructor = PIXI.AutoFitContainer, PIXI.AutoFitContainer.prototype.resize = function(e, o) {
                var t, n = this.originalWidth / this.originalHeight,
                    i = e / o;
                t = n >= i ? e / this.originalWidth : o / this.originalHeight, t = e / this.originalWidth, this.scale.set(t, t), this.position.set(.5 * (e - this.originalWidth * t), .5 * (o - this.originalHeight * t))
            }
        }, {}],
        3: [function(e, o, t) {
            function n(e, o) {
                PIXI.Sprite.call(this, e), this.anchor.set(.5, 0), this.maxRotation = Math.PI, this.maxRotationVelocity = .01, this.rotationVelocity = 0, this.rotationAcceleration = 0, this.rotationDamp = -2e-4, this.onFinish = o, this.isFinish = !1, this._startRotaion = 0
            }
            n.prototype = Object.create(PIXI.Sprite.prototype), n.constructor = n, o.exports = n, Object.defineProperties(n.prototype, {
                startRotaion: {
                    get: function() {
                        return this._startRotaion
                    },
                    set: function(e) {
                        this._startRotaion = e, this.rotation = this._startRotaion
                    }
                },
                progress: {
                    get: function() {
                        return (this.rotation - this._startRotaion) / (this.maxRotation - this._startRotaion)
                    }
                }
            }), n.prototype.update = function() {
                this.isFinish || (this.rotationVelocity += this.rotationAcceleration + this.rotationDamp, this.rotationVelocity > this.maxRotationVelocity && (this.rotationVelocity = this.maxRotationVelocity), this.rotationVelocity <= 0 && (this.rotationVelocity = 0), this.rotation += this.rotationVelocity, this.rotation <= 0 && (this.rotation = 0), this.rotation > this.maxRotation && !this.isFinish && (this.rotation = this.maxRotation, this.isFinish = !0, this.onFinish.call(null)))
            }, n.prototype.press = function() {
                this.rotationAcceleration = .02
            }, n.prototype.release = function() {
                this.rotationAcceleration = 0
            }, n.prototype.click = function() {
                this.rotationVelocity = this.maxRotationVelocity
            }
        }, {}]
    }, {}, [1]);
