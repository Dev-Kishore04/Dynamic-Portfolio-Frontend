import React, { forwardRef, useRef } from "react";
import { useLayoutEffect } from "react";
import gsap from "gsap";

const ExpandableCard = ({
  title,
  active,
  alwaysOpen = false,
  onClick,
  children,
  containerClass,
}) => {
  const contentRef = useRef(null);
  const isVisible = active || alwaysOpen
  useLayoutEffect(() => {
    gsap.to(contentRef.current, {
      opacity: isVisible ? 1 : 0,
      y: isVisible ? 0 : 20,
      duration: 0.2,
      ease: "power1.inOut",
    });
  }, [active]);

  return (
    <div className="shadow-xl rounded-2xl min-w-0 min-h-0 overflow-hidden flex items-center justify-center">
      <div
        onClick={onClick}
        className={`${containerClass} w-full h-full bg-rose-200 text-black rounded-2xl  cursor-pointer flex items-center justify-center relative overflow-hidden`}
      >
        {title}
        <div
          ref={contentRef}
          className=" opacity-0 translate-y-5 m-0 text-lg"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ExpandableCard;
