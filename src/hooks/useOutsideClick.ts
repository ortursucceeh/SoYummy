import { useEffect, useRef } from 'react';

export const useOutsideClick = (handler: () => void, listenCapturing: boolean = true) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        handler();
      }
    };

    const handleESCClick = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handler();
        window.removeEventListener('keydown', handleESCClick, listenCapturing);
      }
    };

    document.addEventListener('click', handleClick, listenCapturing);
    window.addEventListener('keydown', handleESCClick, listenCapturing);

    return () => {
      document.removeEventListener('click', handleClick, listenCapturing);
      window.removeEventListener('keydown', handleESCClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return ref;
};
