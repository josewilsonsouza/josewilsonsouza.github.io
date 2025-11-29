# Guia: Como Criar Imagens de Preview para Posts

## 📐 Especificações Técnicas

- **Dimensões**: 1200x630 pixels (proporção 1.91:1)
- **Formato**: JPG ou PNG
- **Tamanho máximo**: 5MB (recomendado: < 300KB)
- **Local**: Pasta `assets/posts/`

## 🎨 Como Criar as Imagens

### Opção 1: Canva (Recomendado)

1. Acesse [canva.com](https://www.canva.com)
2. Crie um design personalizado com dimensões **1200 x 630 px**
3. Use este template como base:
   - Fundo: Gradiente roxo/azul (#6366f1 → #8b5cf6)
   - Título do post em destaque (fonte grande, bold)
   - Emoji/ícone relacionado ao tema
   - Seu nome ou logo discreto no canto

### Opção 2: PowerPoint

1. Configure o slide para **33,87 cm x 17,78 cm**
2. Adicione os elementos visuais
3. Exporte como imagem PNG (Arquivo → Exportar → PNG)

## 📂 Estrutura de Arquivos

```
assets/
├── posts/
│   ├── riemann-hypothesis.jpg      # Para o post da Hipótese de Riemann
│   ├── conjectura-hilbert-polya.jpg
│   ├── funcoes-quadraticas.jpg
│   └── ...
└── og-default-post.jpg             # Imagem padrão para posts sem imagem específica
```

## ✍️ Como Adicionar aos Posts

No front matter de cada post, adicione o campo `image:`:

```yaml
---
layout: post
title: "A Hipótese de Riemann"
date: 2025-11-28
categories: [Teoria dos Números, Função Zeta]
tags: [Matemática, Teoria dos Números]
emojis: "🖼️🟧"
description: O grande problema em aberto da Matemática
image: /assets/posts/riemann-hypothesis.jpg  # ← Adicione esta linha
---
```

## 🎨 Sugestões de Design por Post

### 1. A Hipótese de Riemann
- **Cores**: Roxo e azul profundo
- **Elementos**: Função ζ(s), gráfico da função zeta
- **Emojis**: ∞ ζ 📐
- **Nome do arquivo**: `riemann-hypothesis.jpg`

### 2. Conjectura de Hilbert-Pólya
- **Cores**: Gradiente verde e azul
- **Elementos**: Operadores matemáticos, matrizes
- **Emojis**: 🔬 📊 ∞
- **Nome do arquivo**: `conjectura-hilbert-polya.jpg`

### 3. Funções Quadráticas
- **Cores**: Laranja e rosa
- **Elementos**: Parábola, gráfico ax² + bx + c
- **Emojis**: 📈 🟧 📐
- **Nome do arquivo**: `funcoes-quadraticas.jpg`

### 4. Aulas de Matemática
- **Cores**: Verde claro e amarelo
- **Elementos**: Lousa, giz, equações
- **Emojis**: 🧑‍🏫 📚 📝
- **Nome do arquivo**: `aulas-matematica.jpg`

## ⚠️ Importante

- Se você **não adicionar** o campo `image:`, o post usará a imagem padrão `og-default-post.jpg`
- Páginas institucionais (About, Portfolio, Contato) continuam usando `me_terno.jpg`
- Sempre use URLs absolutas começando com `/assets/`
- Após fazer upload de novas imagens, pode levar alguns minutos para o preview atualizar

## 📝 Checklist

- [ ] Criar pasta `assets/posts/`
- [ ] Criar imagem padrão `assets/og-default-post.jpg` (1200x630px)
- [ ] Criar imagens específicas para cada post (1200x630px)
- [ ] Adicionar campo `image:` no front matter de cada post
- [ ] Fazer commit e push para GitHub
- [ ] Testar previews com Facebook Debugger ou LinkedIn Inspector

## 🎯 Template de Cores do Site

Para manter consistência visual:

- **Primary**: `#6366f1` (Roxo/Azul)
- **Secondary**: `#8b5cf6` (Roxo claro)
- **Accent**: `#ec4899` (Rosa)
- **Success**: `#10b981` (Verde)
- **Warning**: `#f59e0b` (Laranja)

## 💡 Dica Pro

Crie um template base no Canva e apenas mude:
- O título do post
- O emoji/ícone
- A cor do gradiente

Isso mantém consistência visual e acelera a criação!
