# Evidências da entrega 2.0

06/10/2026. Nova composição Movimento e proximidade; detalhes em DESIGN-V2.md. Catálogo e PDF técnico preservados. Sem alterações em esquema do banco ou serviço de e-mail.

Inspeção em Chrome headless, desktop 1440 × 1000 e celular 390 × 844. Capturas de abertura, busca, produto, percurso, presença e celular revisadas. Google Maps carregou endereço correto após aguardar carregamento externo. Zero exceções JavaScript e nenhum transbordamento horizontal no celular.

`scripts/verify-browser.mjs` passou: busca sem rolagem automática; navegação por teclado; produto/variante/cotação; fechamento preserva texto e posição; cabeçalho acompanha seção; progresso animado; aba de alcance nacional; CNPJ inválido bloqueado; formulário válido registra e encaminha exclusivamente a 5547996180088 com dados; menu/painel móvel; redução de movimento. O destino WhatsApp foi interceptado apenas no teste local, sem envio de mensagens externas. Para executar, fornecer Playwright em CAROL_PLAYWRIGHT_PACKAGE e opcional CAROL_CHROME_EXECUTABLE, com prévia local em CAROL_TEST_URL.

`scripts/verify-site.mjs` passou novamente: contagens, arquivos locais, CNPJ/telefone, rotas de produto, PDF, frete, contato, único WhatsApp, repetição do protocolo e feedback autenticado. TypeScript e build são verificações obrigatórias no fluxo de publicação.

Diagnóstico: logs de produção consultados não apresentaram eventos de erro. A abertura antiga funcionou na reprodução local, portanto não foi determinada uma causa única para o relato original. O novo painel elimina a mudança de página na exploração normal. Durante a revisão foi encontrado e corrigido deslocamento de diálogos causado por centralização CSS duplicada/ausente e corrigida sua sobreposição.

Limites: e-mail continua sem envio real, conforme confirmação; preços/estoque sob consulta e frete estimado. Domínio definitivo não conectado. O Site já estava público antes desta atualização; audiência preservada. Pendências do catálogo descritas abaixo permanecem, sem inventar informações.

---

# Evidências da entrega 1.0

06/10/2026. TypeScript sem erros e build concluído. Teste de integração `scripts/verify-site.mjs` passou: contagens, arquivos locais, CNPJ/telefone, início e produtos simples/variáveis, 404, PDF, frete em três regiões e CEP inválido, bloqueio de contato inválido/origem externa, registro demonstrativo, link único WhatsApp, repetição do protocolo, autenticação e persistência de pedido de melhoria.

50 produtos, 290 opções de medida, 16 categorias. Fotos e fichas complementares recuperadas do fabricante oficial, mantendo dados e variantes originais. Uma foto de produto pendente (PBF, ID 9966), 14 desenhos/imagens da origem indisponíveis e 17 variantes sem peso/dimensões confirmados. Todas as opções originais permanecem selecionáveis. Campos ausentes não foram inventados. 47 páginas adicionais não responderam: a interface usa atributos e peso/dimensões disponíveis na API; a reconciliação da tabela HTML original permanece pendente. Esses números constam do manifesto de importação.

PDF de 60 páginas verificado visualmente em folhas de contato; novas capa/institucional/contatos inspecionadas, tabelas preservadas, busca textual sem identidade antiga. Fotos dos produtos de destaque recuperadas em alta resolução. Original fornecido não foi modificado.

A prévia local respondeu 200 e foi aberta no painel. O navegador de inspeção automatizada não iniciou neste ambiente (falha do componente de automação); portanto a revisão visual completa do site em navegador e celular ainda exige validação humana pela página publicada. Não registrar essa checagem como realizada.

E-mail/frete demonstrativos, preço e estoque sob consulta, sem checkout ou CAD fictício. Domínio definitivo não conectado. Site de homologação privado; segunda direção visual será feita depois da avaliação da primeira. Não é lançamento público da empresa.
