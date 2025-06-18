import confetti from "https://cdn.skypack.dev/canvas-confetti";

window.addEventListener("load", () => {
  const btn = document.getElementById("confetti-button");

  // Preload audio
  const audio = new Audio("/assets/party.mp3");
  audio.load();

  // ✅ Create full-screen canvas
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = 0;
  canvas.style.left = 0;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.zIndex = "9999";
  canvas.style.pointerEvents = "none";
  canvas.id = "confetti-canvas";
  document.body.appendChild(canvas);

  // ✅ Create confetti instance tied to this canvas
  const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true,
  });

  if (btn) {
    btn.addEventListener("click", () => {
      // Play audio
      audio.currentTime = 0;
      audio.play().catch((e) => console.warn("Audio play failed:", e));

      // Confetti animation
      const duration = 2 * 1000;
      const end = Date.now() + duration;

      const frame = () => {
        myConfetti({
          particleCount: 7,
          angle: 60,
          spread: 120,
          origin: { x: 0 },
        });
        myConfetti({
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
