import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          handler();
        }
      }

      function handleESCclick(e) {
        if (e.key === 'Escape') {
          handler();
          window.removeEventListener('keydown', handleESCclick, listenCapturing);
        }
      }

      document.addEventListener('click', handleClick, listenCapturing);
      window.addEventListener('keydown', handleESCclick, listenCapturing);

      return () => {
        document.removeEventListener('click', handleClick, listenCapturing);
        window.removeEventListener('keydown', handleESCclick, listenCapturing);
      };
    },
    [handler, listenCapturing]
  );

  return ref;
}
