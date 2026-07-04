(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/three/HeroBackground.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroBackground
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function makeSprite() {
    const c = document.createElement('canvas');
    c.width = c.height = 128;
    const ctx = c.getContext('2d');
    const g = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, 'rgba(255,255,255,1)');
    g.addColorStop(0.35, 'rgba(255,255,255,0.7)');
    g.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, 128, 128);
    return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CanvasTexture"](c);
}
// Warm whites + cream - stand out against hero's orange gradient
const PALETTE = [
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#ffffff'),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#fff9f0'),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#ffe8cc'),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]('#ffd4a0')
];
function randColor() {
    return PALETTE[Math.floor(Math.random() * PALETTE.length)];
}
function HeroBackground() {
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(4);
    if ($[0] !== "c3b56c9280b8b398dacdd4958b97b47502b043554d8ec8ea114ec2e22a633169") {
        for(let $i = 0; $i < 4; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "c3b56c9280b8b398dacdd4958b97b47502b043554d8ec8ea114ec2e22a633169";
    }
    const mountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    let t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = ({
            "HeroBackground[useEffect()]": ()=>{
                const mount = mountRef.current;
                if (!mount) {
                    return;
                }
                let W = mount.clientWidth;
                let H = mount.clientHeight;
                const renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                    antialias: true,
                    alpha: true
                });
                renderer.setSize(W, H);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
                renderer.domElement.style.cssText = "position:absolute;inset:0;width:100%;height:100%;pointer-events:none;";
                mount.appendChild(renderer.domElement);
                const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PerspectiveCamera"](55, W / H, 0.1, 200);
                camera.position.z = 9;
                const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Scene"]();
                const tex = makeSprite();
                const p1 = new Float32Array(195);
                const c1 = new Float32Array(195);
                const spd1 = new Float32Array(65);
                const off1 = new Float32Array(65);
                for(let i = 0; i < 65; i++){
                    p1[i * 3] = (Math.random() - 0.5) * 18;
                    p1[i * 3 + 1] = (Math.random() - 0.5) * 11;
                    p1[i * 3 + 2] = (Math.random() - 0.5) * 5;
                    const col = randColor();
                    c1[i * 3] = col.r;
                    c1[i * 3 + 1] = col.g;
                    c1[i * 3 + 2] = col.b;
                    spd1[i] = Math.random() * 0.45 + 0.12;
                    off1[i] = Math.random() * Math.PI * 2;
                }
                const g1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
                g1.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](p1, 3));
                g1.setAttribute("color", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](c1, 3));
                const m1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                    size: 0.07,
                    map: tex,
                    vertexColors: true,
                    transparent: true,
                    opacity: 0.7,
                    depthWrite: false,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                    sizeAttenuation: true
                });
                const pts1 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](g1, m1);
                scene.add(pts1);
                const p2 = new Float32Array(66);
                const c2 = new Float32Array(66);
                const spd2 = new Float32Array(22);
                const off2 = new Float32Array(22);
                for(let i_0 = 0; i_0 < 22; i_0++){
                    p2[i_0 * 3] = (Math.random() - 0.5) * 16;
                    p2[i_0 * 3 + 1] = (Math.random() - 0.5) * 10;
                    p2[i_0 * 3 + 2] = (Math.random() - 0.5) * 3 - 3;
                    const col_0 = randColor();
                    c2[i_0 * 3] = col_0.r;
                    c2[i_0 * 3 + 1] = col_0.g;
                    c2[i_0 * 3 + 2] = col_0.b;
                    spd2[i_0] = Math.random() * 0.18 + 0.05;
                    off2[i_0] = Math.random() * Math.PI * 2;
                }
                const g2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferGeometry"]();
                g2.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](p2, 3));
                g2.setAttribute("color", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](c2, 3));
                const m2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PointsMaterial"]({
                    size: 0.55,
                    map: tex,
                    vertexColors: true,
                    transparent: true,
                    opacity: 0.15,
                    depthWrite: false,
                    blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                    sizeAttenuation: true
                });
                const pts2 = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Points"](g2, m2);
                scene.add(pts2);
                const mouse = {
                    x: 0,
                    y: 0
                };
                const cam = {
                    x: 0,
                    y: 0
                };
                const onMove = function onMove(e) {
                    const r = mount.getBoundingClientRect();
                    mouse.x = ((e.clientX - r.left) / r.width - 0.5) * 2;
                    mouse.y = -((e.clientY - r.top) / r.height - 0.5) * 2;
                };
                const section = mount.parentElement;
                section?.addEventListener("mousemove", onMove);
                const timer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Timer"]();
                timer.update(performance.now());
                let raf;
                function tick() {
                    raf = requestAnimationFrame(tick);
                    timer.update(performance.now());
                    const dt = Math.min(timer.getDelta(), 0.05);
                    const elapsed = timer.getElapsed();
                    cam.x = cam.x + (mouse.x * 0.55 - cam.x) * 0.05;
                    cam.y = cam.y + (mouse.y * 0.32 - cam.y) * 0.05;
                    camera.position.x = cam.x;
                    camera.position.y = cam.y;
                    for(let i_1 = 0; i_1 < 65; i_1++){
                        p1[i_1 * 3 + 1] = p1[i_1 * 3 + 1] + spd1[i_1] * dt * 0.75;
                        p1[i_1 * 3] = p1[i_1 * 3] + Math.sin(elapsed * spd1[i_1] * 0.7 + off1[i_1]) * dt * 0.12;
                        if (p1[i_1 * 3 + 1] > 6) {
                            p1[i_1 * 3 + 1] = -6;
                        }
                    }
                    g1.attributes.position.needsUpdate = true;
                    for(let i_2 = 0; i_2 < 22; i_2++){
                        p2[i_2 * 3 + 1] = p2[i_2 * 3 + 1] + spd2[i_2] * dt * 0.55;
                        p2[i_2 * 3] = p2[i_2 * 3] + Math.sin(elapsed * spd2[i_2] * 0.5 + off2[i_2]) * dt * 0.09;
                        if (p2[i_2 * 3 + 1] > 6) {
                            p2[i_2 * 3 + 1] = -6;
                        }
                    }
                    g2.attributes.position.needsUpdate = true;
                    renderer.render(scene, camera);
                }
                tick();
                const ro = new ResizeObserver(()=>{
                    W = mount.clientWidth;
                    H = mount.clientHeight;
                    camera.aspect = W / H;
                    camera.updateProjectionMatrix();
                    renderer.setSize(W, H);
                });
                ro.observe(mount);
                return ()=>{
                    cancelAnimationFrame(raf);
                    ro.disconnect();
                    section?.removeEventListener("mousemove", onMove);
                    g1.dispose();
                    g2.dispose();
                    m1.dispose();
                    m2.dispose();
                    tex.dispose();
                    renderer.dispose();
                    if (mount.contains(renderer.domElement)) {
                        mount.removeChild(renderer.domElement);
                    }
                };
            }
        })["HeroBackground[useEffect()]"];
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
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: mountRef,
            style: {
                position: "absolute",
                inset: 0,
                zIndex: 0,
                pointerEvents: "none"
            }
        }, void 0, false, {
            fileName: "[project]/components/three/HeroBackground.jsx",
            lineNumber: 196,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    return t2;
}
_s(HeroBackground, "V9/qkEdV8GfsDZk7lMTA1T8g5Ps=");
_c = HeroBackground;
var _c;
__turbopack_context__.k.register(_c, "HeroBackground");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/three/HeroBackground.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/components/three/HeroBackground.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=components_three_HeroBackground_jsx_07.kwg9._.js.map