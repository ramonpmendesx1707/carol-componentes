# Continuidade por IA — Carol Componentes

Leia primeiro README.md, docs/HANDOFF-IA.md, DEPLOY_MANUAL.md, CHANGELOG.md e docs/DATA.md. Este é o projeto Carol; não altere o projeto RFK.

A história é a linha do tempo de QUATRO marcos em app/movement.tsx. Nunca restaurar os três passos comerciais Encontre/Converse/Coloque. 1984 vem do LinkedIn da operação; demais datas são proposta fictícia autorizada pelo usuário, identificadas na interface. Valide datas antes de lançamento oficial.

Preservar único WhatsApp 5547996180088. Não introduzir contatos de Curitiba. Contatos exibidos: vendas@carolcomponentes.com.br e lojavirtual@carolcomponentes.com.br; exibição não significa caixas provisionadas. Sem envio real de e-mail nesta versão.

O site tem dois alvos de build: Worker/D1/Sites e GitHub Pages estático. Nenhum segredo, token, conversa privada, dados reais de leads ou banco local deve entrar no Git. A área autenticada depende de Sites; não transportar autenticação simulada para produção pública. Não publicar .wrangler, work, outputs, .env, node_modules ou dist.

Preservar package-lock.json e dependências. Instalar npm run install:ci. Construir npm run build:pages para GitHub Pages ou npm run build para Worker. Não confundir pastas dist-pages e dist. Rodar TypeScript e testes relevantes antes de publicar. Documentar mudança, motivo, validação e limites. Não editar dados ausentes como se confirmados.

GitHub Pages usa base /carol-componentes/. Domínio próprio usa CAROL_PAGES_BASE=/. Atualizar o transform de caminhos se criar novas famílias de assets. Revisar celular 320/390/768 px, redução de movimento, foco, comparativo vertical, fechamento de produto sem salto. Não remover animações solicitadas para esconder um defeito de layout.
