'use client';

import { useEffect, useState } from 'react';

const NAMESPACE = 'vivekanandavidyalayam';
const KEY = 'visits';
const SESSION_FLAG = 'vv-visit-counted';

type CounterResponse = {
  count?: number;
  value?: number;
};

function formatCount(n: number) {
  return new Intl.NumberFormat('en-IN').format(n);
}

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function run() {
      try {
        const already = sessionStorage.getItem(SESSION_FLAG) === '1';
        const url = already
          ? `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/`
          : `https://api.counterapi.dev/v1/${NAMESPACE}/${KEY}/up`;

        const res = await fetch(url, { cache: 'no-store' });
        if (!res.ok) return;
        const data = (await res.json()) as CounterResponse;
        const value = typeof data.count === 'number' ? data.count : data.value;
        if (!cancelled && typeof value === 'number') {
          setCount(value);
        }
        if (!already) {
          sessionStorage.setItem(SESSION_FLAG, '1');
        }
      } catch {
        // Counter is decorative — fail quietly if the API is unreachable
      }
    }

    void run();
    return () => {
      cancelled = true;
    };
  }, []);

  if (count === null) return null;

  return (
    <p className="visitor-count" aria-live="polite">
      <span className="visitor-count-label">Visitors</span>
      <span className="visitor-count-value">{formatCount(count)}</span>
    </p>
  );
}
