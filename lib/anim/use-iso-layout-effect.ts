"use client";

import { useEffect, useLayoutEffect } from "react";

/** useLayoutEffect im Browser, useEffect auf dem Server (kein SSR-Warning). */
export const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
