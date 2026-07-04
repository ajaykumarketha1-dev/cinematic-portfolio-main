module.exports = [
"[project]/lib/utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/navigation-menu.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "NavigationMenu",
    ()=>NavigationMenu,
    "NavigationMenuContent",
    ()=>NavigationMenuContent,
    "NavigationMenuIndicator",
    ()=>NavigationMenuIndicator,
    "NavigationMenuItem",
    ()=>NavigationMenuItem,
    "NavigationMenuLink",
    ()=>NavigationMenuLink,
    "NavigationMenuList",
    ()=>NavigationMenuList,
    "NavigationMenuPositioner",
    ()=>NavigationMenuPositioner,
    "NavigationMenuTrigger",
    ()=>NavigationMenuTrigger,
    "navigationMenuTriggerStyle",
    ()=>navigationMenuTriggerStyle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__ = __turbopack_context__.i("[project]/node_modules/@base-ui/react/esm/navigation-menu/index.parts.js [app-ssr] (ecmascript) <export * as NavigationMenu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
function NavigationMenu({ align = "start", className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__["NavigationMenu"].Root, {
        "data-slot": "navigation-menu",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(NavigationMenuPositioner, {
                align: align
            }, void 0, false, {
                fileName: "[project]/components/ui/navigation-menu.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/navigation-menu.jsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
function NavigationMenuList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__["NavigationMenu"].List, {
        "data-slot": "navigation-menu-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group flex flex-1 list-none items-center justify-center gap-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/navigation-menu.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this);
}
function NavigationMenuItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__["NavigationMenu"].Item, {
        "data-slot": "navigation-menu-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("relative", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/navigation-menu.jsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
const navigationMenuTriggerStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-lg px-2.5 py-1.5 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted");
function NavigationMenuTrigger({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__["NavigationMenu"].Trigger, {
        "data-slot": "navigation-menu-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(navigationMenuTriggerStyle(), "group", className),
        ...props,
        children: [
            children,
            " ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaChevronDown"], {
                className: "relative top-px ml-1 size-3 transition duration-300 group-data-popup-open/navigation-menu-trigger:rotate-180 group-data-open/navigation-menu-trigger:rotate-180",
                "aria-hidden": "true"
            }, void 0, false, {
                fileName: "[project]/components/ui/navigation-menu.jsx",
                lineNumber: 66,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/navigation-menu.jsx",
        lineNumber: 61,
        columnNumber: 5
    }, this);
}
function NavigationMenuContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__["NavigationMenu"].Content, {
        "data-slot": "navigation-menu-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-ending-style:data-activation-direction=left:translate-x-[50%] data-ending-style:data-activation-direction=right:translate-x-[-50%] data-starting-style:data-activation-direction=left:translate-x-[-50%] data-starting-style:data-activation-direction=right:translate-x-[50%] h-full w-auto p-1 transition-[opacity,transform,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] group-data-[viewport=false]/navigation-menu:rounded-lg group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground group-data-[viewport=false]/navigation-menu:shadow group-data-[viewport=false]/navigation-menu:ring-1 group-data-[viewport=false]/navigation-menu:ring-foreground/10 group-data-[viewport=false]/navigation-menu:duration-300 data-ending-style:opacity-0 data-starting-style:opacity-0 data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 data-[motion^=from-]:animate-in data-[motion^=from-]:fade-in data-[motion^=to-]:animate-out data-[motion^=to-]:fade-out **:data-[slot=navigation-menu-link]:focus:ring-0 **:data-[slot=navigation-menu-link]:focus:outline-none group-data-[viewport=false]/navigation-menu:data-open:animate-in group-data-[viewport=false]/navigation-menu:data-open:fade-in-0 group-data-[viewport=false]/navigation-menu:data-open:zoom-in-95 group-data-[viewport=false]/navigation-menu:data-closed:animate-out group-data-[viewport=false]/navigation-menu:data-closed:fade-out-0 group-data-[viewport=false]/navigation-menu:data-closed:zoom-out-95", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/navigation-menu.jsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
function NavigationMenuPositioner({ className, side = "bottom", sideOffset = 8, align = "start", alignOffset = 0, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__["NavigationMenu"].Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__["NavigationMenu"].Positioner, {
            side: side,
            sideOffset: sideOffset,
            align: align,
            alignOffset: alignOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("isolate z-50 h-(--positioner-height) w-(--positioner-width) max-w-(--available-width) transition-[top,left,right,bottom] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] data-instant:transition-none data-[side=bottom]:before:top-[-10px] data-[side=bottom]:before:right-0 data-[side=bottom]:before:left-0", className),
            ...props,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__["NavigationMenu"].Popup, {
                className: "data-[ending-style]:easing-[ease] xs:w-(--popup-width) relative h-(--popup-height) w-(--popup-width) origin-(--transform-origin) rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 transition-[opacity,transform,width,height,scale,translate] duration-[0.35s] ease-[cubic-bezier(0.22,1,0.36,1)] outline-none data-ending-style:scale-90 data-ending-style:opacity-0 data-ending-style:duration-150 data-starting-style:scale-90 data-starting-style:opacity-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__["NavigationMenu"].Viewport, {
                    className: "relative size-full overflow-hidden"
                }, void 0, false, {
                    fileName: "[project]/components/ui/navigation-menu.jsx",
                    lineNumber: 110,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/navigation-menu.jsx",
                lineNumber: 108,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ui/navigation-menu.jsx",
            lineNumber: 98,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/navigation-menu.jsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
function NavigationMenuLink({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__["NavigationMenu"].Link, {
        "data-slot": "navigation-menu-link",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center gap-2 rounded-lg p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-md data-active:bg-muted/50 data-active:hover:bg-muted data-active:focus:bg-muted [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/navigation-menu.jsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
function NavigationMenuIndicator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$base$2d$ui$2f$react$2f$esm$2f$navigation$2d$menu$2f$index$2e$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__NavigationMenu$3e$__["NavigationMenu"].Icon, {
        "data-slot": "navigation-menu-indicator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("top-full z-1 flex h-1.5 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:animate-in data-[state=visible]:fade-in", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"
        }, void 0, false, {
            fileName: "[project]/components/ui/navigation-menu.jsx",
            lineNumber: 144,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/navigation-menu.jsx",
        lineNumber: 137,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/data/profile.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = JSON.parse("{\"name\":{\"first\":\"Abdulla\",\"last\":\"Shaik\",\"full\":\"Shaik Abdulla\"},\"email\":\"shaikabdullas457@gmail.com\",\"phone\":\"+91 9703970139\",\"tagline\":\"Building scalable, high-performance digital experiences on Adobe Experience Manager.\",\"description\":\"Senior AEM Developer with 6.5+ years designing, developing, and migrating enterprise-scale digital solutions on Adobe Experience Manager for banking, hospitality, automotive, and aviation clients.\",\"roles\":{\"short\":\"Senior AEM Developer\",\"detailed\":\"AEM Sites & Forms | Cloud Service Migrations | Enterprise Integrations\"},\"location\":{\"based\":\"Hyderabad, Telangana, India\",\"availability\":\"Hyderabad / Remote\"},\"available\":true,\"bio\":\"Senior AEM Developer with 6.5+ years of experience designing, developing, and implementing enterprise-scale digital solutions using Adobe Experience Manager (Sites, Assets, and Forms). Expertise in custom component development, Sling Models, OSGi services, Multi-Site Management, Dispatcher configuration, and AEM Cloud Service migrations. Proven experience delivering scalable, high-performance, SEO-optimized websites for global clients across banking, hospitality, automotive, and aviation industries, integrating AEM with external systems via REST and SOAP APIs, and driving end-to-end delivery in Agile environments.\",\"stats\":[{\"value\":\"6.5+\",\"label\":\"Years Experience\"},{\"value\":\"5\",\"label\":\"Enterprise Clients\"},{\"value\":\"70+\",\"label\":\"Global Sites Migrated\"}],\"skills\":[\"AEM Sites\",\"AEM Forms\",\"Sling Models\",\"OSGi Services\",\"HTL / Sightly\",\"Multi-Site Management\",\"Dispatcher\",\"AEM Cloud Service\",\"Java\",\"JSP\",\"REST APIs\",\"Content Fragments\",\"Experience Fragments\",\"Maven\",\"Jenkins\",\"Git\",\"Cloud Manager\",\"Agile / Scrum\"],\"experience\":[{\"id\":1,\"role\":\"AEM Developer — Forms\",\"company\":\"Hayagreeva Consulting Pvt. Ltd.\",\"companyShort\":\"HAYAGREEVA\",\"type\":\"Full-time\",\"location\":\"Hyderabad, India\",\"period\":\"Oct 2025\",\"periodEnd\":\"Mar 2026\",\"client\":\"Client: HDFC Bank — Digital Banking & Customer Onboarding\",\"bullets\":[\"Developed and customized Adaptive Forms using HTL, HTML5, CSS3, and JavaScript for HDFC Bank's customer onboarding, identity verification, loan origination, and account opening journeys, implementing dynamic rules, client-side validations, and conditional field behaviors.\",\"Integrated Adaptive Forms with core banking systems and third-party platforms via REST APIs and Form Data Models (FDM), enabling real-time data pre-population, validation, and seamless backend data exchange.\",\"Architected reusable client libraries, form fragments, and editable templates that reduced cross-project development effort by approximately 30% and enforced UI consistency across all customer-facing forms.\",\"Configured FDMs for secure backend and third-party connectivity, and leveraged Sling Resource Merger to overlay foundation pages with custom properties without modifying core code.\",\"Partnered with backend engineers, QA, and business stakeholders in Agile sprints via Jira, achieving 100% on-time delivery of all digital banking form features.\"],\"desc\":\"Adaptive Forms development, REST/FDM integrations, and reusable component architecture for HDFC Bank's digital onboarding journeys.\",\"tech\":[\"AEM Forms\",\"HTL\",\"REST API\",\"FDM\",\"Sling Resource Merger\",\"Jira\"]},{\"id\":2,\"role\":\"AEM Developer — Sites\",\"company\":\"Yinbotech Systems Pvt. Ltd.\",\"companyShort\":\"YINBOTECH\",\"type\":\"Full-time\",\"location\":\"Hyderabad, India\",\"period\":\"Jan 2024\",\"periodEnd\":\"Sep 2025\",\"client\":\"Client: Carnival Cruise Line — Global Guest Digital Experience Platform\",\"bullets\":[\"Architected and developed a library of 25+ reusable AEM Sites components, editable templates, and hierarchical page structures powering multi-regional guest portals across 15+ site variants serving millions of annual visitors.\",\"Built and deployed OSGi services and Sling Models for backend REST API integration, dynamically pulling cruise itinerary, cabin availability, and pricing data into AEM components with zero manual intervention.\",\"Implemented centralized Experience Fragments for navigation, promotional banners, and global footers, enabling single-source updates that propagated instantly to 15+ regional properties.\",\"Optimized Dispatcher caching rules, introduced lazy-loading strategies, and applied HTTP cache-control tuning, improving average page load performance by approximately 25% and strengthening Core Web Vitals.\"],\"desc\":\"AEM Sites component architecture, OSGi/Sling Model integrations, and Dispatcher performance tuning for Carnival's global guest platform.\",\"tech\":[\"AEM Sites\",\"OSGi\",\"Sling Models\",\"Experience Fragments\",\"Dispatcher\"]},{\"id\":3,\"role\":\"AEM Developer — Sites\",\"company\":\"Yinbotech Systems Pvt. Ltd.\",\"companyShort\":\"YINBOTECH\",\"type\":\"Full-time\",\"location\":\"Hyderabad, India\",\"period\":\"Jan 2023\",\"periodEnd\":\"Dec 2023\",\"client\":\"Client: Hyatt Hotels Corporation — Hyatt.com AEM Cloud Migration\",\"bullets\":[\"Led end-to-end migration of 70+ localized Hyatt websites from AEM 6.5 on-premise to AEM as a Cloud Service, orchestrating content migration, component refactoring, and OSGi bundle compatibility remediation.\",\"Containerized AEM Author, Publish, and Dispatcher tiers using POD-based infrastructure, configuring Kubernetes-managed deployments via Cloud Manager pipelines for rolling updates and rapid rollback.\",\"Refactored and migrated a comprehensive library of components, Content Fragments, and Experience Fragments to AEMaaCS-compliant standards, reducing authoring effort by approximately 35% post-migration.\",\"Executed large-scale DAM migration of 50,000+ digital assets to AEMaaCS, re-engineering custom metadata schemas for accurate tagging and improved global asset search.\"],\"desc\":\"Zero-content-loss migration of 70+ localized websites to AEM as a Cloud Service, with POD-based containerization and large-scale DAM migration.\",\"tech\":[\"AEM Cloud Service\",\"Cloud Manager\",\"Kubernetes\",\"DAM\",\"Content Fragments\"]},{\"id\":4,\"role\":\"AEM Developer — Sites\",\"company\":\"Yinbotech Systems Pvt. Ltd.\",\"companyShort\":\"YINBOTECH\",\"type\":\"Full-time\",\"location\":\"Hyderabad, India\",\"period\":\"Jun 2021\",\"periodEnd\":\"Dec 2022\",\"client\":\"Client: Mitsubishi Motors — AEM Migration & Global Product Marketing\",\"bullets\":[\"Spearheaded migration of Mitsubishi Motors' global marketing websites from AEM 6.3 to AEM 6.5, auditing legacy components and OSGi configurations and refactoring custom code to ensure zero regression across 10+ regional markets.\",\"Rebuilt MSM Blueprint and Live Copy structures, re-applying rollout configurations for seamless global-to-local content propagation and consistent cross-regional branding.\",\"Rebuilt OSGi bundles and Sling Models to re-integrate vehicle catalog data from manufacturer backend APIs, validating 500+ vehicle specifications post-migration and reducing time-to-publish by 60%.\",\"Re-established Dispatcher caching strategies and front-end performance tuning, achieving sub-2-second global page loads and automating DAM approval workflows to improve asset delivery speed by approximately 40%.\"],\"desc\":\"AEM 6.3 to 6.5 platform migration, MSM rollout re-architecture, and OSGi/Dispatcher performance work for Mitsubishi Motors' global sites.\",\"tech\":[\"AEM 6.5\",\"MSM\",\"OSGi\",\"Dispatcher\",\"DAM Workflows\"]},{\"id\":5,\"role\":\"Java Developer → AEM Developer\",\"company\":\"Yinbotech Systems Pvt. Ltd.\",\"companyShort\":\"YINBOTECH\",\"type\":\"Full-time\",\"location\":\"Hyderabad, India\",\"period\":\"Jul 2019\",\"periodEnd\":\"May 2021\",\"client\":\"Client: JetBlue Airways — Java Development & AEM Sites Transition\",\"bullets\":[\"Developed and maintained RESTful web services, Java servlets, and JSP-based back-end integrations supporting JetBlue's core digital customer engagement systems, before transitioning into AEM development.\",\"Led AEM 6.3 to 6.5 platform migration for JetBlue's digital properties, auditing legacy components and custom OSGi bundles and resolving API compatibility issues with zero downtime post-upgrade.\",\"Developed custom AEM components, editable templates, and Sling Models powering flight search, booking confirmation, and loyalty account pages, integrated with backend flight data APIs via OSGi services.\",\"Built and maintained client libraries for front-end JavaScript and CSS, implementing responsive design patterns and cross-browser compatibility across all JetBlue digital touchpoints.\"],\"desc\":\"Java/JSP backend development followed by an AEM 6.3 to 6.5 migration and custom component development for JetBlue's digital properties.\",\"tech\":[\"Java\",\"JSP\",\"REST\",\"AEM 6.5\",\"OSGi\",\"Sling Models\"]}],\"projects\":[{\"id\":1,\"title\":\"HDFC Bank\",\"subtitle\":\"Digital Banking & Customer Onboarding\",\"type\":\"AEM Forms\",\"link\":\"mailto:shaikabdullas457@gmail.com\",\"image\":\"/assets/project-hdfc.png\",\"tech\":[\"Adaptive Forms\",\"HTL\",\"REST API\",\"Form Data Models\",\"Sling Resource Merger\"],\"desc\":\"Adaptive Forms for customer onboarding, identity verification, and loan origination, integrated with core banking systems via REST and FDM, cutting cross-project development effort by ~30%.\"},{\"id\":2,\"title\":\"Carnival Cruise Line\",\"subtitle\":\"Global Guest Digital Experience Platform\",\"type\":\"AEM Sites\",\"link\":\"mailto:shaikabdullas457@gmail.com\",\"image\":\"/assets/project-carnival.png\",\"tech\":[\"AEM Sites\",\"OSGi\",\"Sling Models\",\"Experience Fragments\",\"Dispatcher\"],\"desc\":\"A 25+ component library and centralized Experience Fragments powering 15+ regional guest portals, with Dispatcher tuning that improved page load performance by ~25%.\"}],\"publications\":[{\"id\":1,\"title\":\"AEM Cloud Service Migration\",\"platform\":\"Practice Area\",\"year\":\"2026\",\"link\":\"mailto:shaikabdullas457@gmail.com\",\"desc\":\"End-to-end migration planning from AEM on-premise to AEM as a Cloud Service, covering content migration, component refactoring, and POD-based containerized testing.\"},{\"id\":2,\"title\":\"AEM Forms & Adaptive Forms\",\"platform\":\"Practice Area\",\"year\":\"2026\",\"link\":\"mailto:shaikabdullas457@gmail.com\",\"desc\":\"Adaptive Forms design, Form Data Model integrations, prefill services, e-signatures, and document generation workflows for enterprise digital onboarding.\"},{\"id\":3,\"title\":\"Multi-Site Management at Scale\",\"platform\":\"Practice Area\",\"year\":\"2026\",\"link\":\"mailto:shaikabdullas457@gmail.com\",\"desc\":\"Blueprint and Live Copy architecture, rollout configuration, and localization strategy for global brands operating 70+ regional websites.\"},{\"id\":4,\"title\":\"Enterprise AEM Advisory\",\"platform\":\"Practice Area\",\"year\":\"2026\",\"link\":\"mailto:shaikabdullas457@gmail.com\",\"desc\":\"Architecture, Dispatcher caching strategy, performance tuning, and OSGi/Sling Model integration guidance for AEM Sites and Forms implementations.\"}],\"socials\":[{\"label\":\"LinkedIn\",\"href\":\"https://www.linkedin.com/in/shaik-abdulla-s/\"},{\"label\":\"GitHub\",\"href\":\"https://github.com/ajaykumarketha1-dev\"}]}");
}),
"[project]/styles/ui/Navbar.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "darkMode": "Navbar-module__0AR0PG__darkMode",
  "emailBtn": "Navbar-module__0AR0PG__emailBtn",
  "hamburger": "Navbar-module__0AR0PG__hamburger",
  "header": "Navbar-module__0AR0PG__header",
  "introMode": "Navbar-module__0AR0PG__introMode",
  "mobileMailLink": "Navbar-module__0AR0PG__mobileMailLink",
  "mobileMenu": "Navbar-module__0AR0PG__mobileMenu",
  "mobileNavLink": "Navbar-module__0AR0PG__mobileNavLink",
  "navLink": "Navbar-module__0AR0PG__navLink",
  "navMenu": "Navbar-module__0AR0PG__navMenu",
  "time": "Navbar-module__0AR0PG__time",
});
}),
"[project]/components/ui/Navbar.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$navigation$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/navigation-menu.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/profile.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/ui/Navbar.module.css [app-ssr] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
// idx matches snap position in page.js (0=video,1=hero,2=about,3-4=projects,5=work-exp,6=publications,7=footer)
const NAV_ITEMS = [
    {
        label: 'Home',
        idx: 0
    },
    {
        label: 'About',
        idx: 2
    },
    {
        label: 'Work',
        idx: 3
    },
    {
        label: 'Experience',
        idx: 5
    },
    {
        label: 'Impact',
        idx: 6
    },
    {
        label: 'Contact',
        idx: 7
    }
];
function getIST() {
    return new Date().toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    }).toUpperCase();
}
function Navbar() {
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('') // '' on SSR - avoids hydration mismatch
    ;
    const [onIntro, setOnIntro] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [onDark, setOnDark] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const headerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastY = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const hidden = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const stopTimer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Live clock - set immediately on mount, then every second
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setTime(getIST());
        const id = setInterval(()=>setTime(getIST()), 1000);
        return ()=>clearInterval(id);
    }, []);
    // Auto-hide on scroll-down, reveal on scroll-up or scroll-stop
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const scroller = document.querySelector('main') ?? window;
        const vh = window.innerHeight;
        function showNavbar() {
            if (!hidden.current) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(headerRef.current, {
                y: '0%',
                duration: 0.35,
                ease: 'power2.out'
            });
            hidden.current = false;
        }
        const onScroll = ()=>{
            const currentY = scroller.scrollTop ?? window.scrollY;
            const delta = currentY - lastY.current;
            const sectionIdx = Math.round(currentY / vh);
            setOnIntro(currentY < vh * 0.8);
            setOnDark(sectionIdx >= 3);
            if (delta > 8 && !hidden.current) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(headerRef.current, {
                    y: '-100%',
                    duration: 0.35,
                    ease: 'power2.inOut'
                });
                hidden.current = true;
            } else if (delta < -6) {
                showNavbar();
            }
            lastY.current = currentY;
            // Show navbar 400 ms after scrolling stops
            clearTimeout(stopTimer.current);
            stopTimer.current = setTimeout(showNavbar, 400);
        };
        scroller.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>{
            scroller.removeEventListener('scroll', onScroll);
            clearTimeout(stopTimer.current);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                ref: headerRef,
                className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header} ${onIntro ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].introMode : ''} ${onDark ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].darkMode : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].time,
                        children: [
                            "INDIA TIME - ",
                            time
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/Navbar.jsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$navigation$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavigationMenu"], {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navMenu,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$navigation$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavigationMenuList"], {
                            className: "flex gap-6",
                            children: NAV_ITEMS.map(({ label, idx })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$navigation$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavigationMenuItem"], {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$navigation$2d$menu$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavigationMenuLink"], {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].navLink,
                                        onClick: ()=>{
                                            const scroller = document.querySelector('main');
                                            if (scroller) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(scroller, {
                                                scrollTop: idx * window.innerHeight,
                                                duration: 1.0,
                                                ease: 'power3.inOut'
                                            });
                                        },
                                        style: {
                                            cursor: 'pointer'
                                        },
                                        children: label
                                    }, void 0, false, {
                                        fileName: "[project]/components/ui/Navbar.jsx",
                                        lineNumber: 101,
                                        columnNumber: 17
                                    }, this)
                                }, label, false, {
                                    fileName: "[project]/components/ui/Navbar.jsx",
                                    lineNumber: 100,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Navbar.jsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Navbar.jsx",
                        lineNumber: 97,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].email}`,
                        className: `${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].emailBtn} rounded-full text-xs font-semibold px-5 h-8`,
                        children: "Email me"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Navbar.jsx",
                        lineNumber: 120,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hamburger,
                        onClick: ()=>setMenuOpen((o)=>!o),
                        "aria-label": "Toggle menu",
                        children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaTimes"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Navbar.jsx",
                            lineNumber: 132,
                            columnNumber: 23
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaBars"], {
                            size: 18
                        }, void 0, false, {
                            fileName: "[project]/components/ui/Navbar.jsx",
                            lineNumber: 132,
                            columnNumber: 47
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Navbar.jsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/Navbar.jsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileMenu,
                children: [
                    NAV_ITEMS.map(({ label, idx })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileNavLink,
                            onClick: ()=>{
                                const scroller = document.querySelector('main');
                                if (scroller) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(scroller, {
                                    scrollTop: idx * window.innerHeight,
                                    duration: 1.0,
                                    ease: 'power3.inOut'
                                });
                                setMenuOpen(false);
                            },
                            children: label
                        }, label, false, {
                            fileName: "[project]/components/ui/Navbar.jsx",
                            lineNumber: 139,
                            columnNumber: 13
                        }, this)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].email}`,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$ui$2f$Navbar$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileMailLink,
                        onClick: ()=>setMenuOpen(false),
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].email
                    }, void 0, false, {
                        fileName: "[project]/components/ui/Navbar.jsx",
                        lineNumber: 155,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/Navbar.jsx",
                lineNumber: 137,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/data/content.json.[json].cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = {
    "site": {
        "tagline": "Portfolio 2026"
    },
    "hero": {
        "taglineHighlight": "AEM",
        "freelanceNote": "Open to Senior AEM Developer, AEM Sites/Forms, and Cloud Service migration opportunities.",
        "availableLabel": "Available for opportunities",
        "pills": [
            "AEM Sites",
            "AEM Forms",
            "Cloud Service Migration",
            "Enterprise Integrations"
        ],
        "specialistStat": {
            "value": "AEM + Cloud",
            "label": "Specialist"
        }
    },
    "interstitial": {
        "availabilityLabel": "Availability",
        "basedInLabel": "Based in",
        "statLabels": [
            "Years\nexperience",
            "Enterprise\nclients",
            "Global sites\nmigrated"
        ]
    },
    "footer": {
        "eyebrow": "Available for enterprise AEM engagements",
        "ctaLines": [
            "Building digital experiences",
            "the world can rely on"
        ],
        "ctaAccent": "at scale."
    }
};
}),
"[project]/styles/sections/VideoIntro.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bgVideo": "VideoIntro-module__u77jmW__bgVideo",
  "controls": "VideoIntro-module__u77jmW__controls",
  "ctrlBtn": "VideoIntro-module__u77jmW__ctrlBtn",
  "eyebrow": "VideoIntro-module__u77jmW__eyebrow",
  "heroContent": "VideoIntro-module__u77jmW__heroContent",
  "hintPulse": "VideoIntro-module__u77jmW__hintPulse",
  "mainVideo": "VideoIntro-module__u77jmW__mainVideo",
  "name": "VideoIntro-module__u77jmW__name",
  "overlay": "VideoIntro-module__u77jmW__overlay",
  "playOverlay": "VideoIntro-module__u77jmW__playOverlay",
  "role": "VideoIntro-module__u77jmW__role",
  "scrollCue": "VideoIntro-module__u77jmW__scrollCue",
  "scrollLabel": "VideoIntro-module__u77jmW__scrollLabel",
  "scrollLine": "VideoIntro-module__u77jmW__scrollLine",
  "scrollPulse": "VideoIntro-module__u77jmW__scrollPulse",
  "section": "VideoIntro-module__u77jmW__section",
  "soundHint": "VideoIntro-module__u77jmW__soundHint",
  "soundPulse": "VideoIntro-module__u77jmW__soundPulse",
});
}),
"[project]/components/sections/VideoIntro.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VideoIntro
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/profile.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/sections/VideoIntro.module.css [app-ssr] (css module)");
;
'use client';
;
;
;
;
;
;
;
const CinematicLayer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/three/CinematicLayer.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
function scrollNext() {
    const main = document.querySelector('main');
    if (main) main.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}
