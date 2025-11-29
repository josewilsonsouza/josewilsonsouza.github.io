---
layout: page
title: Portfólio
permalink: /portfolio/
description: Projetos e soluções desenvolvidas em IA, Machine Learning e Análise de Dados
---

## Meus Projetos

Aqui estão alguns dos principais projetos que desenvolvi, aplicando conhecimentos em **Inteligência Artificial**, **Machine Learning**, **Análise de Dados** e **Inteligência de Mercado**.

<div class="portfolio-grid">

  <!-- Projeto 1: Fleven -->
  <div class="project-card">
    <div class="project-header">
      <div class="project-icon">🚗</div>
      <div class="project-badge">Machine Learning</div>
    </div>
    <h3>Fleven - Federated Learning for Vehicular Environment</h3>
    <p class="project-description">
      Framework de <strong>Aprendizado Federado</strong> desenvolvido especificamente para ambientes veiculares (V2X).
      Permite treinamento distribuído de modelos de ML preservando a privacidade dos dados, ideal para sistemas autônomos e IoT.
    </p>
    <div class="project-tech">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">TensorFlow</span>
      <span class="tech-tag">Federated Learning</span>
      <span class="tech-tag">IoT</span>
    </div>
    <div class="project-links">
      <a href="https://github.com/josewilsonsouza/fleven" target="_blank" rel="noopener" class="project-link">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
        GitHub
      </a>
    </div>
  </div>

  <!-- Projeto 2: WhatsContext -->
  <div class="project-card">
    <div class="project-header">
      <div class="project-icon">💬</div>
      <div class="project-badge">IA & Automação</div>
    </div>
    <h3>WhatsContext - Gerenciador Inteligente</h3>
    <p class="project-description">
      Sistema inteligente de gerenciamento de contatos do <strong>WhatsApp</strong> com contexto enriquecido.
      Futuramente adicionarei IA para organizar conversas, adicionar tags automáticas e criar lembretes contextuais, melhorando a produtividade.
    </p>
    <div class="project-tech">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">NLP</span>
      <span class="tech-tag">Automação</span>
      <span class="tech-tag">APIs</span>
    </div>
    <div class="project-links">
      <a href="https://whatscontext.vercel.app" target="_blank" rel="noopener" class="project-link primary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
        </svg>
        Ver Aplicação
      </a>
    </div>
  </div>

  <!-- Projeto 3: PBAER -->
  <div class="project-card">
    <div class="project-header">
      <div class="project-icon">📊</div>
      <div class="project-badge">Data Science</div>
    </div>
    <h3>PBAER - Análise de Evasão Universitária</h3>
    <p class="project-description">
      Dashboard desenvolvido para a <strong>Pró-Reitoria de Graduação da UFRJ</strong> (PR-1) para análise ampla de evasão,
      retenção e sucesso nos cursos de graduação, utilizando dados do Censo INEP. Pesquisa Operacional aplicada à educação.
    </p>
    <div class="project-tech">
      <span class="tech-tag">Python</span>
      <span class="tech-tag">Streamlit</span>
      <span class="tech-tag">Pandas</span>
      <span class="tech-tag">Data Viz</span>
    </div>
    <div class="project-links">
      <a href="https://pbaer-ufrj-coordenacao.streamlit.app" target="_blank" rel="noopener" class="project-link primary">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/>
        </svg>
        Ver Dashboard
      </a>
    </div>
  </div>

</div>

<style>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  margin: 3rem 0;
}

.project-card {
  background: var(--bg-white);
  border-radius: 20px;
  padding: 2rem;
  border: 2px solid var(--border-gray);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--card-shadow);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--hover-shadow);
  border-color: var(--primary-color);
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.project-icon {
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1));
  border-radius: 16px;
}

.project-badge {
  padding: 0.5rem 1rem;
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.project-card h3 {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-dark);
  margin-bottom: 1rem;
  line-height: 1.3;
}

.project-description {
  color: var(--text-gray);
  line-height: 1.7;
  margin-bottom: 1.5rem;
  flex: 1;
  font-size: 0.95rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid var(--border-gray);
}

.tech-tag {
  padding: 0.4rem 0.9rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  border-radius: 15px;
  font-size: 0.75rem;
  font-weight: 600;
  border: 1px solid rgba(99, 102, 241, 0.2);
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
}

.project-links {
  display: flex;
  gap: 1rem;
  margin-top: auto;
}

.project-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.5rem;
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  border: 2px solid var(--primary-color);
  border-radius: 12px;
  text-decoration: none;
  font-weight: 700;
  font-size: 0.9rem;
  transition: all 0.3s ease;
}

.project-link:hover {
  background: var(--primary-color);
  color: white;
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.3);
}

.project-link.primary {
  background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
  color: white;
  border: none;
}

.project-link.primary:hover {
  box-shadow: 0 8px 25px rgba(99, 102, 241, 0.4);
}

@media screen and (max-width: 768px) {
  .portfolio-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .project-card {
    padding: 1.5rem;
  }

  .project-icon {
    width: 60px;
    height: 60px;
    font-size: 2.5rem;
  }
}
</style>

---

## Colaborações e Contribuições

Estou sempre aberto a colaborações em projetos de **Machine Learning**, **Análise de Dados**, **Contabilidade quantitativa** e **Matemática**.