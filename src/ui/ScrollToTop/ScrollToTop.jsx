import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const currentPage = pathname.split('/').at(1);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [currentPage]);

  return null;
}
