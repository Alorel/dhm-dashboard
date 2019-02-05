export function isLoggedIn(): boolean {
  const gameWindow = document.getElementById('game-screen');

  return !!gameWindow && getComputedStyle(gameWindow).display !== 'none';
}
