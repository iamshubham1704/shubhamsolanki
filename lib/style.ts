import type { CSSProperties } from "react";

export const cssVars = (vars: Record<string, string | number>) => vars as CSSProperties;
