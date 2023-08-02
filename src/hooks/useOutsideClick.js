import { useEffect, useRef } from 'react';

export function useOutsideClick(handler, listenCapturing = true, isOpen = false) {
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

      isOpen
        ? (document.body.style.overflowY = 'hidden')
        : (document.body.style.overflowY = 'auto');
      return () => {
        document.removeEventListener('click', handleClick, listenCapturing);
        window.removeEventListener('keydown', handleESCclick, listenCapturing);
        document.body.style.overflowY = 'auto';
      };
    },
    [handler, listenCapturing, isOpen]
  );

  return ref;
}
