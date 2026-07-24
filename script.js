function renderDisciplina(data) {
  const root = document.getElementById('root');
  if (!root) return;

  let html = `
    <div class="breadcrumb">
      <a href="/profmatheus/">Inicio</a>
      <span>›</span>
      <span>${data.title}</span>
    </div>

    <div class="page-title">
      <h2>${data.title}</h2>
      <div class="info">
        <span><i>&#9200;</i> ${data.aulasPorSemana} aulas/semana &mdash; 50 min</span>
        <span><i>&#128218;</i> ${data.aulas.length} aulas</span>
        ${data.stack ? `<span><i>&#128736;</i> ${data.stack}</span>` : ''}
      </div>
    </div>

    <div class="disc-nav">
      <a href="/profmatheus/" class="back">&#8592; Inicio</a>
      <a href="${data.materiaisUrl || '/profmatheus/materiais/'}" style="background:var(--border-light);color:var(--text-secondary)">&#128206; Materiais</a>
    </div>

    <div class="search-box">
      <span class="search-icon">&#128269;</span>
      <input type="text" id="search" placeholder="Buscar aulas..." oninput="filtrarAulas(this.value)">
    </div>

    <div id="aulas">`;

  data.aulas.forEach((aula, i) => {
    const numero = i + 1;
    const icon = aula.icon || '&#128196;';
    const svgHtml = aula.svg ? `<div class="svg-box">${aula.svg}</div>` : '';
    html += `
      <div class="lesson" data-search="${(aula.t + ' ' + numero).toLowerCase()}">
        <h4><span class="icon">${icon}</span> Aula ${numero}: ${aula.t}</h4>
        <div class="conteudo">
          ${aula.c ? `<div class="bloco conceito"><strong>Conceito</strong>${aula.c}</div>` : ''}
          ${aula.a ? `<div class="bloco atividade"><strong>Atividade</strong>${aula.a}</div>` : ''}
          ${aula.p ? `<div class="bloco pesquisa"><strong>Pesquisa</strong>${aula.p}</div>` : ''}
          ${svgHtml}
        </div>
      </div>`;
  });

  html += `</div>`;
  root.innerHTML = html;
}

function filtrarAulas(valor) {
  const q = valor.toLowerCase().trim();
  const aulas = document.querySelectorAll('.lesson');
  let visiveis = 0;
  aulas.forEach(a => {
    const text = a.dataset.search || '';
    const match = !q || text.includes(q);
    a.style.display = match ? '' : 'none';
    if (match) visiveis++;
  });

  let noResults = document.querySelector('.no-results');
  if (visiveis === 0 && q) {
    if (!noResults) {
      noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.innerHTML = 'Nenhum conteudo encontrado para "<strong>' + valor + '</strong>"';
      document.getElementById('aulas').parentNode.insertBefore(noResults, document.getElementById('aulas').nextSibling);
    }
  } else if (noResults) {
    noResults.remove();
  }
}
