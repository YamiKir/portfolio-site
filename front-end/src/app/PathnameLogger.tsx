'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function PathnameLogger() {
  const pathname = usePathname();

  useEffect(() => {
    console.log('Current pathname:', pathname);
  }, [pathname]);

  return null;
}