function VideoIntro() {
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const greetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const nameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const roleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const scrollRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const hintRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // muted state drives icon only - DOM muted property is controlled exclusively via ref
    const [muted, setMuted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showHint, setShowHint] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setIsMobile(window.matchMedia('(max-width: 767px)').matches);
    }, []);
    // Entrance animation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            delay: 0.4
        });
        tl.fromTo(greetRef.current, {
            opacity: 0,
            y: -18
        }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
        }).fromTo(nameRef.current, {
            opacity: 0,
            x: -60
        }, {
            opacity: 1,
            x: 0,
            duration: 0.9,
            ease: 'power3.out'
        }, '-=0.2').fromTo(roleRef.current, {
            opacity: 0,
            y: 20
        }, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4').fromTo(scrollRef.current, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 0.5
        }, '-=0.1');
        return ()=>tl.kill();
    }, []);
    // Video fade-in - no auto-unmute; user must click the button
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const v = videoRef.current;
        if (!v) return;
        if (typeof v.play !== 'function') return;
        // Guarantee muted on mount regardless of browser attribute handling
        v.muted = true;
        const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(v, {
            opacity: 0
        }, {
            opacity: 1,
            duration: 1.2,
            ease: 'power2.out'
        });
        return ()=>t.kill();
    }, []);
    // Unmute when screen loader is dismissed (fires inside user gesture - Safari safe)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onLoaderDismissed() {
            const v = videoRef.current;
            if (!v) return;
            if (typeof v.play !== 'function') return;
            v.muted = false;
            setMuted(false);
            dismissHint();
        }
        window.addEventListener('loader-dismissed', onLoaderDismissed);
        return ()=>window.removeEventListener('loader-dismissed', onLoaderDismissed);
    }, []);
    // Play video after shatter animation finishes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        function onAnimationDone() {
            const v = videoRef.current;
            if (!v) return;
            if (typeof v.play !== 'function') return;
            v.play().catch(()=>{});
        }
        window.addEventListener('loader-animation-done', onAnimationDone);
        return ()=>window.removeEventListener('loader-animation-done', onAnimationDone);
    }, []);
    // Auto-hide hint after 6 s
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!showHint) return;
        const id = setTimeout(()=>dismissHint(), 6000);
        return ()=>clearTimeout(id);
    }, [
        showHint
    ]);
    function dismissHint() {
        if (!hintRef.current) return;
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(hintRef.current, {
            opacity: 0,
            y: -8,
            duration: 0.35,
            onComplete: ()=>setShowHint(false)
        });
    }
    function togglePlay() {
        const v = videoRef.current;
        if (!v) return;
        if (typeof v.play !== 'function') return;
        if (playing) {
            v.pause();
            setPlaying(false);
        } else {
            v.play();
            setPlaying(true);
        }
    }
    function toggleMute() {
        if (showHint) dismissHint();
        const v = videoRef.current;
        if (!v) return;
        if (typeof v.play !== 'function') return;
        // Set DOM property synchronously inside click gesture - Safari requires this.
        // React never updates `v.muted` on re-renders (known React limitation for video),
        // so the static `muted` attr in JSX does not fight with this.
        v.muted = !v.muted;
        setMuted(v.muted);
    }
    function handleEnded() {
        const main = document.querySelector('main');
        if (main && main.scrollTop < window.innerHeight * 0.4) scrollNext();
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                src: "/assets/about_me.mp4",
                autoPlay: true,
                muted: true,
                playsInline: true,
                "aria-hidden": "true",
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bgVideo
            }, void 0, false, {
                fileName: "[project]/components/sections/VideoIntro.jsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                ref: videoRef,
                "data-testid": "intro-video",
                src: "/assets/about_me.mp4",
                muted: true,
                playsInline: true,
                onPlay: ()=>setPlaying(true),
                onPause: ()=>setPlaying(false),
                onEnded: handleEnded,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainVideo
            }, void 0, false, {
                fileName: "[project]/components/sections/VideoIntro.jsx",
                lineNumber: 134,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay
            }, void 0, false, {
                fileName: "[project]/components/sections/VideoIntro.jsx",
                lineNumber: 146,
                columnNumber: 7
            }, this),
            !isMobile && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CinematicLayer, {}, void 0, false, {
                fileName: "[project]/components/sections/VideoIntro.jsx",
                lineNumber: 149,
                columnNumber: 21
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heroContent,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: greetRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].eyebrow,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].site.tagline
                    }, void 0, false, {
                        fileName: "[project]/components/sections/VideoIntro.jsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        ref: nameRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.first,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/components/sections/VideoIntro.jsx",
                                lineNumber: 155,
                                columnNumber: 31
                            }, this),
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.last
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/VideoIntro.jsx",
                        lineNumber: 154,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        ref: roleRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].role,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].roles.detailed
                    }, void 0, false, {
                        fileName: "[project]/components/sections/VideoIntro.jsx",
                        lineNumber: 157,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/VideoIntro.jsx",
                lineNumber: 152,
                columnNumber: 7
            }, this),
            !playing && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].playOverlay,
                onClick: togglePlay,
                "aria-label": "Play video",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                    width: "72",
                    height: "72",
                    viewBox: "0 0 72 72",
                    fill: "none",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                            cx: "36",
                            cy: "36",
                            r: "35",
                            stroke: "rgba(255,255,255,0.55)",
                            strokeWidth: "1.5"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/VideoIntro.jsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "29,20 56,36 29,52",
                            fill: "white"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/VideoIntro.jsx",
                            lineNumber: 165,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/VideoIntro.jsx",
                    lineNumber: 163,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/VideoIntro.jsx",
                lineNumber: 162,
                columnNumber: 9
            }, this),
            showHint && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: hintRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].soundHint,
                onClick: toggleMute,
                style: {
                    pointerEvents: 'all',
                    cursor: 'pointer'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].soundPulse
                    }, void 0, false, {
                        fileName: "[project]/components/sections/VideoIntro.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Tap for sound"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/VideoIntro.jsx",
                        lineNumber: 174,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/VideoIntro.jsx",
                lineNumber: 172,
                columnNumber: 9
            }, this),
            false && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].controls,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctrlBtn,
                        onClick: togglePlay,
                        "aria-label": playing ? 'Pause' : 'Play',
                        children: playing ? /* Pause icon */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 14 14",
                            fill: "currentColor",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "2",
                                    y: "1",
                                    width: "4",
                                    height: "12",
                                    rx: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VideoIntro.jsx",
                                    lineNumber: 184,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "8",
                                    y: "1",
                                    width: "4",
                                    height: "12",
                                    rx: "1"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VideoIntro.jsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/VideoIntro.jsx",
                            lineNumber: 183,
                            columnNumber: 15
                        }, this) : /* Play icon */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "14",
                            height: "14",
                            viewBox: "0 0 14 14",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                                points: "2,1 13,7 2,13"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/VideoIntro.jsx",
                                lineNumber: 189,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/VideoIntro.jsx",
                            lineNumber: 188,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/VideoIntro.jsx",
                        lineNumber: 180,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctrlBtn,
                        onClick: toggleMute,
                        "aria-label": muted ? 'Unmute' : 'Mute',
                        children: muted ? /* Muted icon */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.4",
                            strokeLinecap: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M2 5.5h2.5L8 3v10l-3.5-2.5H2V5.5z",
                                    fill: "currentColor",
                                    stroke: "none"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VideoIntro.jsx",
                                    lineNumber: 198,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "10",
                                    y1: "5",
                                    x2: "14",
                                    y2: "11"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VideoIntro.jsx",
                                    lineNumber: 199,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                    x1: "14",
                                    y1: "5",
                                    x2: "10",
                                    y2: "11"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VideoIntro.jsx",
                                    lineNumber: 200,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/VideoIntro.jsx",
                            lineNumber: 197,
                            columnNumber: 15
                        }, this) : /* Sound icon */ /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "16",
                            height: "16",
                            viewBox: "0 0 16 16",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "1.4",
                            strokeLinecap: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M2 5.5h2.5L8 3v10l-3.5-2.5H2V5.5z",
                                    fill: "currentColor",
                                    stroke: "none"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VideoIntro.jsx",
                                    lineNumber: 204,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M10.5 5.5C11.8 6.5 12.5 7.2 12.5 8s-.7 1.5-2 2.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VideoIntro.jsx",
                                    lineNumber: 205,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                    d: "M12 3.5C14 5 15 6.4 15 8s-1 3-3 4.5"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/VideoIntro.jsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/VideoIntro.jsx",
                            lineNumber: 203,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/VideoIntro.jsx",
                        lineNumber: 194,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/VideoIntro.jsx",
                lineNumber: 179,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                ref: scrollRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollCue,
                onClick: scrollNext,
                "aria-label": "Scroll to next section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollLabel,
                        children: "Scroll"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/VideoIntro.jsx",
                        lineNumber: 219,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$VideoIntro$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollLine
                    }, void 0, false, {
                        fileName: "[project]/components/sections/VideoIntro.jsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/VideoIntro.jsx",
                lineNumber: 213,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/VideoIntro.jsx",
        lineNumber: 123,
        columnNumber: 5
    }, this);
}
}),
"[project]/styles/sections/HeroSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "availCard": "HeroSection-module__WTQ0JW__availCard",
  "availDot": "HeroSection-module__WTQ0JW__availDot",
  "availHeader": "HeroSection-module__WTQ0JW__availHeader",
  "availStatus": "HeroSection-module__WTQ0JW__availStatus",
  "cardsCol": "HeroSection-module__WTQ0JW__cardsCol",
  "content": "HeroSection-module__WTQ0JW__content",
  "freelanceNote": "HeroSection-module__WTQ0JW__freelanceNote",
  "greetText": "HeroSection-module__WTQ0JW__greetText",
  "greeting": "HeroSection-module__WTQ0JW__greeting",
  "locationLine": "HeroSection-module__WTQ0JW__locationLine",
  "name": "HeroSection-module__WTQ0JW__name",
  "nameBlock": "HeroSection-module__WTQ0JW__nameBlock",
  "photo": "HeroSection-module__WTQ0JW__photo",
  "photoImg": "HeroSection-module__WTQ0JW__photoImg",
  "pill": "HeroSection-module__WTQ0JW__pill",
  "pillDot": "HeroSection-module__WTQ0JW__pillDot",
  "pills": "HeroSection-module__WTQ0JW__pills",
  "roleText": "HeroSection-module__WTQ0JW__roleText",
  "scrollIndicator": "HeroSection-module__WTQ0JW__scrollIndicator",
  "scrollText": "HeroSection-module__WTQ0JW__scrollText",
  "section": "HeroSection-module__WTQ0JW__section",
  "socialLabel": "HeroSection-module__WTQ0JW__socialLabel",
  "socialLink": "HeroSection-module__WTQ0JW__socialLink",
  "socialSidebar": "HeroSection-module__WTQ0JW__socialSidebar",
  "statCard": "HeroSection-module__WTQ0JW__statCard",
  "statLabel": "HeroSection-module__WTQ0JW__statLabel",
  "statValue": "HeroSection-module__WTQ0JW__statValue",
  "stats": "HeroSection-module__WTQ0JW__stats",
  "taglineAccent": "HeroSection-module__WTQ0JW__taglineAccent",
  "taglineCard": "HeroSection-module__WTQ0JW__taglineCard",
  "taglineText": "HeroSection-module__WTQ0JW__taglineText",
  "viewBtn": "HeroSection-module__WTQ0JW__viewBtn",
});
}),
"[project]/components/sections/HeroSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/shared/lib/app-dynamic.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/profile.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/sections/HeroSection.module.css [app-ssr] (css module)");
;
'use client';
;
;
;
;
;
;
;
;
;
;
const HeroBackground = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(async ()=>{}, {
    loadableGenerated: {
        modules: [
            "[project]/components/three/HeroBackground.jsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
const SOCIAL_ICON_MAP = {
    GitHub: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"],
    LinkedIn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedinIn"],
    Instagram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaInstagram"]
};
const SIDEBAR_LABELS = [
    'Instagram',
    'GitHub',
    'LinkedIn'
];
function splitTagline(text, highlight) {
    if (!highlight) return [
        text
    ];
    const parts = text.split(highlight);
    return parts.reduce((acc, part, i)=>{
        acc.push(part);
        if (i < parts.length - 1) {
            acc.push(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taglineAccent,
                children: highlight
            }, i, false, {
                fileName: "[project]/components/sections/HeroSection.jsx",
                lineNumber: 25,
                columnNumber: 16
            }, this));
        }
        return acc;
    }, []);
}
function HeroSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const greetRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const roleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const firstName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lastName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const photoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pillsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaBtnRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const statsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const taglineCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const availCardRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    function handleViewProjects() {
        const scroller = document.querySelector('main');
        if (scroller) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(scroller, {
                scrollTop: 3 * window.innerHeight,
                duration: 1.0,
                ease: 'power3.inOut'
            });
        }
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        if (!section) return;
        const fadeY = [
            greetRef.current,
            roleRef.current,
            firstName.current,
            lastName.current,
            pillsRef.current,
            ctaBtnRef.current,
            statsRef.current
        ].filter(Boolean);
        const fadeX = [
            taglineCardRef.current,
            availCardRef.current
        ].filter(Boolean);
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(fadeY, {
            opacity: 0,
            y: 30
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(fadeX, {
            opacity: 0,
            x: 20
        });
        if (photoRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(photoRef.current, {
            opacity: 0,
            x: 80
        });
        if (socialRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialRef.current, {
            opacity: 0,
            x: -20
        });
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            paused: true
        });
        tl.to(greetRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        }).to(roleRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        }, '-=0.3').to(firstName.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.2').to(lastName.current, {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out'
        }, '-=0.4').to(photoRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.7,
            ease: 'power2.out'
        }, '-=0.5').to(pillsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        }, '-=0.3').to(ctaBtnRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: 'power2.out'
        }, '-=0.2').to(statsRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: 'power2.out'
        }, '-=0.2').to(taglineCardRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out'
        }, '-=0.5').to(availCardRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out'
        }, '-=0.3').to(socialRef.current, {
            opacity: 1,
            x: 0,
            duration: 0.5,
            ease: 'power2.out'
        }, '-=0.4');
        const observer = new IntersectionObserver(([e])=>{
            if (e.isIntersecting) {
                tl.play();
                observer.disconnect();
            }
        }, {
            threshold: 0.3
        });
        observer.observe(section);
        return ()=>{
            observer.disconnect();
            tl.kill();
        };
    }, []);
    const sidebarSocials = SIDEBAR_LABELS.map((label)=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].socials.find((s)=>s.label === label)).filter(Boolean);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(HeroBackground, {}, void 0, false, {
                fileName: "[project]/components/sections/HeroSection.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: photoRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photo,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/hero-portrait.png",
                    alt: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.full,
                    fill: true,
                    priority: true,
                    quality: 100,
                    sizes: "(min-width: 768px) 55vw, 100vw",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photoImg
                }, void 0, false, {
                    fileName: "[project]/components/sections/HeroSection.jsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/HeroSection.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: socialRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialSidebar,
                children: [
                    sidebarSocials.map((social)=>{
                        const Icon = SOCIAL_ICON_MAP[social.label];
                        if (!Icon) return null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: social.href,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialLink,
                            "aria-label": social.label,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                    size: 15
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HeroSection.jsx",
                                    lineNumber: 123,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialLabel,
                                    children: social.label
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/HeroSection.jsx",
                                    lineNumber: 124,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, social.label, true, {
                            fileName: "[project]/components/sections/HeroSection.jsx",
                            lineNumber: 115,
                            columnNumber: 13
                        }, this);
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollIndicator,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].scrollText,
                                children: "Scroll down"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 129,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                width: "14",
                                height: "22",
                                viewBox: "0 0 14 22",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                "aria-hidden": "true",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                        x: "1",
                                        y: "1",
                                        width: "12",
                                        height: "20",
                                        rx: "6",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.jsx",
                                        lineNumber: 131,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                        cx: "7",
                                        cy: "6",
                                        r: "2",
                                        fill: "currentColor"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.jsx",
                                        lineNumber: 132,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 130,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroSection.jsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/HeroSection.jsx",
                lineNumber: 110,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].greeting,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: greetRef,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].greetText,
                                children: "Hi, I'm"
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 142,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: roleRef,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roleText,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].roles.short
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 143,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroSection.jsx",
                        lineNumber: 141,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nameBlock,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: firstName,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.first
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                ref: lastName,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].name,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.last
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroSection.jsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: pillsRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pills,
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hero.pills.map((tag, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pill,
                                        children: tag
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.jsx",
                                        lineNumber: 156,
                                        columnNumber: 15
                                    }, this),
                                    i < __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hero.pills.length - 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pillDot,
                                        "aria-hidden": "true"
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.jsx",
                                        lineNumber: 158,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, tag, true, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 155,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HeroSection.jsx",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        ref: ctaBtnRef,
                        type: "button",
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].viewBtn,
                        onClick: handleViewProjects,
                        children: [
                            "View Work ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiArrowUpRight"], {}, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 166,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroSection.jsx",
                        lineNumber: 165,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: statsRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stats,
                        children: [
                            ...__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stats.slice(0, 2),
                            __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hero.specialistStat
                        ].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statCard,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statValue,
                                        children: s.value
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.jsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].statLabel,
                                        children: s.label
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.jsx",
                                        lineNumber: 174,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, s.label, true, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 172,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/HeroSection.jsx",
                        lineNumber: 170,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/HeroSection.jsx",
                lineNumber: 138,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardsCol,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: taglineCardRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taglineCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].taglineText,
                                children: splitTagline(__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].tagline, __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hero.taglineHighlight)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].freelanceNote,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hero.freelanceNote
                            }, void 0, false, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroSection.jsx",
                        lineNumber: 183,
                        columnNumber: 9
                    }, this),
                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].available && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: availCardRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].availCard,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].availHeader,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].availDot
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.jsx",
                                        lineNumber: 193,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].availStatus,
                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hero.availableLabel
                                    }, void 0, false, {
                                        fileName: "[project]/components/sections/HeroSection.jsx",
                                        lineNumber: 194,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].locationLine,
                                children: [
                                    "Based in ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].location.based
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 196,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$HeroSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].locationLine,
                                children: [
                                    "Available ",
                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].location.availability
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/sections/HeroSection.jsx",
                                lineNumber: 197,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/HeroSection.jsx",
                        lineNumber: 191,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/HeroSection.jsx",
                lineNumber: 182,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/HeroSection.jsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
}),
"[project]/styles/sections/AboutSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bio": "AboutSection-module__Pmi01G__bio",
  "bioWrap": "AboutSection-module__Pmi01G__bioWrap",
  "blink": "AboutSection-module__Pmi01G__blink",
  "content": "AboutSection-module__Pmi01G__content",
  "cursor": "AboutSection-module__Pmi01G__cursor",
  "lastTyped": "AboutSection-module__Pmi01G__lastTyped",
  "marqueeDot": "AboutSection-module__Pmi01G__marqueeDot",
  "marqueeItem": "AboutSection-module__Pmi01G__marqueeItem",
  "marqueeScroll": "AboutSection-module__Pmi01G__marqueeScroll",
  "marqueeTrack": "AboutSection-module__Pmi01G__marqueeTrack",
  "marqueeWrap": "AboutSection-module__Pmi01G__marqueeWrap",
  "photoCol": "AboutSection-module__Pmi01G__photoCol",
  "photoFrame": "AboutSection-module__Pmi01G__photoFrame",
  "photoImg": "AboutSection-module__Pmi01G__photoImg",
  "photoWrap": "AboutSection-module__Pmi01G__photoWrap",
  "section": "AboutSection-module__Pmi01G__section",
  "signature": "AboutSection-module__Pmi01G__signature",
  "socialLink": "AboutSection-module__Pmi01G__socialLink",
  "socials": "AboutSection-module__Pmi01G__socials",
  "typed": "AboutSection-module__Pmi01G__typed",
  "untyped": "AboutSection-module__Pmi01G__untyped",
  "whoLabel": "AboutSection-module__Pmi01G__whoLabel",
});
}),
"[project]/components/sections/AboutSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AboutSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/profile.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/sections/AboutSection.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
const BIO = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].bio;
const WHO_ITEMS = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].skills;
const ICON_MAP = {
    GitHub: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"],
    LinkedIn: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedinIn"],
    Medium: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMedium"],
    Instagram: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaInstagram"],
    YouTube: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaYoutube"]
};
const SOCIALS = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].socials.map((s)=>({
        Icon: ICON_MAP[s.label],
        href: s.href,
        label: s.label
    }));
function AboutSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const photoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const socialsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const intervalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [typed, setTyped] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [done, setDone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        if (!section) return;
        const scroller = document.querySelector('main');
        if (!scroller) return;
        let isActive = false;
        function resetAnim() {
            clearInterval(intervalRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(photoRef.current);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(contentRef.current);
            const socialIcons = socialsRef.current?.querySelectorAll('a') ?? [];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].killTweensOf(socialIcons);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(photoRef.current, {
                opacity: 0,
                x: -50
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(contentRef.current, {
                opacity: 0,
                y: 40
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(socialIcons, {
                opacity: 0,
                y: 20
            });
            setTyped(0);
            setDone(false);
        }
        function playAnim() {
            resetAnim();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(photoRef.current, {
                opacity: 1,
                x: 0,
                duration: 0.9,
                ease: 'power3.out'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(contentRef.current, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                ease: 'power3.out',
                delay: 0.15
            });
            const socialIcons = socialsRef.current?.querySelectorAll('a') ?? [];
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(socialIcons, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: 'power2.out',
                stagger: 0.1,
                delay: 0.5
            });
            let i = 0;
            intervalRef.current = setInterval(()=>{
                i = Math.min(i + 6, BIO.length);
                setTyped(i);
                if (i >= BIO.length) {
                    clearInterval(intervalRef.current);
                    setDone(true);
                }
            }, 16);
        }
        resetAnim();
        function onScroll() {
            const inRange = Math.abs(scroller.scrollTop - section.offsetTop) < window.innerHeight * 0.5;
            if (inRange && !isActive) {
                isActive = true;
                playAnim();
            }
            if (!inRange && isActive) {
                isActive = false;
                resetAnim();
            }
        }
        scroller.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>{
            clearInterval(intervalRef.current);
            scroller.removeEventListener('scroll', onScroll);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: photoRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photoCol,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photoWrap,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photoFrame,
                                "data-about-photo": true,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    src: "/assets/about-portrait.png",
                                    alt: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.full,
                                    fill: true,
                                    quality: 100,
                                    sizes: "(min-width: 768px) 30vw, 100vw",
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].photoImg
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/AboutSection.jsx",
                                    lineNumber: 89,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/sections/AboutSection.jsx",
                                lineNumber: 88,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signature,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.first
                            }, void 0, false, {
                                fileName: "[project]/components/sections/AboutSection.jsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/AboutSection.jsx",
                        lineNumber: 87,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: socialsRef,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socials,
                        children: SOCIALS.map(({ Icon, href, label })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: href,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                "aria-label": label,
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialLink,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {}, void 0, false, {
                                    fileName: "[project]/components/sections/AboutSection.jsx",
                                    lineNumber: 112,
                                    columnNumber: 15
                                }, this)
                            }, label, false, {
                                fileName: "[project]/components/sections/AboutSection.jsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/sections/AboutSection.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/AboutSection.jsx",
                lineNumber: 86,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contentRef,
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].content,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].whoLabel,
                        children: "Who I Am"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/AboutSection.jsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].marqueeWrap,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].marqueeTrack,
                            children: [
                                ...WHO_ITEMS,
                                ...WHO_ITEMS
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].marqueeItem,
                                    children: [
                                        item,
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].marqueeDot,
                                            children: "·"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/AboutSection.jsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, i, true, {
                                    fileName: "[project]/components/sections/AboutSection.jsx",
                                    lineNumber: 126,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/AboutSection.jsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/AboutSection.jsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bioWrap,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bio,
                            children: BIO.split('').map((char, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: i < typed ? i === typed - 1 && !done ? __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].lastTyped : __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].typed : __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$AboutSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].untyped,
                                    children: char
                                }, i, false, {
                                    fileName: "[project]/components/sections/AboutSection.jsx",
                                    lineNumber: 138,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/AboutSection.jsx",
                            lineNumber: 136,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/AboutSection.jsx",
                        lineNumber: 135,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/AboutSection.jsx",
                lineNumber: 119,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/AboutSection.jsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
}),
"[project]/styles/sections/ProjectsSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bottomUI": "ProjectsSection-module__U73blq__bottomUI",
  "cCur": "ProjectsSection-module__U73blq__cCur",
  "cSep": "ProjectsSection-module__U73blq__cSep",
  "cTot": "ProjectsSection-module__U73blq__cTot",
  "counter": "ProjectsSection-module__U73blq__counter",
  "desc": "ProjectsSection-module__U73blq__desc",
  "liveBtn": "ProjectsSection-module__U73blq__liveBtn",
  "meta": "ProjectsSection-module__U73blq__meta",
  "progressBar": "ProjectsSection-module__U73blq__progressBar",
  "progressTrack": "ProjectsSection-module__U73blq__progressTrack",
  "section": "ProjectsSection-module__U73blq__section",
  "sectionLabel": "ProjectsSection-module__U73blq__sectionLabel",
  "slide": "ProjectsSection-module__U73blq__slide",
  "slideBg": "ProjectsSection-module__U73blq__slideBg",
  "slideContent": "ProjectsSection-module__U73blq__slideContent",
  "slideImg": "ProjectsSection-module__U73blq__slideImg",
  "slideLeft": "ProjectsSection-module__U73blq__slideLeft",
  "slideNum": "ProjectsSection-module__U73blq__slideNum",
  "slideOverlayBottom": "ProjectsSection-module__U73blq__slideOverlayBottom",
  "slideOverlayLeft": "ProjectsSection-module__U73blq__slideOverlayLeft",
  "slideRight": "ProjectsSection-module__U73blq__slideRight",
  "slideVignette": "ProjectsSection-module__U73blq__slideVignette",
  "stack": "ProjectsSection-module__U73blq__stack",
  "subtitle": "ProjectsSection-module__U73blq__subtitle",
  "tag": "ProjectsSection-module__U73blq__tag",
  "title": "ProjectsSection-module__U73blq__title",
  "topBar": "ProjectsSection-module__U73blq__topBar",
  "track": "ProjectsSection-module__U73blq__track",
  "typeTag": "ProjectsSection-module__U73blq__typeTag",
});
}),
"[project]/components/sections/ProjectsSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/gsap/ScrollTrigger.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/profile.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/sections/ProjectsSection.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
const PROJECTS = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].projects;
function ProjectsSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const trackRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const contentRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const bgRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const counterRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const progressRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [slideIdx, setSlideIdx] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;
        const scroller = document.querySelector('main');
        if (!scroller) return;
        const n = PROJECTS.length;
        contentRefs.current = contentRefs.current.slice(0, n);
        bgRefs.current = bgRefs.current.slice(0, n);
        // Slides 2+ hidden initially
        contentRefs.current.forEach((el, i)=>{
            if (el && i > 0) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el, {
                opacity: 0,
                y: 30
            });
        });
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
            paused: true
        });
        // Horizontal slide - xPercent is viewport-independent
        tl.to(track, {
            xPercent: -((n - 1) / n * 100),
            ease: 'none',
            duration: n - 1
        }, 0);
        for(let i = 0; i < n - 1; i++){
            const curr = contentRefs.current[i];
            const next = contentRefs.current[i + 1];
            const nextBg = bgRefs.current[i + 1];
            if (curr) {
                tl.to(curr, {
                    opacity: 0,
                    y: -40,
                    filter: 'blur(6px)',
                    duration: 0.2,
                    ease: 'power2.in'
                }, i + 0.30);
            }
            if (nextBg) {
                tl.fromTo(nextBg, {
                    scale: 1.04
                }, {
                    scale: 1.0,
                    duration: 1.0,
                    ease: 'power2.out'
                }, i);
            }
            if (next) {
                tl.set(next, {
                    opacity: 1,
                    y: 0
                }, i + 0.44);
                const meta = next.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].meta}`);
                const title = next.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title}`);
                const sub = next.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle}`);
                const desc = next.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].desc}`);
                const tags = next.querySelectorAll(`.${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag}`);
                const btn = next.querySelector(`.${__TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].liveBtn}`);
                if (meta) tl.fromTo(meta, {
                    x: -10,
                    opacity: 0
                }, {
                    x: 0,
                    opacity: 1,
                    duration: 0.25,
                    ease: 'power2.out'
                }, i + 0.45);
                if (title) tl.fromTo(title, {
                    opacity: 0,
                    y: 20
                }, {
                    opacity: 1,
                    y: 0,
                    duration: 0.45,
                    ease: 'expo.out'
                }, i + 0.48);
                if (sub) tl.fromTo(sub, {
                    y: 12,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.30,
                    ease: 'power2.out'
                }, i + 0.54);
                if (desc) tl.fromTo(desc, {
                    y: 10,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.35,
                    ease: 'power2.out'
                }, i + 0.58);
                if (tags.length) {
                    tl.fromTo(tags, {
                        y: 6,
                        opacity: 0
                    }, {
                        y: 0,
                        opacity: 1,
                        duration: 0.25,
                        ease: 'power2.out',
                        stagger: 0.03
                    }, i + 0.65);
                }
                if (btn) tl.fromTo(btn, {
                    y: 8,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: 0.30,
                    ease: 'power2.out'
                }, i + 0.72);
            }
        }
        const st = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$ScrollTrigger$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollTrigger"].create({
            trigger: section,
            scroller,
            start: 'top top',
            end: ()=>`+=${(n - 1) * window.innerHeight}`,
            onUpdate: (self)=>{
                tl.progress(self.progress);
                const activeIdx = Math.round(self.progress * (n - 1));
                setSlideIdx((prev)=>prev !== activeIdx ? activeIdx : prev);
                if (progressRef.current) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(progressRef.current, {
                        scaleX: self.progress,
                        transformOrigin: 'left center',
                        overwrite: true
                    });
                }
                if (counterRef.current) counterRef.current.textContent = `0${activeIdx + 1}`;
            }
        });
        return ()=>st.kill();
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            height: `${PROJECTS.length * 100}vh`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            ref: sectionRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].topBar,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sectionLabel,
                            children: "Featured Work"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                            lineNumber: 116,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].counter,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    ref: counterRef,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cCur,
                                    children: "01"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                    lineNumber: 118,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cSep,
                                    children: " / "
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cTot,
                                    children: [
                                        "0",
                                        PROJECTS.length
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                    lineNumber: 120,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                    lineNumber: 115,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: trackRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].track,
                    style: {
                        width: `${PROJECTS.length * 100}vw`
                    },
                    children: PROJECTS.map((proj, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slide,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (el)=>{
                                        bgRefs.current[i] = el;
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideBg,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            src: proj.image,
                                            alt: proj.title,
                                            fill: true,
                                            quality: 100,
                                            sizes: "100vw",
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideImg,
                                            priority: i === 0
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                                            lineNumber: 137,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideOverlayLeft,
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                                            lineNumber: 146,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideOverlayBottom,
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                                            lineNumber: 147,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideVignette,
                                            "aria-hidden": true
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                                            lineNumber: 148,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                    lineNumber: 133,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideNum,
                                    "aria-hidden": true,
                                    children: [
                                        "0",
                                        i + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: (el)=>{
                                        contentRefs.current[i] = el;
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideContent,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideLeft,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].meta,
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].typeTag,
                                                        children: proj.type
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/ProjectsSection.jsx",
                                                        lineNumber: 159,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                                    lineNumber: 158,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                                    children: proj.title
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].subtitle,
                                                    children: proj.subtitle
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                                    lineNumber: 162,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: proj.link,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].liveBtn,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: "Live Demo"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                                                            lineNumber: 169,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            width: "12",
                                                            height: "12",
                                                            viewBox: "0 0 12 12",
                                                            fill: "none",
                                                            "aria-hidden": true,
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M2 10L10 2M10 2H4M10 2V8",
                                                                stroke: "currentColor",
                                                                strokeWidth: "1.5",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/sections/ProjectsSection.jsx",
                                                                lineNumber: 171,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                                                            lineNumber: 170,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                                            lineNumber: 157,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].slideRight,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].desc,
                                                    children: proj.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                                    lineNumber: 177,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stack,
                                                    children: proj.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                                                            children: t
                                                        }, t, false, {
                                                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                                                            lineNumber: 180,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                                            lineNumber: 176,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                                    lineNumber: 153,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, proj.id, true, {
                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                    lineNumber: 125,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomUI,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressTrack,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: progressRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ProjectsSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].progressBar
                        }, void 0, false, {
                            fileName: "[project]/components/sections/ProjectsSection.jsx",
                            lineNumber: 193,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/sections/ProjectsSection.jsx",
                        lineNumber: 192,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/ProjectsSection.jsx",
                    lineNumber: 191,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/ProjectsSection.jsx",
            lineNumber: 112,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/ProjectsSection.jsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
}),
"[project]/styles/sections/WorkExperienceSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "bgImg": "WorkExperienceSection-module__bU22da__bgImg",
  "bgImgEl": "WorkExperienceSection-module__bU22da__bgImgEl",
  "bullet": "WorkExperienceSection-module__bU22da__bullet",
  "bullets": "WorkExperienceSection-module__bU22da__bullets",
  "card": "WorkExperienceSection-module__bU22da__card",
  "cardHead": "WorkExperienceSection-module__bU22da__cardHead",
  "client": "WorkExperienceSection-module__bU22da__client",
  "company": "WorkExperienceSection-module__bU22da__company",
  "dot": "WorkExperienceSection-module__bU22da__dot",
  "dotNum": "WorkExperienceSection-module__bU22da__dotNum",
  "entries": "WorkExperienceSection-module__bU22da__entries",
  "entry": "WorkExperienceSection-module__bU22da__entry",
  "header": "WorkExperienceSection-module__bU22da__header",
  "label": "WorkExperienceSection-module__bU22da__label",
  "labelRight": "WorkExperienceSection-module__bU22da__labelRight",
  "location": "WorkExperienceSection-module__bU22da__location",
  "period": "WorkExperienceSection-module__bU22da__period",
  "role": "WorkExperienceSection-module__bU22da__role",
  "section": "WorkExperienceSection-module__bU22da__section",
  "snakeLine": "WorkExperienceSection-module__bU22da__snakeLine",
  "stack": "WorkExperienceSection-module__bU22da__stack",
  "tag": "WorkExperienceSection-module__bU22da__tag",
  "timeline": "WorkExperienceSection-module__bU22da__timeline",
  "timelineBody": "WorkExperienceSection-module__bU22da__timelineBody",
  "typeTag": "WorkExperienceSection-module__bU22da__typeTag",
});
}),
"[project]/components/sections/WorkExperienceSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WorkExperienceSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/profile.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/sections/WorkExperienceSection.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
const EXPS = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].experience;
function WorkExperienceSection() {
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const lineRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dotRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const cardRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const tlRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bulletListRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const collapsedHeights = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const hoverTlsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // Capture each bullet list's natural collapsed height after first paint
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const id = requestAnimationFrame(()=>{
            bulletListRefs.current.forEach((ul, i)=>{
                if (ul) collapsedHeights.current[i] = ul.clientHeight;
            });
        });
        return ()=>cancelAnimationFrame(id);
    }, []);
    function handleCardEnter(i) {
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.innerWidth < 768) //TURBOPACK unreachable
        ;
        const ul = bulletListRefs.current[i];
        const dot = dotRefs.current[i];
        if (!ul) return;
        hoverTlsRef.current[i]?.kill();
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
        hoverTlsRef.current[i] = tl;
        tl.to(ul, {
            maxHeight: ul.scrollHeight,
            duration: 0.5,
            ease: 'power2.out'
        }, 0).to(ul, {
            borderLeftColor: 'rgba(247,147,30,0.6)',
            duration: 0.3
        }, 0).to(dot, {
            scale: 1.1,
            boxShadow: '0 0 0 8px rgba(247,147,30,0.12), 0 0 28px rgba(247,147,30,0.22)',
            duration: 0.3,
            ease: 'back.out(2)'
        }, 0);
    }
    function handleCardLeave(i) {
        if (("TURBOPACK compile-time value", "undefined") !== 'undefined' && window.innerWidth < 768) //TURBOPACK unreachable
        ;
        const ul = bulletListRefs.current[i];
        const dot = dotRefs.current[i];
        if (!ul) return;
        hoverTlsRef.current[i]?.kill();
        const collapsed = collapsedHeights.current[i] ?? 80;
        const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
        hoverTlsRef.current[i] = tl;
        tl.to(ul, {
            maxHeight: collapsed,
            duration: 0.35,
            ease: 'power2.in'
        }, 0).to(ul, {
            borderLeftColor: 'rgba(247,147,30,0.2)',
            duration: 0.25
        }, 0).to(dot, {
            scale: 1,
            boxShadow: '0 0 0 6px rgba(247,147,30,0.05), 0 0 22px rgba(247,147,30,0.1)',
            duration: 0.25,
            ease: 'power2.in'
        }, 0);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const section = sectionRef.current;
        if (!section || !lineRef.current) return;
        const scroller = document.querySelector('main');
        if (!scroller) return;
        let isActive = false;
        function resetAnim() {
            tlRef.current?.kill();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(lineRef.current, {
                scaleX: 0,
                transformOrigin: 'left center'
            });
            dotRefs.current.forEach((el)=>el && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el, {
                    scale: 0,
                    opacity: 0
                }));
            cardRefs.current.forEach((el)=>el && __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el, {
                    opacity: 0,
                    y: 28
                }));
        }
        function playAnim() {
            resetAnim();
            const n = EXPS.length;
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline();
            tlRef.current = tl;
            tl.to(lineRef.current, {
                scaleX: 1,
                duration: 1.6,
                ease: 'power2.inOut'
            }, 0);
            EXPS.forEach((_, i)=>{
                const t = i === 0 ? 0.08 : 0.08 + i / (n - 1) * 1.44;
                tl.to(dotRefs.current[i], {
                    scale: 1,
                    opacity: 1,
                    duration: 0.4,
                    ease: 'back.out(2)'
                }, t);
                tl.to(cardRefs.current[i], {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: 'power3.out'
                }, t + 0.14);
            });
        }
        resetAnim();
        function onScroll() {
            const inRange = Math.abs(scroller.scrollTop - section.offsetTop) < window.innerHeight * 0.5;
            if (inRange && !isActive) {
                isActive = true;
                playAnim();
            }
            if (!inRange && isActive) {
                isActive = false;
                resetAnim();
            }
        }
        scroller.addEventListener('scroll', onScroll, {
            passive: true
        });
        return ()=>scroller.removeEventListener('scroll', onScroll);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: sectionRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].section,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bgImg,
                "aria-hidden": true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    src: "/assets/work-experience.jpg",
                    alt: "",
                    fill: true,
                    quality: 100,
                    sizes: "100vw",
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bgImgEl
                }, void 0, false, {
                    fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                    lineNumber: 103,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].header,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                        children: "Work Experience"
                    }, void 0, false, {
                        fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                        lineNumber: 114,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].labelRight,
                        children: [
                            "0",
                            EXPS.length,
                            " Engagements"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timeline,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].timelineBody,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: lineRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].snakeLine
                        }, void 0, false, {
                            fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entries,
                            children: EXPS.map((exp, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].entry,
                                    onMouseEnter: ()=>handleCardEnter(i),
                                    onMouseLeave: ()=>handleCardLeave(i),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (el)=>{
                                                dotRefs.current[i] = el;
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dot,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].dotNum,
                                                children: [
                                                    "0",
                                                    i + 1
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                lineNumber: 138,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                            lineNumber: 134,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            ref: (el)=>{
                                                cardRefs.current[i] = el;
                                            },
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].card,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].cardHead,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].period,
                                                            children: [
                                                                exp.period,
                                                                " - ",
                                                                exp.periodEnd
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                            lineNumber: 146,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].typeTag,
                                                            children: exp.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                            lineNumber: 147,
                                                            columnNumber: 21
                                                        }, this),
                                                        exp.location && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].location,
                                                            children: exp.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                            lineNumber: 148,
                                                            columnNumber: 38
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                    lineNumber: 145,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].company,
                                                    children: exp.company
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                    lineNumber: 150,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].role,
                                                    children: exp.role
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                    lineNumber: 151,
                                                    columnNumber: 19
                                                }, this),
                                                exp.client && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].client,
                                                    children: exp.client
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                    lineNumber: 152,
                                                    columnNumber: 34
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                    ref: (el)=>{
                                                        bulletListRefs.current[i] = el;
                                                    },
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bullets,
                                                    children: exp.bullets.map((b, bi)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bullet,
                                                            children: b
                                                        }, bi, false, {
                                                            fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                            lineNumber: 158,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                    lineNumber: 153,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].stack,
                                                    children: exp.tech.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$WorkExperienceSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].tag,
                                                            children: t
                                                        }, t, false, {
                                                            fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                            lineNumber: 163,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                                    lineNumber: 161,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, exp.id, true, {
                                    fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/sections/WorkExperienceSection.jsx",
                lineNumber: 118,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/WorkExperienceSection.jsx",
        lineNumber: 100,
        columnNumber: 5
    }, this);
}
}),
"[project]/styles/sections/PublicationsFooterSection.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "barDivider": "PublicationsFooterSection-module__7QOIhG__barDivider",
  "bottomBar": "PublicationsFooterSection-module__7QOIhG__bottomBar",
  "bottomLeft": "PublicationsFooterSection-module__7QOIhG__bottomLeft",
  "bottomRight": "PublicationsFooterSection-module__7QOIhG__bottomRight",
  "builtWith": "PublicationsFooterSection-module__7QOIhG__builtWith",
  "copy": "PublicationsFooterSection-module__7QOIhG__copy",
  "copyAll": "PublicationsFooterSection-module__7QOIhG__copyAll",
  "copyBlock": "PublicationsFooterSection-module__7QOIhG__copyBlock",
  "ctaAccent": "PublicationsFooterSection-module__7QOIhG__ctaAccent",
  "ctaBlock": "PublicationsFooterSection-module__7QOIhG__ctaBlock",
  "ctaEyebrow": "PublicationsFooterSection-module__7QOIhG__ctaEyebrow",
  "ctaHeading": "PublicationsFooterSection-module__7QOIhG__ctaHeading",
  "desc": "PublicationsFooterSection-module__7QOIhG__desc",
  "divider": "PublicationsFooterSection-module__7QOIhG__divider",
  "footerContent": "PublicationsFooterSection-module__7QOIhG__footerContent",
  "footerDescription": "PublicationsFooterSection-module__7QOIhG__footerDescription",
  "footerInfo": "PublicationsFooterSection-module__7QOIhG__footerInfo",
  "footerLink": "PublicationsFooterSection-module__7QOIhG__footerLink",
  "footerLinkWrap": "PublicationsFooterSection-module__7QOIhG__footerLinkWrap",
  "footerLinks": "PublicationsFooterSection-module__7QOIhG__footerLinks",
  "footerMail": "PublicationsFooterSection-module__7QOIhG__footerMail",
  "footerPipe": "PublicationsFooterSection-module__7QOIhG__footerPipe",
  "glCanvas": "PublicationsFooterSection-module__7QOIhG__glCanvas",
  "greetDot": "PublicationsFooterSection-module__7QOIhG__greetDot",
  "greetLine": "PublicationsFooterSection-module__7QOIhG__greetLine",
  "heading": "PublicationsFooterSection-module__7QOIhG__heading",
  "hiddenVideo": "PublicationsFooterSection-module__7QOIhG__hiddenVideo",
  "identityBlock": "PublicationsFooterSection-module__7QOIhG__identityBlock",
  "imageEl": "PublicationsFooterSection-module__7QOIhG__imageEl",
  "imageOverlay": "PublicationsFooterSection-module__7QOIhG__imageOverlay",
  "imageWrap": "PublicationsFooterSection-module__7QOIhG__imageWrap",
  "interBig": "PublicationsFooterSection-module__7QOIhG__interBig",
  "interCount": "PublicationsFooterSection-module__7QOIhG__interCount",
  "interDividerH": "PublicationsFooterSection-module__7QOIhG__interDividerH",
  "interDividerV": "PublicationsFooterSection-module__7QOIhG__interDividerV",
  "interLabel": "PublicationsFooterSection-module__7QOIhG__interLabel",
  "interLinePulse": "PublicationsFooterSection-module__7QOIhG__interLinePulse",
  "interNum": "PublicationsFooterSection-module__7QOIhG__interNum",
  "interNumLabel": "PublicationsFooterSection-module__7QOIhG__interNumLabel",
  "interScrollLine": "PublicationsFooterSection-module__7QOIhG__interScrollLine",
  "interScrollText": "PublicationsFooterSection-module__7QOIhG__interScrollText",
  "interStat": "PublicationsFooterSection-module__7QOIhG__interStat",
  "interstitial": "PublicationsFooterSection-module__7QOIhG__interstitial",
  "interstitialBottom": "PublicationsFooterSection-module__7QOIhG__interstitialBottom",
  "interstitialLeft": "PublicationsFooterSection-module__7QOIhG__interstitialLeft",
  "interstitialRight": "PublicationsFooterSection-module__7QOIhG__interstitialRight",
  "item": "PublicationsFooterSection-module__7QOIhG__item",
  "itemBody": "PublicationsFooterSection-module__7QOIhG__itemBody",
  "itemRight": "PublicationsFooterSection-module__7QOIhG__itemRight",
  "itemTop": "PublicationsFooterSection-module__7QOIhG__itemTop",
  "label": "PublicationsFooterSection-module__7QOIhG__label",
  "leftCol": "PublicationsFooterSection-module__7QOIhG__leftCol",
  "leftDivider": "PublicationsFooterSection-module__7QOIhG__leftDivider",
  "list": "PublicationsFooterSection-module__7QOIhG__list",
  "mainGrid": "PublicationsFooterSection-module__7QOIhG__mainGrid",
  "mobileBrand": "PublicationsFooterSection-module__7QOIhG__mobileBrand",
  "mobileCtas": "PublicationsFooterSection-module__7QOIhG__mobileCtas",
  "mobileDarkOverlay": "PublicationsFooterSection-module__7QOIhG__mobileDarkOverlay",
  "mobileDesc": "PublicationsFooterSection-module__7QOIhG__mobileDesc",
  "mobileFooterBg": "PublicationsFooterSection-module__7QOIhG__mobileFooterBg",
  "mobileFooterBgImg": "PublicationsFooterSection-module__7QOIhG__mobileFooterBgImg",
  "mobileLayout": "PublicationsFooterSection-module__7QOIhG__mobileLayout",
  "mobileName": "PublicationsFooterSection-module__7QOIhG__mobileName",
  "mobileNameGhost": "PublicationsFooterSection-module__7QOIhG__mobileNameGhost",
  "mobileRoleDot": "PublicationsFooterSection-module__7QOIhG__mobileRoleDot",
  "mobileRoleText": "PublicationsFooterSection-module__7QOIhG__mobileRoleText",
  "mobileScrollHint": "PublicationsFooterSection-module__7QOIhG__mobileScrollHint",
  "mobileScrollText": "PublicationsFooterSection-module__7QOIhG__mobileScrollText",
  "mobileSocialDivider": "PublicationsFooterSection-module__7QOIhG__mobileSocialDivider",
  "mobileSocialIconEl": "PublicationsFooterSection-module__7QOIhG__mobileSocialIconEl",
  "mobileSocialLabelEl": "PublicationsFooterSection-module__7QOIhG__mobileSocialLabelEl",
  "mobileSocialLink": "PublicationsFooterSection-module__7QOIhG__mobileSocialLink",
  "mobileSocialRow": "PublicationsFooterSection-module__7QOIhG__mobileSocialRow",
  "mobileTalkBtn": "PublicationsFooterSection-module__7QOIhG__mobileTalkBtn",
  "mobileViewBtn": "PublicationsFooterSection-module__7QOIhG__mobileViewBtn",
  "monoDot": "PublicationsFooterSection-module__7QOIhG__monoDot",
  "monoLetters": "PublicationsFooterSection-module__7QOIhG__monoLetters",
  "monogram": "PublicationsFooterSection-module__7QOIhG__monogram",
  "nameGhost": "PublicationsFooterSection-module__7QOIhG__nameGhost",
  "nameHeading": "PublicationsFooterSection-module__7QOIhG__nameHeading",
  "num": "PublicationsFooterSection-module__7QOIhG__num",
  "platform": "PublicationsFooterSection-module__7QOIhG__platform",
  "pubContent": "PublicationsFooterSection-module__7QOIhG__pubContent",
  "pubHero": "PublicationsFooterSection-module__7QOIhG__pubHero",
  "readBtn": "PublicationsFooterSection-module__7QOIhG__readBtn",
  "rightCol": "PublicationsFooterSection-module__7QOIhG__rightCol",
  "roleLabel": "PublicationsFooterSection-module__7QOIhG__roleLabel",
  "signatureText": "PublicationsFooterSection-module__7QOIhG__signatureText",
  "signatureWrap": "PublicationsFooterSection-module__7QOIhG__signatureWrap",
  "socialIcon": "PublicationsFooterSection-module__7QOIhG__socialIcon",
  "sticky": "PublicationsFooterSection-module__7QOIhG__sticky",
  "sunIcon": "PublicationsFooterSection-module__7QOIhG__sunIcon",
  "sunSpin": "PublicationsFooterSection-module__7QOIhG__sunSpin",
  "talkBtn": "PublicationsFooterSection-module__7QOIhG__talkBtn",
  "title": "PublicationsFooterSection-module__7QOIhG__title",
  "vignetteOverlay": "PublicationsFooterSection-module__7QOIhG__vignetteOverlay",
  "watermark": "PublicationsFooterSection-module__7QOIhG__watermark",
  "wrapper": "PublicationsFooterSection-module__7QOIhG__wrapper",
  "year": "PublicationsFooterSection-module__7QOIhG__year",
});
}),
"[project]/components/sections/PublicationsFooterSection.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PublicationsFooterSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.module.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/profile.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/content.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/sections/PublicationsFooterSection.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
;
;
;
;
;
const PUBS = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].publications;
const SOCIAL_ICONS = {
    GitHub: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"], {
        size: 13
    }, void 0, false, {
        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
        lineNumber: 19,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    LinkedIn: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedinIn"], {
        size: 13
    }, void 0, false, {
        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
        lineNumber: 20,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    Medium: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaMedium"], {
        size: 13
    }, void 0, false, {
        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
        lineNumber: 21,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    Instagram: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaInstagram"], {
        size: 13
    }, void 0, false, {
        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
        lineNumber: 22,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    YouTube: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaYoutube"], {
        size: 13
    }, void 0, false, {
        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
        lineNumber: 23,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0))
};
const MOBILE_SOCIAL_ICONS = {
    GitHub: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaGithub"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
        lineNumber: 27,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    LinkedIn: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaLinkedinIn"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
        lineNumber: 28,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0)),
    Instagram: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaInstagram"], {
        size: 20
    }, void 0, false, {
        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
        lineNumber: 29,
        columnNumber: 14
    }, ("TURBOPACK compile-time value", void 0))
};
const HERO_SOCIAL_LABELS = [
    'GitHub',
    'LinkedIn',
    'Instagram'
];
const VID_VERT = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;
const VID_FRAG = `
  uniform sampler2D uVideo;
  uniform float uOpacity;
  uniform float uVideoAspect;
  uniform float uCanvasAspect;
  varying vec2 vUv;
  void main() {
    vec2 uv = vUv;
    if (uCanvasAspect > uVideoAspect) {
      float s = uVideoAspect / uCanvasAspect;
      uv.y = (vUv.y - 0.5) * s + 0.5;
    } else {
      float s = uCanvasAspect / uVideoAspect;
      uv.x = (vUv.x - 0.5) * s + 0.5;
    }
    vec4 tex = texture2D(uVideo, uv);
    float fadeY =
      smoothstep(0.0, 0.05, uv.y) *
      smoothstep(1.0, 0.95, uv.y);
    float alpha = fadeY * uOpacity;
    float lum = dot(tex.rgb, vec3(0.299, 0.587, 0.114));
    vec3 col = mix(vec3(lum), tex.rgb, 0.72);
    float vx = smoothstep(0.0, 0.38, abs(uv.x - 0.5) * 2.0);
    vec3 dark = vec3(0.008, 0.008, 0.008);
    col = mix(col, dark, vx * 0.82);
    col *= 0.68;
    gl_FragColor = vec4(col, alpha);
  }
`;
function getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 17) return 'Good afternoon';
    return 'Good evening';
}
function easeInOut(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
function handleViewProjects() {
    const scroller = document.querySelector('main');
    if (scroller) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(scroller, {
        scrollTop: 3 * window.innerHeight,
        duration: 1.0,
        ease: 'power3.inOut'
    });
}
function PublicationsFooterSection() {
    const wrapperRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const stickyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // image
    const imageWrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const imageOverlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // publication content
    const pubContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const labelRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const headingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dividerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const itemRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    // image-only interstitial
    const interstitialRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // footer
    const canvasRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoSrcRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const footerContentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const leftRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const rightRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bigNameRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bottomBarRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const wrapper = wrapperRef.current;
        const sticky = stickyRef.current;
        const canvas = canvasRef.current;
        const videoEl = videoSrcRef.current;
        const scroller = document.querySelector('main');
        if (!wrapper || !sticky || !scroller) return;
        const isMobile = window.innerWidth < 768;
        let renderer, vidUni, rafId, videoPlaying = false;
        let onMouseMove = ()=>{}, onResize = ()=>{};
        if (!isMobile && canvas && videoEl) {
            // ── Three.js video setup ────────────────────────────────
            const W = sticky.offsetWidth;
            const H = sticky.offsetHeight;
            renderer = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["WebGLRenderer"]({
                canvas,
                alpha: true,
                antialias: false
            });
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.setSize(W, H);
            renderer.setClearColor(0x000000, 0);
            const scene = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Scene"]();
            const camera = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OrthographicCamera"](-W / 2, W / 2, H / 2, -H / 2, 0.1, 100);
            camera.position.z = 10;
            videoEl.src = '/assets/footer-video.mp4';
            videoEl.muted = true;
            videoEl.playsInline = true;
            videoEl.loop = true;
            videoEl.preload = 'auto';
            const vidTex = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VideoTexture"](videoEl);
            vidTex.minFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
            vidTex.magFilter = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["LinearFilter"];
            vidUni = {
                uVideo: {
                    value: vidTex
                },
                uOpacity: {
                    value: 0
                },
                uVideoAspect: {
                    value: 16 / 9
                },
                uCanvasAspect: {
                    value: W / H
                }
            };
            videoEl.addEventListener('loadedmetadata', ()=>{
                if (videoEl.videoWidth && videoEl.videoHeight) vidUni.uVideoAspect.value = videoEl.videoWidth / videoEl.videoHeight;
            }, {
                once: true
            });
            const vidMat = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShaderMaterial"]({
                uniforms: vidUni,
                vertexShader: VID_VERT,
                fragmentShader: VID_FRAG,
                transparent: true
            });
            const vidMesh = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Mesh"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PlaneGeometry"](W * 1.08, H * 1.08), vidMat);
            vidMesh.position.z = 1;
            scene.add(vidMesh);
            const mx = {
                tx: 0,
                ty: 0,
                x: 0,
                y: 0
            };
            onMouseMove = function(e) {
                const r = sticky.getBoundingClientRect();
                mx.tx = (e.clientX - r.left) / r.width - 0.5;
                mx.ty = (e.clientY - r.top) / r.height - 0.5;
            };
            sticky.addEventListener('mousemove', onMouseMove);
            onResize = function() {
                const w = sticky.offsetWidth;
                const h = sticky.offsetHeight;
                renderer.setSize(w, h);
                camera.left = -w / 2;
                camera.right = w / 2;
                camera.top = h / 2;
                camera.bottom = -h / 2;
                camera.updateProjectionMatrix();
                vidUni.uCanvasAspect.value = w / h;
            };
            window.addEventListener('resize', onResize);
            function tick() {
                rafId = requestAnimationFrame(tick);
                mx.x += (mx.tx - mx.x) * 0.04;
                mx.y += (mx.ty - mx.y) * 0.04;
                vidMesh.position.x = mx.x * 14;
                vidMesh.position.y = mx.y * -8;
                vidTex.needsUpdate = true;
                renderer.render(scene, camera);
            }
            tick();
        }
        // ── Publication entry animation ───────────────────────────
        let pubAnimDone = false;
        function resetPubAnim() {
            pubAnimDone = false;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(labelRef.current, {
                opacity: 0,
                y: -16,
                rotateX: 40,
                transformPerspective: 500,
                transformOrigin: '50% 0%'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(headingRef.current, {
                opacity: 0,
                y: -30,
                rotateX: 35,
                transformPerspective: 700,
                transformOrigin: '50% 0%'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(dividerRef.current, {
                scaleX: 0,
                transformOrigin: 'left center'
            });
            itemRefs.current.forEach((el)=>{
                if (el) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(el, {
                    opacity: 0,
                    y: 28,
                    rotateX: 18,
                    transformPerspective: 900,
                    transformOrigin: '50% 0%'
                });
            });
        }
        function playPubAnim() {
            if (pubAnimDone) return;
            pubAnimDone = true;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(labelRef.current, {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.55,
                ease: 'power3.out'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(headingRef.current, {
                opacity: 1,
                y: 0,
                rotateX: 0,
                duration: 0.75,
                ease: 'expo.out',
                delay: 0.08
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(dividerRef.current, {
                scaleX: 1,
                duration: 0.7,
                ease: 'power2.inOut',
                delay: 0.25
            });
            itemRefs.current.forEach((el, i)=>{
                if (el) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    duration: 0.6,
                    ease: 'power3.out',
                    delay: 0.32 + i * 0.1
                });
            });
        }
        // ── Initial image position (full-width background) ───────
        function setImageLeft() {
            const vw = window.innerWidth;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(imageWrapRef.current, {
                width: vw,
                x: 0,
                opacity: 1
            });
            if (imageOverlayRef.current) __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(imageOverlayRef.current, {
                opacity: 1
            });
        }
        // ── Scroll-driven animation ───────────────────────────────
        function onScroll() {
            const vh = window.innerHeight;
            // getBoundingClientRect is reliable regardless of offsetParent chain or navbar
            const dist = -wrapper.getBoundingClientRect().top;
            // Entry: play pub animation when section first enters view
            if (dist > -vh * 0.5 && dist < vh * 0.35) {
                playPubAnim();
            } else if (dist < -vh * 0.4) {
                resetPubAnim();
                setImageLeft();
            }
            // 300vh/svh wrapper → 2 viewports of scroll travel (same for mobile + desktop)
            const p = Math.max(0, Math.min(1, dist / (2 * vh)));
            // ── Phase 1: pub text fades out ──────────────────────
            // Mobile: p 0 → 0.25 | Desktop: p 0 → 0.28
            const pubFadeEnd = isMobile ? 0.25 : 0.28;
            const pubFade = 1 - Math.max(0, Math.min(1, p / pubFadeEnd));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(pubContentRef.current, {
                opacity: pubFade,
                pointerEvents: pubFade > 0.05 ? 'auto' : 'none'
            });
            const vw = window.innerWidth;
            if (isMobile) {
                // Static mobile background - interstitial fades between feature list and footer
                const interIn = Math.max(0, Math.min(1, (p - 0.28) / 0.17));
                const interOut = Math.max(0, Math.min(1, (p - 0.60) / 0.12));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(interstitialRef.current, {
                    opacity: interIn * (1 - interOut),
                    pointerEvents: 'none'
                });
            } else {
                // ── Phase 2: image shrinks full-width → centered (p 0.12 → 0.65) ──
                const imgRaw = Math.max(0, Math.min(1, (p - 0.12) / 0.53));
                const imgP = easeInOut(imgRaw);
                const startW = vw;
                const endW = vw * 0.46;
                const w = startW + imgP * (endW - startW);
                const centerX = imgP * (vw - w) / 2;
                // Dark overlay fades as image shrinks
                if (imageOverlayRef.current) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(imageOverlayRef.current, {
                        opacity: 1 - imgP
                    });
                }
                // ── Interstitial: fade in after pub, fade out before crossfade ──
                const interIn = Math.max(0, Math.min(1, (p - 0.25) / 0.15));
                const interOut = Math.max(0, Math.min(1, (p - 0.54) / 0.14));
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(interstitialRef.current, {
                    opacity: interIn * (1 - interOut),
                    pointerEvents: 'none'
                });
                // ── Phase 3: sine-eased crossfade image → video (p 0.65 → 0.92) ──
                // Sine ease: both curves share same t so they are perceptually matched
                const xfadeRaw = Math.max(0, Math.min(1, (p - 0.65) / 0.27));
                const xfade = 0.5 - 0.5 * Math.cos(Math.PI * xfadeRaw);
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(imageWrapRef.current, {
                    width: w,
                    x: centerX,
                    opacity: 1 - xfade
                });
                vidUni.uOpacity.value = xfade;
                if (xfade > 0.04 && !videoPlaying) {
                    videoPlaying = true;
                    videoEl.play().catch(()=>{});
                } else if (xfade <= 0.04 && videoPlaying) {
                    videoPlaying = false;
                    videoEl.pause();
                    videoEl.currentTime = 0;
                }
            }
            // ── Footer text fades in ──────────────────────────────
            // Mobile: p 0.72 → 0.92 | Desktop: p 0.75 → 1.0
            const footerStart = isMobile ? 0.72 : 0.75;
            const footerRange = isMobile ? 0.20 : 0.25;
            const footerFade = Math.max(0, Math.min(1, (p - footerStart) / footerRange));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].set(footerContentRef.current, {
                opacity: footerFade,
                pointerEvents: footerFade > 0.05 ? 'auto' : 'none'
            });
        }
        resetPubAnim();
        setImageLeft();
        scroller.addEventListener('scroll', onScroll, {
            passive: true
        });
        onScroll();
        return ()=>{
            if (rafId) cancelAnimationFrame(rafId);
            scroller.removeEventListener('scroll', onScroll);
            sticky.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('resize', onResize);
            if (renderer) renderer.dispose();
        };
    }, []);
    const year = new Date().getFullYear();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: wrapperRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].wrapper,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: stickyRef,
            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sticky,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("canvas", {
                    ref: canvasRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].glCanvas
                }, void 0, false, {
                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                    lineNumber: 331,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                    ref: videoSrcRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].hiddenVideo
                }, void 0, false, {
                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                    lineNumber: 332,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileFooterBg,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: "/assets/footer-mobile.jpg",
                        alt: "",
                        fill: true,
                        quality: 100,
                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileFooterBgImg,
                        sizes: "100vw",
                        priority: false
                    }, void 0, false, {
                        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                        lineNumber: 336,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                    lineNumber: 335,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileDarkOverlay,
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                    lineNumber: 348,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: imageWrapRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageWrap,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: "/assets/footer-portrait.jpg",
                            alt: "",
                            fill: true,
                            quality: 100,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageEl,
                            sizes: "(max-width: 767px) 100vw, 50vw",
                            priority: false
                        }, void 0, false, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 352,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: imageOverlayRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].imageOverlay
                        }, void 0, false, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 361,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                    lineNumber: 351,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: pubContentRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pubContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].watermark,
                            "aria-hidden": true,
                            children: "IMPACT"
                        }, void 0, false, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 366,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].pubHero,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    ref: labelRef,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].label,
                                    children: "AI & Automation"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 369,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    ref: headingRef,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].heading,
                                    children: "Featured Work"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 370,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 368,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: dividerRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].divider
                        }, void 0, false, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 373,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].list,
                            children: PUBS.map((pub, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: pub.link,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    ref: (el)=>{
                                        itemRefs.current[i] = el;
                                    },
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].item,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].num,
                                            children: [
                                                "0",
                                                i + 1,
                                                "."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 385,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemBody,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemTop,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].title,
                                                            children: pub.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 388,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].platform,
                                                            children: pub.platform
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 389,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 387,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].desc,
                                                    children: pub.desc
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 391,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 386,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].itemRight,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].year,
                                                    children: pub.year
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 394,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].readBtn,
                                                    children: [
                                                        "View ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiArrowUpRight"], {
                                                            size: 11
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 396,
                                                            columnNumber: 26
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 395,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 393,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, pub.id, true, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 377,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 375,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: interstitialRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interstitial,
                    "aria-hidden": true,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interstitialLeft,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interStat,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interLabel,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].interstitial.availabilityLabel
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interBig,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].location.availability
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 410,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interDividerH
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interStat,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interLabel,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].interstitial.basedInLabel
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 414,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interBig,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].location.based
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 415,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 413,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 407,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interstitialRight,
                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].stats.map((stat, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interDividerV
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 422,
                                            columnNumber: 27
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interNum,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interCount,
                                                    children: stat.value
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 424,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interNumLabel,
                                                    children: (__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].interstitial.statLabels[i] ?? stat.label).split('\n').map((line, j)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                            children: [
                                                                line,
                                                                j === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                                    lineNumber: 427,
                                                                    columnNumber: 59
                                                                }, this)
                                                            ]
                                                        }, j, true, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 427,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 425,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 423,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, stat.label, true, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 421,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 419,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interstitialBottom,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interScrollText,
                                    children: "Continue"
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 436,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].interScrollLine
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 437,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 435,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                    lineNumber: 405,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].vignetteOverlay,
                    "aria-hidden": true
                }, void 0, false, {
                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                    lineNumber: 443,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: footerContentRef,
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerContent,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileLayout,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileBrand,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileRoleDot
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 451,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileRoleText,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].roles.short.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 452,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 450,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileName,
                                    children: [
                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.first.toUpperCase(),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 456,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileNameGhost,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.last.toUpperCase()
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 457,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 454,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileDesc,
                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].description
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 459,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileCtas,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].email}`,
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileTalkBtn,
                                        children: [
                                            "Let's talk ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiArrowUpRight"], {}, void 0, false, {
                                                fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                lineNumber: 462,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                        lineNumber: 461,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 460,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileSocialRow,
                                    children: HERO_SOCIAL_LABELS.map((label, i)=>{
                                        const s = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].socials.find((s)=>s.label === label);
                                        if (!s) return null;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileSocialDivider,
                                                    "aria-hidden": true
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 471,
                                                    columnNumber: 31
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: s.href,
                                                    target: "_blank",
                                                    rel: "noopener noreferrer",
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileSocialLink,
                                                    "aria-label": label,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileSocialIconEl,
                                                            children: MOBILE_SOCIAL_ICONS[label]
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 473,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileSocialLabelEl,
                                                            children: label.toUpperCase()
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 474,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 472,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, label, true, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 470,
                                            columnNumber: 19
                                        }, this);
                                    })
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 465,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileScrollHint,
                                    "aria-hidden": true,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FiChevronDown"], {
                                            size: 18
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 481,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mobileScrollText,
                                            children: "Scroll to explore"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 482,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 480,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 449,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].mainGrid,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: leftRef,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftCol,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].identityBlock,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].greetLine,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].greetDot
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 491,
                                                            columnNumber: 19
                                                        }, this),
                                                        getGreeting()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 490,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].roleLabel,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].roles.short
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 494,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nameHeading,
                                                    children: [
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.first,
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 497,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].nameGhost,
                                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.last
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 498,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 495,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 489,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerInfo,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerDescription,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].description
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 503,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerLinks,
                                                    children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].socials.slice(0, 4).map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerLinkWrap,
                                                            children: [
                                                                i > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerPipe,
                                                                    children: "|"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                                    lineNumber: 507,
                                                                    columnNumber: 33
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: s.href,
                                                                    target: "_blank",
                                                                    rel: "noopener noreferrer",
                                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerLink,
                                                                    children: [
                                                                        SOCIAL_ICONS[s.label] && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].socialIcon,
                                                                            children: SOCIAL_ICONS[s.label]
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                                            lineNumber: 515,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        s.label
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                                    lineNumber: 508,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, s.label, true, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 506,
                                                            columnNumber: 21
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 504,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].email}`,
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].footerMail,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FaEnvelope"], {
                                                            size: 12
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 523,
                                                            columnNumber: 19
                                                        }, this),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].email
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 522,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 502,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 488,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centerSpace
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 529,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    ref: rightRef,
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].rightCol,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaBlock,
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaEyebrow,
                                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.eyebrow
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                lineNumber: 533,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaHeading,
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.ctaLines.map((line, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            children: [
                                                                line,
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                                    lineNumber: 536,
                                                                    columnNumber: 41
                                                                }, this)
                                                            ]
                                                        }, i, true, {
                                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                            lineNumber: 536,
                                                            columnNumber: 21
                                                        }, this)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].ctaAccent,
                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$content$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].footer.ctaAccent
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                        lineNumber: 538,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                lineNumber: 534,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].email}`,
                                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].talkBtn,
                                                children: "Let's talk"
                                            }, void 0, false, {
                                                fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                lineNumber: 540,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                        lineNumber: 532,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 531,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 486,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: bigNameRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signatureWrap,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].signatureText,
                                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.full.toUpperCase()
                            }, void 0, false, {
                                fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                lineNumber: 549,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 548,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: bottomBarRef,
                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomBar,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomLeft,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].monogram,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].monoLetters,
                                                    children: "JS"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 555,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].monoDot
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 556,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 554,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].leftDivider
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 558,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyBlock,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copy,
                                                    children: [
                                                        "© ",
                                                        year,
                                                        " ",
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.full.toUpperCase()
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 560,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].copyAll,
                                                    children: "ALL RIGHTS RESERVED"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 561,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 559,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 553,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].bottomRight,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].builtWith,
                                            children: [
                                                "DESIGNED & DEVELOPED",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                                    lineNumber: 567,
                                                    columnNumber: 17
                                                }, this),
                                                "WITH PRECISION."
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 565,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].barDivider
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 570,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$PublicationsFooterSection$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].sunIcon,
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                            lineNumber: 571,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                                    lineNumber: 564,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                            lineNumber: 552,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
                    lineNumber: 446,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
            lineNumber: 328,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/sections/PublicationsFooterSection.jsx",
        lineNumber: 327,
        columnNumber: 5
    }, this);
}
}),
"[project]/styles/sections/ScreenLoader.module.css [app-ssr] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "centerLine": "ScreenLoader-module__R2tgeq__centerLine",
  "drift": "ScreenLoader-module__R2tgeq__drift",
  "liquidBg": "ScreenLoader-module__R2tgeq__liquidBg",
  "monogram": "ScreenLoader-module__R2tgeq__monogram",
  "overlay": "ScreenLoader-module__R2tgeq__overlay",
  "splitBottom": "ScreenLoader-module__R2tgeq__splitBottom",
  "splitTop": "ScreenLoader-module__R2tgeq__splitTop",
  "startBtn": "ScreenLoader-module__R2tgeq__startBtn",
});
}),
"[project]/components/sections/ScreenLoader.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScreenLoader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/profile.json.[json].cjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ScreenLoader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/styles/sections/ScreenLoader.module.css [app-ssr] (css module)");
'use client';
;
;
;
;
;
function ScreenLoader({ onDismiss }) {
    const overlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    function handleStart() {
        window.dispatchEvent(new CustomEvent('loader-dismissed'));
        const overlay = overlayRef.current;
        if (!overlay) return;
        overlay.style.pointerEvents = 'none';
        // Create split layers
        const top = document.createElement('div');
        top.className = __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ScreenLoader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splitTop;
        const bottom = document.createElement('div');
        bottom.className = __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ScreenLoader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].splitBottom;
        // Center line
        const line = document.createElement('div');
        line.className = __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ScreenLoader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].centerLine;
        document.body.appendChild(top);
        document.body.appendChild(bottom);
        document.body.appendChild(line);
        // Hide original overlay fast
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(overlay, {
            opacity: 0,
            duration: 0.2,
            ease: 'power2.out'
        });
        // Animate line
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(line, {
            scaleX: 0,
            opacity: 0
        }, {
            scaleX: 1,
            opacity: 1,
            duration: 0.25,
            ease: 'power2.out'
        });
        // Split animation
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(top, {
            y: '-100%',
            duration: 1,
            ease: 'expo.inOut',
            force3D: true
        });
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(bottom, {
            y: '100%',
            duration: 1,
            ease: 'expo.inOut',
            force3D: true
        });
        // Fade line away
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(line, {
            opacity: 0,
            duration: 0.3,
            delay: 0.2
        });
        setTimeout(()=>{
            top.remove();
            bottom.remove();
            line.remove();
            window.dispatchEvent(new CustomEvent('loader-animation-done'));
            onDismiss();
        }, 1000);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: overlayRef,
        className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ScreenLoader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].overlay,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ScreenLoader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].liquidBg,
                "aria-hidden": true
            }, void 0, false, {
                fileName: "[project]/components/sections/ScreenLoader.jsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ScreenLoader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].monogram,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].name.full.toUpperCase()
            }, void 0, false, {
                fileName: "[project]/components/sections/ScreenLoader.jsx",
                lineNumber: 97,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$styles$2f$sections$2f$ScreenLoader$2e$module$2e$css__$5b$app$2d$ssr$5d$__$28$css__module$29$__["default"].startBtn,
                onClick: handleStart,
                children: "Start"
            }, void 0, false, {
                fileName: "[project]/components/sections/ScreenLoader.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/sections/ScreenLoader.jsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/page.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Home
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$gsap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/lib/gsap.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/Navbar.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$VideoIntro$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/VideoIntro.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$HeroSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/HeroSection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$AboutSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/AboutSection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/ProjectsSection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WorkExperienceSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/WorkExperienceSection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$PublicationsFooterSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/PublicationsFooterSection.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ScreenLoader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/sections/ScreenLoader.jsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/profile.json.[json].cjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
// Snap: 0=video 1=hero 2=about 3..4=projects 5=work-exp 6=publications 7=footer (mobile: 6=publications 7=footer)
const PROJECT_SLIDES = __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$profile$2e$json$2e5b$json$5d2e$cjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].projects.length;
const TOTAL = 7 + PROJECT_SLIDES // 9
;
function Home() {
    const mainRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const idxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(0);
    const busyRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    const tweenRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const loopOverlayRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [showLoader, setShowLoader] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = mainRef.current;
        if (!el) return;
        // Fade to black → instant scrollTop jump → fade in
        // Used whenever we loop footer → first section
        function fadeLoop(targetScrollTop, targetIdx) {
            busyRef.current = true;
            tweenRef.current?.kill();
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(loopOverlayRef.current, {
                opacity: 1,
                duration: 0.55,
                ease: 'power2.in',
                onComplete: ()=>{
                    el.scrollTop = targetScrollTop;
                    idxRef.current = targetIdx;
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(loopOverlayRef.current, {
                        opacity: 0,
                        duration: 0.7,
                        ease: 'power2.out',
                        delay: 0.05,
                        onComplete: ()=>{
                            setTimeout(()=>{
                                busyRef.current = false;
                            }, 300);
                        }
                    });
                }
            });
        }
        function goTo(idx) {
            // Wrap-around
            if (idx >= TOTAL) idx = 0;
            if (idx < 0) idx = TOTAL - 1;
            if (idx === idxRef.current || busyRef.current) return;
            // Footer → top: fade-cut instead of scrolling back through all sections
            if (idxRef.current === TOTAL - 1 && idx === 0) {
                fadeLoop(0, 0);
                return;
            }
            // Top → footer: fade-cut instead of scrolling forward through all sections
            if (idxRef.current === 0 && idx === TOTAL - 1) {
                fadeLoop((TOTAL - 1) * window.innerHeight, TOTAL - 1);
                return;
            }
            idxRef.current = idx;
            busyRef.current = true;
            tweenRef.current?.kill();
            tweenRef.current = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                scrollTop: idx * window.innerHeight,
                duration: 1.0,
                ease: 'power3.inOut',
                onComplete: ()=>{
                    setTimeout(()=>{
                        busyRef.current = false;
                    }, 600);
                }
            });
        }
        function onWheel(e) {
            e.preventDefault();
            if (busyRef.current) return;
            goTo(idxRef.current + (e.deltaY > 0 ? 1 : -1));
        }
        let touchY = 0;
        function onTouchStart(e) {
            touchY = e.touches[0].clientY;
        }
        function onTouchEnd(e) {
            const dy = touchY - e.changedTouches[0].clientY;
            if (Math.abs(dy) < 40 || busyRef.current) return;
            goTo(idxRef.current + (dy > 0 ? 1 : -1));
        }
        function onScroll() {
            idxRef.current = Math.round(el.scrollTop / window.innerHeight);
        }
        // Footer video ends → same fade-cut loop back to top
        function onFooterLoop() {
            if (busyRef.current) return;
            fadeLoop(0, 0);
        }
        const isMobile = window.matchMedia('(max-width: 767px)').matches;
        el.addEventListener('wheel', onWheel, {
            passive: false
        });
        el.addEventListener('scroll', onScroll, {
            passive: true
        });
        let mTouchY = 0;
        function onMobileTouchStart(e) {
            mTouchY = e.touches[0].clientY;
        }
        function onMobileTouchEnd(e) {
            const dy = mTouchY - e.changedTouches[0].clientY;
            if (Math.abs(dy) < 40) return;
            const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 8;
            const atTop = el.scrollTop < 8;
            if (dy > 0 && atBottom) fadeLoop(0, 0);
            if (dy < 0 && atTop) fadeLoop(el.scrollHeight - el.clientHeight, TOTAL - 1);
        }
        if (!isMobile) {
            el.addEventListener('touchstart', onTouchStart, {
                passive: true
            });
            el.addEventListener('touchend', onTouchEnd, {
                passive: true
            });
        } else {
            el.addEventListener('touchstart', onMobileTouchStart, {
                passive: true
            });
            el.addEventListener('touchend', onMobileTouchEnd, {
                passive: true
            });
        }
        window.addEventListener('footer-loop-back', onFooterLoop);
        return ()=>{
            el.removeEventListener('wheel', onWheel);
            el.removeEventListener('scroll', onScroll);
            if (!isMobile) {
                el.removeEventListener('touchstart', onTouchStart);
                el.removeEventListener('touchend', onTouchEnd);
            } else {
                el.removeEventListener('touchstart', onMobileTouchStart);
                el.removeEventListener('touchend', onMobileTouchEnd);
            }
            window.removeEventListener('footer-loop-back', onFooterLoop);
            tweenRef.current?.kill();
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            showLoader && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ScreenLoader$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onDismiss: ()=>setShowLoader(false)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 153,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: loopOverlayRef,
                style: {
                    position: 'fixed',
                    inset: 0,
                    background: '#000',
                    zIndex: 9999,
                    opacity: 0,
                    pointerEvents: 'none'
                }
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$Navbar$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 169,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                ref: mainRef,
                style: {
                    height: '100vh',
                    overflowY: 'scroll',
                    overscrollBehavior: 'none'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$VideoIntro$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 172,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$HeroSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 173,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$AboutSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 174,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$ProjectsSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 175,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$WorkExperienceSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 176,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$sections$2f$PublicationsFooterSection$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/app/page.js",
                            lineNumber: 177,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/page.js",
                    lineNumber: 171,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/page.js",
                lineNumber: 170,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=_0zcr05h._.js.map