/*
 * Nutri Marmitas — configuração do cardápio
 * Edite este arquivo para entregar ao cliente: nome, contatos, redes sociais,
 * endereço, horários, entrega, pagamento e o cardápio com os preços.
 *  - demo: true mostra a barra "Modelo de demonstração". Use false na entrega.
 *  - Imagens: use um caminho ("img/bolo.jpg"), uma URL completa ou um ID do Unsplash.
 *  - horarios: um item por dia, começando no DOMINGO. null = fechado.
 *  - encomenda: pede data e horário no pedido (antecedenciaDias = prazo mínimo).
 *  - nutri: informação nutricional curta exibida no produto.
 */
window.CARDAPIO = {
  "demo": true,
  "modelo": "Marmitas fit 2 · Clássico",
  "layout": "classico",
  "nome": "Nutri Marmitas",
  "chamada": "Cozinha saudável",
  "slogan": "Equilíbrio no prato, sem abrir mão do sabor.",
  "logo": null,
  "capa": "1667499745120-f9bcef8f584e",
  "tema": {
    "fonteTitulo": "'Fraunces', serif",
    "fonteTexto": "'Nunito', system-ui, sans-serif",
    "fundo": "#f7f8f2",
    "superficie": "#ebeee0",
    "texto": "#232a1c",
    "suave": "#636b56",
    "primaria": "#556b2f",
    "textoPrimaria": "#ffffff",
    "secundaria": "#c9a227"
  },
  "sobre": "Cozinha saudável comandada por uma nutricionista. Montamos kits semanais conforme o seu objetivo: emagrecer, ganhar massa ou só comer melhor.",
  "diferenciais": [
    "Kits por objetivo",
    "Opções veganas",
    "Sem glúten sob pedido"
  ],
  "galeria": [
    "1520066391310-428f06ebd602",
    "1532550907401-a500c9a57435",
    "1609595781576-1580ff3ee291",
    "1593999419634-455e51714dca"
  ],
  "contato": {
    "whatsapp": "5500900000061",
    "telefone": "(00) 90000-0061",
    "email": "contato@nutrimarmitas.com.br"
  },
  "redes": {
    "instagram": "nutrimarmitas",
    "youtube": "nutrimarmitas"
  },
  "endereco": {
    "rua": "Alameda das Acácias, 90",
    "bairro": "Jardim Goiás",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    null,
    {
      "abre": "08:00",
      "fecha": "18:00"
    },
    {
      "abre": "08:00",
      "fecha": "18:00"
    },
    {
      "abre": "08:00",
      "fecha": "18:00"
    },
    {
      "abre": "08:00",
      "fecha": "18:00"
    },
    {
      "abre": "08:00",
      "fecha": "18:00"
    },
    null
  ],
  "entrega": {
    "taxa": 8,
    "tempo": "Entrega às segundas e quintas",
    "pedidoMinimo": 100,
    "area": "Até 15 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro"
  ],
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Por objetivo",
      "icone": "🎯",
      "itens": [
        {
          "nome": "Kit emagrecimento (10 marmitas)",
          "desc": "Pratos de até 400 kcal.",
          "preco": 229,
          "img": "1543352632-5a4b24e4d2a6"
        },
        {
          "nome": "Kit hipertrofia (10 marmitas)",
          "desc": "Pratos com mais de 40 g de proteína.",
          "preco": 259,
          "img": "1720402958832-80dcfd7f4850",
          "tags": [
            "Mais pedido"
          ]
        }
      ]
    },
    {
      "nome": "Pratos fit",
      "icone": "🥗",
      "desc": "Marmitas de 350 g, congeladas ou do dia.",
      "itens": [
        {
          "nome": "Frango com batata-doce",
          "desc": "Peito de frango grelhado, batata-doce e brócolis.",
          "preco": 26.9,
          "nutri": "420 kcal · 38 g de proteína",
          "img": "1633030175953-ac5a41b7353c",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Patinho com arroz integral",
          "desc": "Patinho moído, arroz integral, cenoura e vagem.",
          "preco": 29.9,
          "nutri": "480 kcal · 35 g de proteína",
          "img": "1609183556292-f208be1a9644"
        },
        {
          "nome": "Tilápia com purê de abóbora",
          "desc": "Filé de tilápia grelhado, purê de abóbora e legumes.",
          "preco": 32.9,
          "nutri": "390 kcal · 32 g de proteína",
          "img": "1532550907401-a500c9a57435"
        },
        {
          "nome": "Strogonoff fit de frango",
          "desc": "Com creme de ricota, arroz integral e batata rústica.",
          "preco": 27.9,
          "nutri": "450 kcal · 36 g de proteína",
          "img": "1644592219048-5c070fd3c91c"
        },
        {
          "nome": "Escondidinho de mandioquinha",
          "desc": "Carne desfiada coberta com purê de mandioquinha.",
          "preco": 30.9,
          "nutri": "440 kcal · 30 g de proteína",
          "img": "1576670442263-be3584ad3dde"
        }
      ]
    },
    {
      "nome": "Low carb",
      "icone": "🥦",
      "itens": [
        {
          "nome": "Frango ao pesto com abobrinha",
          "desc": "Espaguete de abobrinha, frango e pesto de manjericão.",
          "preco": 29.9,
          "nutri": "330 kcal · 34 g de proteína",
          "img": "1605590955562-be1a5fda4161",
          "tags": [
            "Low carb"
          ]
        },
        {
          "nome": "Carne de panela com legumes",
          "preco": 31.9,
          "nutri": "380 kcal · 36 g de proteína",
          "img": "1664741662725-bd131742b7b7",
          "tags": [
            "Low carb"
          ]
        },
        {
          "nome": "Omelete de forno com salada",
          "preco": 24.9,
          "nutri": "310 kcal · 24 g de proteína",
          "img": "1668283653825-37b80f055b05",
          "tags": [
            "Low carb"
          ]
        }
      ]
    },
    {
      "nome": "Vegetarianos",
      "icone": "🌱",
      "itens": [
        {
          "nome": "Grão-de-bico ao curry",
          "desc": "Com arroz integral e couve.",
          "preco": 25.9,
          "nutri": "410 kcal · 16 g de proteína",
          "img": "1609595781576-1580ff3ee291",
          "tags": [
            "Vegano"
          ]
        },
        {
          "nome": "Lasanha de berinjela",
          "preco": 27.9,
          "nutri": "360 kcal · 18 g de proteína",
          "img": "1586197162535-dec0bbbcd198",
          "tags": [
            "Vegetariano"
          ]
        },
        {
          "nome": "Bowl de quinoa",
          "desc": "Quinoa, legumes assados, grão-de-bico e tahine.",
          "preco": 29.9,
          "nutri": "420 kcal · 15 g de proteína",
          "img": "1520066391310-428f06ebd602",
          "tags": [
            "Vegano"
          ]
        }
      ]
    },
    {
      "nome": "Kits da semana",
      "icone": "📦",
      "desc": "Escolha os pratos na observação. Entrega congelada, dura até 60 dias no freezer.",
      "itens": [
        {
          "nome": "Kit 5 marmitas",
          "preco": 130.9,
          "precoAntigo": 141.9,
          "img": "1667499745120-f9bcef8f584e",
          "tags": [
            "Promoção"
          ]
        },
        {
          "nome": "Kit 10 marmitas",
          "preco": 240.9,
          "precoAntigo": 284.9,
          "img": "1543352632-5a4b24e4d2a6",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Kit 20 marmitas",
          "preco": 449.9,
          "precoAntigo": 569.9,
          "img": "1543352632-5a4b24e4d2a6",
          "tags": [
            "Promoção"
          ]
        }
      ]
    },
    {
      "nome": "Lanches e sobremesas",
      "icone": "🍓",
      "itens": [
        {
          "nome": "Panqueca de banana",
          "desc": "Sem farinha branca, com mel.",
          "preco": 12.9,
          "nutri": "280 kcal",
          "img": "1575853121743-60c24f0a7502"
        },
        {
          "nome": "Wrap de frango",
          "preco": 19.9,
          "nutri": "350 kcal · 28 g de proteína",
          "img": "1626700051175-6818013e1d4f"
        },
        {
          "nome": "Iogurte com granola",
          "preco": 12.9,
          "img": "1593999419634-455e51714dca"
        },
        {
          "nome": "Brownie fit",
          "desc": "Sem açúcar e sem glúten.",
          "preco": 9.9,
          "img": "1551024506-0bccd828d307"
        }
      ]
    },
    {
      "nome": "Bebidas",
      "icone": "🧃",
      "itens": [
        {
          "nome": "Suco detox",
          "desc": "Couve, limão, gengibre e maçã.",
          "preco": 12.9,
          "img": "1610970881699-44a5587cabec"
        },
        {
          "nome": "Água de coco",
          "preco": 8.9,
          "img": "1617611140379-0e0ec17cc45f"
        },
        {
          "nome": "Kombucha",
          "preco": 14.9,
          "img": "1573812914274-226dc19fbe17"
        }
      ]
    }
  ]
};
