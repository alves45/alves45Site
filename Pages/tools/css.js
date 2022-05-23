import { css, cache } from "@emotion/css";
cache.sheet.key = cache.key = "a";
export class _style {
  constructor() {
    this.global = [];
    this.classCss = [];
    this.addG(this.colorsCssClass);
  }
  add = (...args) => {
    this.classCss = this.classCss.concat(args);
    return args;
  };
  addG = (...args) => {
    this.global = this.global.concat(args);
  };
  buildStyles() {
    const key = cache.key + "-";
    let getStyle = (className) => {
      className = className.replace(key, "");
      return cache.inserted[className] || "";
    };
    return this.global
      .map((thisClass) =>
        getStyle(thisClass).replace(RegExp(`${"." + thisClass}\\s*`, "g"), "")
      )
      .concat(this.classCss.map(getStyle))
      .join("");
  }
  colorsCssClass = css`
    :root {
      --color-primary: #acc7ff;
      --color-on-primary: #002e6c;
      --color-primary-container: #004397;s
      --color-on-primary-container: #d6e2ff;
      --color-secondary: #bfc6dc;
      --color-on-secondary: #283041;
      --color-secondary-container: #3f4759;
      --color-on-secondary-container: #dae2f9;
      --color-tertiary: #debbdf;
      --color-on-tertiary: #402843;
      --color-tertiary-container: #583e5b;
      --color-on-tertiary-container: #fbd7fb;
      --color-error: #b91c1c;
      --color-error-container: #930006;
      --color-on-error: #680003;
      --color-on-error-container: #ffdad4;
      --color-background: #1b1b1e;
      --color-on-background: #e4e2e6;
      --color-surface: #1b1b1e;
      --color-on-surface: #e4e2e6;
      --color-surface-variant: #44474f;
      --color-on-surface-variant: #c4c6d0;
      --color-outline: #8e9099;
      --color-inverse-on-surface: #1b1b1e;
      --color-inverse-surface: #e4e2e6;
      --color-inverse-primary: #005ac5;
      --color-shadow: #000000;
    }
  `;
}

