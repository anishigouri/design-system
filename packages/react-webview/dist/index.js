"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Avatar: () => Avatar2,
  Badge: () => Badge,
  Box: () => Box,
  Checkbox: () => Checkbox2,
  Text: () => Text,
  config: () => config,
  createTheme: () => createTheme,
  css: () => css,
  getCssText: () => getCssText,
  globalCss: () => globalCss,
  keyframes: () => keyframes,
  styled: () => styled,
  theme: () => theme
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
var colors = {
  white: "#ffffff",
  black: "#000000",
  "lime-green-25": "#FBFFF5",
  "lime-green-50": "#F7FFEB",
  "lime-green-100": "#EAFFCD",
  "lime-green-200": "#D6FF9B",
  "lime-green-300": "#C1FF69",
  "lime-green-400": "#ACFF36",
  "lime-green-500": "#98FF04",
  "lime-green-600": "#79CC03",
  "lime-green-700": "#5B9903",
  "lime-green-800": "#3D6602",
  "lime-green-900": "#1E3301",
  "lime-green-950": "#152301",
  "green-25": "#F6FEF8",
  "green-50": "#E4FBE9",
  "green-100": "#D0F8D8",
  "green-200": "#A1F1B2",
  "green-300": "#72EB8B",
  "green-400": "#43E465",
  "green-500": "#14DD3E",
  "green-600": "#10B132",
  "green-700": "#0C8525",
  "green-800": "#085819",
  "green-900": "#042C0C",
  "green-950": "#031C08",
  "orange-25": "#FFF7F5",
  "orange-50": "#FFE6E0",
  "orange-100": "#FFDBD2",
  "orange-200": "#FFB7A5",
  "orange-300": "#FF9279",
  "orange-400": "#FF6E4C",
  "orange-500": "#FF4A1F",
  "orange-600": "#CC3B19",
  "orange-700": "#992C13",
  "orange-800": "#661E0C",
  "orange-900": "#330F06",
  "orange-950": "#250B04",
  "purple-25": "#F4F2FD",
  "purple-50": "#EDE9FC",
  "purple-100": "#E2DCFA",
  "purple-200": "#C5B9F5",
  "purple-300": "#A896EF",
  "purple-400": "#8B73EA",
  "purple-500": "#6E50E5",
  "purple-600": "#5840B7",
  "purple-700": "#423089",
  "purple-800": "#2C205C",
  "purple-900": "#16102E",
  "purple-950": "#100C22",
  "gray-25": "#F6F6F4",
  "gray-50": "#ECECE9",
  "gray-100": "#E4E5E1",
  "gray-200": "#D4D5CF",
  "gray-300": "#AEAAAA",
  "gray-400": "#938E8E",
  "gray-500": "#787272",
  "gray-600": "#605B5B",
  "gray-700": "#484444",
  "gray-800": "#302E2E",
  "gray-900": "#181717",
  "gray-950": "#0A0A0A",
  "gray-green-25": "#F1F3F3",
  "gray-green-50": "#E4E7E6",
  "gray-green-100": "#D0D6D4",
  "gray-green-200": "#A0ADA9",
  "gray-green-300": "#71857F",
  "gray-green-400": "#415C54",
  "gray-green-500": "#123329",
  "gray-green-600": "#0E2921",
  "gray-green-700": "#0B1F19",
  "gray-green-800": "#071410",
  "gray-green-900": "#040A08",
  "gray-green-950": "#010403",
  "cyan-gray-25": "#F2F3F3",
  "cyan-gray-50": "#E2E4E4",
  "cyan-gray-100": "#D2D4D4",
  "cyan-gray-200": "#A5A9A9",
  "cyan-gray-300": "#787D7E",
  "cyan-gray-400": "#4B5253",
  "cyan-gray-500": "#1E2728",
  "cyan-gray-600": "#181F20",
  "cyan-gray-700": "#121718",
  "cyan-gray-800": "#0C1010",
  "cyan-gray-900": "#060808",
  "cyan-gray-950": "#020303",
  "error-dark": "#F04438"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "99999px"
};
var fonts = {
  default: "Poppins, Inter, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
var import_react = require("@stitches/react");
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  createTheme,
  theme,
  config
} = (0, import_react.createStitches)({
  themeMap: __spreadProps(__spreadValues({}, import_react.defaultThemeMap), {
    height: "space",
    width: "space"
  }),
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  }
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$6",
  borderRadius: "$md",
  backgroundColor: "$white"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  fontFamily: "$default",
  lineHeight: "$base",
  margin: 0,
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Avatar/index.tsx
var import_phosphor_react = require("phosphor-react");

// src/components/Avatar/styles.ts
var Avatar = __toESM(require("@radix-ui/react-avatar"));
var AvatarContainer = styled(Avatar.Root, {
  borderRadius: "$full",
  display: "inline-block",
  width: "$16",
  height: "$16",
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$gray600",
  color: "$gray800",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Avatar2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AvatarContainer, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, __spreadValues({}, props)),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback, { delayMs: 600, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_phosphor_react.User, {}) })
  ] });
}
Avatar2.displayName = "Avatar";

// src/components/Checkbox/index.tsx
var import_phosphor_react2 = require("phosphor-react");

// src/components/Checkbox/styles.ts
var Checkbox = __toESM(require("@radix-ui/react-checkbox"));
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  width: "$6",
  height: "$6",
  backgroundColor: "$white",
  borderRadius: "$xs",
  lineHeight: 0,
  cursor: "pointer",
  overflow: "hidden",
  boxSizing: "border-box",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "1px solid $gray-400",
  '&[data-state="checked"]': {
    backgroundColor: "$$green-600"
  },
  '&:focus, &[data-state="checked"]': {
    border: "2px solid $green-300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  color: "$green-500",
  width: "$4",
  height: "$4",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
var import_jsx_runtime2 = require("react/jsx-runtime");
function Checkbox2(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CheckboxContainer, __spreadProps(__spreadValues({}, props), { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(CheckboxIndicator, { asChild: true, children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_phosphor_react2.Check, { weight: "bold" }) }) }));
}
Checkbox2.displayName = "Checkbox";

// src/components/Badge/styles.ts
var BadgeContainer = styled("div", {
  borderRadius: "$lg",
  padding: "2px 8px",
  fontWeight: "$medium",
  fontSize: "$sm",
  textAlign: "center",
  display: "inline-block"
});

// src/components/Badge/index.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
function Badge({
  color = "$green-600",
  children,
  type = "primary"
}) {
  const isPrimary = type === "primary";
  const dynamicStyles = __spreadValues({
    backgroundColor: isPrimary ? `${color}` : "transparent",
    color: isPrimary ? "$white" : `${color}`
  }, type === "secondary" && { border: `1.5px solid ${color}` });
  console.log(dynamicStyles);
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(BadgeContainer, { css: dynamicStyles, children });
}
Badge.displayName = "Badge";
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Avatar,
  Badge,
  Box,
  Checkbox,
  Text,
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  keyframes,
  styled,
  theme
});
