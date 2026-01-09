# Imagens de Preview para Posts

- **Dimensões**: 1200x630 pixels (proporção 1.91:1)
- **Formato**: JPG ou PNG
- **Tamanho máximo**: 5MB (recomendado: < 300KB)
- **Local**: Pasta `assets/posts/`

No front matter de cada post, adicione o campo `image:`:

```yaml
---
layout: post
title: "A Função Zeta e a Hipótese de Riemann"
date: 2026-01-09
categories: [Teoria dos Números, Função Zeta]
tags: [Matemática, Teoria dos Números]
emojis: "🖼️🟧"
description: O grande problema em aberto da Matemática
image: /assets/posts/riemann-hypothesis.jpg
---
```

## ⚠️ Importante

- Se você **não adicionar** o campo `image:`, o post usará a imagem padrão `og-default-post.jpg`
- Páginas institucionais (About, Portfolio, Contato) continuam usando `me_terno.jpg`
- Sempre use URLs absolutas começando com `/assets/`
- Após fazer upload de novas imagens, pode levar alguns minutos para o preview atualizar

## Cores do Site

Para manter consistência visual:

- **Primary**: `#6366f1` (Roxo/Azul)
- **Secondary**: `#8b5cf6` (Roxo claro)
- **Accent**: `#ec4899` (Rosa)
- **Success**: `#10b981` (Verde)
- **Warning**: `#f59e0b` (Laranja)