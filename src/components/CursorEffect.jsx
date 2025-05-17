import React, { useEffect, useRef } from "react";

const CursorEffect = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;
      cursor.style.left = `${x}px`;
      cursor.style.top = `${y}px`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="w-8 h-8 bg-gradient-to-br from-black to-gray-800 rounded-full fixed pointer-events-none z-[9999] mix-blend-difference transition-transform duration-100"
      style={{ transform: "translate(-50%, -50%)" }}
    />
  );
};

export default CursorEffect;
