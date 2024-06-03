const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");


const cursor = document.querySelector(".cursor");

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = "cornflowerblue";
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  cursor.style.top = x;
  cursor.style.left = y;
  
  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();


document.addEventListener("DOMContentLoaded", function() {
  const passwordInput = document.getElementById("password-input");
  const submitButton = document.getElementById("submit-btn");
  const passwordScreen = document.getElementById("password-screen");
  const homeScreen = document.getElementById("home-screen");

  submitButton.addEventListener("click", function() {
    console.log()
    const password = passwordInput.value;
    if (password === "mongoliantiptoe") {
      // Correct password, show the home screen
      passwordScreen.classList.add("hidden");
      homeScreen.classList.remove("hidden");
    } else {
      // Incorrect password, show an error message
      alert("Incorrect password. Please try again.");
    }
  });
});

