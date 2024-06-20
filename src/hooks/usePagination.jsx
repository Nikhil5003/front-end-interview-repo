import { useCallback, useState } from "react";

function usePagination(pagination = false) {
  const [page, setPage] = useState(1);
  const onNext = useCallback(() => {
    if (pagination) {
      window.scrollTo(0, 0);
    }
    setPage((prev) => prev + 1);
  }, [pagination]);

  const onPrevious = () => {
    if (pagination) {
      window.scrollTo(0, 0);
    }
    setPage((prev) => prev - 1);
  };

  return {
    page,
    onNext,
    onPrevious,
  };
}

export default usePagination;
