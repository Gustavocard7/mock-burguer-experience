# Registro permanente de ativos — Mock Burguer

Este repositório contém a aplicação e aponta para cópias publicadas em CDN, necessárias para que a página carregue corretamente no Render. As imagens-fonte e os arquivos finais também são preservados em um repositório privado de ativos no GitHub, separado da aplicação para evitar que arquivos pesados impactem a compilação e a publicação do site.

> **Regra operacional:** cada imagem nova deve ser arquivada no repositório privado de ativos, publicada em CDN, registrada neste arquivo e referenciada pelo código antes de qualquer atualização ser enviada ao branch `main`.

| Ativo | Uso atual | URL de publicação | Arquivo arquivado |
| --- | --- | --- | --- |
| Logotipo oficial | Hero, rodapé e favicon | `RZNTcgAefZbVtEOq.png` | `brand/logo-oficial.png` |
| Wordmark MOCK | Cabeçalho e chamada final | `yRgUuxWiBDcXDxzD.png` | `brand/wordmark-mock.png` |
| Hero na churrasqueira | Abertura principal | `TxjfeDwpDgFWdggT.jpg` | `heroes/hero-hamburguer-na-brasa.jpg` |
| Labaredas do manifesto | Fundo da seção “Não é só um hambúrguer” | `FUllcmGKpjIKRLKX.jpg` | `heroes/mock-manifesto-labaredas.jpg` |
| Mock Burger | Cards, cardápio e faixa fotográfica | `xDdgcXOtjMZevMwK.png` | `products/mock-burger.png` |
| Mock Bacon | Cards, cardápio e faixa fotográfica | `VguUsuxASVjIHfOL.jpg` | `products/mock-bacon.jpg` |
| Mock BBQ | Cards, cardápio e faixa fotográfica | `BTjgcYSmMHtGrBNE.png` | `products/mock-bbq.png` |
| Mock Supremo | Cards, cardápio e faixa fotográfica | `wOEGrcKKajAnpOAq.png` | `products/mock-supremo.png` |
| Fotos de galeria | Manifesto, ritual e galeria | URLs registradas em `Home.tsx` | `gallery/` |
| Artes de Instagram | Perfil, feed e Stories | Arquivos finais | `social/` |

## Procedimento obrigatório de publicação

| Etapa | Ação obrigatória |
| --- | --- |
| 1. Arquivo original | Adicionar a imagem ao repositório privado `mock-burguer-assets`, em uma pasta coerente com o tipo de ativo. |
| 2. Entrega para o site | Publicar uma cópia em CDN e usar exclusivamente a URL pública no código do site. |
| 3. Rastreabilidade | Atualizar esta tabela com finalidade, nome arquivado e identificador do ativo público. |
| 4. Versão | Registrar, enviar e confirmar o commit no GitHub para a aplicação e para o arquivo de ativos. |
| 5. Publicação | Conferir a atualização automática do Render no branch `main`. |

Os ativos binários não são mantidos no diretório da aplicação para preservar builds leves e compatíveis com o Render. A cópia permanente está no repositório privado de ativos, enquanto a aplicação usa somente a URL de entrega pública.
