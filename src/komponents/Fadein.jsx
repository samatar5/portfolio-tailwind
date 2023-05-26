import React from "react";
import { useInView } from "react-intersection-observer";

const FadeIn = ({ children }) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <div
      ref={ref}
      className={`opacity-0 ${inView && "opacity-100 animate-fade"}`}
    >
      {children}
    </div>
  );
};

export default FadeIn;
