// ScrollToHash.tsx
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollToHash() {
  const pathname = usePathname();
    console.log(usePathname());

  useEffect(() => {
    const hash = window.location.hash;

    if (pathname === '/' && hash) {
      const scrollToTarget = () => {
        const el = document.getElementById(hash.slice(1));
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      };

      // Slight delay ensures hydration completes
      setTimeout(scrollToTarget, 50);
    }
  }, [pathname]);

  return null;
}
