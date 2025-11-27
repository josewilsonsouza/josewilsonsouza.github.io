// Dark Mode Toggle
(function() {
  'use strict';

  // Verifica se há preferência salva
  const currentTheme = localStorage.getItem('theme') ||
    (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  // Aplica o tema inicial
  document.documentElement.setAttribute('data-theme', currentTheme);

  // Cria o botão de toggle
  const createToggle = () => {
    const toggle = document.createElement('button');
    toggle.className = 'dark-mode-toggle';
    toggle.setAttribute('aria-label', 'Alternar modo escuro');
    toggle.innerHTML = currentTheme === 'dark' ? '☀️' : '🌙';

    toggle.addEventListener('click', () => {
      const theme = document.documentElement.getAttribute('data-theme');
      const newTheme = theme === 'dark' ? 'light' : 'dark';

      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      toggle.innerHTML = newTheme === 'dark' ? '☀️' : '🌙';
    });

    document.body.appendChild(toggle);
  };

  // Aguarda o DOM carregar
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createToggle);
  } else {
    createToggle();
  }
})();
