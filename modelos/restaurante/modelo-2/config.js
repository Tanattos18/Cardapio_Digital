/*
 * Bistrô Alecrim — configuração do cardápio
 * Edite este arquivo para entregar ao cliente: nome, contatos, redes sociais,
 * endereço, horários, entrega, pagamento e o cardápio com os preços.
 *  - demo: true mostra a barra "Modelo de demonstração". Use false na entrega.
 *  - Imagens: use um caminho ("img/x-tudo.jpg"), uma URL completa ou um ID do Unsplash.
 *  - horarios: um item por dia, começando no DOMINGO. null = fechado.
 *    Se o horário de fechar for menor que o de abrir (ex.: 00:30), vira a madrugada.
 *  - mesas: quantas mesas a casa tem (gera plaquinhas com QR Code por mesa).
 */
window.CARDAPIO = {
  "demo": true,
  "modelo": "Restaurante 2 · Clássico",
  "layout": "classico",
  "nome": "Bistrô Alecrim",
  "chamada": "Cozinha contemporânea",
  "slogan": "Ingredientes da estação, receitas com afeto.",
  "logo": null,
  "capa": "1414235077428-338989a2e8c0",
  "tema": {
    "fonteTitulo": "'Cormorant Garamond', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "fundo": "#fbfaf7",
    "superficie": "#f3f1ea",
    "texto": "#23251f",
    "suave": "#6c6f62",
    "primaria": "#4a6b3a",
    "textoPrimaria": "#ffffff",
    "secundaria": "#b08d57"
  },
  "avaliacao": {
    "nota": 4.9,
    "total": 402
  },
  "sobre": "Um bistrô pequeno, com cozinha aberta e menu que muda a cada estação. Trabalhamos com produtores locais e uma carta de vinhos enxuta, escolhida para harmonizar.",
  "diferenciais": [
    "Produtores locais",
    "Menu sazonal",
    "Reservas pelo WhatsApp",
    "Opções sem glúten"
  ],
  "galeria": [
    "1625944525533-473f1a3d54e7",
    "1600565193348-f74bd3c7ccdf",
    "1559339352-11d035aa65de",
    "1437418747212-8d9709afab22"
  ],
  "contato": {
    "whatsapp": "5500900000008",
    "telefone": "(00) 90000-0008",
    "email": "contato@bistroalecrim.com.br"
  },
  "redes": {
    "instagram": "bistroalecrim",
    "facebook": "bistroalecrim"
  },
  "endereco": {
    "rua": "Alameda dos Ipês, 55",
    "bairro": "Jardim Botânico",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "12:00",
      "fecha": "16:00"
    },
    null,
    {
      "abre": "19:00",
      "fecha": "23:00"
    },
    {
      "abre": "19:00",
      "fecha": "23:00"
    },
    {
      "abre": "19:00",
      "fecha": "23:00"
    },
    {
      "abre": "19:00",
      "fecha": "23:59"
    },
    {
      "abre": "12:00",
      "fecha": "23:59"
    }
  ],
  "entrega": {
    "taxa": 10,
    "tempo": "45–60 min",
    "pedidoMinimo": 80,
    "area": "Até 5 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro",
    "Vale-refeição"
  ],
  "mesas": 18,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Menu do chef",
      "icone": "🌿",
      "desc": "Sugestões da estação.",
      "itens": [
        {
          "nome": "Risoto de cogumelos",
          "desc": "Arbóreo, mix de cogumelos frescos, parmesão e azeite trufado.",
          "preco": 68.9,
          "img": "1609770424775-39ec362f2d94",
          "tags": [
            "Vegetariano"
          ]
        },
        {
          "nome": "Salmão ao maracujá",
          "desc": "Salmão grelhado, molho de maracujá e purê de mandioquinha.",
          "preco": 84.9,
          "img": "1625944525533-473f1a3d54e7",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Polvo grelhado",
          "desc": "Polvo na brasa, batatas ao murro e páprica defumada.",
          "preco": 129.9,
          "img": "1731601816614-2423297fe97b",
          "tags": [
            "Novo"
          ]
        }
      ]
    },
    {
      "nome": "Entradas",
      "icone": "🥗",
      "itens": [
        {
          "nome": "Salada da casa",
          "desc": "Folhas, tomate-cereja, palmito, queijo branco e molho de mostarda e mel.",
          "preco": 31.9,
          "img": "1505253716362-afaea1d3d1af",
          "tags": [
            "Vegetariano"
          ]
        },
        {
          "nome": "Caldinho de feijão",
          "desc": "Com bacon, cebolinha e torradas.",
          "preco": 14.9,
          "img": "1617093727343-374698b1b08d"
        },
        {
          "nome": "Bolinho de bacalhau",
          "desc": "6 unidades com maionese de limão.",
          "preco": 38.9,
          "img": "1666190091191-0cd0c5c8c5b5"
        }
      ]
    },
    {
      "nome": "Pratos principais",
      "icone": "🍽️",
      "desc": "Todos acompanham arroz branco ou à grega.",
      "itens": [
        {
          "nome": "Filé ao molho madeira",
          "desc": "Medalhão de filé mignon, molho madeira com champignon e batata frita.",
          "preco": 77.9,
          "img": "1600891964092-4316c288032e"
        },
        {
          "nome": "Picanha na chapa (serve 2)",
          "desc": "500g de picanha, farofa, vinagrete, mandioca e arroz.",
          "preco": 143.9,
          "img": "1615937657715-bc7b4b7962c1",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Frango grelhado com legumes",
          "desc": "Filé de frango, legumes salteados e arroz integral.",
          "preco": 50.9,
          "img": "1476224203421-9ac39bcb3327"
        },
        {
          "nome": "Moqueca de peixe (serve 2)",
          "desc": "Peixe branco, leite de coco, dendê, pimentões, arroz e pirão.",
          "preco": 118.9,
          "img": "1559847844-5315695dadae"
        },
        {
          "nome": "Espaguete ao camarão",
          "desc": "Camarões salteados no alho, tomate-cereja e manjericão.",
          "preco": 83.9,
          "img": "1563379926898-05f4575a45d8"
        },
        {
          "nome": "Parmegiana de carne",
          "desc": "Contrafilé empanado, molho de tomate, mussarela gratinada e fritas.",
          "preco": 70.9,
          "img": "1632778149955-e80f8ceca2e8"
        }
      ]
    },
    {
      "nome": "Executivos",
      "icone": "🕛",
      "desc": "De segunda a sexta, no almoço.",
      "itens": [
        {
          "nome": "Prato do dia",
          "desc": "Arroz, feijão, salada, guarnição e a carne do dia.",
          "preco": 29.9,
          "img": "1628521061262-19b5cdb7eee5"
        },
        {
          "nome": "Executivo de frango",
          "desc": "Filé de frango grelhado, arroz, feijão, salada e fritas.",
          "preco": 32.9,
          "img": "1749640566096-5d8098d452b4"
        },
        {
          "nome": "Executivo de bife acebolado",
          "desc": "Bife de alcatra acebolado, arroz, feijão, salada e fritas.",
          "preco": 35.9,
          "img": "1579366948929-444eb79881eb"
        }
      ]
    },
    {
      "nome": "Sobremesas",
      "icone": "🍮",
      "itens": [
        {
          "nome": "Pudim de leite",
          "desc": "Receita da casa, com calda de caramelo.",
          "preco": 14.9,
          "img": "1702728109878-c61a98d80491"
        },
        {
          "nome": "Petit gâteau",
          "desc": "Com sorvete de creme.",
          "preco": 26.9,
          "img": "1551024506-0bccd828d307"
        },
        {
          "nome": "Torta do dia (fatia)",
          "preco": 17.9,
          "img": "1565958011703-44f9829ba187"
        }
      ]
    },
    {
      "nome": "Bebidas",
      "icone": "🍹",
      "itens": [
        {
          "nome": "Suco natural 400ml",
          "desc": "Laranja, limão, maracujá, abacaxi ou melancia.",
          "preco": 11.9,
          "img": "1527661591475-527312dd65f5"
        },
        {
          "nome": "Refrigerante lata 350ml",
          "preco": 7.9,
          "img": "1696739696220-8d2e27465662"
        },
        {
          "nome": "Água mineral",
          "preco": 4.5,
          "img": "1616118132534-381148898bb4"
        },
        {
          "nome": "Caipirinha",
          "desc": "Limão, morango ou maracujá. Cachaça ou vodka.",
          "preco": 23.9,
          "img": "1513558161293-cdaf765ed2fd"
        },
        {
          "nome": "Cerveja 600ml",
          "preco": 17.9,
          "img": "1608270586620-248524c67de9"
        },
        {
          "nome": "Vinho tinto (taça)",
          "preco": 29.9,
          "img": "1437418747212-8d9709afab22"
        }
      ]
    }
  ]
};
