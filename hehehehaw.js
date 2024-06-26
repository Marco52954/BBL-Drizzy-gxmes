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
document.addEventListener("mousemove", function(event) {
  var cursor = document.querySelector(".custom-cursor");
  cursor.style.left = event.clientX + "px";
  cursor.style.top = event.clientY + "px";
});

const list = document.querySelectorAll('.list');
function activeLink() {
    list.forEach((item) =>
    item.classList.remove('active'));
    this.classList.add('active');
}
list.forEach((item) =>
item.addEventListener('click',activeLink));

document.addEventListener('DOMContentLoaded', function() {
  const dropdown = document.getElementById('theme-dropdown');
  const themeLink = document.getElementById('theme');

  // Check if a theme is stored in local storage
  const storedTheme = localStorage.getItem('selectedTheme');
  if (storedTheme) {
      // Apply the stored theme
      themeLink.href = storedTheme + '.css';
      // Update the dropdown value
      dropdown.value = storedTheme;
  }

  dropdown.addEventListener('change', function() {
      const selectedTheme = this.value;
      // Store the selected theme in local storage
      localStorage.setItem('selectedTheme', selectedTheme);
      // Update the href attribute of the link tag
      themeLink.href = selectedTheme + '.css';
  });
});







