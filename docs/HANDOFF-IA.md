# Handoff completo para outra IA

## Estado do produto
Entrega 2.2: história em quatro marcos, catálogo de 50 produtos/290 variantes/16 categorias, PDF de 60 páginas, busca sem salto, painel de produto, comparação guiada (tabela desktop/cartões verticais móvel), favoritos/cotação locais, frete estimado, contato CNPJ/telefone com máscaras e validação, único WhatsApp, mapa Joinville, redes, marcas em carrossel e pagamentos.

A prévia não é checkout. Preço/estoque sob consulta. E-mail real, transportadora real, ERP e estoque não integrados. Catálogo mantém pendências descritas em DATA.md e manifesto. HCH/Vibra têm seleções ilustrativas e solicitação de catálogo; Kifix/Quimatic/Merkbak possuem destinos de catálogo. Pagamentos são referência visual histórica, modalidades a confirmar comercialmente. Datas intermediárias da história são fictícias autorizadas, visivelmente sujeitas à validação.

## Arquivos que importam
- app/experience.tsx: experiência central, estados, produto, comparação, contato, favoritos e cotação.
- app/movement.tsx: abertura mecânica, história em quatro marcos, presença e redes.
- app/showcase.tsx: marcas/catálogos, contato físico/virtual, pagamentos.
- app/movement.css: refinamentos, animações e responsividade; carregado depois de globals.css.
- app/globals.css: estilos base, fontes locais e componentes.
- app/whatsapp-icon.tsx e social-icons.tsx: símbolos locais.
- data/catalog.json e lib/catalog.ts: dados/variantes, categorias e PDF.
- public/images, public/fonts e public/downloads: arquivos finais locais. Não depender de hotlink para fotos ou logos.
- lib/validation.ts: máscara CNPJ (inclui letras), dígitos verificadores, telefone fixo/celular e DDD.
- app/api: endpoints Worker contato/frete/feedback; contato D1 ainda demonstrativo.
- db/schema.ts e drizzle/0000_stale_solo.sql: banco D1 e migração inicial.
- static/client.tsx: adaptador somente para prévia estática; contato fica no dispositivo e abre WhatsApp. Não envia e-mail nem chama D1.
- vite.pages.config.ts: compilação estática com prefixo; scripts/build-pages.mjs gera 404 e .nojekyll.
- vite.config.ts, build/ e .openai/hosting.json: caminho original Worker/Sites; não remover integração Sites desse alvo.
- .github/workflows/pages.yml: build/deploy GitHub Pages em main.
- DEPLOY_MANUAL.md: instalar, subir, domínio, banco, correio, limitações e rollback.
- docs/ASSETS-V22.json e LICENSE-*.txt: origem/atribuição dos logos.

## Versões exatas
Node validado 24.13.0 (mínimo do projeto >=22.13). React/ReactDOM 19.2.6; Vinext 1.0.0-beta.5; Vite 8.0.13; TypeScript 5.9.3; Wrangler 4.92.0; Cloudflare Vite 1.37.1; Drizzle ORM 0.45.2/Kit 0.31.10; Radix 1.6.7; Lucide 1.31.0; Tailwind 4.2.1; tw-animate-css 1.4.0. package-lock.json contém TODAS as versões transitivas e hashes. Não atualizar sem motivo e regressão. Node beta/framework requer atenção antes de produção comercial.

## Animações e acessibilidade
Volante: wheel-arrival 1,5 s após imagem carregada, hover 155 graus, progressão com scroll via --travel. Apoiar/Fixar: zoom 1,28 mantendo clique/foco. História: --journey, quatro anos e pontos ativos; horizontal desktop, vertical celular. Marcas: loop 32 s, pausa no hover/foco e botão, segundo conjunto oculto a leitores e sem tabulação. Pagamentos: cor/elevação no hover. Redução de movimento desativa giros, carrossel e transições decorativas; conteúdo permanece disponível. Componentes Radix controlam foco/escape/overlay.

## Testes e operação
scripts/verify-site.mjs verifica servidor/API/dados. scripts/verify-browser.mjs verifica navegação e WhatsApp; scripts/verify-refinements.mjs valida máscaras/animações/comparação; scripts/verify-v22.mjs valida história, marcas, contatos e 320/390/768. Forneça Playwright em CAROL_PLAYWRIGHT_PACKAGE e opcional CAROL_CHROME_EXECUTABLE; CAROL_TEST_URL muda o destino. Não enviar mensagens reais no teste: interceptar destino WhatsApp. Playwright é dependência de QA separada, não necessária ao build.

## Sequência para uma nova IA
1. Ler estes documentos e verificar git status; preservar trabalho de terceiros.
2. Instalar versão Node/lockfile, escolher alvo Worker ou estático.
3. Rodar TypeScript/build e prévia; verificar caminhos no prefixo ou raiz.
4. Validar história com as donas, e-mails/horários, pagamentos, catálogo e identidade final.
5. Seguir DEPLOY_MANUAL para homologação, credenciais externas, domínio e correio.
6. Só ativar funcionalidades reais depois de implementar/testar o que está pendente; nunca alegar envio real onde há adaptador local.
7. Publicar, validar e registrar commit/tag. Entregar link e limites.

## O que não está no Git por segurança
Tokens GitHub/Cloudflare/Sites, senha de e-mail, API key transacional, estado D1, leads reais, arquivos privados de reunião e dados do navegador. A nova IA precisa receber acesso autorizado às contas; isso não pode ser resolvido incluindo segredos no repositório.