export const consts = {
  s0_25: "0.06rem",
  s0_5: "0.125rem",
  s0_75: "0.15rem",
  s1: "0.25rem",
  s1_5: "0.375rem",
  s2: "0.5rem",
  s2_5: "0.625rem",
  s3: "0.75rem",
  s3_5: "0.875rem",
  s4: "1rem",
  s5: "1.25rem",
  s6: "1.5rem",
  s7: "1.75rem",
  s8: "2rem",
  s9: "2.25rem",
  s10: "2.5rem",
  s11: "2.75rem",
  s12: "3rem",
  s14: "3.5rem",
  s16: "4rem",
  s20: "5rem",
  s24: "6rem",
  s28: "7rem",
  s32: "8rem",
  s36: "9rem",
  s40: "10rem",
  s44: "11rem",
  s48: "12rem",
  s52: "13rem",
  s56: "14rem",
  s60: "15rem",
  s64: "16rem",
  s72: "18rem",
  s80: "20rem",
  s96: "24rem",
  colors: {
    primary: "var(--color-primary)",
    onPrimary: "var(--color-on-primary)",
    primaryContainer: "var(--color-primary-container)",
    onPrimaryContainer: "var(--color-on-primary-container)",
    secondary: "var(--color-secondary)",
    onSecondary: "var(--color-on-secondary)",
    secondaryContainer: "var(--color-secondary-container)",
    onSecondaryContainer: "var(--color-on-secondary-container)",
    tertiary: "var(--color-tertiary)",
    onTertiary: "var(--color-on-tertiary)",
    tertiaryContainer: "var(--color-tertiary-container)",
    onTertiaryContainer: "var(--color-on-tertiary-container)",
    error: "var(--color-error)",
    errorContainer: "var(--color-error-container)",
    onError: "var(--color-on-error)",
    onErrorContainer: "var(--color-on-error-container)",
    background: "var(--color-background)",
    onBackground: "var(--color-on-background)",
    surface: "var(--color-surface)",
    onSurface: "var(--color-on-surface)",
    surfaceVariant: "var(--color-surface-variant)",
    onSurfaceVariant: "var(--color-on-surface-variant)",
    outline: "var(--color-outline)",
    inverseOnSurface: "var(--color-inverse-on-surface)",
    inverseSurface: "var(--color-inverse-surface)",
    inversePrimary: "var(--color-inverse-primary)",
    shadow: "var(--color-shadow)",
    factor: (color, factor) => {},
  },
  c1: "#1A1A2E",
  c2: "#16213E",
  c3: "#0F3460",
  c4: "#EBE645",
  c5: "#FAEDF0",
  slate50: "#f8fafc",
  slate100: "#f1f5f9",
  slate200: "#e2e8f0",
  slate300: "#cbd5e1",
  slate400: "#94a3b8",
  slate500: "#64748b",
  slate600: "#475569",
  slate700: "#334155",
  slate800: "#1e293b",
  slate900: "#0f172a",
  gray50: "#f9fafb",
  gray100: "#f3f4f6",
  gray200: "#e5e7eb",
  gray300: "#d1d5db",
  gray400: "#9ca3af",
  gray500: "#6b7280",
  gray600: "#4b5563",
  gray700: "#374151",
  gray800: "#1f2937",
  gray900: "#111827",
  zinc50: "#fafafa",
  zinc100: "#f4f4f5",
  zinc200: "#e4e4e7",
  zinc300: "#d4d4d8",
  zinc400: "#a1a1aa",
  zinc500: "#71717a",
  zinc600: "#52525b",
  zinc700: "#3f3f46",
  zinc800: "#27272a",
  zinc900: "#18181b",
  neutral50: "#fafafa",
  neutral100: "#f5f5f5",
  neutral200: "#e5e5e5",
  neutral300: "#d4d4d4",
  neutral400: "#a3a3a3",
  neutral500: "#737373",
  neutral600: "#525252",
  neutral700: "#404040",
  neutral800: "#262626",
  neutral900: "#171717",
  stone50: "#fafaf9",
  stone100: "#f5f5f4",
  stone200: "#e7e5e4",
  stone300: "#d6d3d1",
  stone400: "#a8a29e",
  stone500: "#78716c",
  stone600: "#57534e",
  stone700: "#44403c",
  stone800: "#292524",
  stone900: "#1c1917",
  red50: "#fef2f2",
  red100: "#fee2e2",
  red200: "#fecaca",
  red300: "#fca5a5",
  red400: "#f87171",
  red500: "#ef4444",
  red600: "#dc2626",
  red700: "#b91c1c",
  red800: "#991b1b",
  red900: "#7f1d1d",
  orange50: "#fff7ed",
  orange100: "#ffedd5",
  orange200: "#fed7aa",
  orange300: "#fdba74",
  orange400: "#fb923c",
  orange500: "#f97316",
  orange600: "#ea580c",
  orange700: "#c2410c",
  orange800: "#9a3412",
  orange900: "#7c2d12",
  amber50: "#fffbeb",
  amber100: "#fef3c7",
  amber200: "#fde68a",
  amber300: "#fcd34d",
  amber400: "#fbbf24",
  amber500: "#f59e0b",
  amber600: "#d97706",
  amber700: "#b45309",
  amber800: "#92400e",
  amber900: "#78350f",
  yellow50: "#fefce8",
  yellow100: "#fef9c3",
  yellow200: "#fef08a",
  yellow300: "#fde047",
  yellow400: "#facc15",
  yellow500: "#eab308",
  yellow600: "#ca8a04",
  yellow700: "#a16207",
  yellow800: "#854d0e",
  yellow900: "#713f12",
  lime50: "#f7fee7",
  lime100: "#ecfccb",
  lime200: "#d9f99d",
  lime300: "#bef264",
  lime400: "#a3e635",
  lime500: "#84cc16",
  lime600: "#65a30d",
  lime700: "#4d7c0f",
  lime800: "#3f6212",
  lime900: "#365314",
  green50: "#f0fdf4",
  green100: "#dcfce7",
  green200: "#bbf7d0",
  green300: "#86efac",
  green400: "#4ade80",
  green500: "#22c55e",
  green600: "#16a34a",
  green700: "#15803d",
  green800: "#166534",
  green900: "#14532d",
  emerald50: "#ecfdf5",
  emerald100: "#d1fae5",
  emerald200: "#a7f3d0",
  emerald300: "#6ee7b7",
  emerald400: "#34d399",
  emerald500: "#10b981",
  emerald600: "#059669",
  emerald700: "#047857",
  emerald800: "#065f46",
  emerald900: "#064e3b",
  teal50: "#f0fdfa",
  teal100: "#ccfbf1",
  teal200: "#99f6e4",
  teal300: "#5eead4",
  teal400: "#2dd4bf",
  teal500: "#14b8a6",
  teal600: "#0d9488",
  teal700: "#0f766e",
  teal800: "#115e59",
  teal900: "#134e4a",
  cyan50: "#ecfeff",
  cyan100: "#cffafe",
  cyan200: "#a5f3fc",
  cyan300: "#67e8f9",
  cyan400: "#22d3ee",
  cyan500: "#06b6d4",
  cyan600: "#0891b2",
  cyan700: "#0e7490",
  cyan800: "#155e75",
  cyan900: "#164e63",
  sky50: "#f0f9ff",
  sky100: "#e0f2fe",
  sky200: "#bae6fd",
  sky300: "#7dd3fc",
  sky400: "#38bdf8",
  sky500: "#0ea5e9",
  sky600: "#0284c7",
  sky700: "#0369a1",
  sky800: "#075985",
  sky900: "#0c4a6e",
  blue50: "#eff6ff",
  blue100: "#dbeafe",
  blue200: "#bfdbfe",
  blue300: "#93c5fd",
  blue400: "#60a5fa",
  blue500: "#3b82f6",
  blue600: "#2563eb",
  blue700: "#1d4ed8",
  blue800: "#1e40af",
  blue900: "#1e3a8a",
  indigo50: "#eef2ff",
  indigo100: "#e0e7ff",
  indigo200: "#c7d2fe",
  indigo300: "#a5b4fc",
  indigo400: "#818cf8",
  indigo500: "#6366f1",
  indigo600: "#4f46e5",
  indigo700: "#4338ca",
  indigo800: "#3730a3",
  indigo900: "#312e81",
  violet50: "#f5f3ff",
  violet100: "#ede9fe",
  violet200: "#ddd6fe",
  violet300: "#c4b5fd",
  violet400: "#a78bfa",
  violet500: "#8b5cf6",
  violet600: "#7c3aed",
  violet700: "#6d28d9",
  violet800: "#5b21b6",
  violet900: "#4c1d95",
  purple50: "#faf5ff",
  purple100: "#f3e8ff",
  purple200: "#e9d5ff",
  purple300: "#d8b4fe",
  purple400: "#c084fc",
  purple500: "#a855f7",
  purple600: "#9333ea",
  purple700: "#7e22ce",
  purple800: "#6b21a8",
  purple900: "#581c87",
  fuchsia50: "#fdf4ff",
  fuchsia100: "#fae8ff",
  fuchsia200: "#f5d0fe",
  fuchsia300: "#f0abfc",
  fuchsia400: "#e879f9",
  fuchsia500: "#d946ef",
  fuchsia600: "#c026d3",
  fuchsia700: "#a21caf",
  fuchsia800: "#86198f",
  fuchsia900: "#701a75",
  pink50: "#fdf2f8",
  pink100: "#fce7f3",
  pink200: "#fbcfe8",
  pink300: "#f9a8d4",
  pink400: "#f472b6",
  pink500: "#ec4899",
  pink600: "#db2777",
  pink700: "#be185d",
  pink800: "#9d174d",
  pink900: "#831843",
  rose50: "#fff1f2",
  rose100: "#ffe4e6",
  rose200: "#fecdd3",
  rose300: "#fda4af",
  rose400: "#fb7185",
  rose500: "#f43f5e",
  rose600: "#e11d48",
  rose700: "#be123c",
  rose800: "#9f1239",
  rose900: "#881337",
};

