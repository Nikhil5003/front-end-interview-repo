import { useEffect, useState } from "react";
import usePagination from "../hooks/usePagination";

function PaginationComponent() {
  const { onPrevious, onNext, page } = usePagination(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((response) => {
        setData(response.products);
      });
  }, []);

  const totalPages = data.length / 3;
  const startIndex = (page - 1) * 3;
  const endIndex = page * 3;
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
        {data.slice(startIndex, endIndex).map((ele) => (
          <div
            style={{
              padding: "10px",
              display: "flex",
              minHeight: "300px",
              justifyContent: "center",
              backgroundColor: "yellow",
              alignItems: "center",
            }}
          >
            {ele.title}
          </div>
        ))}
      </div>
      {!!data && !!data.length && (
        <>
          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
            }}
          >
            <button
              disabled={page === 1}
              style={{ flex: 1 }}
              onClick={onPrevious}
            >
              Previous
            </button>
            <button
              style={{ flex: 1 }}
              disabled={page === totalPages}
              onClick={onNext}
            >
              Next
            </button>
          </div>
          <div style={{ marginTop: "20px" }}>{`${page} of ${totalPages}`}</div>
        </>
      )}
    </div>
  );
}

export default PaginationComponent;
