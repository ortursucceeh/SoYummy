import { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [searchParams] = useSearchParams();

  const currentPage = pathname.split('/').at(1);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage, searchParams]);

  return null;
}
