export const smoothScrollTo = (targetId, duration = 450) => {
  const cleanId = targetId.replace(/^#/, "");
  if (!cleanId) return;

  const target = document.getElementById(cleanId);
  if (!target) {
    if (cleanId === "home" || cleanId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    return;
  }

  const offset = 70;
  const targetPosition =
    target.getBoundingClientRect().top + window.pageYOffset - offset;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  // Snappy smooth cubic-bezier / quadratic easing
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

  const animation = (currentTime) => {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    const ease = easeInOutCubic(progress);

    window.scrollTo(0, startPosition + distance * ease);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};
