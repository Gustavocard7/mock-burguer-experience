## Conexão de mockburguer.online

A GoDaddy mostra atualmente o domínio com `A @ -> Parked` e `CNAME www -> mockburguer.online`, além dos registros NS, SOA, `_domainconnect` e `_dmarc`. O Render adicionou `mockburguer.online` e `www.mockburguer.online` ao serviço `mock-burguer-experience`. Destino informado pelo Render: `www -> CNAME mock-burguer-experience.onrender.com`; para o domínio raiz, a GoDaddy deve usar `A @ -> 216.24.57.1`, conforme orientação do Render para provedores sem ANAME/ALIAS. O usuário confirmou a alteração.

Fonte oficial consultada: https://render.com/docs/custom-domains e https://render.com/docs/configure-other-dns.
## Verificação pública

Após a alteração, `mockburguer.online` resolve para `216.24.57.1`, `www.mockburguer.online` resolve para a infraestrutura do Render e `https://mockburguer.online` respondeu HTTP 200. O painel do Render ainda exibiu erro de verificação no primeiro refresh, possivelmente por cache/propagação; uma nova verificação deve ser tentada após a atualização do DNS.
