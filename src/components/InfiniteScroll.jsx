import { useEffect, useState, useRef } from "react";
import usePagination from "../hooks/usePagination";
import useIsBottom from "../hooks/useIsBottom";

function InfiniteScroll() {
  const { onNext, page } = usePagination(false);
  const [data, setData] = useState([]);
  const { isBottom, ref } = useIsBottom();

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((response) => {
        setData(response.products);
      });
  }, []);

  const totalPages = data.length / 3;
  //   const startIndex = (page - 1) * 3;
  const endIndex = page * 3;
  useEffect(() => {
    if (isBottom && page < totalPages) {
      onNext();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBottom, totalPages]);
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          width: "100%",
        }}
      >
        {data.slice(0, endIndex).map((ele, index) => (
          <div
            key={ele.id}
            style={{
              padding: "10px",
              display: "flex",
              minHeight: "100px",
              justifyContent: "center",
              backgroundColor: "yellow",
              alignItems: "center",
            }}
          >
            {ele.title}
          </div>
        ))}
        <div ref={ref} style={{ height: "20px" }}></div>
      </div>
      <div>
        {page} out of {totalPages}
      </div>
    </div>
  );
}

export default InfiniteScroll;
