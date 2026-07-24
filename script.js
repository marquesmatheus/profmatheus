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
        <span><i>&#128218;</i> Total: ${data.totalAulas} aulas &mdash; ${data.semanas.length} semanas</span>
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

    <div class="stats">
      <div class="stat">
        <span class="num">${data.totalAulas}</span>
        <span class="label">Aulas</span>
      </div>
      <div class="stat">
        <span class="num">${data.semanas.length}</span>
        <span class="label">Semanas</span>
      </div>
      <div class="stat">
        <span class="num">${data.semanas.reduce((s, w) => s + w.aulas.length, 0)}</span>
        <span class="label">Conteudos</span>
      </div>
    </div>

    <div id="semanas">`;

  data.semanas.forEach((semana, si) => {
    html += `
      <div class="week" data-index="${si}">
        <div class="week-header" onclick="toggleWeek(this.parentElement)">
          <h3>${semana.titulo}</h3>
          <span class="toggle">&#9660;</span>
        </div>
        <div class="week-body">`;

    semana.aulas.forEach((aula, ai) => {
      const icon = aula.icon || '&#128196;';
      const svgHtml = aula.svg ? `<div class="svg-box">${aula.svg}</div>` : '';
      html += `
        <div class="lesson" data-search="${(aula.t + ' ' + semana.titulo).toLowerCase()}">
          <h4><span class="icon">${icon}</span> ${aula.t}</h4>
          <div class="conteudo">
            ${aula.c ? `<div class="bloco conceito"><strong>Conceito</strong>${aula.c}</div>` : ''}
            ${aula.a ? `<div class="bloco atividade"><strong>Atividade</strong>${aula.a}</div>` : ''}
            ${aula.p ? `<div class="bloco pesquisa"><strong>Pesquisa</strong>${aula.p}</div>` : ''}
            ${svgHtml}
          </div>
        </div>`;
    });

    html += `</div></div>`;
  });

  html += `</div>`;
  root.innerHTML = html;
}

function toggleWeek(el) {
  el.classList.toggle('open');
}

function filtrarAulas(valor) {
  const q = valor.toLowerCase().trim();
  document.querySelectorAll('.week').forEach(w => {
    const aulas = w.querySelectorAll('.lesson');
    let algumVisivel = false;
    aulas.forEach(a => {
      const text = a.dataset.search || '';
      const match = !q || text.includes(q);
      a.style.display = match ? '' : 'none';
      if (match) algumVisivel = true;
    });
    w.style.display = algumVisivel || !q ? '' : 'none';
    if (q && algumVisivel) w.classList.add('open');
  });

  const totalVisiveis = document.querySelectorAll('.lesson[style*="display: none"]').length === 0
    ? document.querySelectorAll('.lesson').length
    : document.querySelectorAll('.lesson:not([style*="display: none"])').length;

  const semanasDiv = document.getElementById('semanas');
  let noResults = document.querySelector('.no-results');
  if (totalVisiveis === 0 && q) {
    if (!noResults) {
      noResults = document.createElement('div');
      noResults.className = 'no-results';
      noResults.innerHTML = 'Nenhum conteudo encontrado para "<strong>' + valor + '</strong>"';
      semanasDiv.parentNode.insertBefore(noResults, semanasDiv.nextSibling);
    }
  } else if (noResults) {
    noResults.remove();
  }
}
