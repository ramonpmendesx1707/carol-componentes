> Atualização v2.3.0: consulte [administração e integrações](docs/ADMINISTRACAO.md) para o backend compartilhado, autenticação, Excel, CNPJ e e-mail. As limitações antigas de catálogo exclusivamente estático foram substituídas pela arquitetura descrita nesse documento.

# Instalação, GitHub Pages e domínio oficial

## 1. Restaurar o projeto
```sh
git clone https://github.com/ramonpmendesx1707/carol-componentes.git
cd carol-componentes
node --version
npm run install:ci
npx tsc --noEmit
```
Use Node 24.13.0. Windows: se o lançador npm falhar, execute `node "C:/Program Files/nodejs/node_modules/npm/bin/npm-cli.js" run build:pages` (mesma substituição para demais scripts). Instalação usa lockfile; não exige plugin Codex para gerar o pacote estático. Não copiar node_modules de outra máquina.

## 2. Prévia portátil / GitHub Pages
```sh
npm run build:pages
npm run preview:pages
```
Abrir http://127.0.0.1:4173/carol-componentes/ . Saída dist-pages contém JS/CSS, fotos, logos, fontes, PDF, index.html, 404.html e .nojekyll. Não editar bundle gerado; editar app/lib/data/public e reconstruir.

No GitHub, Settings > Pages > Source: GitHub Actions. Workflow `.github/workflows/pages.yml` instala, verifica TS, constrói, envia artefato e publica main. Permissões contents:read/pages:write/id-token:write. Confirmar URL pela execução concluída; o endereço esperado é https://ramonpmendesx1707.github.io/carol-componentes/ . Conta gratuita exige repositório público para Pages; repositório privado requer plano compatível. Não trocar visibilidade sem autorização do proprietário.

A versão estática reutiliza a interface e arquivos completos. GH Pages não executa Node/Worker/D1: o frete é estimado localmente, contato validado gera rascunho no dispositivo e abre WhatsApp; não há e-mail interno real. Favoritos/cotação permanecem locais. Área de validação autenticada aponta para o Site original. Nenhum token fica no bundle.

Rotas normais de exploração usam painel/hash e funcionam sem reload. Acesso direto a /produto/slug é tratado pelo 404.html do Pages, podendo manter status HTTP 404 apesar de renderizar; para SEO de produção use host com fallback SPA 200 ou gerar páginas de produto. CSS/JS/assets usam base configurável. Não colocar CNAME até decidir e configurar o domínio real.

## 3. Domínio próprio com a versão estática
No PowerShell:
```powershell
$env:CAROL_PAGES_BASE='/'
npm run build:pages
```
Linux/macOS: `CAROL_PAGES_BASE=/ npm run build:pages`.

Pode hospedar dist-pages em serviço estático. Caminho concreto Cloudflare Pages (conta da empresa):
```sh
npx wrangler login
npx wrangler pages project create carol-componentes --production-branch main
npx wrangler pages deploy dist-pages --project-name carol-componentes
```
A conta/projeto devem ser conferidos antes de executar; se já existir, reutilizar. O fallback SPA precisa atender /produto sem erro; Pages serve SPA na ausência de 404 customizado, portanto retirar SOMENTE dist-pages/404.html no pacote destinado a esse host se necessário, preservar index e reconstruir a cada entrega. Não remover arquivo do GitHub build global.

Adicionar carolcomponentes.com.br e www no painel do projeto antes de criar DNS. Apex em Pages requer zona/nameservers Cloudflare; subdomínio pode usar CNAME informado pelo serviço. Inventariar/copiar DNS antes da mudança, preservar MX/TXT do correio. Configurar HTTPS e URL canônica, redirecionar www/apex para a escolhida. Não apontar o domínio para GitHub/Sites e Cloudflare simultaneamente.

O domínio comprado pelo usuário não foi alterado nesta entrega. Nenhum contrato ou conta de hospedagem foi criado. A versão estática mantém as limitações da prévia até integrar backend.

## 4. Worker/D1 e serviços reais
O alvo original usa `npm run dev`, `npm run build`, `npm run start`. O Vite original inclui integração de hospedagem Sites e gera dist/server/wrangler.json. `.openai/hosting.json` guarda o ID do mesmo Site e vínculo DB. Em Sites, publicar com fluxo próprio de versão/artefato e preservar audiência.

Para migrar para Cloudflare da empresa, a IA deve criar configuração própria de Vite/Worker a partir da atual: manter Vinext e plugin Cloudflare, entrypoint build/sites-worker.ts, ambiente rsc/ssr; remover somente a integração de controle Sites nesse novo alvo, fornecer binding D1 `DB` com database_id real e nome próprio. Não usar ID placeholder nem copiar tokens de Sites. Gerar config de Wrangler para essa conta e fazer build/preview antes de deploy. Essa adaptação externa não foi executada/validada e não se deve apresentar `wrangler deploy` do build Sites como instalação pronta em qualquer conta.

Criar D1 em conta autorizada, configurar migrações em drizzle/, aplicar `drizzle/0000_stale_solo.sql` uma única vez no banco vazio ou via controle de migrações. getDb depende de env.DB. Não migrar dados de teste para produção. Área /validacao e /api/feedback dependem de autenticação ChatGPT/Sites; numa hospedagem própria implementar autenticação real com acesso interno ou manter área original com link externo. Nunca usar mock de usuário em produção.

E-mail atual está em modo demonstrativo. Para requisito final persistir → enviar e-mail → abrir WhatsApp, implementar provedor transacional no servidor, segredo protegido, idempotência, tratamento de timeout/rejeição e rastreio. Destinatário inicial autorizado ramonpmendesx@gmail.com; confirmar destinatário comercial final. Configurar SPF/DKIM e testar com dados de homologação. Fazer integração real de frete/estoque separadamente; não trocar estimativas por promessas reais.

## 5. Correio no novo domínio
Endereços exibidos vendas@carolcomponentes.com.br e lojavirtual@carolcomponentes.com.br ainda precisam ser criados/verificados no provedor escolhido. Criar caixas/aliases, MFA, recuperação, MX exatos do provedor, SPF único, DKIM gerado e DMARC; testar recebimento e envio externo. Não confundir caixa corporativa com serviço transacional. Preservar histórico antigo com migração/piloto/incremental antes de desligar origem. Passo a passo em docs/INFRASTRUCTURE.md.

## 6. Aceite e rollback
Confirmar história/datas, propriedade dos canais, logos, modalidades de pagamento, horário/endereço, CNPJ/telefone, imagens pendentes e autorização de uso. Testar 320/390/768/1440, menu, comparação vertical de 2/3, product panel/fechamento, busca, PDF, marca/Kifix, mapa, máscaras e bloqueio inválido, único WhatsApp, redução de movimento, teclado e foco. Verificar DNS/TLS e e-mail real somente se habilitado.

Versionar com commits e tags: v1.0.0, v2.0.0, v2.1.0, v2.2.0. Para rollback criar nova branch/commit a partir da tag anterior, testar e publicar novamente; evitar force push. No GitHub Actions pode repetir workflow da revisão desejada ou produzir commit de reversão. Em Cloudflare usar deployment anterior e manter DNS conhecido. Backups de banco separados; rollback de frontend não reverte dados automaticamente.

## Fontes oficiais consultadas em 06/10/2026
- https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages
- https://developers.cloudflare.com/pages/get-started/direct-upload/
- https://developers.cloudflare.com/pages/configuration/custom-domains/
