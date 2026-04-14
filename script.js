
/* =====================
   DADOS DINÂMICOS
===================== */
const courses = [
  { title: "HTML e CSS", desc: "Aprenda estrutura e estilo" },
  { title: "JavaScript", desc: "Deixe seu site interativo" },
  { title: "React", desc: "Crie interfaces modernas" }
];

const container = document.getElementById("coursesContainer");

courses.forEach(course => {
  const card = document.createElement("div");
  card.classList.add("card", "hidden");

  card.innerHTML = `
    <h3>${course.title}</h3>
    <p>${course.desc}</p>
  `;

  container.appendChild(card);
});

/* =====================
   SCROLL REVEAL
===================== */
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document.querySelectorAll(".hidden").forEach(el => observer.observe(el));

/* =====================
   CONTROLE DE FONTE
===================== */
let fontSize = 16;

document.getElementById("increaseFont").onclick = () => {
  fontSize += 2;
  document.body.style.fontSize = fontSize + "px";
};

document.getElementById("decreaseFont").onclick = () => {
  fontSize -= 2;
  document.body.style.fontSize = fontSize + "px";
};

/* =====================
   ALTO CONTRASTE
===================== */
document.getElementById("contrastToggle").onclick = () => {
  document.body.classList.toggle("high-contrast");
};

/* =====================
   CARROSSEL
===================== */
const slidesData = ["Muito bom!", "Aprendi rápido!", "Excelente conteúdo!"];
const track = document.getElementById("carouselTrack");

let index = 0;

slidesData.forEach(text => {
  const slide = document.createElement("div");
  slide.classList.add("slide");
  slide.textContent = text;
  track.appendChild(slide);
});

document.getElementById("next").onclick = () => {
  index = (index + 1) % slidesData.length;
  track.style.transform = `translateX(-${index * 200}px)`;
};

document.getElementById("prev").onclick = () => {
  index = (index - 1 + slidesData.length) % slidesData.length;
  track.style.transform = `translateX(-${index * 200}px)`;
};

/* =====================
   ACCORDION
===================== */
document.querySelectorAll(".accordion-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const content = btn.nextElementSibling;
    content.style.display =
      content.style.display === "block" ? "none" : "block";
  });
});
