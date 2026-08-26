# Direção de arte — Mock Burguer

## Três rotas exploradas

### 1. Saloon Líquido
**Muito breve:** Um saloon noturno de outra dimensão, onde letreiros vermelhos, madeira carbonizada e carne suculenta parecem derreter em uma noite sem fim. A atmosfera é intensa, teatral e gastronômica, sem recorrer a clichês de faroeste literal.

**Probabilidade:** 0,07

### 2. Arquivo de Fogo
**Muito breve:** Uma coleção editorial quase museológica de ingredientes, cortes e processos, organizada como um laboratório de alta gastronomia em brasa. O resultado é limpo, técnico e solene.

**Probabilidade:** 0,03

### 3. Motel Cósmico
**Muito breve:** Uma lanchonete de estrada imaginária atravessada por uma tempestade cósmica, com cromados, constelações e sinais de néon. É pop, lúdico e propositalmente excêntrico.

**Probabilidade:** 0,09

## Abordagem escolhida: Saloon Líquido

### Movimento de design

**Surrealismo gastronômico noturno** encontra o **brutalismo editorial contemporâneo**. O site transforma a Mock Burguer em um destino: um salão de brasa em que a matéria-prima parece viva, a madeira preserva a memória do fogo e o vermelho do néon desenha o desejo.

### Princípios centrais

1. **O produto é a protagonista absoluta.** Fotos reais de hambúrguer são tratadas como retratos de alta intensidade, nunca como textura decorativa.
2. **Surrealismo com função.** Profundidade, flutuação e distorção aparecem para revelar camadas, procedência e excesso — não como enfeite de interface.
3. **Matéria antes de efeito.** Madeira, brasa, metal dourado e fumaça escura dão peso tátil à experiência; luz e movimento reforçam essas matérias.
4. **Ritmo cinematográfico.** Alternar impacto visual, respiro editorial e chamadas de ação evita fadiga e preserva a leitura.

### Filosofia de cor

O preto tostado e o marrom quase carvão criam o palco para a carne, as sombras e o emblema. O vermelho de néon funciona como temperatura e direção de ação; deve entrar em linhas luminosas, estados ativos e contra-luz, não como fundo dominante. O dourado envelhecido transmite a força do selo da marca e dá acabamento premium. O creme do pão suaviza a composição e mantém a comida visualmente apetecível.

| Papel | Cor | HEX | Intenção |
| --- | --- | --- | --- |
| Fundo de brasa | Carvão profundo | `#0E0A08` | Escuridão quente para contraste, fumaça e foco. |
| Superfície | Mogno queimado | `#25130F` | Base tátil para seções e painéis editoriais. |
| Assinatura da marca | Vermelho brasa | `#D3261B` | Calor, urgência e energia de néon. |
| Metal do emblema | Ouro envelhecido | `#B58A3C` | Herança visual, detalhe e sensação premium. |
| Fogo aberto | Laranja chama | `#F05A1A` | Transições de luz, foco e microinteração. |
| Pão tostado | Creme brioche | `#F0D6A6` | Contraste orgânico para textos e ingredientes. |
| Texto principal | Osso claro | `#F8EEE1` | Leitura confortável sobre os fundos escuros. |

### Paradigma de layout

A página é uma **travessia vertical em cenas**, não uma grade de cartões. Cada bloco age como um ambiente de um mesmo salão: o herói apresenta o universo; a seção de manifesto abre o espaço; o cardápio percorre uma “esteira de fogo” horizontal; a origem desacelera em um mural editorial; e o pedido encerra com uma porta de neon. Eixos deslocados, imagens que atravessam limites e títulos monumentais produzem tensão sem sacrificar a rota de navegação.

### Elementos de assinatura

1. **Arcos de néon arredondados**, derivados do contorno do letreiro visível nas fotografias, são usados como molduras, indicadores e estados de foco.
2. **A marca do chifre em metal dourado**, extraída do emblema existente, aparece como ícone de navegação, favicon e marca d’água de baixa opacidade.
3. **Faíscas em brasa e véus de fumaça**, discretos e texturais, conectam transições de cena e reforçam a sensação de temperatura.

### Filosofia de interação

A interface responde como uma chapa quente: direta, firme e com inércia curta. Hover aproxima o hambúrguer, desloca o brilho do metal ou acende uma linha de néon; clique abre decisões úteis, como consultar o menu ou iniciar um pedido. Nada se move continuamente para chamar atenção. O visitante conserva controle, com botões claros e fallback integral para toque, teclado e redução de movimento.

### Animação

