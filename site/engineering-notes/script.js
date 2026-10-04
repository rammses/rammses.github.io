'use strict';
const panels = window.PORTFOLIO_PANELS;
const category = document.querySelector('#category');
const evidence = document.querySelector('#evidence');
const search = document.querySelector('#search');
const grid = document.querySelector('#panels');
function element(tag, text, className) {
  const node = document.createElement(tag);
  if (text) node.textContent = text;
  if (className) node.className = className;
  return node;
}
for (const [select, field] of [[category, 'category'], [evidence, 'evidence']]) {
  for (const value of [...new Set(panels.map(p => p[field]))].sort()) {
    const option = element('option', value); option.value = value; select.append(option);
  }
}
function render() {
  const query = search.value.trim().toLowerCase();
  const filtered = panels.filter(p => (!category.value || p.category === category.value) && (!evidence.value || p.evidence === evidence.value) && JSON.stringify(p).toLowerCase().includes(query));
  grid.replaceChildren();
  for (const p of filtered) {
    const card = element('article', '', 'card'); card.id = p.slug;
    const meta = element('div', '', 'meta'); meta.append(element('span', p.category), element('span', p.evidence, 'badge'));
    const tags = element('div', '', 'tags'); p.technologies.forEach(t => tags.append(element('span', t, 'tag')));
    const detail = element('details'); detail.append(element('summary', 'Explore the engineering'));
    for (const [title, value] of [['Challenge', p.challenge], ['Approach', p.approach], ['Why it is complex', p.complexity], ['Documented result / scope', p.result]]) {
      detail.append(element('h3', title));
      if (Array.isArray(value)) { const list = element('ul'); value.forEach(v => list.append(element('li', v))); detail.append(list); }
      else detail.append(element('p', value));
    }
    card.append(meta, element('h2', p.title), element('p', p.summary, 'summary'), tags, detail); grid.append(card);
  }
  document.querySelector('#count').textContent = `${filtered.length} of ${panels.length} panels`;
  document.querySelector('#empty').hidden = filtered.length !== 0;
}
[category, evidence].forEach(select => select.addEventListener('change', render));
search.addEventListener('input', render);
render();
