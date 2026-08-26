// ============================================================
// Stargazer Simulator — Entry Point
// ============================================================
import './styles/main.css';
import { Game } from './Game';

async function main() {
  const loadingFill = document.getElementById('loader-fill') as HTMLDivElement;
  const loadingText = document.getElementById('loader-text') as HTMLParagraphElement;

  const setProgress = (pct: number, text: string) => {
    if (loadingFill) loadingFill.style.width = `${pct}%`;
    if (loadingText) loadingText.textContent = text;
  };

  try {
    setProgress(10, '正在初始化渲染引擎...');

    const game = new Game();

    setProgress(20, '正在載入星表數據...');
    await game.init((pct, text) => setProgress(20 + pct * 0.7, text));

    setProgress(95, '準備就緒...');

    // Hide loading screen
    await new Promise((r) => setTimeout(r, 300));
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
      loadingScreen.classList.add('hidden');
      setTimeout(() => loadingScreen.remove(), 800);
    }

    setProgress(100, '');

    // Start game loop
    game.start();
  } catch (err) {
    console.error('Failed to initialize game:', err);
    const loadingText = document.getElementById('loader-text');
    if (loadingText) {
      loadingText.textContent = `初始化失敗: ${err}`;
      loadingText.style.color = '#f44336';
    }
  }
}

// Start after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', main);
} else {
  main();
}
