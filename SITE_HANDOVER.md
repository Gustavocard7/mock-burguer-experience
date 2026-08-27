# Recuperação e autonomia — Mock Burguer

Este documento registra tudo que é necessário para manter, transferir ou publicar novamente a landing page da Mock Burguer sem depender do ambiente de desenvolvimento original.

## Repositórios sob controle da marca

| Repositório | Finalidade | Conteúdo essencial |
| --- | --- | --- |
| `Gustavocard7/mock-burguer-experience` | Aplicação do site | Código React/Vite, dependências, configuração de build, registro de ativos e histórico de versões. |
| `Gustavocard7/mock-burguer-assets` | Acervo privado de mídia | Logos, fotografias de produto, cenários, materiais de impressão e artes de Instagram. |

Os dois repositórios possuem histórico Git no branch `main`. Os ativos do site estão detalhados em [`ASSET_REGISTRY.md`](./ASSET_REGISTRY.md), com sua referência de entrega pública e sua cópia preservada no acervo privado.

## Como recuperar ou publicar o site

1. Clone o repositório da aplicação e instale as dependências com `pnpm install --frozen-lockfile`.
2. Execute `pnpm run audit:release`. Esse comando confirma que todas as imagens usadas pela página respondem por URL pública, executa a verificação de tipos e gera a compilação. O diretório gerado para hospedagem estática é `dist/public`.
3. No Render, configure um **Static Site** conectado ao branch `main`, com comando de build `pnpm install --frozen-lockfile; pnpm run build` e diretório de publicação `dist/public`.
4. Mantenha as URLs de mídia do `ASSET_REGISTRY.md` ou publique novas cópias equivalentes em uma CDN pública antes de alterar `client/src/pages/Home.tsx`.

## Dependências externas intencionais

| Serviço | Papel | Onde é configurado |
| --- | --- | --- |
| GitHub | Fonte de verdade do código e do acervo de mídia | Repositórios acima. |
| Render | Hospedagem estática e implantação automática do branch `main` | Painel do Render conectado ao repositório da aplicação. |
| CDN pública | Entrega das imagens já registradas no código | URLs completas em `client/src/pages/Home.tsx`. |
| WhatsApp | Destino dos pedidos | Constante `whatsappUrl` em `client/src/pages/Home.tsx`. |

## Regra de continuidade

Todo novo ativo visual deve ter uma cópia preservada no repositório privado `mock-burguer-assets`, uma entrada no `ASSET_REGISTRY.md` e uma versão publicada em URL pública antes de ser usado na aplicação. Todo ajuste deve ser enviado ao GitHub antes de ser considerado concluído.

> **Comando de auditoria:** `pnpm run audit:release` é a checagem única para confirmar se a aplicação continua recuperável com código, dependências e URLs de mídia presentes no GitHub.
