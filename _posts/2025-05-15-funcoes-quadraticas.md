---
layout: post
title: "Funções Quadráticas: Parábolas e Suas Propriedades"
date: 2025-05-15
categories: [algebra, ensino-medio, funcoes]
---

## Funções Quadráticas: Uma Visão Completa

As funções quadráticas são fundamentais no estudo da Matemática e aparecem em inúmeras aplicações práticas, desde o movimento de projéteis até a otimização de lucros em empresas.

### Definição

Uma **função quadrática** é uma função do tipo:

$$f(x) = ax^2 + bx + c$$

onde:
- $a, b, c \in \mathbb{R}$
- $a \neq 0$ (caso contrário, seria uma função linear)

### O Gráfico: A Parábola

O gráfico de uma função quadrática é sempre uma **parábola**.

#### Concavidade

A concavidade depende do coeficiente $a$:

- $a > 0$: Parábola com concavidade para cima $(\cup)$
  - Tem um ponto de **mínimo**

- $a < 0$: Parábola com concavidade para baixo $(\cap)$
  - Tem um ponto de **máximo**

### Forma Canônica (ou Vértice)

Toda função quadrática pode ser escrita como:

$$f(x) = a(x - x_v)^2 + y_v$$

onde $(x_v, y_v)$ é o vértice da parábola.

#### Coordenadas do Vértice

$$x_v = -\frac{b}{2a}$$

$$y_v = -\frac{\Delta}{4a} \quad \text{ou} \quad y_v = f(x_v)$$

onde $\Delta = b^2 - 4ac$ (discriminante)

### Zeros ou Raízes da Função

Os zeros são os valores de $x$ onde $f(x) = 0$.

Resolvemos usando a **Fórmula de Bhaskara**:

$$x = \frac{-b \pm \sqrt{\Delta}}{2a}$$

onde $\Delta = b^2 - 4ac$

#### Análise do Discriminante

**$\Delta > 0$**: Duas raízes reais distintas
- A parábola cruza o eixo $x$ em dois pontos

**$\Delta = 0$**: Uma raiz real (raiz dupla)
- A parábola tangencia o eixo $x$ (vértice sobre o eixo)

**$\Delta < 0$**: Nenhuma raiz real
- A parábola não cruza o eixo $x$

### Forma Fatorada

Quando conhecemos as raízes $x_1$ e $x_2$:

$$f(x) = a(x - x_1)(x - x_2)$$

Esta forma é útil para esboçar rapidamente o gráfico!

### Simetria

Toda parábola tem um **eixo de simetria** vertical que passa pelo vértice:

$$x = x_v = -\frac{b}{2a}$$

### Exemplos Práticos

#### Exemplo 1: Análise Completa

$$f(x) = x^2 - 4x + 3$$

**Passo 1:** Identificar coeficientes
- $a = 1, b = -4, c = 3$
- $a > 0 \implies$ concavidade para cima

**Passo 2:** Calcular o discriminante
$$\Delta = (-4)^2 - 4(1)(3) = 16 - 12 = 4$$
- $\Delta > 0 \implies$ duas raízes reais

**Passo 3:** Encontrar as raízes
$$x = \frac{4 \pm 2}{2} \implies x_1 = 3, \quad x_2 = 1$$

**Passo 4:** Vértice
$$x_v = -\frac{(-4)}{2(1)} = 2$$
$$y_v = f(2) = 4 - 8 + 3 = -1$$
$$V(2, -1)$$

**Passo 5:** Forma fatorada
$$f(x) = (x - 1)(x - 3)$$

#### Exemplo 2: Problema de Máximo

Uma empresa vende $x$ unidades de um produto. A receita é dada por:

$$R(x) = -2x^2 + 120x$$

Qual a quantidade que maximiza a receita?

**Solução:**
- $a = -2 < 0 \implies$ tem ponto de máximo
- $x_v = -\frac{120}{2 \times (-2)} = 30$

**Resposta:** 30 unidades maximiza a receita.

Receita máxima:
$$R(30) = -2(30)^2 + 120(30) = -1800 + 3600 = 1800$$

### Aplicações Práticas

#### 1. Movimento de Projéteis

A altura $h$ de um objeto lançado no tempo $t$:

$$h(t) = -\frac{g}{2}t^2 + v_0t + h_0$$

onde:
- $g$ = aceleração da gravidade
- $v_0$ = velocidade inicial
- $h_0$ = altura inicial

#### 2. Otimização

Maximizar área de um retângulo com perímetro fixo:

Se o perímetro é $P$, e os lados são $x$ e $y$:
- $P = 2x + 2y \implies y = \frac{P}{2} - x$
- Área: $A(x) = x \cdot y = x\left(\frac{P}{2} - x\right) = \frac{Px}{2} - x^2$

Função quadrática! O máximo ocorre no vértice.

#### 3. Economia

- Curvas de oferta e demanda
- Análise de custos e lucros
- Ponto de equilíbrio

### Propriedades Importantes

#### Relações de Girard (Soma e Produto das Raízes)

Para $f(x) = ax^2 + bx + c$ com raízes $x_1$ e $x_2$:

**Soma:** 
$$x_1 + x_2 = -\frac{b}{a}$$

**Produto:** 
$$x_1 \cdot x_2 = \frac{c}{a}$$

Útil para encontrar raízes sem Bhaskara!

#### Interseção com o Eixo Y

O ponto onde a parábola cruza o eixo $y$ é sempre $(0, c)$.

### Construindo o Gráfico

**Roteiro:**

1. Identificar a concavidade (sinal de $a$)
2. Encontrar as raízes (se existirem)
3. Calcular o vértice
4. Marcar a interseção com eixo $y$
5. Usar pontos adicionais se necessário
6. Traçar a parábola

### Exercícios Propostos

1. **Esboce o gráfico** de $f(x) = -x^2 + 6x - 5$

2. **Determine** o valor de $k$ para que $f(x) = x^2 - 6x + k$ tenha raiz dupla.

3. **Um fazendeiro** tem 100 metros de cerca para delimitar um terreno retangular junto a um rio (não precisa cercar o lado do rio). Quais as dimensões que maximizam a área?

4. **Prove** que se $\Delta < 0$ e $a > 0$, então $f(x) > 0$ para todo $x \in \mathbb{R}$.

### Dicas de Estudo

1. **Sempre** esboce o gráfico para visualizar
2. **Identifique** qual informação você tem e qual precisa encontrar
3. **Use** a forma mais conveniente (padrão, vértice ou fatorada)
4. **Pratique** mudando entre as diferentes formas

---

**Quer aprender mais sobre funções?** Confira nossos [recursos](/recursos/) ou agende uma [aula particular](/contato/)!

### Referências

- Fundamentos de Matemática Elementar - Vol. 1 (Gelson Iezzi)
- A Matemática do Ensino Médio - Vol. 1 (Elon Lages Lima)

---

*"Em Matemática, você não entende as coisas. Você apenas se acostuma com elas." - John von Neumann*
