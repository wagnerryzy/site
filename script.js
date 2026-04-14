/* =====================
   CURSOS COM IMAGEM
===================== */
const courses = [
  {
    title: "HTML e CSS",
    desc: "Crie sites modernos e responsivos.",
    img: "https://picsum.photos/300/200?1"
  },
  {
    title: "JavaScript",
    desc: "Deixe seu site interativo.",
    img: "https://picsum.photos/300/200?2"
  },
  {
    title: "React",
    desc: "Interfaces modernas e rápidas.",
    img: "https://picsum.photos/300/200?3"
  }
];

const container = document.getElementById("coursesContainer");

courses.forEach(course => {
  const card = document.createElement("div");
  card.classList.add("card", "hidden");

  card.innerHTML = `
    <img src="${course.img}" alt="${course.title}">
    <h3>${course.title}</h3>
    <p>${course.desc}</p>
  `;

  container.appendChild(card);
});

/* =====================
   GALERIA DINÂMICA
===================== */
const gallery = [
  { img: "https://picsum.photos/300/200?4" },
  { img: "https://picsum.photos/300/200?5" },
  { img: "https://picsum.photos/300/200?6" }
];

const galleryContainer = document.getElementById("galleryContainer");

gallery.forEach(item => {
  const div = document.createElement("div");
  div.classList.add("gallery-item", "hidden");

  div.innerHTML = `<img src="${item.img}" alt="Projeto de aluno">`;

  galleryContainer.appendChild(div);
});
