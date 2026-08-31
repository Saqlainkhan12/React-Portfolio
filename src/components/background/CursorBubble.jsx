import "./CursorBubble.css";
import { useEffect, useRef } from "react";

function CursorBubble() {
  const bubbleRef = useRef(null);
  const isInitialized = useRef(false);
  const isVisible = useRef(true);

  const mouse = useRef({
    x: -100,
    y: -100,
  });

  const position = useRef({
    x: -100,
    y: -100,
  });

  useEffect(() => {
    const getZoomFactor = () => {
      const root = document.getElementById("root");
      if (!root) return 1;
      const zoom = parseFloat(window.getComputedStyle(root).zoom);
      return isNaN(zoom) || zoom <= 0 ? 1 : zoom;
    };

    const handleMouseMove = (e) => {
      const zoom = getZoomFactor();
      const targetX = e.clientX / zoom;
      const targetY = e.clientY / zoom;

      mouse.current.x = targetX;
      mouse.current.y = targetY;

      if (!isInitialized.current) {
        position.current.x = targetX;
        position.current.y = targetY;
        isInitialized.current = true;
        if (bubbleRef.current) {
          bubbleRef.current.style.opacity = "1";
        }
      }
    };

    const handleMouseEnter = () => {
      isVisible.current = true;
      if (bubbleRef.current) {
        bubbleRef.current.style.opacity = "1";
      }
    };

    const handleMouseLeave = () => {
      isVisible.current = false;
      if (bubbleRef.current) {
        bubbleRef.current.style.opacity = "0";
      }
    };

    // Hover effect over interactive elements
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest("a") ||
        target.closest("button") ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest(".magnetic-btn") ||
        target.closest("[role='button']")
      ) {
        if (bubbleRef.current) {
          bubbleRef.current.classList.add("hovering");
        }
      } else {
        if (bubbleRef.current) {
          bubbleRef.current.classList.remove("hovering");
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    let animationFrame;

    // Fast responsive lerp (0.35 factor for instant, silky-smooth response without lag)
    const LERP_FACTOR = 0.35;

    const animate = () => {
      if (isInitialized.current) {
        const dx = mouse.current.x - position.current.x;
        const dy = mouse.current.y - position.current.y;

        // Snappy interpolation
        position.current.x += dx * LERP_FACTOR;
        position.current.y += dy * LERP_FACTOR;

        if (bubbleRef.current) {
          bubbleRef.current.style.transform = `translate3d(${position.current.x - 18}px, ${position.current.y - 18}px, 0)`;
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <div
      ref={bubbleRef}
      className="cursor-bubble"
      style={{ opacity: 0 }}
      aria-hidden="true"
    >
      <div className="cursor-core"></div>
    </div>
  );
}

export default CursorBubble;