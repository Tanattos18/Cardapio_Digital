# Cardápio Digital — vitrine de modelos

Vitrine com 30 modelos de cardápio digital para apresentar a clientes, e a base para entregar a página final de cada um.
Site estático (HTML, CSS e JS puros), sem build, pronto para o GitHub Pages.

**Endereço depois de publicar:** `https://tanattos18.github.io/Cardapio_Digital/`

## Modelos

| Nicho | Modelo 1 | Modelo 2 | Modelo 3 |
|---|---|---|---|
| Hamburgueria | Brasa Burger · Impacto | Smash Club · App | Zé Burguer · Clássico |
| Pizzaria | Forno di Napoli · Clássico | Pizza Express · Impacto | Bella Massa · App |
| Restaurante | Sabor da Terra · App | Bistrô Alecrim · Clássico | Cantina do Chef · Impacto |
| Espetinho | Espeto de Ouro · Impacto | Point do Espetinho · App | Brasa & Prosa · Clássico |
| Pamonharia | Milho de Ouro · Clássico | Pamonha da Roça · App | Casa da Pamonha · Impacto |
| Confeitaria | Doce Encanto · App | Ateliê da Vó Cida · Clássico | Sweet Lab · Impacto |
| Açaí e sorvete | Açaí da Praça · App | Point do Açaí · Impacto | Gelato & Açaí · Clássico |
| Salgados para festa | Salgados da Lu · App | Festa & Sabor · Impacto | Cantinho do Salgado · Clássico |
| Marmitas fit | Fit Express · App | Nutri Marmitas · Clássico | Power Fit · Impacto |
| Pastelaria | Pastel do Japa · Impacto | Pastelaria Central · App | Lanchonete Bom Gosto · Clássico |

Confeitaria e salgados pedem **data e horário da encomenda** no pedido (`encomenda` no `config.js`). As marmitas mostram **calorias e proteína** (`nutri` em cada produto).

Os **planos e preços** que aparecem na vitrine ficam em `assets/js/vendedor.js` (`planos` e `manutencao`).

Algumas fotos (pamonha, coxinha, pastel, esfiha, caldo de cana...) vêm do Wikimedia Commons e estão em `assets/img/`. Os créditos de autor e licença aparecem no rodapé das páginas que as usam; a lista está em `assets/img/*/creditos.json`.

Três estilos de layout: **Impacto** (capa em tela cheia e cards com foto), **Clássico** (cardápio impresso, preços em linha pontilhada) e **App de delivery** (estilo iFood, lista com miniaturas). Cada modelo tem cores, fontes, textos e cardápio próprios.

## O que cada cardápio tem

- Produtos com preço, preço promocional, tamanhos (ex.: pizza média/grande/família), adicionais e selos (Mais pedido, Novo, Picante, Vegetariano...)
- Busca e menu de categorias fixo no topo
- Carrinho com envio do pedido pelo WhatsApp: entrega, retirada ou mesa, endereço, forma de pagamento, troco, taxa de entrega, pedido mínimo e frete grátis acima de um valor
- Status "Aberto agora / Fechado · abre às..." calculado pelos horários (inclusive quem fecha de madrugada)
- Horários da semana, entrega, formas de pagamento
- Endereço com Google Maps e botão "Como chegar"
- WhatsApp, telefone, e-mail, Instagram, Facebook, TikTok, YouTube, iFood e site
- **QR Code**: botão em todo cardápio que mostra e baixa o QR da página, e gerador de **plaquinhas por mesa** (`qrcode.html`). O QR da mesa abre o cardápio com `?mesa=5` e o pedido chega no WhatsApp com o número da mesa
- Botão de compartilhar, botão flutuante do WhatsApp, SEO e prévia para redes sociais (Open Graph)

## Estrutura

```
index.html                  vitrine (filtro por nicho, prévias ao vivo, QR de cada modelo)
qrcode.html                 gerador de plaquinhas com QR Code para imprimir
assets/js/vendedor.js       SEUS dados (nome e WhatsApp): edite primeiro
assets/js/cardapio.js       motor que monta a página a partir do config.js
assets/js/modelos.js        lista de modelos da vitrine
assets/css/base.css         estilos comuns
assets/css/layout-*.css     os 3 layouts
modelos/<nicho>/modelo-N/
  index.html                página do cardápio
  config.js                 dados do estabelecimento e cardápio com preços
```

## Primeiros passos

1. Abra `assets/js/vendedor.js` e coloque seu nome e seu WhatsApp (`55` + DDD + número). Na demonstração, os pedidos de teste e o botão "Quero este modelo" chegam nesse número.
2. Publique no GitHub Pages: no repositório, **Settings → Pages → Branch: `main` / `(root)` → Save**. Em 1 ou 2 minutos o site fica no ar.
3. Os QR Codes usam o endereço da página aberta, então só funcionam no celular depois de publicado.

Para testar no computador: `python -m http.server 8000` na pasta do projeto e abra `http://localhost:8000`.

## Entregando para um cliente

1. Copie a pasta do modelo escolhido, por exemplo `modelos/pizzaria/modelo-2`, para `clientes/nome-do-cliente` (ou para um repositório só do cliente, junto com a pasta `assets`).
2. Ajuste os caminhos `../../../assets/` no `index.html` se a profundidade da pasta mudar.
3. Edite o `config.js`:
   - `demo: false` (tira a barra de demonstração e manda os pedidos para o WhatsApp do cliente)
   - `nome`, `slogan`, `logo`, `capa`, `tema` (cores e fontes)
   - `contato.whatsapp` (só números com 55 + DDD), `telefone`, `email`
   - `redes` (Instagram, Facebook, TikTok, YouTube, iFood, site)
   - `endereco`, `horarios` (começa no domingo, `null` = fechado), `entrega`, `pagamentos`, `mesas`, `cnpj`
   - `categorias` e `itens`: `nome`, `desc`, `preco`, `precoAntigo`, `img`, `tags`, `opcoes` (tamanhos), `adicionais`
4. Fotos do cliente: coloque em uma pasta `img/` dentro do modelo e use `img: "img/x-tudo.jpg"`. As fotos dos modelos vêm do Unsplash.
5. Atualize o `<title>` e as tags `og:` no `index.html`.
6. Abra `qrcode.html?url=<link do cliente>&nome=<nome>&mesas=<quantidade>` e imprima as plaquinhas.
