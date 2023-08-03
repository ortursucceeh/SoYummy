import { useRef, useState } from 'react';

export function useScroll() {
  const [scrollData, setScrollData] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  let ref = useRef();
  const element = ref.current;

  function onMouseMove(e) {
    if (!element?.contains(e.target)) {
      return;
    }
    e.preventDefault();

    const { clientX, scrollX, isScrolling } = scrollData;

    if (isScrolling) {
      element.scrollLeft = scrollX - e.clientX + clientX;
      const scrlX = scrollX - e.clientX + clientX;
      const clntX = e.clientX;

      setScrollData({
        ...scrollData,
        scrollX: scrlX,
        clientX: clntX,
      });
    }
  }

  function onMouseUp(e) {
    if (!element?.contains(e.target)) {
      return;
    }
    e.preventDefault();

    setScrollData({
      ...scrollData,
      isScrolling: false,
    });
  }

  function onMouseDown(e) {
    if (!element?.contains(e.target)) {
      return;
    }

    e.preventDefault();

    setScrollData({
      ...scrollData,
      isScrolling: true,
      clientX: e.clientX,
    });
  }

  return [
    ref,
    {
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseUp,
    },
  ];
}
