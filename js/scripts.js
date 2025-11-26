
document.addEventListener('DOMContentLoaded', () => {
  const text = [ "Graphic Designer", "Digital Artist", "Animator"];
  let count = 0, index = 0, currentText = '', letter = '';
  (function type() {
    if (count === text.length) count = 0;
    currentText = text[count];
    letter = currentText.slice(0, ++index);
    document.querySelector(".typed-text").textContent = letter;
    if (letter.length === currentText.length) {
      count++;
      index = 0;
      setTimeout(type, 1500);
    } else {
      setTimeout(type, 100);
    }
  })();
});


function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

// Smooth scroll + remove menu on mobile
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
    document.getElementById("navLinks").classList.remove("show");
  });
});

