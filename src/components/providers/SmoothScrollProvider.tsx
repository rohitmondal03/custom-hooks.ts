"use client"

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

import type { ILayout } from "@/types/layout";


export default function SmoothScrollProvier({ children }: ILayout) {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: DOMHighResTimeStamp) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  return (
    <>{children}</>
  )
}