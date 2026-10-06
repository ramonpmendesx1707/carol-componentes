# Carol Componentes
Primeira proposta para a operação exclusiva de Joinville. Direção **Precisão industrial**, azul profundo, amarelo e branco, Barlow e Source Sans. A marca tipográfica é provisória. Segunda variação visual após avaliação da primeira.

## Funcionalidades
Catálogo público com 50 produtos principais, 290 variantes e 16 categorias; busca, grade/lista, filtros, medidas, informação adicional, desenhos, comparação de três peças, favoritos e cotação persistidos no dispositivo. PDF técnico de 60 páginas com nova identidade, mapa de Joinville e área autenticada de pedidos de melhoria.

O contato exige CNPJ válido e telefone com DDD; registra o teste antes de abrir WhatsApp preenchido, exclusivamente **5547996180088**. O usuário confirmou que **e-mail permanece demonstrativo**. Destinatário futuro: ramonpmendesx@gmail.com. A interface não afirma envio real. Não há checkout, pagamentos, estoque real ou CAD fictício. Frete e prazos são explicitamente simulados. Preço zero na origem é apresentado sob consulta.

O domínio carolcomponentes.com.br faz parte da identidade; compra, DNS e correio não foram alterados. A publicação de homologação inicia privada no ChatGPT Pages/Sites.

## Documentação
- [Roadmap](docs/ROADMAP.md)
- [Infraestrutura e correio](docs/INFRASTRUCTURE.md)
- [Referências de mercado](docs/COMPETITORS.md)
- [Origem dos dados](docs/DATA.md)
- [Validação](docs/VALIDATION.md)
- [Histórico](CHANGELOG.md)

## Desenvolvimento
React, TypeScript, Vinext, Cloudflare Worker e D1. Node 22.13+. Instalar com npm run install:ci; desenvolver com npm run dev; gerar migrações com npm run db:generate; verificar com npx tsc --noEmit; construir com npm run build. No Windows com problema de lançador, usar node "C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run dev.

O manifesto .openai/hosting.json identifica o mesmo Site para próximas alterações. Preservar o plugin Sites no Vite. Favoritos/rascunhos são locais; pedidos de melhoria têm autenticação ChatGPT e persistência D1. Não versionar credenciais, transcrição privada, dados pessoais capturados, dependências ou estado do banco.

## Continuidade
Registrar melhoria em /validacao e voltar à conversa com a área, página e comportamento esperado. O registro não executa alterações automaticamente. Cada entrega deve atualizar CHANGELOG, validar recursos e publicar nova versão do mesmo Site. GitHub privado é o histórico de código independente; remoto Sites publica a aplicação.
