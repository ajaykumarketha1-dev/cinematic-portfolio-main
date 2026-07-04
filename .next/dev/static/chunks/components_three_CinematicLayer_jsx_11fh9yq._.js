(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/three/CinematicLayer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CinematicLayer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function createBokehTexture() {
    const size = 256;
    const canvas = document.createElement('canvas');
    canvas.width = canvas.height = size;
    const ctx = canvas.getContext('2d');
    const r = size / 2;
    const g = ctx.createRadialGradient(r, r, 0, r, r, r);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.25, 'rgba(255,255,255,0.6)');
    g.addColorStop(0.6, 'rgba(255,255,255,0.12)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, size, size);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](canvas);
}
const PALETTE = [
    0xfff4e0,
    0xffcc88,
    0xff9944,
    0xffeedd,
    0xffddaa,
    0xffffff
];
function CinematicLayer() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "3db6d7ee38ee71fad7cfe0ee0772f63082b861bbc6fb6a9cbc00da01a45ae31d") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "3db6d7ee38ee71fad7cfe0ee0772f63082b861bbc6fb6a9cbc00da01a45ae31d";
    }
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "CinematicLayer[useEffect()]": ()=>{
                const canvas = canvasRef.current;
                if (!canvas) {
                    return;
                }
                const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    canvas,
                    alpha: true,
                    antialias: false
                });
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](60, window.innerWidth / window.innerHeight, 0.1, 50);
                camera.position.z = 6;
                const tex = createBokehTexture();
                const orbs = [];
                for(let i = 0; i < 22; i++){
                    const mat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SpriteMaterial"]({
                        map: tex,
                        color: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"](PALETTE[i % PALETTE.length]),
                        transparent: true,
                        opacity: Math.random() * 0.09 + 0.03,
                        blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                        depthWrite: false
                    });
                    const sprite = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Sprite"](mat);
                    const scale = Math.random() * 4 + 2;
                    sprite.scale.set(scale, scale, 1);
                    const ox = (Math.random() - 0.5) * 18;
                    const oy = (Math.random() - 0.5) * 11;
                    sprite.position.set(ox, oy, (Math.random() - 0.5) * 3);
                    const wx = 2 * Math.PI / (Math.random() * 18 + 12);
                    const wy = 2 * Math.PI / (Math.random() * 14 + 8);
                    sprite.userData = {
                        ox,
                        oy,
                        ax: Math.random() * 0.9 + 0.3,
                        ay: Math.random() * 0.55 + 0.2,
                        phase: Math.random() * Math.PI * 2,
                        wx,
                        wy
                    };
                    scene.add(sprite);
                    orbs.push(sprite);
                }
                const mouse = {
                    x: 0,
                    y: 0
                };
                const camPos = {
                    x: 0,
                    y: 0
                };
                const onMove = {
                    "CinematicLayer[useEffect() > onMove]": (e)=>{
                        mouse.x = e.clientX / window.innerWidth - 0.5;
                        mouse.y = e.clientY / window.innerHeight - 0.5;
                    }
                }["CinematicLayer[useEffect() > onMove]"];
                window.addEventListener("mousemove", onMove);
                const onResize = {
                    "CinematicLayer[useEffect() > onResize]": ()=>{
                        renderer.setSize(window.innerWidth, window.innerHeight);
                        camera.aspect = window.innerWidth / window.innerHeight;
                        camera.updateProjectionMatrix();
                    }
                }["CinematicLayer[useEffect() > onResize]"];
                window.addEventListener("resize", onResize);
                const timer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timer"]();
                timer.update(performance.now());
                let elapsed = 0;
                let animId;
                const animate = {
                    "CinematicLayer[useEffect() > animate]": (timestamp)=>{
                        animId = requestAnimationFrame(animate);
                        timer.update(timestamp);
                        elapsed = elapsed + timer.getDelta();
                        elapsed;
                        orbs.forEach({
                            "CinematicLayer[useEffect() > animate > orbs.forEach()]": (s)=>{
                                const { ox: ox_0, oy: oy_0, ax, ay, phase, wx: wx_0, wy: wy_0 } = s.userData;
                                s.position.x = ox_0 + Math.sin(elapsed * wx_0 + phase) * ax;
                                s.position.y = oy_0 + Math.cos(elapsed * wy_0 + phase * 0.7) * ay;
                            }
                        }["CinematicLayer[useEffect() > animate > orbs.forEach()]"]);
                        camPos.x = camPos.x + (mouse.x * 0.5 - camPos.x) * 0.025;
                        camPos.y = camPos.y + (-mouse.y * 0.3 - camPos.y) * 0.025;
                        camera.position.x = camPos.x;
                        camera.position.y = camPos.y;
                        renderer.render(scene, camera);
                    }
                }["CinematicLayer[useEffect() > animate]"];
                requestAnimationFrame(animate);
                return ()=>{
                    cancelAnimationFrame(animId);
                    window.removeEventListener("mousemove", onMove);
                    window.removeEventListener("resize", onResize);
                    tex.dispose();
                    orbs.forEach(_CinematicLayerUseEffectAnonymousOrbsForEach);
                    renderer.dispose();
                    timer.dispose();
                };
            }
        })["CinematicLayer[useEffect()]"];
        t1 = [];
        $[1] = t0;
        $[2] = t1;
    } else {
        t0 = $[1];
        t1 = $[2];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t0, t1);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
            ref: canvasRef,
            style: {
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                zIndex: 3,
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/components/three/CinematicLayer.jsx",
            lineNumber: 158,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(CinematicLayer, "UJgi7ynoup7eqypjnwyX/s32POg=");
_c = CinematicLayer;
function _CinematicLayerUseEffectAnonymousOrbsForEach(s_0) {
    return s_0.material.dispose();
}
var _c;
__turbopack_context__.k.register(_c, "CinematicLayer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/three/CinematicLayer.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/three/CinematicLayer.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_three_CinematicLayer_jsx_11fh9yq._.js.map