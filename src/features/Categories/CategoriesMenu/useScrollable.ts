import { useRef, useState } from 'react';

export const useScrollable = () => {
  const [scrollData, setScrollData] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  let ref = useRef<any>();
  const element = ref.current;

  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!element?.contains(e.target as Node)) {
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
  };

  const onMouseUp = (e: React.MouseEvent<HTMLElement>) => {
    if (!element?.contains(e.target as Node)) {
      return;
    }
    e.preventDefault();

    setScrollData({
      ...scrollData,
      isScrolling: false,
    });
  };

  const onMouseDown = (e: React.MouseEvent<HTMLElement>) => {
    if (!element?.contains(e.target as Node)) {
      return;
    }

    e.preventDefault();

    setScrollData({
      ...scrollData,
      isScrolling: true,
      clientX: e.clientX,
    });
  };

  return [
    ref,
    {
      onMouseDown: onMouseDown,
      onMouseUp: onMouseUp,
      onMouseMove: onMouseMove,
      onMouseLeave: onMouseUp,
    },
  ];
};
