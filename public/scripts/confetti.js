// public/scripts/confetti.js
import confetti from "https://cdn.skypack.dev/canvas-confetti";

window.addEventListener("load", () => {
  const btn = document.getElementById("confetti-button");
  if (!btn) {
    console.warn("Button not found");
    return;
  }

  btn.addEventListener("click", () => {
    const duration = 2 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 7,
        angle: 60,
        spread: 120,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 7,
        angle: 120,
        spread: 120,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();
  });
});
