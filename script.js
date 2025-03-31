document.addEventListener("DOMContentLoaded", function () {
  const titleElement = document.querySelector("#name");
  const text = "Minha Paixão";
  let index = 0;
  let isTyping = true;
  let currentColor = document.documentElement.classList.contains("dark") ? "#fff" : "black";

  function animateText() {
    if (isTyping) {
      if (index < text.length) {
        titleElement.textContent = text.slice(0, index + 1);
        index++;
      } else {
        isTyping = false;
      }
    } else {
      if (index > 1) {
        titleElement.textContent = text.slice(0, index - 1);
        index--;
      } else {
        isTyping = true;
        // Alterna a cor entre preto e laranja
        currentColor =
          currentColor === (document.documentElement.classList.contains("light") ? "black" : "#fff")
            ? "#000000"
            : document.documentElement.classList.contains("light")
            ? "black"
            : "#fff";
        titleElement.style.color = currentColor;
      }
    }
    setTimeout(animateText, 300);
  }

  animateText(); // Inicia a animação
});
