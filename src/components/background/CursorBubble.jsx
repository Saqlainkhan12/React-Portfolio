import "./CursorBubble.css";

import { useEffect, useRef } from "react";

function CursorBubble() {

const bubbleRef = useRef(null);

const mouse = useRef({
x: window.innerWidth / 2,
y: window.innerHeight / 2,
});

const position = useRef({
x: window.innerWidth / 2,
y: window.innerHeight / 2,
});

useEffect(() => {

const handleMouseMove = (e) => {

mouse.current.x = e.clientX;

mouse.current.y = e.clientY;

};

window.addEventListener(
"mousemove",
handleMouseMove
);

let animationFrame;

const animate = () => {

position.current.x +=
(mouse.current.x - position.current.x) * 0.12;

position.current.y +=
(mouse.current.y - position.current.y) * 0.12;

if (bubbleRef.current) {

bubbleRef.current.style.transform = `
translate3d(
${position.current.x - 18}px,
${position.current.y - 18}px,
0
)
`;

}

animationFrame =
requestAnimationFrame(animate);

};

animate();
  return () => {

    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );

    cancelAnimationFrame(animationFrame);

  };

}, []);

return (

  <div
    ref={bubbleRef}
    className="cursor-bubble"
  >
    <div className="cursor-core"></div>
  </div>

);

}

export default CursorBubble;