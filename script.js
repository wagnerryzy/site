/* ==========================
   DADOS DINÂMICOS
========================== */
const destinos = [
    { nome: 'Paris', descricao: 'Cidade do amor e da luz.', img: 'https://via.placeholder.com/300x200?text=Paris' },
    { nome: 'Nova York', descricao: 'A cidade que nunca dorme.', img: 'https://via.placeholder.com/300x200?text=NYC' },
    { nome: 'Tóquio', descricao: 'Tradição e modernidade.', img: 'https://via.placeholder.com/300x200?text=Tokyo' },
];

const planos = [
    { titulo: 'Econômico', detalhes: 'Hospedagem simples, transporte público incluso.' },
    { titulo: 'Premium', detalhes: 'Hotéis 4 estrelas, passeios inclusos.' },
    { titulo: 'Luxo', detalhes: 'Experiência completa, hotéis 5 estrelas e guia privado.' },
];

const depoimentos = [
    { nome: 'Ana', comentario: 'Viagem incrível, serviço excelente!' },
    { nome: 'Carlos', comentario: 'Recomendo a TravelX a todos meus amigos.' },
    { nome: 'Mariana', comentario: 'Tudo perfeito, experiência inesquecível.' },
];

/* ==========================
   RENDER DESTINOS
========================== */
const destinosContainer = document.getElementById('destinos-container');
destinos.forEach(destino => {
    const card = document.createElement('article');
    card.className = 'destino-card scroll-reveal';
    card.innerHTML = `
        <img src="${destino.img}" alt="${destino.nome}">
        <h3>${destino.nome}</h3>
        <p>${destino.descricao}</p>
    `;
    destinosContainer.appendChild(card);
});

/* ==========================
   RENDER ACCORDION / PLANOS
========================== */
const accordionContainer = document.getElementById('planos-accordion');
planos.forEach((plano, i) => {
    const item = document.createElement('div');
    item.className = 'accordion-item';
    item.innerHTML = `
        <div class="accordion-header" tabindex="0">${plano.titulo}</div>
        <div class="accordion-content"><p>${plano.detalhes}</p></div>
    `;
    accordionContainer.appendChild(item);
});

/* ACCORDION FUNCIONAL */
document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        const expanded = content.style.maxHeight;
        document.querySelectorAll('.accordion-content').forEach(c => c.style.maxHeight = null);
        if (!expanded) {
            content.style.maxHeight = content.scrollHeight + 'px';
        }
    });
});

/*
