/*
 * Cantina do Chef — configuração do cardápio
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
  "modelo": "Restaurante 3 · Impacto",
  "layout": "impacto",
  "nome": "Cantina do Chef",
  "chamada": "Restaurante & bar",
  "slogan": "Grelhados, massas artesanais e drinks autorais.",
  "logo": null,
  "capa": "1517248135467-4c7edcad34c4",
  "tema": {
    "fonteTitulo": "'Oswald', serif",
    "fonteTexto": "'Inter', system-ui, sans-serif",
    "escuro": true,
    "fundo": "#101418",
    "superficie": "#182028",
    "texto": "#eef2f5",
    "suave": "#9aa7b2",
    "primaria": "#e9c46a",
    "textoPrimaria": "#111111",
    "secundaria": "#e76f51"
  },
  "avaliacao": {
    "nota": 4.8,
    "total": 876
  },
  "promo": {
    "selo": "Happy hour",
    "titulo": "Drinks em dobro das 17h às 19h",
    "texto": "De terça a sexta, na compra de qualquer drink autoral."
  },
  "sobre": "Do almoço executivo ao jantar com os amigos: uma cozinha de grelhados e massas feitas na casa, com bar de drinks autorais e música ao vivo às sextas.",
  "diferenciais": [
    "Massas artesanais",
    "Música ao vivo às sextas",
    "Espaço para eventos",
    "Estacionamento"
  ],
  "galeria": [
    "1615937657715-bc7b4b7962c1",
    "1611270629569-8b357cb88da9",
    "1544145945-f90425340c7e",
    "1600565193348-f74bd3c7ccdf"
  ],
  "contato": {
    "whatsapp": "5500900000009",
    "telefone": "(00) 90000-0009",
    "email": "contato@cantinadochef.com.br"
  },
  "redes": {
    "instagram": "cantinadochef",
    "facebook": "cantinadochef",
    "tiktok": "cantinadochef",
    "youtube": "cantinadochef"
  },
  "endereco": {
    "rua": "Avenida das Nações, 900",
    "bairro": "Setor Sul",
    "cidade": "Sua Cidade",
    "uf": "UF"
  },
  "horarios": [
    {
      "abre": "11:30",
      "fecha": "16:00"
    },
    {
      "abre": "11:30",
      "fecha": "15:00"
    },
    {
      "abre": "11:30",
      "fecha": "23:59"
    },
    {
      "abre": "11:30",
      "fecha": "23:59"
    },
    {
      "abre": "11:30",
      "fecha": "23:59"
    },
    {
      "abre": "11:30",
      "fecha": "23:59"
    },
    {
      "abre": "11:30",
      "fecha": "23:59"
    }
  ],
  "entrega": {
    "taxa": 8,
    "tempo": "40–55 min",
    "pedidoMinimo": 50,
    "area": "Até 8 km"
  },
  "pagamentos": [
    "Pix",
    "Cartão de crédito",
    "Cartão de débito",
    "Dinheiro",
    "Vale-refeição"
  ],
  "mesas": 25,
  "cnpj": "00.000.000/0001-00",
  "categorias": [
    {
      "nome": "Massas artesanais",
      "icone": "🍝",
      "itens": [
        {
          "nome": "Fettuccine Alfredo",
          "desc": "Molho de creme, manteiga e parmesão. Com frango +R$ 8.",
          "preco": 54.9,
          "img": "1611270629569-8b357cb88da9",
          "adicionais": [
            {
              "nome": "Frango grelhado",
              "preco": 8
            },
            {
              "nome": "Camarão",
              "preco": 18
            }
          ]
        },
        {
          "nome": "Penne all'arrabbiata",
          "desc": "Molho de tomate picante, alho e salsinha.",
          "preco": 48.9,
          "img": "1621996346565-e3dbc646d9a9",
          "tags": [
            "Picante"
          ]
        },
        {
          "nome": "Nhoque ao sugo",
          "desc": "Nhoque de batata feito na casa, molho de tomate e manjericão.",
          "preco": 46.9
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
          "preco": 27.9,
          "img": "1505253716362-afaea1d3d1af",
          "tags": [
            "Vegetariano"
          ]
        },
        {
          "nome": "Caldinho de feijão",
          "desc": "Com bacon, cebolinha e torradas.",
          "preco": 13.9,
          "img": "1617093727343-374698b1b08d"
        },
        {
          "nome": "Bolinho de bacalhau",
          "desc": "6 unidades com maionese de limão.",
          "preco": 34.9
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
          "preco": 67.9,
          "img": "1600891964092-4316c288032e"
        },
        {
          "nome": "Picanha na chapa (serve 2)",
          "desc": "500g de picanha, farofa, vinagrete, mandioca e arroz.",
          "preco": 125.9,
          "img": "1615937657715-bc7b4b7962c1",
          "tags": [
            "Mais pedido"
          ]
        },
        {
          "nome": "Frango grelhado com legumes",
          "desc": "Filé de frango, legumes salteados e arroz integral.",
          "preco": 44.9,
          "img": "1476224203421-9ac39bcb3327"
        },
        {
          "nome": "Moqueca de peixe (serve 2)",
          "desc": "Peixe branco, leite de coco, dendê, pimentões, arroz e pirão.",
          "preco": 103.9,
          "img": "1559847844-5315695dadae"
        },
        {
          "nome": "Espaguete ao camarão",
          "desc": "Camarões salteados no alho, tomate-cereja e manjericão.",
          "preco": 72.9,
          "img": "1563379926898-05f4575a45d8"
        },
        {
          "nome": "Parmegiana de carne",
          "desc": "Contrafilé empanado, molho de tomate, mussarela gratinada e fritas.",
          "preco": 61.9
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
          "preco": 25.9
        },
        {
          "nome": "Executivo de frango",
          "desc": "Filé de frango grelhado, arroz, feijão, salada e fritas.",
          "preco": 28.9
        },
        {
          "nome": "Executivo de bife acebolado",
          "desc": "Bife de alcatra acebolado, arroz, feijão, salada e fritas.",
          "preco": 30.9
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
          "preco": 13.9
        },
        {
          "nome": "Petit gâteau",
          "desc": "Com sorvete de creme.",
          "preco": 23.9,
          "img": "1551024506-0bccd828d307"
        },
        {
          "nome": "Torta do dia (fatia)",
          "preco": 15.9,
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
          "preco": 9.9,
          "img": "1527661591475-527312dd65f5"
        },
        {
          "nome": "Refrigerante lata 350ml",
          "preco": 6.9
        },
        {
          "nome": "Água mineral",
          "preco": 4.5
        },
        {
          "nome": "Caipirinha",
          "desc": "Limão, morango ou maracujá. Cachaça ou vodka.",
          "preco": 20.9,
          "img": "1513558161293-cdaf765ed2fd"
        },
        {
          "nome": "Cerveja 600ml",
          "preco": 15.9,
          "img": "1608270586620-248524c67de9"
        },
        {
          "nome": "Vinho tinto (taça)",
          "preco": 25.9,
          "img": "1437418747212-8d9709afab22"
        }
      ]
    }
  ]
};