/*
DARK MODE material builder

.darkMode{
    --color-primary: #acc7ff;
    --color-on-primary: #002e6c;
    --color-primary-container: #004397;
    --color-on-primary-container: #d6e2ff;
    --color-secondary: #bfc6dc;
    --color-on-secondary: #283041;
    --color-secondary-container: #3f4759;
    --color-on-secondary-container: #dae2f9;
    --color-tertiary: #debbdf;
    --color-on-tertiary: #402843;
    --color-tertiary-container: #583e5b;
    --color-on-tertiary-container: #fbd7fb;
    --color-error: #ffb4a9;
    --color-error-container: #930006;
    --color-on-error: #680003;
    --color-on-error-container: #ffdad4;
    --color-background: #1b1b1e;
    --color-on-background: #e4e2e6;
    --color-surface: #1b1b1e;
    --color-on-surface: #e4e2e6;
    --color-surface-variant: #44474f;
    --color-on-surface-variant: #c4c6d0;
    --color-outline: #8e9099;
    --color-inverse-on-surface: #1b1b1e;
    --color-inverse-surface: #e4e2e6;
    --color-inverse-primary: #005ac5;
    --color-shadow: #000000;
}

Light Theme material


    --color-primary: #005ac5;
    --color-on-primary: #ffffff;
    --color-primary-container: #d6e2ff;
    --color-on-primary-container: #001a43;
    --color-secondary: #575e71;
    --color-on-secondary: #ffffff;
    --color-secondary-container: #dae2f9;
    --color-on-secondary-container: #141b2c;
    --color-tertiary: #715574;
    --color-on-tertiary: #ffffff;
    --color-tertiary-container: #fbd7fb;
    --color-on-tertiary-container: #29132d;
    --color-error: #ba1b1b;
    --color-error-container: #ffdad4;
    --color-on-error: #ffffff;
    --color-on-error-container: #410001;
    --color-background: #fdfbff;
    --color-on-background: #1b1b1e;
    --color-surface: #fdfbff;
    --color-on-surface: #1b1b1e;
    --color-surface-variant: #e1e2ec;
    --color-on-surface-variant: #44474f;
    --color-outline: #74777f;
    --color-inverse-on-surface: #f2f0f4;
    --color-inverse-surface: #2f3033;
    --color-inverse-primary: #acc7ff;
    --color-shadow: #000000;

*/
