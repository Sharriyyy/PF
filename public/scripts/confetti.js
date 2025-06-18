import confetti from "https://cdn.skypack.dev/canvas-confetti";

window.addEventListener("load", () => {
  const btn = document.getElementById("confetti-button");

  // Preload audio
  const audio = new Audio("/assets/party.mp3");

  if (btn) {
    btn.addEventListener("click", () => {
      // Play audio
      audio.currentTime = 0;
      audio.play().catch((e) => console.warn("Audio play failed:", e));

      // Confetti animation
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
  }
});
