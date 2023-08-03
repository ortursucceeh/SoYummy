import { useRef, useState } from 'react';

function Scrollable({ className, children }) {
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
    console.log(e.target);
    if (!element?.contains(e.target)) {
      return;
    }
    console.log('e :>> ', e);

    e.preventDefault();

    setScrollData({
      ...scrollData,
      isScrolling: true,
      clientX: e.clientX,
    });
  }

  return (
    <div
      ref={ref}
      className={className}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseUp}
    >
      {children}
    </div>
  );
}

export default Scrollable;

// useEffect(() => {
//   if (element) {
//     const onWheel = e => {
//       if (ref.current === e.target || ref.current === e.target.parentElement) {
//         // document.body.addEventListener('wheel', cancelWheel, { passive: false });
//         element.scrollTo({
//           left: element.scrollLeft + e.deltaY * 2,
//           behavior: 'smooth',
//         });
//       }
//     };

//     window.addEventListener('wheel', onWheel);

//     return () => {
//       window.removeEventListener('wheel', onWheel);
//     };
//   }
// }, [element]);