O movimento 3D fica concentrado em três momentos de alto valor. No herói, um hambúrguer em camadas aparentes atravessa uma rotação de poucos graus conforme o cursor, para comunicar volume e excesso. Ao chegar ao manifesto, as camadas se separam apenas o suficiente para revelar os ingredientes e recompor a história de “feito com personalidade”. No cardápio, cada item recebe um deslocamento de profundidade sob hover, sem modelos pesados, usando fotografia recortada, perspectiva CSS e sombras calculadas.

O teto técnico é explícito: no máximo uma composição 3D em execução por vez, animações restritas a `transform` e `opacity`, pausadas fora da viewport, com imagens responsivas e com `prefers-reduced-motion` removendo paralaxe, partículas e rotações. No celular, a cena 3D vira uma composição estática de alto contraste com microinterações de toque — a mensagem permanece, o peso desaparece.

### Sistema tipográfico

**Bebas Neue** conduz títulos em caixa alta, com grande escala e espaçamento ajustado para uma voz de letreiro. **DM Sans** sustenta navegação, descrições e informações práticas com legibilidade contemporânea. Números, etiquetas e coordenadas de menu usam **DM Mono** para criar um vocabulário técnico e contrastante. A hierarquia é deliberada: títulos em Bebas Neue de 72–160 px no desktop; subtítulos em DM Sans de 20–28 px; corpo em 16–18 px; microcópia em DM Mono de 11–13 px com rastreamento amplo.

### Essência da marca

**Mock Burguer é o salão de brasa para quem não pede um hambúrguer discreto — pede uma experiência que deixa marca.**

Personalidade: **visceral, magnética, indomável**.

### Voz de marca

As manchetes soam curtas, afirmativas e sensoriais. Chamadas para ação são convites de desejo, não comandos genéricos; a microcópia reconhece a fome e dá a próxima decisão com clareza.

> “Não é só um hambúrguer. É a sua fome em volume máximo.”

> “A chapa está acesa. Escolha o seu excesso.”

### Wordmark e símbolo

O selo existente permanece como assinatura oficial: o crânio bovino dourado, os chifres e o círculo vermelho-escuro carregam herança e potência. Para usos pequenos, o símbolo é reduzido ao recorte do crânio com chifres em dourado envelhecido, sem texto, sobre fundo transparente ou carvão. O wordmark completo entra com generosidade no herói e no rodapé, nunca espremido como um logotipo de navegação comum.

### Cor assinatura

**Vermelho Brasa `#D3261B`**. A cor é reservada para a sensação de fogo controlado: um pulso visual reconhecível da Mock Burguer.

## Estrutura da experiência

| Ordem | Cena | O que comunica | Papel da profundidade e do movimento |
| --- | --- | --- | --- |
| 01 | Herói — “Fome em volume máximo” | A Mock Burguer é intensa, autoral e impossível de ignorar. | Hambúrguer central em composição 2.5D; resposta de cursor de baixa amplitude. |
| 02 | Manifesto — “Feito para deixar marca” | Ingredientes selecionados e personalidade como argumento de qualidade. | Camadas do hambúrguer se distanciam ao avançar na rolagem e se recompõem. |
| 03 | Seleção de assinatura | Três construções de sabor, apresentadas como escolhas de alto impacto. | Cartões inclinados em profundidade apenas em hover/foco, sem autoplay. |
| 04 | O ritual da chapa | A história é feita de calor, carne e tempo, não de efeitos visuais. | Linhas de néon acompanham a progressão do texto; fumaça muito sutil em loop pausável. |
| 05 | Galeria — “Sem filtro, sem modéstia” | Prova visual de textura, altura e suculência reais. | Perspectiva de galeria em eixo horizontal, com fotos em camadas e interação de arrasto. |
| 06 | Convite final — “A chapa está acesa” | Converter desejo em pedido ou conversa no WhatsApp. | Um portal de néon cresce discretamente para enquadrar o CTA, sem bloquear a leitura. |

## Erro a evitar

O erro que faz um site 3D parecer amador é **tratar todo elemento como um brinquedo de demonstração**: câmera solta, partículas em excesso, objetos girando sem pausa e transições que escondem a informação. O resultado é ruído, piora de desempenho e uma marca que parece insegura do próprio produto. No padrão premium, a profundidade tem uma frase para dizer: revelar a estrutura do hambúrguer, conduzir a escolha ou intensificar o rito da chapa. Se o efeito não faz uma dessas três coisas, ele deve sair.

## Style Decisions

- As seleções são encenadas sobre uma **esteira de fogo**, nunca reduzidas a uma grade neutra: cada item tem eixo, inclinação e numeração ritual próprios.
- O creme brioche serve de luz de mesa, mas é sempre enquadrado por carvão, fumaça, metal envelhecido ou contraluz vermelha para manter a noite do saloon.
- Todo grande bloco carrega pelo menos um traço reconhecível da Mock Burguer: arco de chifre, portal de néon, linha de brasa ou geometria de selo dourado.
