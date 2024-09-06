const cursor = document.getElementById('cursor');

let prevX = window.innerWidth / 2; // Start from the center
let prevY = window.innerHeight / 2;

document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e;

  // Calculate movement direction (delta)
  const deltaX = x - prevX;
  const deltaY = y - prevY;

  // Calculate the angle based on mouse movement direction
  let newAngle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);

  // Handle special cases for up or top-left movement
  if (deltaY < 0 && Math.abs(deltaX) < Math.abs(deltaY)) {
    // If primarily moving upward, fix angle to 0 degrees (pointing up)
    newAngle = -90;
  } else if (deltaY < 0 && deltaX < 0) {
    // If moving to top-left, adjust the angle to 45 degrees pointing to the left
    newAngle = -135;
  }

  // Adjust the angle for normal cursor pointing orientation
  newAngle += 90;

  // Update the cursor position and rotation
  cursor.style.left = `${x-5}px`;
  cursor.style.top = `${y-5}px`;
  cursor.style.transform = `translate(-50%, -50%) rotate(${newAngle}deg)`;

  // Store the current position for the next movement calculation
  prevX = x;
  prevY = y;
});
