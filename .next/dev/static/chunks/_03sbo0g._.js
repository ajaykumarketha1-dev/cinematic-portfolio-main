(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/gsap.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-client] (ecmascript)");
;
;
if ("TURBOPACK compile-time truthy", 1) {
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].registerPlugin(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ScrollTrigger"]);
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/styles/ui/BackgroundMusic.module.css [app-client] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bars": "BackgroundMusic-module__XNA1Ia__bars",
  "bounce": "BackgroundMusic-module__XNA1Ia__bounce",
  "toggle": "BackgroundMusic-module__XNA1Ia__toggle",
});
}),
"[project]/components/ui/BackgroundMusic.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BackgroundMusic
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$BackgroundMusic$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/ui/BackgroundMusic.module.css [app-client] (css module)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
function BackgroundMusic(t0) {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "5371ca0b80a7303cade4f7c5a6c0f9241f4e44c3935b2589f6526b9bb9aa45b4") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "5371ca0b80a7303cade4f7c5a6c0f9241f4e44c3935b2589f6526b9bb9aa45b4";
    }
    const { src: t1 } = t0;
    const src = t1 === undefined ? "/assets/background-music.mp3" : t1;
    const audioRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const btnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = ({
            "BackgroundMusic[useEffect()]": ()=>{
                const audio = audioRef.current;
                if (!audio) {
                    return;
                }
                audio.volume = 0.35;
                const wasOn = ("TURBOPACK compile-time value", "object") !== "undefined" && sessionStorage.getItem("bgm") === "on";
                if (wasOn) {
                    audio.play().then({
                        "BackgroundMusic[useEffect() > (anonymous)()]": ()=>setPlaying(true)
                    }["BackgroundMusic[useEffect() > (anonymous)()]"]).catch({
                        "BackgroundMusic[useEffect() > (anonymous)()]": ()=>setPlaying(false)
                    }["BackgroundMusic[useEffect() > (anonymous)()]"]);
                }
                setReady(true);
            }
        })["BackgroundMusic[useEffect()]"];
        t3 = [];
        $[1] = t2;
        $[2] = t3;
    } else {
        t2 = $[1];
        t3 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t2, t3);
    let t4;
    let t5;
    if ($[3] !== ready) {
        t4 = ({
            "BackgroundMusic[useEffect()]": ()=>{
                if (!ready || !btnRef.current) {
                    return;
                }
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(btnRef.current, {
                    opacity: 0,
                    y: 12
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    delay: 1.2,
                    ease: "power2.out"
                });
            }
        })["BackgroundMusic[useEffect()]"];
        t5 = [
            ready
        ];
        $[3] = ready;
        $[4] = t4;
        $[5] = t5;
    } else {
        t4 = $[4];
        t5 = $[5];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[6] !== playing) {
        t6 = ({
            "BackgroundMusic[toggle]": ()=>{
                const audio_0 = audioRef.current;
                if (!audio_0) {
                    return;
                }
                if (playing) {
                    audio_0.pause();
                    setPlaying(false);
                    sessionStorage.setItem("bgm", "off");
                } else {
                    audio_0.play().then({
                        "BackgroundMusic[toggle > (anonymous)()]": ()=>{
                            setPlaying(true);
                            sessionStorage.setItem("bgm", "on");
                        }
                    }["BackgroundMusic[toggle > (anonymous)()]"]).catch(_BackgroundMusicToggleAnonymous);
                }
            }
        })["BackgroundMusic[toggle]"];
        $[6] = playing;
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const toggle = t6;
    let t7;
    if ($[8] !== src) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("audio", {
            ref: audioRef,
            src: src,
            loop: true,
            preload: "auto"
        }, void 0, false, {
            fileName: "[project]/components/ui/BackgroundMusic.jsx",
            lineNumber: 116,
            columnNumber: 10
        }, this);
        $[8] = src;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    const t8 = playing ? "Mute background music" : "Play background music";
    const t9 = playing ? "Mute background music" : "Play background music";
    let t10;
    if ($[10] !== playing) {
        t10 = playing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaVolumeUp"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/components/ui/BackgroundMusic.jsx",
            lineNumber: 126,
            columnNumber: 21
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaVolumeMute"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/components/ui/BackgroundMusic.jsx",
            lineNumber: 126,
            columnNumber: 48
        }, this);
        $[10] = playing;
        $[11] = t10;
    } else {
        t10 = $[11];
    }
    let t11;
    let t12;
    let t13;
    let t14;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
            fileName: "[project]/components/ui/BackgroundMusic.jsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
            fileName: "[project]/components/ui/BackgroundMusic.jsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
            fileName: "[project]/components/ui/BackgroundMusic.jsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {}, void 0, false, {
            fileName: "[project]/components/ui/BackgroundMusic.jsx",
            lineNumber: 140,
            columnNumber: 11
        }, this);
        $[12] = t11;
        $[13] = t12;
        $[14] = t13;
        $[15] = t14;
    } else {
        t11 = $[12];
        t12 = $[13];
        t13 = $[14];
        t14 = $[15];
    }
    let t15;
    if ($[16] !== playing) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$BackgroundMusic$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].bars,
            "data-playing": playing,
            children: [
                t11,
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/BackgroundMusic.jsx",
            lineNumber: 153,
            columnNumber: 11
        }, this);
        $[16] = playing;
        $[17] = t15;
    } else {
        t15 = $[17];
    }
    let t16;
    if ($[18] !== playing || $[19] !== t10 || $[20] !== t15 || $[21] !== t8 || $[22] !== t9 || $[23] !== toggle) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            ref: btnRef,
            type: "button",
            onClick: toggle,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$BackgroundMusic$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].toggle,
            "aria-label": t8,
            "aria-pressed": playing,
            title: t9,
            children: [
                t10,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/BackgroundMusic.jsx",
            lineNumber: 161,
            columnNumber: 11
        }, this);
        $[18] = playing;
        $[19] = t10;
        $[20] = t15;
        $[21] = t8;
        $[22] = t9;
        $[23] = toggle;
        $[24] = t16;
    } else {
        t16 = $[24];
    }
    let t17;
    if ($[25] !== t16 || $[26] !== t7) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t7,
                t16
            ]
        }, void 0, true);
        $[25] = t16;
        $[26] = t7;
        $[27] = t17;
    } else {
        t17 = $[27];
    }
    return t17;
}
_s(BackgroundMusic, "oMAmwNvKeQOUWMNdznse2QTuiVw=");
_c = BackgroundMusic;
function _BackgroundMusicToggleAnonymous() {}
var _c;
__turbopack_context__.k.register(_c, "BackgroundMusic");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_03sbo0g._.js.map