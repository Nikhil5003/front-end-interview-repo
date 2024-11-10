import React from "react";
import useCarousel from "../hooks/useCarousel";

function Carousel({ data }) {
  const { activeIndex, onNext, onPrev, onDotClick } = useCarousel(data.length);
  console.log({ activeIndex });
  return (
    <div
      style={{
        whiteSpace: "noWrap",
        display: "flex",
        overflow: "scroll",
        position: "relative",
        width: "400px",
      }}
    >
      {data.map((ele) => (
        <img
          style={{
            display: "flex",
            transition: "transform 0.5s ease-in-out",
            transform: `translateX(-${activeIndex * 100}%)`,
          }}
          key={ele}
          src={ele}
          width={400}
          height={400}
          loading="lazy"
          alt="alt"
        />
      ))}
      <div
        style={{
          position: "absolute",
          top: "50%",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "285px",
          }}
        >
          <button onClick={onPrev}>Previous</button>
          <button onClick={onNext}>Next</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "8px",
          alignItems: "center",
          width: "100px",
          height: "100px",
          position: "absolute",
          top: "82%",
          left: "31%",
        }}
      >
        {Array.from({ length: data.length })
          .fill(-1)
          .map((_, index) => (
            <span
              onClick={() => onDotClick(index)}
              style={{
                width: "10px",
                height: "10px",
                backgroundColor: index === activeIndex ? "red" : "green",
                borderRadius: "50%",
              }}
            ></span>
          ))}
      </div>
    </div>
  );
}

export default Carousel;
