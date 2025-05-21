"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";

interface SmoothScrollProps {
  children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (!lenisRef.current) {
      lenisRef.current = new Lenis();

      const raf = (time: number) => {
        lenisRef.current?.raf(time);
        requestAnimationFrame(raf);
      };

      requestAnimationFrame(raf);
    }

    // Optional: Clean up Lenis instance on component unmount
    return () => {
      lenisRef.current?.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}
