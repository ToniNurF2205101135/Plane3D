const player = document.getElementById('player');
const keyboard = {};
const moveSpeed = 0.1;

document.addEventListener('keydown', e => keyboard[e.key.toLowerCase()] = true);
document.addEventListener('keyup', e => keyboard[e.key.toLowerCase()] = false);

function updatePlayerMovement() {
  const pos = player.object3D.position;

  if (keyboard['arrowup'] || keyboard['w']) pos.y += moveSpeed;
  if (keyboard['arrowdown'] || keyboard['s']) pos.y -= moveSpeed;
  if (keyboard['arrowleft'] || keyboard['a']) pos.x -= moveSpeed;
  if (keyboard['arrowright'] || keyboard['d']) pos.x += moveSpeed;

  // Batas gerakan
  pos.x = Math.max(-9, Math.min(9, pos.x));
  pos.y = Math.max(-6, Math.min(6, pos.y));
}

function animate() {
  requestAnimationFrame(animate);
  updatePlayerMovement();
}

animate();
